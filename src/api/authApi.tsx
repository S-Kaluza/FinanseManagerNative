import axios from 'axios';
import { ILoginData, IRegisterData } from '../providers/AuthProvider/authContext.types';

const authFetch = {
	async RegisterUser(data: IRegisterData) {
		const bodyFormData = new FormData();
		bodyFormData.append('Email', data.Email);
		bodyFormData.append('Password', data.Password);
		bodyFormData.append('Username', data.Username);
		const res = await axios({
			url: 'https://10.0.2.2:8000/api/user/register',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'multipart/form-data',
			},
			method: 'POST',
			data: bodyFormData,
		});
		console.log(res);
		return res;
	},
	async LoginUser(data: ILoginData) {
		const bodyFormData = new FormData();
		bodyFormData.append('Email', data.email);
		bodyFormData.append('Password', data.password);
		console.warn(bodyFormData);
		const res = await axios({
			url: 'https://172.19.240.1:8000/api/user/login',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'multipart/form-data',
			},
			method: 'POST',
			data: bodyFormData,
		}).catch(e => console.warn(e));
		return res;
	},
};

export default authFetch;
