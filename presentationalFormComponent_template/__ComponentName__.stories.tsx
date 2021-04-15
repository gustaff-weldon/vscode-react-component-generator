import React from 'react';

import __ComponentName__ from './__ComponentName__';

export default {
  title: 'Design System/__ComponentName__',
  component: __ComponentName__,
  parameters: {
    docs: {
      description: {
        component: 'Generic component description'
      }
    }
  },
  args: {}
};

export const Template = (args) => {
  return <__ComponentName__ {...args} />;
};

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    description: {
      story: 'Variany description'
    }
  }
};

Default.args = {};
