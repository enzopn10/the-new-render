import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Trash2, Maximize2, MousePointer2, Calculator, FileText } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

export function PlanCalculator() {
  const [image, setImage] = useState<string | null>(null);
  const [totalSqFt, setTotalSqFt] = useState<number>(0);
  const [boundaryPolygon, setBoundaryPolygon] = useState<Point[]>([]);
  const [renderPolygon, setRenderPolygon] = useState<Point[]>([]);
  const [activeMode, setActiveMode] = useState<'boundary' | 'render' | null>(null);
  const [draggingPoint, setDraggingPoint] = useState<{ type: 'boundary' | 'render'; index: number } | null>(null);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Handle File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImage(event.target?.result as string);
          // Reset polygons on new image
          setBoundaryPolygon([]);
          setRenderPolygon([]);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  // Resize canvas to fit container
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setCanvasSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Draw Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Image
    const img = new Image();
    img.src = image;
    
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;
    
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

    // Helper to draw polygon
    const drawPoly = (points: Point[], color: string, fill: string) => {
      if (points.length === 0) return;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach(p => ctx.lineTo(p.x, p.y));
      if (points.length > 2) ctx.closePath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = fill;
      ctx.fill();

      // Draw points
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    };

    drawPoly(boundaryPolygon, '#3b82f6', 'rgba(59, 130, 246, 0.2)');
    drawPoly(renderPolygon, '#ef4444', 'rgba(239, 68, 68, 0.2)');

  }, [image, boundaryPolygon, renderPolygon, canvasSize]);

  // Interaction Handlers
  const getMousePos = (e: React.MouseEvent | React.TouchEvent): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!activeMode && !draggingPoint) return;
    const pos = getMousePos(e);

    // Check if clicking a point to drag
    const checkPoint = (points: Point[], type: 'boundary' | 'render') => {
      for (let i = 0; i < points.length; i++) {
        const d = Math.sqrt((points[i].x - pos.x)**2 + (points[i].y - pos.y)**2);
        if (d < 15) {
          setDraggingPoint({ type, index: i });
          return true;
        }
      }
      return false;
    };

    if (checkPoint(boundaryPolygon, 'boundary')) return;
    if (checkPoint(renderPolygon, 'render')) return;

    // Add new point if in mode
    if (activeMode === 'boundary') {
      setBoundaryPolygon([...boundaryPolygon, pos]);
    } else if (activeMode === 'render') {
      setRenderPolygon([...renderPolygon, pos]);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingPoint) return;
    const pos = getMousePos(e);
    if (draggingPoint.type === 'boundary') {
      const next = [...boundaryPolygon];
      next[draggingPoint.index] = pos;
      setBoundaryPolygon(next);
    } else {
      const next = [...renderPolygon];
      next[draggingPoint.index] = pos;
      setRenderPolygon(next);
    }
  };

  const handleMouseUp = () => {
    setDraggingPoint(null);
  };

  // Area Calculation using Shoelace Formula
  const calculateArea = (points: Point[]) => {
    if (points.length < 3) return 0;
    let area = 0;
    for (let i = 0; i < points.length; i++) {
      const j = (i + 1) % points.length;
      area += points[i].x * points[j].y;
      area -= points[j].x * points[i].y;
    }
    return Math.abs(area) / 2;
  };

  const boundaryPixelArea = calculateArea(boundaryPolygon);
  const renderPixelArea = calculateArea(renderPolygon);
  
  const calculatedRenderSqFt = boundaryPixelArea > 0 
    ? (renderPixelArea / boundaryPixelArea) * totalSqFt 
    : 0;

  const estimatedPrice = calculatedRenderSqFt * 1.5; // Example base rate multiplier

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-180px)]">
      {/* Sidebar Controls */}
      <div className="w-full lg:w-80 flex flex-col gap-6 bg-zinc-900/50 p-6 rounded-3xl border border-white/5 overflow-y-auto">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40">1. Upload Plan</h3>
          {!image ? (
            <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
              <Upload className="text-white/20 mb-2" />
              <span className="text-xs text-white/40">PDF or PNG</span>
              <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
            </label>
          ) : (
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-cyan-400" />
                <span className="text-xs font-medium truncate max-w-[120px]">Plan Loaded</span>
              </div>
              <button onClick={() => setImage(null)} className="text-white/40 hover:text-red-400 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40">2. Calibration</h3>
          <div className="space-y-2">
            <label className="text-xs text-white/60">Total Property Sq Ft</label>
            <input 
              type="number" 
              value={totalSqFt || ''} 
              onChange={(e) => setTotalSqFt(Number(e.target.value))}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="e.g. 2500"
            />
          </div>
          <button 
            onClick={() => setActiveMode(activeMode === 'boundary' ? null : 'boundary')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
              activeMode === 'boundary' 
                ? 'bg-blue-500/20 border-blue-500 text-blue-400' 
                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-widest">Set Boundary</span>
            <Maximize2 size={16} />
          </button>
          <p className="text-[10px] text-white/30 italic">Click on the plan to place dots around the total property area.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40">3. Render Area</h3>
          <button 
            onClick={() => setActiveMode(activeMode === 'render' ? null : 'render')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
              activeMode === 'render' 
                ? 'bg-red-500/20 border-red-500 text-red-400' 
                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-widest">Select Area</span>
            <MousePointer2 size={16} />
          </button>
          <p className="text-[10px] text-white/30 italic">Trace the specific area you want to render.</p>
        </div>

        <div className="mt-auto pt-6 border-t border-white/10 space-y-4">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Calculated Area</div>
              <div className="text-2xl font-bold">{Math.round(calculatedRenderSqFt)} <span className="text-sm font-normal text-white/40">sq ft</span></div>
            </div>
            <Calculator className="text-cyan-400 mb-1" size={24} />
          </div>
          
          <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-2xl">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400 mb-1">Estimated Price</div>
            <div className="text-3xl font-black tracking-tighter">${Math.round(estimatedPrice).toLocaleString()}</div>
          </div>

          <button className="w-full bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors">
            Generate Quote
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div 
        ref={containerRef}
        className="flex-1 relative bg-black/40 rounded-3xl border border-white/5 overflow-hidden cursor-crosshair"
      >
        {!image && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
            <Upload size={48} className="mb-4" />
            <p className="text-sm font-medium">Upload a plan to start calculating</p>
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full h-full"
        />

        {/* Floating Controls */}
        {image && (
          <div className="absolute top-6 right-6 flex gap-2">
            <button 
              onClick={() => { setBoundaryPolygon([]); setRenderPolygon([]); }}
              className="p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/60 hover:text-white transition-colors"
              title="Clear All"
            >
              <RefreshCcw size={18} />
            </button>
          </div>
        )}

        {/* Mode Indicator */}
        <AnimatePresence>
          {activeMode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center gap-3 shadow-2xl"
            >
              <div className={`w-2 h-2 rounded-full animate-pulse ${activeMode === 'boundary' ? 'bg-blue-500' : 'bg-red-500'}`} />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Editing {activeMode} Mode
              </span>
              <button 
                onClick={() => setActiveMode(null)}
                className="ml-4 text-[10px] bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-colors"
              >
                DONE
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function RefreshCcw({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}
