import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import authFetch from '../../api/authApi';
import { ILoginData, IProfileData, IRegisterData } from './authContext.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useAuthProvider() {
	const [loginData, setLoginData] = useState<ILoginData>({} as ILoginData);
	const [registerData, setRegisterData] = useState<IRegisterData>({} as IRegisterData);
	const [profileData, setProfileData] = useState<IProfileData>({ birthDate: new Date() } as IProfileData);
	const { data: userToken, refetch: loginUser, isLoading: isLoadingUser, error: errorLogin, status: loginStatus } = useQuery(['loginUser', loginData], () => authFetch.LoginUser(loginData), { enabled: false });
	const { data: userTokenRegister, refetch: registerUser, isLoading: isRegisteringUser, error: errorRegister, status: registerStatus } = useQuery(['registerUser', loginData], () => authFetch.RegisterUser(registerData), { enabled: false });
	const [isLogin, setIsLogin] = useState(false);
	useEffect(() => {
		if (loginStatus === 'success' && userToken?.data.token !== undefined) {
			AsyncStorage.setItem('token', userToken?.data.token).catch(e => {
				console.log(e);
			});
		}
	}, [loginStatus]);
	useEffect(() => {
		if (registerStatus === 'success' && userToken?.data.token !== undefined) {
			AsyncStorage.setItem('token', userToken?.data.token).catch(e => {
				console.log(e);
			});
		}
	}, [registerStatus]);

	const setTokenToLocalStorage = async (token: string) => {
		try {
			setIsLogin(true);
			await AsyncStorage.setItem('token', token);
		} catch (e) {
			console.log(e);
		}
	};

	const getTokenFromLocalStorage = async () => {
		try {
			const value = await AsyncStorage.getItem('token');
			if (value !== null) {
				return value;
			} else {
				return null;
			}
		} catch (e) {
			console.log(e);
		}
	};

	const removeTokenFromLocalStorage = async () => {
		try {
			await AsyncStorage.removeItem('token');
			await AsyncStorage.removeItem('incomeArray');
			await AsyncStorage.removeItem('expenseArray');
			setIsLogin(false);
		} catch (e) {
			console.log(e);
		}
		setLoginData({} as ILoginData);
		await loginUser();
	};

	const loginUserFunc = async () => {
		await loginUser();
		if (!userToken?.data.token) return;
		await setTokenToLocalStorage(userToken.data.token);
	};

	const registerUserFunc = async () => {
		await registerUser();
		if (!userTokenRegister?.data.token) return;
		await setTokenToLocalStorage(userTokenRegister.data.token);
	};

	const addProfileDataToAsyncStorage = async () => {
		try {
			const jsonValue = JSON.stringify(profileData);
			await AsyncStorage.setItem('profileData', jsonValue);
		} catch(e) {
			console.log(e);
		}
	};

	const removeProfileDataFromAsyncStorage = async () => {
		try {
			await AsyncStorage.removeItem('profileData');
		} catch(e) {
			console.log(e);
		}
	};

	return {
		removeProfileDataFromAsyncStorage,
		addProfileDataToAsyncStorage,
		registerUserFunc,
		loginUserFunc,
		isLogin,
		removeTokenFromLocalStorage,
		getTokenFromLocalStorage,
		loginStatus,
		profileData,
		setProfileData,
		userToken,
		userTokenRegister,
		setLoginData,
		setRegisterData,
		loginData,
		registerData,
		isLoadingUser,
		isRegisteringUser,
		errorLogin,
		errorRegister,
	};
}

export default useAuthProvider;
