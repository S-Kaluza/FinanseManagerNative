import { ReactElement } from 'react';

// interface that contains navigation options that is using by INavRouting interface
export interface navRoutingOptions {
    title: string;
}

// type that describe navigation that is inside props in screen like DashboardScreen, MenuScreen etc. while is need to navigate between screens
export type Navigation = {
	navigate: (routeName: string, params?: { [key: string]: any }) => void;
	goBack: () => void;
	state: {
		routeName: string;
		params: {screen: ReactElement};
	}
}

// type that describe what is inside props in screen while is need to use it
export type BottomTabScreenPropsWithNavigation = {
	navigation: Navigation;
}

// interface that contains all navigation options that is using by RootNavigator
export interface INavRouting {
    name: string;
	options: navRoutingOptions;
	nested: INavRouting[],
	component: (() => JSX.Element) | (({ navigation } : BottomTabScreenPropsWithNavigation) => JSX.Element),
	isProtected: boolean,
}

