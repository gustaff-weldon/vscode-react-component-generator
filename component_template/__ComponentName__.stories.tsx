import React from 'react';

import __ComponentName__ from './__ComponentName__';

export default {
  title: 'Dashboard/__ComponentName__',
  component: __ComponentName__,
  decorators: [
    (Story) => (
      <div className="w-60">
        <Story />
      </div>
    )
  ]
};

export const Default = () => {
  const props = {};

  return (
    <__ComponentName__ {...props} />
  );
};
