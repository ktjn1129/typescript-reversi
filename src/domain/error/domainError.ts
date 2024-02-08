type DomainErrorType =
  | "SelectedPointIsNotEmpty"
  | "FlipPointIsEmpty"
  | "SelectedDiscIsNotNextDisc"
  | "SpecifiedTurnNotFound";

export class DomainError extends Error {
  constructor(private _type: DomainErrorType, message: string) {
    super(message);
  }

  get type() {
    return this._type;
  }
}
