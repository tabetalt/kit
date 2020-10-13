export enum TextPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface PrefilledInputProps {
  props: { [key: string]: any }[];
  textWidth?: string;
  text: string;
  prefilledText: string;
  prefilledTextPosition: TextPosition;
  placeholder?: string;
}
