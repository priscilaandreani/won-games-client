import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '.';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    $size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large']
      }
    },
    children: {
      type: 'string'
    },
    $icon: {
      control: false
    }
  }
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now!'
  }
};

export const withIcon: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now!',
    $size: 'small',
    $icon: <AddShoppingCart />
  }
};
