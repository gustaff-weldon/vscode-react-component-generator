import React, { FC } from 'react';

import { Form, FormInput } from '@zen/Components/Form';
import type { IOkOrErrorResult } from '@zen/utils/OkOrErrorResult';
import type { __ComponentName__FormData } from './types';

import { validationSchema } from '__ComponentName__.validations.ts'

export interface ForgotPasswordFormFields {
  email: string;
}

interface Props {
  onSubmit: (values: ForgotPasswordFormFields) => Promise<IOkOrErrorResult>;
  onSuccess: (email: string) => void;
}

const PersonForm: FC<Props> = ({ onSubmit, onSuccess }) => {
  const initialValues = {};

  return (
    <Form<__ComponentName__FormData>
      buttonText="Reset password"
      formName="PersonForm"
      initialValues={initialValues}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      validationSchema={validationSchema}
    >
      {() => (
	      <>
		      <FormInput autoFocus={true} label="First name" name="firstName" />
		      <FormInput label="Last name" name="lastName" />
		      <FormInput label="Email Address" name="email" />}
	      </>
      )
    </Form>
  );
};

export default PersonForm;