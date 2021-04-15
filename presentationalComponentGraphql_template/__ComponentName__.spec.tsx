import { MockedProvider } from '@apollo/client/testing';
import { render, waitFor } from '@testing-library/react';
import React from 'react';

import __ComponentName__ from './__ComponentName__';
import { mockXyz } from './graphql/mocks/xyz.mock';

const subject = () => {
  const mockXyzMockData = mockXyz();

  return render(
    <MockedProvider addTypename={false} mocks={[mockXyzMockData]}>
      <__ComponentName__ id={1} />
    </MockedProvider>
  );
};

describe('__ComponentName__', () => {
  it('renders name', async () => {
    const { queryByTestId } = subject();

    await waitFor(() => expect(
			queryByTestId('name')).toHaveTextContent('John Doe')
		);
  });
});