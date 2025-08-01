import { AbstractControl, ValidationErrors } from "@angular/forms";

export const passwordMatch = (group: AbstractControl): ValidationErrors | null => {
   const pass = group.get('password')?.value;
   const confirmPass = group.get('confirmPassword')?.value;

   if (pass !== confirmPass) {
      return { missMatch: true };
   }

   return null;
}