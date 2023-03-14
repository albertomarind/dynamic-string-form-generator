import { FormStringify } from "src/app/form-stringify";

export abstract class AbsControl {
  protected formGroupName: string = '';

  protected label: string = '';

  protected formControlName: string = '';

  protected required: boolean = false;

  protected disabled: boolean = false;

  protected constructor(label: string, formControlName: string, required: boolean, disabled: boolean, formGroupName: string) {
    this.label = label;
    this.formControlName = formControlName;
    this.required = required;
    this.disabled = disabled;
    this.formGroupName = formGroupName;
  }
}
