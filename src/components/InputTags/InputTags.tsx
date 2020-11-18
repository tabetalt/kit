/** @jsx jsx */
import React, { useRef } from 'react';
import { Container, jsx } from 'theme-ui';
import ReactTags from 'react-tag-autocomplete';
import { TrashIcon } from '../../icons';
import { InputTagsProps, RefObject, TagProps } from './types';
import styles from './styles';

const defaultProps: InputTagsProps = {
  tags: [] as TagProps[],
  suggestions: [] as TagProps[],
  allowNew: true,
  onChange: () => null,
  placeholderText: '',
  minQueryLength: 1,
};

export const InputTags: React.FC<InputTagsProps> = (props) => {
  const {
    tags = [],
    suggestions = [],
    allowNew,
    onChange = () => null,
    prefix,
    ...rest
  } = props;

  const onAddition = (tag: TagProps) => onChange([...tags, tag]);
  const onDelete = (idx: number) => {
    const newTags = tags.slice(0);
    newTags.splice(idx, 1);
    onChange(newTags);
  };

  const reactTagsRef = useRef<RefObject>(null);
  const onClear = () => {
    if (reactTagsRef && reactTagsRef.current) {
      reactTagsRef.current.clearInput();
      onChange([]);
    }
  };

  return (
    <Container
      className={`tabetalt-input-tags__wrapper ${!!prefix && 'has-prefix'}`}
      sx={styles}
    >
      {!!prefix && <div className="tabetalt-input-tags__prefix">{prefix}</div>}
      <ReactTags
        ref={reactTagsRef}
        tags={tags}
        suggestions={suggestions}
        allowNew={allowNew}
        onDelete={onDelete}
        onAddition={onAddition}
        classNames={{
          root: 'tabetalt-input-tags',
          rootFocused: 'is-focused',
          selected: 'tabetalt-input-tags__selected',
          selectedTag: 'tabetalt-input-tags__selected-tag',
          selectedTagName: 'tabetalt-input-tags__selected-tag-name',
          search: 'tabetalt-input-tags__search',
          searchWrapper: 'tabetalt-input-tags__search-wrapper',
          searchInput: 'tabetalt-input-tags__search-input',
          suggestions: 'tabetalt-input-tags__suggestions',
          suggestionActive: 'is-active',
          suggestionDisabled: 'is-disabled',
        }}
        {...rest}
      />
      {tags?.length > 0 && (
        <TrashIcon
          onClick={onClear}
          size={24}
          sx={{ position: 'absolute', top: 12, right: 24, cursor: 'pointer' }}
        />
      )}
    </Container>
  );
};

InputTags.defaultProps = defaultProps;

InputTags.displayName = 'InputTags';
