import React, { Component } from 'react';

export default class ReactTags extends Component<ReactTagsProps> {}

export interface RefObject {
  clearInput: () => void;
  addTag: (tag: TagProps) => void;
  deleteTag: (index: number) => void;
}

export interface TagProps {
  id: string | number;
  name: string;
  disabled?: boolean;
}

export interface TagComponentProps {
  tag: TagProps;
  classNames: ClassNames;
  onDelete: (i: number) => void;
}

export interface ClassNames {
  root: string;
  rootFocused: string;
  selected: string;
  selectedTag: string;
  selectedTagName: string;
  search: string;
  searchWrapper: string;
  searchInput: string;
  suggestions: string;
  suggestionActive: string;
  suggestionDisabled: string;
}

export interface ReactTagsProps {
  id?: string;
  tags?: TagProps[];
  placeholderText?: string;
  ariaLabelText?: string;
  removeButtonText?: string;
  noSuggestionsText?: string;
  suggestions?: TagProps[];
  suggestionsFilter?: (item: TagProps, query: string) => boolean;
  suggestionsTransform?: (query: string, suggestion: TagProps) => TagProps;
  autoresize?: boolean;
  delimiters?: string[];
  onDelete?: (index: number) => void;
  onAddition?: (tag: TagProps) => void;
  onInput?: (query: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onValidate?: (tag: TagProps) => boolean;
  minQueryLength?: number;
  maxSuggestionsLength?: number;
  classNames?: ClassNames;
  allowNew?: boolean;
  allowBackspace?: boolean;
  addOnBlur?: boolean;
  tagComponent?: Component<TagComponentProps>;
  suggestionComponent?: Component<TagComponentProps>;
  inputAttributes?: { [key: string]: unknown };
}

export interface InputTagsProps extends ReactTagsProps {
  onChange?: (v: TagProps[]) => void;
  disabled?: boolean;
  prefix?: React.ReactNode | string;
}
