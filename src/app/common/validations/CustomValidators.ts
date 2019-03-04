import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {


    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: 'Can not contain space' }
        }
        return null;
    }

}