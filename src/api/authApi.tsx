import axios from 'axios';
import { ILoginData, IRegisterData } from '../providers/AuthProvider/authContext.types';
import Constants from 'expo-constants';

const authFetch = {
	async RegisterUser(data: IRegisterData) {
		const bodyFormData = new FormData();
		bodyFormData.append('email', data.email);
		bodyFormData.append('password', data.password);
		bodyFormData.append('username', data.username);
		const res = await axios.postForm(Constants.manifest.extra.BASE_URL + '/api/user/register', bodyFormData).then((res) => {
			return res;
		});
		return res;
	},
	async LoginUser(data: ILoginData) {
		const bodyFormData = new FormData();
		bodyFormData.append('email', data.email);
		bodyFormData.append('password', data.password);
		const res = await axios.postForm(Constants.manifest.extra.BASE_URL + '/api/user/login', bodyFormData).then((res) => {
			return res;
		});
		return res;
	},
};

export default authFetch;
