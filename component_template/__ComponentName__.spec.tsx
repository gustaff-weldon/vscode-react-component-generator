import { render } from '@testing-library/react';
import React from 'react';

import __ComponentName__ from './__ComponentName__';

const subject = (propsOverride?) => {
  const props = {};

  return render(<__ComponentName__ {...props} {...propsOverride} />);
};

describe('__ComponentName__', () => {
  it('renders', () => {
    const { queryByText } = subject();

    expect(queryByText('Hello __ComponentName__ Component')).not.toBeNull();
  });
});
