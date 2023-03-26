import { Row } from "src/app/builder/interfaces/row.interface";

export interface BaseForm {
  label: string;
  formGroupName: string;
  rows: Row[];
}
