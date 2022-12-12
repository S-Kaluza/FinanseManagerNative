import React, { PropsWithChildren } from 'react';
import { IAuthInterface } from './authContext.types';
import useAuthProvider from './useAuthProvider';

export const authContext = React.createContext<IAuthInterface>({} as IAuthInterface);

function AuthProvider({ children }: PropsWithChildren) {
	const data = useAuthProvider();
	return (
		<authContext.Provider value={data}>
			{children}
		</authContext.Provider>
	);
}

export default AuthProvider;
