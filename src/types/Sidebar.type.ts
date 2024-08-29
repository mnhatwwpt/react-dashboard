import { ReactElement, ReactNode } from 'react';
import { CSSObject } from 'react-pro-sidebar';

export type MenuItemType = {
  title: string;
  icon: ReactNode;
  active?: boolean;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  component: string | ReactElement;
  rootStyles?: CSSObject;
};
