import { render } from '@testing-library/react';
import React from 'react';

import __ComponentName__ from './__ComponentName__';

describe('__ComponentName__', () => {
	const subject = (propsOverride?) => {
	  const props = {};
	
	  return render(<__ComponentName__ {...props} {...propsOverride} />);
	};
	
  it('renders', () => {
    const { queryByText } = subject({ title: 'New Title' });

    expect(queryByText('Hello __ComponentName__ Component: New Title')).not.toBeNull();
  });
});
