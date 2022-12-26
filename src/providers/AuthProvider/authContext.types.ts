import { AxiosResponse } from 'axios';
import { RefetchOptions, RefetchQueryFilters, QueryObserverResult } from 'react-query';
import React from 'react';

export interface IRegisterData {
  Username: string;
  Password: string;
  Email: string;
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
  loginStatus: string; // variable that contains login status
  profileData: IProfileData; // variable that contains user profile data
	setProfileData: React.Dispatch<React.SetStateAction<IProfileData>>; // function that change profileData variable
  userToken: void | AxiosResponse<string> | undefined; // variable that contains user token
  loginUser: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<void | AxiosResponse<string>, unknown>>; // function that login user
  registerUser: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<AxiosResponse<string>, unknown>>; // function that register user
  loginData: ILoginData; // variable that contains login data that will be send to server 
  registerData: IRegisterData; // variable that contains register data that will be send to server
  setLoginData: React.Dispatch<React.SetStateAction<ILoginData>>; // function that change loginData variable
  setRegisterData: React.Dispatch<React.SetStateAction<IRegisterData>>; // function that change registerData variable
  isLoadingUser: boolean; // boolean variable that change display loading spinner if user is login
  isRegisteringUser: boolean; // boolean variable that change display loading spinner if user is registering
  errorLogin: unknown; // variable that contains error message if login is failed
  errorRegister: unknown; // variable that contains error message if register is failed
}
