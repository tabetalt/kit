export enum TextPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface PrefilledInputProps {
  label?: string;
  name?: string;
  text?: string;
  prefilledText: string;
  prefilledTextPosition: TextPosition | string;
  placeholder?: string;
}
