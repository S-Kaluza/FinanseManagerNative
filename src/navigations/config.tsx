import LoginScreen from '../screens/LoginScreen/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { INavRouting } from './RootNavigator.types';
import MenuScreen from '../screens/MenuScreen/MenuScreen';
import AddExpense from '../screens/AddExpense/AddExpense';
import AddIncome from '../screens/AddIncome/AddIncome';
import Analytics from '../screens/Analytics/Analytics';
import CurrencyConverter from '../screens/CurrencyConverter/CurrencyConverter';
import ExchangeRates from '../screens/ExchangeRates/ExchangeRates';
import News from '../screens/News/News';
import InflationMonitor from '../screens/InflationMonitoring/InflationMonitoring';
import ProfileDataUpdateScreen from '../screens/ProfileDataUpdateScreen/ProfileDataUpdateScreen';

export const navRouting: INavRouting[] = [
	{
		name: 'Dashboard',
		options: { title: 'MainPage' },
		nested: [],
		component: DashboardScreen,
		isProtected: false,
	},
	{
		name: 'Menu',
		options: { title: 'Menu' },
		nested: [],
		component: MenuScreen,
		isProtected: false,
	},
	{
		name: 'Profile',
		options: { title: 'Profile' },
		nested: [],
		component: ProfileScreen,
		isProtected: false,
	},
	{
		name: 'Login',
		options: { title: 'Login to your account' },
		nested: [],
		component: LoginScreen,
		isProtected: false,
	},
	{
		name: 'Register',
		options: { title: 'Register new account' },
		nested: [],
		component: RegisterScreen,
		isProtected: false,
	},
	{
		name: 'AddExpense',
		options: { title: 'Add user expense' },
		nested: [],
		component: AddExpense,
		isProtected: false,
	},
	{
		name: 'AddIncome',
		options: { title: 'Add user income' },
		nested: [],
		component: AddIncome,
		isProtected: false,
	},
	{
		name: 'Analytics',
		options: { title: 'show Analytics' },
		nested: [],
		component: Analytics,
		isProtected: false,
	},
	{
		name: 'CurrencyConverter',
		options: { title: 'show CurrencyConverter' },
		nested: [],
		component: CurrencyConverter,
		isProtected: false,
	},
	{
		name: 'ExchangeRates',
		options: { title: 'show ExchangeRates' },
		nested: [],
		component: ExchangeRates,
		isProtected: false,
	},
	{
		name: 'News',
		options: { title: 'show News' },
		nested: [],
		component: News,
		isProtected: false,
	},
	{
		name: 'InflationMonitor',
		options: { title: 'show InflationMonitor' },
		nested: [],
		component: InflationMonitor,
		isProtected: false,
	},
	{
		name: 'updateProfile',
		options: { title: 'updateProfile' },
		nested: [],
		component: ProfileDataUpdateScreen,
		isProtected: false,
	}
];