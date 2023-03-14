import { AbsControl } from "src/app/abs-control";
import { FormStringify } from "src/app/form-stringify";
import { Control } from "src/app/StringFormGenerator";

export class InputRadio extends AbsControl implements FormStringify {

  constructor(control: Control, formGroupName: string) {
    super(control.label, control.formControlName, !!control.required, !!control.disabled, formGroupName);
  }

  toStringForm(): string {
    return `
        <label class="control-label" for="${this.formControlName}">${this.label}${this.required ? this.getSpanAsterisk() : ''}:</label>
        <input id="${this.formControlName}" type="text" class="form-control" formControlName="${this.formControlName}" placeholder="Ingresa ${this.label.toLowerCase()}" >
        ${this.required ? this.getSpanForRequiredControl() : ''}
    `;
  }

  private getSpanForRequiredControl(): string {
    return `<span class="campo-obligatorio" *ngIf="${this.formGroupName}.${this.formControlName}?.errors?.required && (${this.formGroupName}.${this.formControlName}?.dirty || ${this.formGroupName}.${this.formControlName}?.touched)">Campo obligatorio</span>`;
  }

  private getSpanAsterisk(): string {
    return `<span class="req">*</span>`;
  }

}