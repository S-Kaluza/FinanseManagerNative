import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { CurrencyConverterSchema, initialValues } from './CurrencyConverterScreen.validation';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { dataContext } from '../../providers/DataProvider/DataProvider';
import styles from './CurrencyConverterScreen.styles';
import i18n from 'i18next';

function CurrencyConverterScreen() {
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
			label={i18n.t('from')}
			value={values.from}
			onChangeText={handleChange('from')}
		/>
		<View style={{ height: 10 + '%' }} />
		<FloatingLabelInput
			nativeID='to'
			label={i18n.t('to')}
			value={values.to}
			onChangeText={handleChange('to')}
		/>
		<View style={{ height: 10 + '%' }} />
		<FloatingLabelInput
			nativeID='value'
			label={i18n.t('value')}
			value={values.value.toString()}
			onChangeText={handleChange('value')}
		/>
		<View style={{ height: 10 + '%' }} />
		<Pressable onPress={() => handleSubmit()} style={styles.buttonStyle}><Text style={styles.buttonTextStyle}>{i18n.t('convert')}</Text></Pressable>
	</View>;
}

export default CurrencyConverterScreen;