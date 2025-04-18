import { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import { ReactNode } from 'react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large']
      }
    },
    children: {
      type: 'string'
    },
    icon: {
      type: '' as ReactNode
    }
  }
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'Buy now!'
  }
};

export const withIcon: StoryObj = {
  args: {
    children: 'Buy now!',
    size: 'small',
    icon: <AddShoppingCart />
  }
};
