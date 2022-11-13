import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';

export function compareValidation(controlNameToCompare: string): ValidatorFn{
    return (c: AbstractControl): ValidationErrors | null =>{
        //controllo per campi vuoti
        if (c.value === null || c.value.lenght === 0 || c.value === '') { 
            return null;
        }
        const controlToCompare = c.root.get(controlNameToCompare);
        if (controlToCompare){
            const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
             c.updateValueAndValidity();
             subscription.unsubscribe();
            });
         }
         return controlToCompare && controlToCompare.value !== c.value ? {'compare': true }: null;
    };
}

@Directive({
    selector: '[compare]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidationDirective, multi: true}]
})
export class CompareValidationDirective implements Validator {
    @Input('compare') controlNameToCompare: string;

    validate(c: AbstractControl): ValidationErrors | null {
        //controllo per campi vuoti
        if (c.value === null || c.value.lenght === 0) { 
            return null;
        }
        const controlToCompare = c.root.get(this.controlNameToCompare);
        if(controlToCompare){
            const subscription : Subscription = controlToCompare.valueChanges.subscribe(() => {
             c.updateValueAndValidity();
             subscription.unsubscribe();
            });
         }
         return controlToCompare && controlToCompare.value !== c.value ? {'compare': true }: null;
    }
}
