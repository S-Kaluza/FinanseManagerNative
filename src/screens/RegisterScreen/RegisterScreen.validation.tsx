import * as Yup from 'yup';

export const initialValues = {
	email: '',
	password: '',
};

export const RegisterValidationSchema = Yup.object().shape({
	email: Yup.string().email('invalid e-mail').required('Required'),
	password: Yup.string().min(6, 'too less char').max(20, 'too much char').required('Required'),
	username: Yup.string().min(3, 'too less char').max(20, 'too much char').required('Required'),
});

export default initialValues;