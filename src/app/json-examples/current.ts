import { TypeControl } from "src/app/builder/enums/type-control.enum";
import { BaseForm } from "src/app/builder/interfaces/base-form.interface";

export const forms: BaseForm[] = [
  {
    label: 'Lugar de velación',
    formGroupName: 'lugarVelacion',
    rows: [
      {
        cols: [
          {
            size: 6,
            control: {
              label: 'Capilla',
              formControlName: 'capilla',
              type: TypeControl.Dropdown,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Fecha',
              formControlName: 'fecha',
              type: TypeControl.Calendar,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Hora',
              formControlName: 'hora',
              type: TypeControl.Time,
              required: true
            }
          }
        ]
      }
    ]
  },
  {
    label: 'Lugar de cremación',
    formGroupName: 'lugarCremacion',
    rows: [
      {
        cols: [
          {
            size: 6,
            control: {
              label: 'Sala',
              formControlName: 'sala',
              type: TypeControl.Dropdown,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Fecha',
              formControlName: 'fecha',
              type: TypeControl.Calendar,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Hora',
              formControlName: 'hora',
              type: TypeControl.Time,
              required: true
            }
          }
        ]
      }
    ]
  },
  {
    label: 'Inhumación',
    formGroupName: 'inhumacion',
    rows: [
      {
        cols: [
          {
            size: 6,
            control: {
              label: 'Agregar panteón',
              formControlName: 'agregarPanteon',
              type: TypeControl.InputCheckbox,
              required: true
            }
          }
        ]
      }
    ]
  },
  {
    label: 'Recoger',
    formGroupName: 'recoger',
    rows: [
      {
        cols: [
          {
            size: 3,
            control: {
              label: 'Fecha',
              formControlName: 'fecha',
              type: TypeControl.Calendar,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Hora',
              formControlName: 'hora',
              type: TypeControl.Time,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Fecha',
              formControlName: 'fecha',
              type: TypeControl.Calendar,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Hora',
              formControlName: 'hora',
              type: TypeControl.Time,
              required: true
            }
          }
        ]
      }
    ]
  },
  {
    label: 'Cortejo',
    formGroupName: 'cortejo',
    rows: [
      {
        cols: [
          {
            size: 3,
            control: {
              label: 'Fecha',
              formControlName: 'fecha',
              type: TypeControl.Calendar,
              required: true
            }
          },
          {
            size: 3,
            control: {
              label: 'Hora',
              formControlName: 'hora',
              type: TypeControl.Time,
              required: true
            }
          },
          {
            size: 6,
            control: {
              label: '¿El servicio fue gestinado por un promotor?',
              formControlName: 'gestionadoPorPromotor',
              type: TypeControl.InputRadio,
              required: true,
              radios: [
                {
                  label: 'Si',
                  value: true
                },
                {
                  label: 'No',
                  value: false
                }
              ]
            }
          }
        ]
      }
    ]
  }
];
