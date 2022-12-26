import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { CurrencyConverterSchema, initialValues } from './CurrencyConverter.validation';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import styles from './CurrencyConverter.styles';

function CurrencyConverter() {
	const { setExchangeData, refetchConvertCurrency, convertedCurrency, isFetchedConvertCurrency } = useContext(dataContext);
	const { handleSubmit, values, handleChange } = useFormik({
		initialValues,
		validationSchema: CurrencyConverterSchema,
		onSubmit: () => {
			setExchangeData({ amount: values.value, have: values.from, want: values.to });
			refetchConvertCurrency();
		},
	});
    
	return <View style={styles.formWrapper}>
		{isFetchedConvertCurrency? <View style={styles.resultView}><Text style={styles.resultText}>Loading...</Text></View> : <View style={styles.resultView}><Text style={styles.resultText}>{convertedCurrency?.data['new_amount']}</Text></View>}
		<FloatingLabelInput
			nativeID='from'
			label={'from'}
			value={values.from}
			onChangeText={handleChange('from')}
		/>
		<View style={{ height: 10 + '%' }} />
		<FloatingLabelInput
			nativeID='to'
			label={'to'}
			value={values.to}
			onChangeText={handleChange('to')}
		/>
		<View style={{ height: 10 + '%' }} />
		<FloatingLabelInput
			nativeID='value'
			label={'value'}
			value={values.value.toString()}
			onChangeText={handleChange('value')}
		/>
		<View style={{ height: 10 + '%' }} />
		<Pressable onPress={() => handleSubmit()} style={styles.buttonStyle}><Text style={styles.buttonTextStyle}>Save</Text></Pressable>
	</View>;
}

export default CurrencyConverter;