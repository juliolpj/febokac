import { AbstractControl } from '@angular/forms'

export function generoValidator( control: AbstractControl): { [key: string]: any } | null {
  const valid = control.value === 'Masculino' || 
                control.value === 'Femenino'  ||
                control.value === 'Masculino y Femenino';
  return valid ? null : { invalidGenero: { valid: false, value: control.value } }
}