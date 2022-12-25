import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { initialValues, AddExpenseValidationSchema } from './AddExpense.validation';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { toDate } from 'date-fns';
import styles from './AddExpense.styles';

function AddExpense() {
	const { expenseList, addExpense } = useContext(dataContext);
	const { handleSubmit, values, handleChange, setFieldValue } = useFormik({
		initialValues,
		validationSchema: AddExpenseValidationSchema,
		onSubmit: () => {
			addExpense({ id: 'ex' + expenseList.length, connected: [], name: values.name, value: values.value, date: values.date, description: values.description });
			console.log(expenseList);
		},
	});
	const dataPickerShowMode = (currentMode: any) => {
		DateTimePickerAndroid.open({
			nativeID: 'date',
			value: values.date,
			onChange: (val) => {if(val.nativeEvent.timestamp) setFieldValue('date', toDate(val.nativeEvent.timestamp));},
			mode: currentMode,
			is24Hour: true,
		});
	};
    
	return <View style={styles.formWrapper}>
		<FloatingLabelInput
			nativeID='name'
			label={'name'}
			value={values.name}
			onChangeText={handleChange('name')}
		/>
		<View style={{ height: 10 + '%' }} />
		<FloatingLabelInput
			nativeID='description'
			label={'description'}
			value={values.description}
			onChangeText={handleChange('description')}
		/>
		<View style={{ height: 10 + '%' }} />
		<FloatingLabelInput
			nativeID='value'
			label={'value'}
			value={values.value.toString()}
			onChangeText={handleChange('value')}
		/>
		<View style={{ height: 10 + '%' }} />
		<Pressable onPress={() => dataPickerShowMode('date')} style={styles.buttonStyle}><Text style={styles.buttonTextStyle}>date: {values.date.toISOString()}</Text></Pressable>
		<View style={{ height: 10 + '%' }} />
		<Pressable onPress={() => handleSubmit()} style={styles.buttonStyle}><Text style={styles.buttonTextStyle}>Save</Text></Pressable>
	</View>;
}

export default AddExpense;