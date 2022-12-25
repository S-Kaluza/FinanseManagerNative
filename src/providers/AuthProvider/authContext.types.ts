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
  userToken: void | AxiosResponse<any, any> | undefined;
  loginUser: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<void | AxiosResponse<any, any>, unknown>>;
  registerUser: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>;
  loginData: ILoginData;
  registerData: IRegisterData;
  setLoginData: React.Dispatch<React.SetStateAction<ILoginData>>;
  setRegisterData: React.Dispatch<React.SetStateAction<IRegisterData>>;
  isLoadingUser: boolean;
  isRegisteringUser: boolean;
  errorLogin: unknown;
  errorRegister: unknown;
}
