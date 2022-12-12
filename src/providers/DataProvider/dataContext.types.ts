import React from 'react';
import { AxiosResponse } from 'axios';
import { UseMutateFunction } from 'react-query';

export interface IExchangeSendedData {
  have: string,
  want: string,
  amount: string,
}

export interface IExchangeReceivedData {
  old_amount: string,
  old_currency: string,
  new_currency: string,
  new_amount: string
}

export interface IIncomeOrExpanse {
  id: string | undefined,
  date: Date,
  value: number,
  description: string | undefined,
  name: string,
  connected: number[] | undefined
}

export interface IAnalyticsArray {
  numberOfTimePeriod: number,
  valueExpanse: number,
  valueIncome: number,
  date: Date | undefined,
}

export interface IDataInterface {
  setIsExpense: React.Dispatch<React.SetStateAction<boolean>>
  isExpense: boolean,
  analyticsDataWeek: IAnalyticsArray[],
  analyticsDataMonth: IAnalyticsArray[],
  setIncomeList: React.Dispatch<React.SetStateAction<IIncomeOrExpanse[]>>
  setExpanseList: React.Dispatch<React.SetStateAction<IIncomeOrExpanse[]>>
  data?: number;
  userIncomes: AxiosResponse<any, any> | undefined;
  isFetchedUserIncomes: boolean;
  saveExpanseAndIncome: () => void;
  refetchUserIncomes: () => void;
  userExpanses: AxiosResponse<any, any> | undefined;
  isFetchedUserExpanses: boolean;
  refetchUserExpanses: () => void;
  number: number;
  fetchInflation: () => void;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  inflation: number;
  isFetchingInflation: boolean;
  incomes: IIncomeOrExpanse;
  setIncomes: React.Dispatch<IIncomeOrExpanse>;
  expanses: IIncomeOrExpanse;
  setExpases: React.Dispatch<IIncomeOrExpanse>;
  convertedCurrency: AxiosResponse<any, any> | undefined;
  isFetchedConvertCurrency: boolean;
  refetchConvertCurrency: () => void;
  exchangeData: IExchangeSendedData;
  setExchangeData: React.Dispatch<IExchangeSendedData>;
  addExpanse: (expanse: IIncomeOrExpanse) => void;
  addIncome: (income: IIncomeOrExpanse) => void;
  removeExpanse: (id: string) => void;
  removeIncome: (id: string) => void;
  incomeList: IIncomeOrExpanse[];
  expanseList: IIncomeOrExpanse[];
  sendIncome: UseMutateFunction<AxiosResponse<any, any>, unknown, void, unknown>;
  sendExpanse: UseMutateFunction<AxiosResponse<any, any>, unknown, void, unknown>;
}
