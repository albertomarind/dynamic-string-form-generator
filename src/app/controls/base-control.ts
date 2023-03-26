export abstract class BaseControl {
  protected constructor(
    protected label: string = '',
    protected formControlName: string = '',
    protected required: boolean = false,
    protected disabled: boolean = false,
    protected formGroupName: string = '') {
  }
}
