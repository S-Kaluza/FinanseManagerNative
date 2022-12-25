import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { dataFetch } from '../../api/dataApi';
import { IExchangeSendedData, IIncomeOrExpense } from './dataContext.types';
import { monthlyAnalyticsArray, weekAnalyticsArray } from './dataContext.initialValues';
import { getWeek } from 'date-fns';

function useDataProvider() {
	const [number, setNumber] = useState<number>(10);
	const [analyticsDataWeek] = useState(weekAnalyticsArray);
	const [analyticsDataMonth] = useState(monthlyAnalyticsArray);
	const [incomes, setIncomes] = useState<IIncomeOrExpense>({} as IIncomeOrExpense);
	const [expenses, setExpases] = useState<IIncomeOrExpense>({} as IIncomeOrExpense);
	const [exchangeData, setExchangeData] = useState({} as IExchangeSendedData);
	const [incomeList, setIncomeList] = useState<IIncomeOrExpense[]>([] as IIncomeOrExpense[]);
	const [expenseList, setExpenseList] = useState<IIncomeOrExpense[]>([] as IIncomeOrExpense[]);
	const [isExpense, setIsExpense] = useState(false);
	const { isFetching: isFetchingInflation, data: inflation, refetch: fetchInflation } = useQuery('inflation', dataFetch.getInflation, { enabled: false });
	const { data: convertedCurrency, isFetching: isFetchedConvertCurrency, refetch: refetchConvertCurrency } = useQuery(['convertData', exchangeData], () => dataFetch.convertCurrency(exchangeData), { enabled: false });
	const { mutate: sendIncome } = useMutation(['sendIncome', incomeList], () => dataFetch.sendUserIncomes(incomeList), { });
	const { mutate: sendExpense } = useMutation(['sendExpense', expenseList], () => dataFetch.sendUserExpenses(expenseList), { });
	const { data: userIncomes, isFetched: isFetchedUserIncomes, refetch: refetchUserIncomes } = useQuery(['fetchUserIncomes'], () => dataFetch.getUserIncomes(), { enabled: false });
	const { data: userExpenses, isFetched: isFetchedUserExpenses, refetch: refetchUserExpenses } = useQuery(['fetchUserExpenses'], () => dataFetch.getUserExpenses(), { enabled: false });

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
	};

	const removeIncome = (id: string) => {
		const tempList = incomeList.filter((income) => income.id !== id);
		setIncomeList(tempList);
	};

	const removeExpense = (id: string) => {
		const tempList = expenseList.filter((expense) => expense.id !== id);
		setExpenseList(tempList);
	};

	const saveExpenseAndIncome = () => {
		sendIncome();
		sendExpense();
	};

	return {
		isExpense,
		setIsExpense,
		analyticsDataWeek,
		analyticsDataMonth,
		userIncomes,
		setIncomeList,
		setExpenseList,
		isFetchedUserIncomes,
		refetchUserIncomes,
		userExpenses,
		isFetchedUserExpenses,
		refetchUserExpenses,
		number,
		saveExpenseAndIncome,
		fetchInflation,
		setNumber,
		inflation: inflation?.data[0].yearly_rate_pct,
		isFetchingInflation,
		incomes,
		setIncomes,
		expenses,
		setExpases,
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
		sendExpense,
		sendIncome,
	};
}
export default useDataProvider;
