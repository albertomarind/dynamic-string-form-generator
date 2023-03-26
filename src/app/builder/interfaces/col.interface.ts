import { Control } from "src/app/builder/interfaces/control.interface";
import { RadioControl } from "src/app/builder/interfaces/radio-control.interface";

export interface Col {
  class?: string;
  size: number;
  control: Control | RadioControl
}
