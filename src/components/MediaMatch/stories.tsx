import { Meta, StoryObj } from '@storybook/react';
import MediaMatch, { MediaMatchProps } from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta;

export const Desktop: StoryObj<MediaMatchProps> = {
  args: {
    greaterThan: 'medium'
  },
  render: (args) => (
    <MediaMatch {...args}>
      <h1>Desktop</h1>
    </MediaMatch>
  )
};

export const Mobile: StoryObj<MediaMatchProps> = {
  args: {
    lessThan: 'medium'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: (args) => (
    <MediaMatch {...args}>
      <h1>Mobile</h1>
    </MediaMatch>
  )
};
