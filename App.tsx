import AuthProvider from './src/providers/AuthProvider/AuthProvider';
import DataProvider from './src/providers/DataProvider/DataProvider';
import { QueryClientProvider } from 'react-query';
import queryClient from './src/api/queryClient'; 
import React from 'react';
import RootNavigator from './src/navigations/RootNavigator';
import './src/i18n';

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<DataProvider>
					<RootNavigator />
				</DataProvider>
			</AuthProvider>
		</QueryClientProvider>
	);
}
