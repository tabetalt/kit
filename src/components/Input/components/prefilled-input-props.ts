export enum TextPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface PrefilledInputProps {
  props: { [key: string]: any }[];
  text?: string;
  prefilledText: string;
  prefilledTextPosition: TextPosition;
  placeholder?: string;
}
