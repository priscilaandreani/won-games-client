import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

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
    }
  }
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'Buy now!'
  }
};
