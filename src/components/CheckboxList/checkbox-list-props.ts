export interface CheckboxOption {
  id?: string;
  value: string;
  checked: boolean;
}

export interface CheckboxListProps {
  options: CheckboxOption[];
  disabled: boolean; // If disable all checkboxes
  onChange: (data: CheckboxOption) => void;
}
