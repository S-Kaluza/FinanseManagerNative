import { AxiosResponse } from 'axios';
import React from 'react';

export interface IRegisterData {
  username: string;
  password: string;
  email: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IProfileData {
  username: string;
  email: string;
  description: string;
  profileImage: string;
  lastUpdate: Date;
  created: Date;
  birthDate: Date;
}

export interface IAuthInterface {
  addProfileDataToAsyncStorage: () => Promise<void>; // function that add profile data to async storage
  registerUserFunc: () => Promise<void>; // function that register user
  loginUserFunc: () => Promise<void>; // function that login user
  isLogin: boolean; // boolean variable that change display login or logout button
  removeTokenFromLocalStorage: () => void; // function that remove token from local storage
  profileData: IProfileData; // variable that contains user profile data
	setProfileData: React.Dispatch<React.SetStateAction<IProfileData>>; // function that change profileData variable
  userToken: void | AxiosResponse<string> | undefined; // variable that contains user token
  loginData: ILoginData; // variable that contains login data that will be send to server 
  registerData: IRegisterData; // variable that contains register data that will be send to server
  setLoginData: React.Dispatch<React.SetStateAction<ILoginData>>; // function that change loginData variable
  setRegisterData: React.Dispatch<React.SetStateAction<IRegisterData>>; // function that change registerData variable
  isLoadingUser: boolean; // boolean variable that change display loading spinner if user is login
  isRegisteringUser: boolean; // boolean variable that change display loading spinner if user is registering
  errorLogin: unknown; // variable that contains error message if login is failed
  errorRegister: unknown; // variable that contains error message if register is failed
}
