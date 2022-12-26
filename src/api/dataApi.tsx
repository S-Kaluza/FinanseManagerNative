import axios from 'axios';
import { IExchangeSendedData, IIncomeOrExpense } from '../providers/DataProvider/dataContext.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

export const dataFetch = {
	async getInflation() {
		const res = await axios({
			url: Constants.manifest.extra.INFLATION_API_URL + 'poland',
			headers: {
				'X-Api-Key': Constants.manifest?.extra.NINJAS_API_KEY,
			},
		});
		return res;
	},
	async convertCurrency(exchangeData: IExchangeSendedData) {
		const res = await axios({
			url: Constants.manifest.extra.CONVERT_CURRENCY_API_URL + `have=${exchangeData.have}&want=${exchangeData.want}&amount=${exchangeData.amount}`,
			headers: {
				'X-Api-Key': Constants.manifest?.extra.NINJAS_API_KEY,
			},
		});
		return res;
	},
	async getUserIncomes() {
		console.log('normal');
		const token = await AsyncStorage.getItem('token');
		const res = await axios({
			url: 'https://localhost:8001/api/user/income',
			method: 'GET',
			headers: {
				'X-Token': token,
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log(JSON.parse(res.data[0]));
		return res;
	},
	async getUserExpenses() {
		const token = await AsyncStorage.getItem('token');
		const res = await axios({
			url: 'https://localhost:8001/api/user/expense',
			method: 'GET',
			headers: {
				'X-Token': token,
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'multipart/form-data',
			},
		});
		return res;
	},
	async sendUserExpenses(data: IIncomeOrExpense[]) {
		const token = await AsyncStorage.getItem('token');
		const bodyFormData = new FormData();
		const dataString = await JSON.stringify(data);
		bodyFormData.append('Expense', dataString);
		console.log(bodyFormData);
		const res = await axios({
			url: 'https://localhost:8001/api/user/expense',
			method: 'POST',
			headers: {
				'X-Token': token,
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'multipart/form-data',
			},
			data: bodyFormData,
		});
		return res;
	},
	async sendUserIncomes(data: IIncomeOrExpense[]) {
		const token = await AsyncStorage.getItem('token');
		const bodyFormData = new FormData();
		const dataString = await JSON.stringify(data);
		bodyFormData.append('Income', dataString);
		const res = await axios({
			url: 'https://localhost:8001/api/user/income',
			method: 'POST',
			headers: {
				'X-Token': token,
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'multipart/form-data',
			},
			data: bodyFormData,
		});
		console.log(token);
		return res;
	},
};

export default dataFetch;
