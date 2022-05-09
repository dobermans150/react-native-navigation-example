import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signin' }
    | { type: 'logout' }
    | { type: 'changeUser', payload: string }
    | { type: 'changeFavIcon', payload: string };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signin':
            return {
                ...state,
                isLoggeedIn: true,
                username: 'no-username-yet',
            };
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };

        case 'logout':
            return {
                isLoggeedIn: false,
            };
        case 'changeUser':
            return {
                ...state,
                username: action.payload,
            };

        default:
            return state;
    }


};

