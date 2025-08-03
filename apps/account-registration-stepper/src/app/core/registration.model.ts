export enum RegistrationStep {
   Step1 = 'step1',
   Step2 = 'step2',
   Step3 = 'step3'
}

export enum Industry {
   Marketing = 'marketing',
   IT = 'it',
   FinancialServices = 'financial services'
}

export enum Role {
   Developer = 'developer',
   Manager = 'manager',
   Designer = 'designer'
}

export interface Step1FormData {
   email: string;
   password: string;
   confirmPassword: string;
}

export interface Step2FormData {
   industry: Industry;
   experienceInYears: number;
   yourRole: Role;
}

export interface Step3FormData {
   aboutUs: string;
}

export interface RegistrationData {
   step1: Step1FormData;
   step2: Step2FormData;
   step3: Step3FormData;
}