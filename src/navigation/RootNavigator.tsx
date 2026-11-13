import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';

export default function RootNavigator() {
    // TODO: Add authentication state management
    const isAuthenticated = false;

    return (
        <NavigationContainer>
            {isAuthenticated ? (
                // TODO: Add main app navigator here
                <></>
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    );
}
