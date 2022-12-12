export interface navRoutingOptions {
    title: string;
}

export interface INavRouting {
    name: string;
	options: navRoutingOptions;
	nested: INavRouting[],
	component: (() => JSX.Element) | (({navigate} : any) => JSX.Element),
	isProtected: boolean,
}