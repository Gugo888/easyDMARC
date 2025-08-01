import { Injectable } from "@angular/core";
import { IStep1FormData } from "./step-1/step-1.model";
import { IStep2FormData } from "./step-2/step-2.model";
import { IStep3FormData } from "./step-3/step-3.model";

@Injectable({
   providedIn: 'root'
})
export class RegistrationData {

   saveStep1Data(data: IStep1FormData) {
      this.data.step1 = data;
   }

   saveStep2Data(data: IStep2FormData) {
      this.data.step2 = data;
   }

   saveStep3Data(data: IStep3FormData) {
      this.data.step3 = data;
   }

   data: {step1: IStep1FormData | null, step2: IStep2FormData | null, step3: IStep3FormData | null} = {
      step1: null,
      step2: null,
      step3: null
   }
}