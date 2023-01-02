import React from 'react';
import { AxiosResponse } from 'axios';
import { UseMutateFunction } from 'react-query';

// interface that describe data needed to exchange currency
export interface IExchangeSendedData {
  have: string,
  want: string,
  amount: string,
}

// interface that describe data that is returned from exchange currency api
export interface IExchangeReceivedData {
  old_amount: string,
  old_currency: string,
  new_currency: string,
  new_amount: string
}

// interface that describe data contained in income or expense object
export interface IIncomeOrExpense {
  id: string | undefined,
  date: Date,
  value: number,
  description: string | undefined,
  name: string,
  connected: number[] | undefined
}

// interface that describe data contained in analytics object, that is used to display data in analytics chart
export interface IAnalyticsObject {
  numberOfTimePeriod: number,
  valueExpense: number,
  valueIncome: number,
  date: Date | undefined,
}

// interface that describe data contained in converted currency object
export interface IConvertedCurrencyData {
  old_amount: number,
  new_amount: number,
}

// interface that describe what is returned as response data from useMutation hook
export interface IUseMutationAxiosResponse {
  ResponseData: string;
}

export interface IDataInterface {
  getNextId: (list: IIncomeOrExpense[]) => number; // function that return next id for income or expense without prefix
  synchroniseData: () => void; // function that synchronise data between local storage and database
  getIncomeAndExpenseFromAsyncStorage: () => void; // function that fetch user incomes and expenses from local storage
  setIsExpense: React.Dispatch<React.SetStateAction<boolean>> // function that change isExpense variable
  isExpense: boolean, // boolean variable that change display income or expense list
  analyticsDataWeek: IAnalyticsObject[], // array of objects that contains data for analytics chart for week
  analyticsDataMonth: IAnalyticsObject[], // array of objects that contains data for analytics chart for month
  userIncomes: void | AxiosResponse<any, any> | undefined; // variable that contains data about user incomes
  isFetchedUserIncomes: boolean; // boolean variable that change display loading spinner
  saveExpenseAndIncome: () => void; // function that save expense and income in database
  refetchUserIncomes: () => void; // function that refetch user incomes
  userExpenses: void | AxiosResponse<any, any> | undefined; // variable that contains data about user expenses
  isFetchedUserExpenses: boolean; // boolean variable that change display loading spinner if user expenses is fetching
  refetchUserExpenses: () => void; // function that refetch user expenses
  number: number; // variable that contains number of time period for analytics chart
  fetchInflation: () => void; // function that fetch inflation data
  setNumber: React.Dispatch<React.SetStateAction<number>>; // function that change number variable that contains number of time period for analytics chart
  inflation: number; // variable that contains inflation data
  isFetchingInflation: boolean; // boolean variable that change display loading spinner if inflation data is fetching
  convertedCurrency: AxiosResponse<IConvertedCurrencyData> | undefined; // variable that contains data about converted currency
  isFetchedConvertCurrency: boolean; // boolean variable that change display loading spinner if converted currency is fetching
  refetchConvertCurrency: () => void; // function that refetch converted currency
  exchangeData: IExchangeSendedData; // variable that contains data about exchange
  setExchangeData: React.Dispatch<IExchangeSendedData>; // function that change exchangeData variable
  addExpense: (expense: IIncomeOrExpense) => void; // function that add expense to expenseList variable
  addIncome: (income: IIncomeOrExpense) => void; // function that add income to incomeList variable
  removeExpense: (id: string | undefined) => void; // function that remove expense from expenseList variable
  removeIncome: (id: string | undefined) => void; // function that remove income from incomeList variable
  incomeList: IIncomeOrExpense[]; // variable that contains array of user incomes
  expenseList: IIncomeOrExpense[]; // variable that contains array of user expenses
  sendIncome: UseMutateFunction<AxiosResponse<any, any> | undefined, unknown, void, unknown>; // function that send income to database
  sendExpense: UseMutateFunction<AxiosResponse<any, any> | undefined, unknown, void, unknown>; // function that send expense to database
}
