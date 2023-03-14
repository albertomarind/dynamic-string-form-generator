import { Form, TypeControl } from "src/app/StringFormGenerator";

export const forms: Form[] = [
  {
    label: 'Datos del finado',
    formGroupName: 'datosContratante',
    rows: [
      {
        cols: [
          {
            size: 4,
            control: {
              label: 'Matrícula',
              formControlName: 'matricula',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 4,
            control: {
              label: 'RFC',
              formControlName: 'rfc',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 4,
            control: {
              label: 'CURP',
              formControlName: 'curp',
              type: TypeControl.InputText,
              required: true
            }
          },
        ]
      },
      {
        cols: [
          {
            size: 4,
            control: {
              label: 'Nombre (s)',
              formControlName: 'nombre',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 4,
            control: {
              label: 'Primer apellido',
              formControlName: 'primerApellido',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 4,
            control: {
              label: 'Segundo apellido',
              formControlName: 'segundoApellido',
              type: TypeControl.InputText,
              required: true
            }
          },
        ]
      },
      {
        cols: [
          {
            size: 3,
            control: {
              label: 'Fecha de nacimiento',
              formControlName: 'fechaNacimiento',
              type: TypeControl.Calendar,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Sexo',
              formControlName: 'sexo',
              type: TypeControl.Dropdown,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Nacionalidad',
              formControlName: 'nacionalidad',
              type: TypeControl.Dropdown,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Lugar de nacimiento',
              formControlName: 'lugarNacimiento',
              type: TypeControl.InputText,
              required: true
            }
          }
        ]
      },
      {
        cols: [
          {
            size: 3,
            control: {
              label: 'Teléfono',
              formControlName: 'telefono',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 6,
            control: {
              label: 'Correo electrónico',
              formControlName: 'correoElectronico',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Parentesco',
              formControlName: 'parentesco',
              type: TypeControl.InputText,
              required: true
            }
          }
        ]
      }
    ]
  },
  {
    label: 'Dirección',
    formGroupName: 'direccion',
    rows: [
      {
        cols: [
          {
            size: 6,
            control: {
              label: 'Calle',
              formControlName: 'calle',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'No. exterior',
              formControlName: 'noExterior',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'No. interior',
              formControlName: 'noInterior',
              type: TypeControl.InputText,
              required: false,
              disabled: true
            }
          }
        ]
      },
      {
        cols: [
          {
            size: 3,
            control: {
              label: 'CP',
              formControlName: 'cp',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Colonia',
              formControlName: 'colonia',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Municipio',
              formControlName: 'municipio',
              type: TypeControl.InputText,
              required: true,
              disabled: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Estado',
              formControlName: 'estado',
              type: TypeControl.Dropdown,
              required: true,
            }
          }
        ]
      }
    ]
  }
];
