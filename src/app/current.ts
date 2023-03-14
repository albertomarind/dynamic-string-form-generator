import { Form, TypeControl } from "src/app/StringFormGenerator";

export const forms: Form[] = [
  {
    label: 'Datos del finado',
    formGroupName: 'datosFinado',
    rows: [
      {
        cols: [
          {
            size: 3,
            control: {
              label: 'Tipo de orden',
              formControlName: 'tipoOrden',
              type: TypeControl.Dropdown,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'No. de contrato',
              formControlName: 'noContrato',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Velatorio - previsión',
              formControlName: 'velatorioPrevision',
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
              label: 'Matrícula',
              formControlName: 'matricula',
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
          {
            size: 4,
            control: {
              label: 'NSS',
              formControlName: 'nss',
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
              label: 'Edad',
              formControlName: 'edad',
              type: TypeControl.InputText,
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
          }
        ]
      },
      {
        cols: [
          {
            size: 3,
            control: {
              label: 'Fecha de defunción',
              formControlName: 'fechaDefuncion',
              type: TypeControl.Calendar,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Causa del deceso',
              formControlName: 'causaDeceso',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Lugar de deceso',
              formControlName: 'lugarDeceso',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Hora del deceso',
              formControlName: 'horaDeceso',
              type: TypeControl.Calendar,
              required: true
            }
          }
        ]
      },
      {
        cols: [
          {
            size: 6,
            control: {
              label: 'Clínica de adscripción',
              formControlName: 'clinicaAdscripcion',
              type: TypeControl.Dropdown,
              required: true
            }
          },
          {
            size: 6,
            control: {
              label: 'Unidad de procedencia',
              formControlName: 'unidadProcedencia',
              type: TypeControl.Dropdown,
              required: true
            }
          }
        ]
      },
      {
        cols: [
          {
            size: 6,
            control: {
              label: 'Procedencia del finado',
              formControlName: 'procedenciaFinado',
              type: TypeControl.InputText,
              required: true
            }
          },
          {
            size: 6,
            control: {
              label: 'Tipo de pensión',
              formControlName: 'tipoPension',
              type: TypeControl.Dropdown,
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
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Estado',
              formControlName: 'estado',
              type: TypeControl.Dropdown,
              required: true
            }
          }
        ]
      }
    ]
  }
];
