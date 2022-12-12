import * as Yup from 'yup';

export const initialValues = {
	from: 'PLN',
	to: 'EUR',
	value: '1',
};

export const CurrencyConverterSchema = Yup.object().shape({
	from: Yup.string().required('Required'),
	to: Yup.string(),
	value: Yup.string(),
});

export default initialValues;