import { Calendar } from "src/app/calendar";
import { AbsControl } from "src/app/abs-control";
import { Dropdown } from "src/app/dropdown";
import { InputText } from "src/app/input-text";

export interface Form {
  label: string;
  formGroupName: string;
  rows: Row[];
}

export interface Row {
  class?: string;
  cols: Col[];
}

export interface Col {
  class?: string;
  size: number;
  control: Control
}

export interface Control {
  label: string;
  formControlName: string;
  type: TypeControl;
  required?: boolean;
  disabled?: boolean;
}

export enum TypeControl {
  InputText,
  Dropdown,
  Calendar
}


export class StringFormGenerator {
  build(forms: Form[]): string {
    return `
      <form [formGroup]="form">
          ${forms.map((form: Form) => this.getForm(form)).join('')}
      </form>
    `;
  }

  getForm(form: Form): string {
    return `
      <ng-container formGroupName="${form.formGroupName}">
          ${form.rows.map((r: Row) => this.getRow(r, form.formGroupName)).join('')}
      </ng-container>
    `;
  }

  getRow(row: Row, formGroupName: string): string {
    return `
      <div class="row${row.class ? ' ' + row.class : ''}">
         ${row.cols.map((c: Col) => this.getCol(c, formGroupName)).join('')}
      </div>
    `;
  }

  getCol(col: Col, formGroupName: string): string {
    return `
    <div class="col-md-${col.size}">
        ${this.getControl(col.control, formGroupName)}
    </div>`;
  }

  getControl(control: Control, formGroupName: string): string {
    if (control.type === TypeControl.InputText) {
      return new InputText(control, formGroupName).toStringForm();
    }
    if (control.type === TypeControl.Dropdown) {
      return new Dropdown(control, formGroupName).toStringForm();
    }
    if (control.type === TypeControl.Calendar) {
      return new Calendar(control, formGroupName).toStringForm();
    }
    return ``;
  }
}
