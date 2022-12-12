import axios from 'axios';
import { IExchangeSendedData, IIncomeOrExpanse } from '../providers/DataProvider/dataContext.types';
import CookieManager from '@react-native-cookies/cookies';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const dataFetch = {
	async getInflation() {
		const res = await axios({
			url: 'https://api.api-ninjas.com/v1/inflation?country=poland',
			headers: {
				'X-Api-Key': 'ofHch3J2V+Esbh75mbiXhg==CDJFYF2LaS2V1KY3',
			},
		});
		return res;
	},
	async convertCurrency(exchangeData: IExchangeSendedData) {
		const res = await axios({
			url: `https://api.api-ninjas.com/v1/convertcurrency?have=${exchangeData.have}&want=${exchangeData.want}&amount=${exchangeData.amount}`,
			headers: {
				'X-Api-Key': 'ofHch3J2V+Esbh75mbiXhg==CDJFYF2LaS2V1KY3',
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
	async getUserExpanses() {
		const token = await AsyncStorage.getItem('token');
		const res = await axios({
			url: 'https://localhost:8001/api/user/expanse',
			method: 'GET',
			headers: {
				'X-Token': token,
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'multipart/form-data',
			},
		});
		return res;
	},
	async sendUserExpanses(data: IIncomeOrExpanse[]) {
		const token = await AsyncStorage.getItem('token');
		const bodyFormData = new FormData();
		const dataString = await JSON.stringify(data);
		bodyFormData.append('Expanse', dataString);
		console.log(bodyFormData);
		const res = await axios({
			url: 'https://localhost:8001/api/user/expanse',
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
	async sendUserIncomes(data: IIncomeOrExpanse[]) {
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
