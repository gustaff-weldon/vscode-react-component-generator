import  *  as Yup from  'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please provide first name'),
  lastName: Yup.string().required('Please provide last name'),
  email: Yup.string().email('Email address is not valid.')
});