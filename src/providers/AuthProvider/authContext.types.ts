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

export interface IAuthInterface {
  userToken: void | AxiosResponse<any, any> | undefined; // variable that contains user token
  loginUser: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<void | AxiosResponse<any, any>, unknown>>; // function that login user
  registerUser: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>; // function that register user
  loginData: ILoginData; // variable that contains login data that will be send to server 
  registerData: IRegisterData; // variable that contains register data that will be send to server
  setLoginData: React.Dispatch<React.SetStateAction<ILoginData>>; // function that change loginData variable
  setRegisterData: React.Dispatch<React.SetStateAction<IRegisterData>>; // function that change registerData variable
  isLoadingUser: boolean; // boolean variable that change display loading spinner if user is login
  isRegisteringUser: boolean; // boolean variable that change display loading spinner if user is registering
  errorLogin: unknown; // variable that contains error message if login is failed
  errorRegister: unknown; // variable that contains error message if register is failed
}
