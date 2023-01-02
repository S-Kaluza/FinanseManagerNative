import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { dataFetch } from '../../api/dataApi';
import { IExchangeSendedData, IIncomeOrExpense } from './dataContext.types';
import { monthlyAnalyticsArray, weekAnalyticsArray } from './dataContext.initialValues';
import { getWeek } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useDataProvider() {
	const [number, setNumber] = useState<number>(10);
	const [analyticsDataWeek] = useState(weekAnalyticsArray);
	const [analyticsDataMonth] = useState(monthlyAnalyticsArray);
	const [exchangeData, setExchangeData] = useState({} as IExchangeSendedData);
	const [incomeList, setIncomeList] = useState<IIncomeOrExpense[]>([] as IIncomeOrExpense[]);
	const [expenseList, setExpenseList] = useState<IIncomeOrExpense[]>([] as IIncomeOrExpense[]);
	const [isExpense, setIsExpense] = useState(false);
	const { isFetching: isFetchingInflation, data: inflation, refetch: fetchInflation } = useQuery('inflation', dataFetch.getInflation, { enabled: false });
	const { data: convertedCurrency, isFetching: isFetchedConvertCurrency, refetch: refetchConvertCurrency } = useQuery(['convertData', exchangeData], () => dataFetch.convertCurrency(exchangeData), { enabled: false });
	const { mutate: sendIncome } = useMutation(['sendIncome', incomeList], () => dataFetch.sendUserIncomes(incomeList), { });
	const { mutate: sendExpense } = useMutation(['sendExpense', expenseList], () => dataFetch.sendUserExpenses(expenseList), { });
	const { data: userIncomes, refetch: refetchUserIncomes } = useQuery(['fetchUserIncomes'], () => dataFetch.getUserIncomes(), { enabled: false });
	const { data: userExpenses, refetch: refetchUserExpenses } = useQuery(['fetchUserExpenses'], () => dataFetch.getUserExpenses(), { enabled: false });

	const addIncomeToAsyncStorage = async (income : IIncomeOrExpense[]) => {
		try {
			const jsonValue = JSON.stringify(income);
			await AsyncStorage.setItem('incomeArray', jsonValue);
		} catch(e) {
			console.log(e);
		}
	};

	const addExpenseToAsyncStorage = async (expense : IIncomeOrExpense[]) => {
		try {
			const jsonValue = JSON.stringify(expense);
			await AsyncStorage.setItem('expenseArray', jsonValue);
		} catch(e) {
			console.log(e);
		}
	};

	const addIncome = (income : IIncomeOrExpense) => {
		const week = getWeek(income.date, { weekStartsOn: 0 });
		const arrayWeek = weekAnalyticsArray;
		const arrayMonth = monthlyAnalyticsArray;
		const result = parseFloat(arrayWeek[week - 1].valueIncome.toString()) + parseFloat(income.value.toString());
		const resultInMonth = parseFloat(arrayMonth[income.date.getMonth()].valueIncome.toString()) + parseFloat(income.value.toString());
		arrayWeek[week - 1].valueIncome = parseFloat(result.toString());
		arrayWeek[week - 1].date = income.date;
		arrayMonth[income.date.getMonth()].valueIncome = parseFloat(resultInMonth.toString());
		arrayMonth[income.date.getMonth()].date = income.date;
		setIncomeList((prev) => [...prev, income]);
		addIncomeToAsyncStorage(incomeList);
		saveExpenseAndIncome();
	};

	const addExpense = (expense : IIncomeOrExpense) => {
		const week = getWeek(expense.date, { weekStartsOn: 0 });
		const arrayWeek = weekAnalyticsArray;
		const arrayMonth = monthlyAnalyticsArray;
		const result = parseFloat(arrayWeek[week - 1].valueExpense.toString()) + parseFloat(expense.value.toString());
		const resultInMonth = parseFloat(arrayMonth[expense.date.getMonth()].valueExpense.toString()) + parseFloat(expense.value.toString());
		arrayWeek[week - 1].valueExpense = parseFloat(result.toString());
		arrayWeek[week - 1].date = expense.date;
		arrayMonth[expense.date.getMonth()].valueExpense = parseFloat(resultInMonth.toString());
		arrayMonth[expense.date.getMonth()].date = expense.date;
		setExpenseList((prev) => [...prev, expense]);
		addExpenseToAsyncStorage(expenseList);
		saveExpenseAndIncome();
	};

	const removeIncome = (id: string | undefined) => {
		const tempList = incomeList.filter((income) => income.id !== id);
		setIncomeList(tempList);
		addIncomeToAsyncStorage(incomeList);
		saveExpenseAndIncome();
	};

	const removeExpense = (id: string | undefined) => {
		const tempList = expenseList.filter((expense) => expense.id !== id);
		setExpenseList(tempList);
		addExpenseToAsyncStorage(expenseList);
		saveExpenseAndIncome();
	};

	const saveExpenseAndIncome = () => {
		sendIncome();
		sendExpense();
	};

	const getIncomeAndExpenseFromAsyncStorage = async () => {
		try {
			const income = await AsyncStorage.getItem('incomeArray');
			const expense = await AsyncStorage.getItem('expenseArray');
			if (income !== undefined && income !== null) {
				setIncomeList(JSON.parse(income));
			}
			if (expense !== undefined && expense !== null) {
				setExpenseList(JSON.parse(expense));
			}
		} catch(e) {
			console.log(e);
		}
	};

	const synchroniseData = async () => {
		await refetchUserIncomes();
		await refetchUserExpenses();
		if(userIncomes?.data !== undefined && userExpenses?.data !== undefined){
			const inc = await JSON.parse(JSON.stringify(userIncomes?.data));
			const exp = await JSON.parse(JSON.stringify(userExpenses?.data));
			setIncomeList(inc);
			setExpenseList(exp);
		}
	};

	const getNextId = (list: IIncomeOrExpense[]) => {
		if(list.length === 0) return 1;
		const lastElement = list[list.length - 1];
		if (lastElement.id?.length) {
			return  (parseInt(lastElement.id.slice(2)) + 1);
		} else return 1;
	};

	return {
		getNextId,
		synchroniseData,
		getIncomeAndExpenseFromAsyncStorage,
		isExpense,
		setIsExpense,
		analyticsDataWeek,
		analyticsDataMonth,
		userIncomes,
		userExpenses,
		number,
		inflation: inflation?.data[0].yearly_rate_pct,
		convertedCurrency,
		isFetchedConvertCurrency,
		refetchConvertCurrency,
		exchangeData,
		setExchangeData,
		addExpense,
		addIncome,
		removeExpense,
		removeIncome,
		incomeList,
		expenseList,
	};
}
export default useDataProvider;
