import AuthProvider from './src/providers/AuthProvider/AuthProvider';
import DataProvider from './src/providers/DataProvider/DataProvider';
import { QueryClientProvider } from 'react-query';
import queryClient from './src/api/queryClient'; 
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import './src/locale/i18n';

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
