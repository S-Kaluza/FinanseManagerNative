import * as Yup from 'yup';

export const initialValues = {
	name: '',
	description: '',
	value: 0,
	date: new Date(),
};

export const AddExpenseValidationSchema = Yup.object().shape({
	name: Yup.string().required('Required'),
	description: Yup.string(),
	value: Yup.number(),
	date: Yup.date(),
});

export default initialValues;