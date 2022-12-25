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

export interface IIncomeOrExpense {
  id: string | undefined,
  date: Date,
  value: number,
  description: string | undefined,
  name: string,
  connected: number[] | undefined
}

export interface IAnalyticsArray {
  numberOfTimePeriod: number,
  valueExpense: number,
  valueIncome: number,
  date: Date | undefined,
}

export interface IConvertedCurrencyData {
  old_amount: number,
  new_amount: number,
}

export interface IUseMutationAxiosResponse {
  ResponseData: string;
}

export interface IDataInterface {
  setIsExpense: React.Dispatch<React.SetStateAction<boolean>>
  isExpense: boolean,
  analyticsDataWeek: IAnalyticsArray[],
  analyticsDataMonth: IAnalyticsArray[],
  setIncomeList: React.Dispatch<React.SetStateAction<IIncomeOrExpense[]>>
  setExpenseList: React.Dispatch<React.SetStateAction<IIncomeOrExpense[]>>
  data?: number;
  userIncomes: AxiosResponse<IIncomeOrExpense[]> | undefined;
  isFetchedUserIncomes: boolean;
  saveExpenseAndIncome: () => void;
  refetchUserIncomes: () => void;
  userExpenses: AxiosResponse<IIncomeOrExpense[]> | undefined;
  isFetchedUserExpenses: boolean;
  refetchUserExpenses: () => void;
  number: number;
  fetchInflation: () => void;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  inflation: number;
  isFetchingInflation: boolean;
  incomes: IIncomeOrExpense;
  setIncomes: React.Dispatch<IIncomeOrExpense>;
  expenses: IIncomeOrExpense;
  setExpases: React.Dispatch<IIncomeOrExpense>;
  convertedCurrency: AxiosResponse<IConvertedCurrencyData> | undefined;
  isFetchedConvertCurrency: boolean;
  refetchConvertCurrency: () => void;
  exchangeData: IExchangeSendedData;
  setExchangeData: React.Dispatch<IExchangeSendedData>;
  addExpense: (expense: IIncomeOrExpense) => void;
  addIncome: (income: IIncomeOrExpense) => void;
  removeExpense: (id: string) => void;
  removeIncome: (id: string) => void;
  incomeList: IIncomeOrExpense[];
  expenseList: IIncomeOrExpense[];
  sendIncome: UseMutateFunction<AxiosResponse<IUseMutationAxiosResponse>, unknown, void, unknown>;
  sendExpense: UseMutateFunction<AxiosResponse<IUseMutationAxiosResponse>, unknown, void, unknown>;
}
