import { TypeControl } from "src/app/builder/enums/type-control.enum";
import { BaseForm } from "src/app/builder/interfaces/base-form.interface";
import { Col } from "src/app/builder/interfaces/col.interface";
import { Control } from "src/app/builder/interfaces/control.interface";
import { RadioControl } from "src/app/builder/interfaces/radio-control.interface";
import { Row } from "src/app/builder/interfaces/row.interface";
import { Calendar } from "src/app/controls/calendar";
import { Dropdown } from "src/app/controls/dropdown";
import { InputCheckbox } from "src/app/controls/input-checkbox";
import { InputRadio } from "src/app/controls/input-radio";
import { InputText } from "src/app/controls/input-text";
import { Time } from "src/app/controls/time";

export class StringFormGenerator {
  build(forms: BaseForm[]): string {
    return `
      <form [formGroup]="form">
          ${forms.map((form: BaseForm) => this.getForm(form)).join('')}
      </form>
    `;
  }

  getFormBuilderJSON(forms: BaseForm[]) {
    let objFormBuilder: any = {};

    for (const form of forms) {
      objFormBuilder[form.formGroupName] = {};
      for (const row of form.rows) {
        for (const col of row.cols) {
          objFormBuilder[form.formGroupName][col.control.formControlName] = [
            {
              value: null,
              disabled: !!col.control.disabled
            },
            [
              'Validators.required'
            ]
          ]
        }
      }
    }
    let script = '';
    let getterNethods = '';

    for (const objFormBuilderElement in objFormBuilder) {
      script += `${objFormBuilderElement}: this.formBuilder.group(${JSON.stringify(objFormBuilder[objFormBuilderElement]).replaceAll('"', '')}),`
    }
    script = script.slice(0, -1);//Remove last comma

    for (const objFormBuilderElement in objFormBuilder) {
      getterNethods+=`
        get ${objFormBuilderElement}() {
          return (this.form.controls['${objFormBuilderElement}'] as FormGroup).controls;
        }
      `;
    }

    return `
      ${getterNethods}

      this.form = this.formBuilder.group({${script}});
    `;
  }

  getForm(form: BaseForm): string {
    return `
      <ng-container formGroupName="${form.formGroupName}">
          ${form.rows.map((r: Row) => this.getRow(r, form.formGroupName)).join('')}
      </ng-container>
    `;
  }

  getRow(row: Row, formGroupName: string): string {
    return `
      <div class="row mb-2${row.class ? ' ' + row.class : ''}">
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
    if (control.type === TypeControl.Time) {
      return new Time(control, formGroupName).toStringForm();
    }
    if (control.type === TypeControl.InputRadio) {
      return new InputRadio(control, formGroupName, (control as RadioControl).radios).toStringForm();
    }
    if (control.type === TypeControl.InputCheckbox) {
      return new InputCheckbox(control, formGroupName).toStringForm();
    }
    return ``;
  }
}
