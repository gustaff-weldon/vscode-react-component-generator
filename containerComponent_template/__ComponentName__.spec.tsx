import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import  {  mocked  }  from  'ts-jest/utils';

import __ComponentName__Container from './__ComponentName__Container';

import ListComponent from './ListComponent';
import DetailsComponent from './DetailsComponent';

jest.mock('./ListComponent', () => 
	jest.fn(() => <div>ListComponent</div>)
);

jest.mock('./DetailsComponent', () => 
	jest.fn(() => <div>DetailsComponent</div>)
);

const subject = (initialRoute = 'path-a') =>
  render(
    <MemoryRouter initialEntries={[initialRoute]}>
       <__ComponentName__Container />
    </MemoryRouter>
  );

describe('RouteTabSwitcher', () => {
  it('renders the ListComponent component', () => {
    const { container } = subject();

    expect(container).toHaveTextContent('ListComponent');
  });

  it('renders the DetailsComponent component', () => {
    const { container } = subject('path-b');

    expect(container).toHaveTextContent('DetailsComponent');
  });
});
