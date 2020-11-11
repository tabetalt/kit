export enum TextPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface PrefilledInputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  name?: string;
  value?: string;
  prefilledText: string;
  prefilledTextPosition: TextPosition | string;
  placeholder?: string;
}
