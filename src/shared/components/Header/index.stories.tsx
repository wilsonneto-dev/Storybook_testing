import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Header from '.';

export default {
  title: 'Layout/Header',
  component: Header,
} as Meta;

const Template: Story<{}> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
// Primary.args = {};

