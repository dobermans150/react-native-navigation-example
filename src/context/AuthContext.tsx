// Definir como luce, que informacion tendre aqui
import React, { FC, useReducer } from 'react';
import { createContext } from 'react';
import { authReducer } from './AuthReducer';

export interface AuthState {
    isLoggeedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}


// Estado inicial

export const authInitialState: AuthState = {
    isLoggeedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavIcon: (iconName: string) => void;
    changeUser: (username: string) => void;
}


// Crear el contexto
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

// componente que es proveedor del estado
type Props = {
    children: JSX.Element[];
}

export const AuthProvider: FC<Props> = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signin' });
    };

    const changeFavIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    };

    const logOut = () => {
        dispatch({ type: 'logout' });
    };

    const changeUser = (username: string) => {
        dispatch({ type: 'changeUser', payload: username });
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                logOut,
                changeFavIcon,
                changeUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
