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
		if (loginStatus === 'success') {
			AsyncStorage.setItem('token', userToken?.data.token).catch(e => {
				console.log(e);
			});
		}
	}, [loginStatus]);
	useEffect(() => {
		if (registerStatus === 'success') {
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
			setIsLogin(false);
		} catch (e) {
			console.log(e);
		}
		setLoginData({} as ILoginData);
		await loginUser();
	};

	const loginUserFunc = async () => {
		await loginUser();
		await setTokenToLocalStorage(userToken?.data.token);
	};

	const registerUserFunc = async () => {
		await registerUser();
		await setTokenToLocalStorage(userToken?.data.token);
	};

	return {
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
