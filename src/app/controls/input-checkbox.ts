import { Control } from "src/app/builder/interfaces/control.interface";
import { BaseControl } from "src/app/controls/base-control";
import { FormStringify } from "src/app/builder/interfaces/form-stringify";

export class InputCheckbox extends BaseControl implements FormStringify {

  constructor(control: Control, formGroupName: string) {
    super(control.label, control.formControlName, !!control.required, !!control.disabled, formGroupName);
  }

  toStringForm(): string {
    return `
        <div class="flex align-items-center">
           <p-checkbox [inputId]="'${this.formControlName}'" styleClass="mr-3" formControlName="${this.formControlName}" [binary]="true"></p-checkbox>
           <label class="control-label" [for]="'${this.formControlName}'">${this.label}</label>
        </div>
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
