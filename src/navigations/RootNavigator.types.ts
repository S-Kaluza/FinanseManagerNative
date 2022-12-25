import { ReactElement } from 'react';

export interface navRoutingOptions {
    title: string;
}

export type Navigation = {
	navigate: (routeName: string, params?: { [key: string]: any }) => void;
	goBack: () => void;
	state: {
		routeName: string;
		params: {screen: ReactElement};
	}
}

export type BottomTabScreenPropsWithNavigation = {
	navigation: Navigation;
}
export interface INavRouting {
    name: string;
	options: navRoutingOptions;
	nested: INavRouting[],
	component: (() => JSX.Element) | (({ navigation } : BottomTabScreenPropsWithNavigation) => JSX.Element),
	isProtected: boolean,
}

