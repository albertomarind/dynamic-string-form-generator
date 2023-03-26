import { Control } from "src/app/builder/interfaces/control.interface";
import { BaseControl } from "src/app/controls/base-control";
import { FormStringify } from "src/app/builder/interfaces/form-stringify";

export class Dropdown extends BaseControl implements FormStringify {

  constructor(control: Control, formGroupName: string) {
    super(control.label, control.formControlName, !!control.required, !!control.disabled, formGroupName);
  }

  toStringForm(): string {
    return `
        <label class="control-label" for="${this.formControlName}">${this.label}${this.required?this.getSpanAsterisk():''}:</label>
        <p-dropdown id="${this.formControlName}" class="form-control" formControlName="${this.formControlName}" placeholder="Selecciona ${this.label.toLowerCase()}"  [options]="[{label:'Opción 1', value:0},{label:'Opción 2', value:1}]" > </p-dropdown>
        ${this.required ? this.getSpanForRequiredControl():''}
    `;
  }

  private getSpanForRequiredControl(): string {
    return `<span class="campo-obligatorio" *ngIf="${this.formGroupName}.${this.formControlName}?.errors?.required && (${this.formGroupName}.${this.formControlName}?.dirty || ${this.formGroupName}.${this.formControlName}?.touched)">Campo obligatorio</span>`;
  }

  private getSpanAsterisk(): string {
    return `<span class="req">*</span>`;
  }


}
