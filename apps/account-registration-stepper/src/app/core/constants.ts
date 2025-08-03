import { Role, Industry, RegistrationData, RegistrationStep } from "./registration.model";

export const ROLES = Object.values(Role);
export const INDUSTRIES = Object.values(Industry);
export const STEPS = Object.values(RegistrationStep);

export const INITIAL_REGISTRATION_DATA: RegistrationData = {
   step1: { email: '', password: '', confirmPassword: '' },
   step2: { industry: Industry.IT, experienceInYears: 0, yourRole: Role.Developer },
   step3: { aboutUs: '' }
}