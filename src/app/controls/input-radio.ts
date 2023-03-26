import { Control } from "src/app/builder/interfaces/control.interface";
import { Radio } from "src/app/builder/interfaces/radio-control.interface";
import { BaseControl } from "src/app/controls/base-control";
import { FormStringify } from "src/app/builder/interfaces/form-stringify";

export class InputRadio extends BaseControl implements FormStringify {

  constructor(control: Control, formGroupName: string, private radios: Radio[]) {
    super(control.label, control.formControlName, !!control.required, !!control.disabled, formGroupName);
  }

  toStringForm(): string {
    return `
        <label class="control-label">${this.label}${this.required ? this.getSpanAsterisk() : ''}:</label>
        <div class="flex">
            ${this.radios.map((radio: Radio) => this.getRadio(radio.label, radio.value, this.formControlName)).join('')}
        </div>
        ${this.required ? this.getSpanForRequiredControl() : ''}
    `;
  }

  private getRadio(label: string, value: string, formControlName: string): string {
    return `
       <div class="flex align-items-center mx-2">
          <p-radioButton [inputId]="'${label}'" name="${formControlName}" [value]="${value}"
                         formControlName="${formControlName}"></p-radioButton>
          <label class="control-label m-0 mx-3" [for]="'${label}'">'${label}'</label>
       </div>
    `
  }

  private getSpanForRequiredControl(): string {
    return `<span class="campo-obligatorio" *ngIf="${this.formGroupName}.${this.formControlName}?.errors?.required && (${this.formGroupName}.${this.formControlName}?.dirty || ${this.formGroupName}.${this.formControlName}?.touched)">Campo obligatorio</span>`;
  }

  private getSpanAsterisk(): string {
    return `<span class="req">*</span>`;
  }

}
