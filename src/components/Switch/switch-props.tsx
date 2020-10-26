import { Assign, BoxOwnProps } from 'theme-ui';

export interface SwitchProps
  extends Assign<React.ComponentProps<'input'>, BoxOwnProps> {
  label?: string;
  name?: string;
}
