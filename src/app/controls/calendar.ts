import { Control } from "src/app/builder/interfaces/control.interface";
import { BaseControl } from "src/app/controls/base-control";
import { FormStringify } from "src/app/builder/interfaces/form-stringify";

export class Calendar extends BaseControl implements FormStringify {

  constructor(control: Control, formGroupName: string) {
    super(control.label, control.formControlName, !!control.required, !!control.disabled, formGroupName);
  }

  toStringForm(): string {
    return `
        <label class="control-label" >${this.label}${this.required ? this.getSpanAsterisk() : ''}:</label>
        <p-calendar styleClass="form-control" formControlName="${this.formControlName}" [showIcon]="true" dateFormat="dd/mm/yy" placeholder="Selecciona ${this.label.toLowerCase()}"  > </p-calendar>
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
