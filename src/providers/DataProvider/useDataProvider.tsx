import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { dataFetch } from '../../api/dataApi';
import { IExchangeSendedData, IIncomeOrExpanse } from './dataContext.types';
import { monthlyAnalyticsArray, weekAnalyticsArray } from './dataContext.initialValues';
import { Interval, getWeek } from 'date-fns';

function useDataProvider() {
	const [number, setNumber] = useState<number>(10);
	const [analyticsDataWeek] = useState(weekAnalyticsArray);
	const [analyticsDataMonth] = useState(monthlyAnalyticsArray);
	const [incomes, setIncomes] = useState<IIncomeOrExpanse>({} as IIncomeOrExpanse);
	const [expanses, setExpases] = useState<IIncomeOrExpanse>({} as IIncomeOrExpanse);
	const [exchangeData, setExchangeData] = useState({} as IExchangeSendedData);
	const [incomeList, setIncomeList] = useState<IIncomeOrExpanse[]>([] as IIncomeOrExpanse[]);
	const [expanseList, setExpanseList] = useState<IIncomeOrExpanse[]>([] as IIncomeOrExpanse[]);
	const [isExpense, setIsExpense] = useState(false);
	const { isFetching: isFetchingInflation, data: inflation, refetch: fetchInflation } = useQuery('inflation', dataFetch.getInflation, { enabled: false });
	const { data: convertedCurrency, isFetching: isFetchedConvertCurrency, refetch: refetchConvertCurrency } = useQuery(['convertData', exchangeData], () => dataFetch.convertCurrency(exchangeData), { enabled: false });
	const { mutate: sendIncome } = useMutation(['sendIncome', incomeList], () => dataFetch.sendUserIncomes(incomeList), { });
	const { mutate: sendExpanse } = useMutation(['sendExpanse', expanseList], () => dataFetch.sendUserExpanses(expanseList), { });
	const { data: userIncomes, isFetched: isFetchedUserIncomes, refetch: refetchUserIncomes } = useQuery(['fetchUserIncomes'], () => dataFetch.getUserIncomes(), { enabled: false });
	const { data: userExpanses, isFetched: isFetchedUserExpanses, refetch: refetchUserExpanses } = useQuery(['fetchUserExpanses'], () => dataFetch.getUserExpanses(), { enabled: false });

	const addIncome = (income : IIncomeOrExpanse) => {
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

	const addExpanse = (expanse : IIncomeOrExpanse) => {
		const week = getWeek(expanse.date, { weekStartsOn: 0 });
		const arrayWeek = weekAnalyticsArray;
		const arrayMonth = monthlyAnalyticsArray;
		const result = parseFloat(arrayWeek[week - 1].valueExpanse.toString()) + parseFloat(expanse.value.toString());
		const resultInMonth = parseFloat(arrayMonth[expanse.date.getMonth()].valueExpanse.toString()) + parseFloat(expanse.value.toString());
		arrayWeek[week - 1].valueExpanse = parseFloat(result.toString());
		arrayWeek[week - 1].date = expanse.date;
		arrayMonth[expanse.date.getMonth()].valueExpanse = parseFloat(resultInMonth.toString());
		arrayMonth[expanse.date.getMonth()].date = expanse.date;
		setExpanseList((prev) => [...prev, expanse]);
	};

	const removeIncome = (id: string) => {
		const tempList = incomeList.filter((income) => income.id !== id);
		setIncomeList(tempList);
	};

	const removeExpanse = (id: string) => {
		const tempList = expanseList.filter((expanse) => expanse.id !== id);
		setExpanseList(tempList);
	};

	const saveExpanseAndIncome = () => {
		sendIncome();
		sendExpanse();
	};

	return {
		isExpense,
		setIsExpense,
		analyticsDataWeek,
		analyticsDataMonth,
		userIncomes,
		setIncomeList,
		setExpanseList,
		isFetchedUserIncomes,
		refetchUserIncomes,
		userExpanses,
		isFetchedUserExpanses,
		refetchUserExpanses,
		number,
		saveExpanseAndIncome,
		fetchInflation,
		setNumber,
		inflation: inflation?.data[0].yearly_rate_pct,
		isFetchingInflation,
		incomes,
		setIncomes,
		expanses,
		setExpases,
		convertedCurrency,
		isFetchedConvertCurrency,
		refetchConvertCurrency,
		exchangeData,
		setExchangeData,
		addExpanse,
		addIncome,
		removeExpanse,
		removeIncome,
		incomeList,
		expanseList,
		sendExpanse,
		sendIncome,
	};
}
export default useDataProvider;
