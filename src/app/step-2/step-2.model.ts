export enum Industry {
  Marketing = 'marketing',
  IT = 'it',
  FinancialServices = 'financial_services',
}

export enum Role {
  Developer = 'developer',
  Manager = 'manager',
  Designer = 'designer',
}

export interface IStep2FormData {
  industry: Industry;
  experienceInYears: number;
  yourRole: Role;
}