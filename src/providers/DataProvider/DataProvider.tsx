import React, { PropsWithChildren } from 'react';
import { IDataInterface } from './dataContext.types';
import useDataProvider from './useDataProvider';

export const dataContext = React.createContext<IDataInterface>({} as IDataInterface);

function DataProvider({ children }: PropsWithChildren) {
	const data = useDataProvider();
	return (
		<dataContext.Provider value={data}>
			{children}
		</dataContext.Provider>
	);
}

export default DataProvider;
