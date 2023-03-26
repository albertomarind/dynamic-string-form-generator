import { Control } from "src/app/builder/interfaces/control.interface";

export interface RadioControl extends Control {
  radios: Radio[];
}

export interface Radio {
  label: string;
  value: any;
}
