import axios from 'axios';
import { IExchangeSendedData, IIncomeOrExpense } from '../providers/DataProvider/dataContext.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

export const dataFetch = {
	async getInflation() {
		const res = await axios({
			url: Constants.manifest?.extra.INFLATION_API_URL + 'poland',
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
		try{
			const token = await AsyncStorage.getItem('token');
			const res = await axios({
				url: Constants.manifest.extra.BASE_URL + '/api/income',
				method: 'GET',
				headers: {
					'x-api-key': token,
					'Content-Type': 'multipart/form-data',
				},
			}).catch((e) => { console.log(e); });
			return res;
		}catch(e){
			console.log(e);
		}
	},
	async getUserExpenses() {
		try{
			const token = await AsyncStorage.getItem('token');
			const res = await axios({
				url: Constants.manifest?.extra.BASE_URL + '/api/expense',
				method: 'GET',
				headers: {
					'x-api-key': token,
					'Content-Type': 'multipart/form-data',
				},
			}).catch((e) => { console.log(e);});
			return res;
		}catch(e){
			console.log(e);
		}
	},
	async sendUserExpenses(data: IIncomeOrExpense[]) {
		try{
			const token = await AsyncStorage.getItem('token');
			const bodyFormData = new FormData();
			const dataString = await JSON.stringify(data);
			bodyFormData.append('Expense', dataString);
			const res = await axios({
				url:  Constants.manifest.extra.BASE_URL + '/api/expense',
				method: 'POST',
				headers: {
					'X-Token': token,
					'Content-Type': 'multipart/form-data',
				},
				data: bodyFormData,
			});
			return res;
		}catch(e){
			console.log(e);
		}
	},
	async sendUserIncomes(data: IIncomeOrExpense[]) {
		try{
			const token = await AsyncStorage.getItem('token');
			const bodyFormData = new FormData();
			const dataString = await JSON.stringify(data);
			bodyFormData.append('Income', dataString);
			const res = await axios({
				url: Constants.manifest.extra.BASE_URL + '/api/user/income',
				method: 'POST',
				headers: {
					'X-Token': token,
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'multipart/form-data',
				},
				data: bodyFormData,
			});
			return res;
		}catch(e){
			console.log(e);
		}
	},
};

export default dataFetch;
