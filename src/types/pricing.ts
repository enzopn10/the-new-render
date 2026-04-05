export type ProjectType = 
  | 'exterior' 
  | 'interior' 
  | '3d_floor_plan' 
  | '2d_floor_plan' 
  | 'site_plan' 
  | 'animation';

export type UserType = 
  | 'realtor' 
  | 'developer' 
  | 'architect' 
  | 'builder' 
  | 'interior_designer' 
  | 'other';

export type FileType = 
  | 'floor_plans' 
  | 'elevations' 
  | 'cad' 
  | '3d_model' 
  | 'site_plan' 
  | 'references';

export type TurnaroundType = 'standard' | 'rush' | 'urgent';

export interface PricingState {
  step: number;
  projectTypes: ProjectType[];
  userType: UserType | null;
  scope: {
    propertyType?: string;
    sqft?: number;
    viewCount?: number;
    roomCount?: number;
    stylingLevel?: 'standard' | 'high' | 'ultra_realistic';
    landscapingDetail?: 'standard' | 'high';
    includePeopleCars?: boolean;
    isListing?: boolean;
    animationSeconds?: number;
  };
  files: FileType[];
  turnaround: TurnaroundType;
  revisions: 'standard' | 'extended' | 'premium';
  contact: {
    name: string;
    company: string;
    email: string;
    phone: string;
    notes: string;
  };
}

export interface PricingConfig {
  baseRates: Record<ProjectType, number>;
  multipliers: {
    propertyType: Record<string, number>;
    stylingLevel: Record<string, number>;
    turnaround: Record<TurnaroundType, number>;
    files: Record<FileType, number>;
  };
  perUnitRates: {
    extraView: number;
    extraRoom: number;
  };
}
