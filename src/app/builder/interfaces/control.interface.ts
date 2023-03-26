import { TypeControl } from "src/app/builder/enums/type-control.enum";

export interface Control {
  label: string;
  formControlName: string;
  type: TypeControl;
  required?: boolean;
  disabled?: boolean;
}
