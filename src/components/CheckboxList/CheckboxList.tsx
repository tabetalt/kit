import React from 'react';
import { Checkbox, Flex, ForwardRef, Label } from 'theme-ui';
import { CheckboxListProps } from './checkbox-list-props';

export const CheckboxList: ForwardRef<
  HTMLDivElement,
  CheckboxListProps
> = React.forwardRef((props) => {
  return (
    <Flex sx={{
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
    }}>
      {props.options.map((option) => {
        return (
          <Label>
            <Checkbox
              id={option.id}
              disabled={props.disabled}
              defaultChecked={option.checked}
              onChange={(event) => {
                const dataToUpdate = props.options.find(
                  (val) => val.id === event.target.id,
                );
                if (dataToUpdate) {
                  dataToUpdate.checked = event.target.checked;
                  props.onChange(dataToUpdate);
                }
              }}
            />
            {option.value}
          </Label>
        );
      })}
    </Flex>
  );
});
