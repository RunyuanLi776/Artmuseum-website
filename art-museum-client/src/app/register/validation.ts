import { ValidatorFn, AbstractControl } from '@angular/forms';
export function validateRex(type: string, validateRex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const str = control.value;
      const res = {};
      res[type] = {str}
      return validateRex.test(str) ? null : res;
    }
  }