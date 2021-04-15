import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import {
  checkFormErrors,
  checkFormFields,
  fillInForm,
  getInputByName,
  submitForm
} from '@zen/utils/jest/formHelpers';

import __ComponentName__Form from './__ComponentName__Form';
import type { __ComponentName__FormData } from './types';

const subject = (overrideProps = {}) => {
  const initialValues: __ComponentName__FormData = {};
  render(
	  <__ComponentName__Form<__ComponentName__FormData>
	     initialValues={initialValues}
	     onCancel={jest.fn()}
	     onSubmit={jest.fn()}
	     onSuccess={jest.fn()}
	     {...overrideProps}
	   />
  );
}

describe('__ComponentName__Form', () => {
  describe('renders the form', () => {
    it('renders form', () => {
      const { container, queryByText } = subject();
      const form: Nullable<HTMLFormElement> = container.querySelector('form');

      expect(form).not.toBeNull();
    });

	  it('renders the form for existing person', () => {
	    const initialValues: __ComponentName__FormData = {
	      firstName: 'Johny',
	      lastName: 'Bravo',
	      email: 'johny@rules.world'
	    };
    const { container, queryByText } = subject({ initialValues });

    checkFormFields(container, {
      firstName: 'Johny',
      lastName: 'Bravo',
      email: 'johny@rules.world'
    });
  });

  it('validates the form', async () => {
    const onSubmit = jest.fn();
    const onSuccess = jest.fn();
    const { container } = subject({ onSubmit, onSuccess });

    submitForm(container);

    checkFormErrors(container, {
      firstName: 'Please provide first name',
      lastName: 'Please provide last name',
    });

    expect(onSubmit).not.toBeCalled();
    expect(onSuccess).not.toBeCalled();
  });

  it('submits the form', async () => {
    const onSubmit = jest.fn();
    const { container, queryAllByText, queryByText } = subject({ onSubmit });

    fillInForm(container, {
      firstName: 'Johny',
      lastName: 'Bravo',
      email: 'johny@rules.world'
    });

    submitForm(container);

    await waitFor(() =>
      expect(onSubmit).toBeCalledWith({
      firstName: 'Johny',
      lastName: 'Bravo',
      email: 'johny@rules.world'
     });
  });
});