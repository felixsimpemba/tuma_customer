import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';
import { theme } from '../../theme';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

interface Props {
    navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: Props) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: Implement login API call
        console.log('Login with:', phoneNumber, password);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                        placeholderTextColor={theme.colors.placeholder}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor={theme.colors.placeholder}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkButton}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.linkText}>
                            Don't have an account? <Text style={styles.linkTextBold}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: theme.spacing.l,
    },
    title: {
        fontSize: theme.typography.header.fontSize,
        fontWeight: theme.typography.header.fontWeight,
        color: theme.colors.text,
        marginBottom: theme.spacing.m,
    },
    subtitle: {
        fontSize: theme.typography.body.fontSize,
        color: theme.colors.textSecondary,
        marginBottom: 40,
    },
    form: {
        width: '100%',
    },
    input: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.l,
        padding: theme.spacing.m,
        fontSize: theme.typography.body.fontSize,
        marginBottom: theme.spacing.m,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.l,
        padding: theme.spacing.m,
        alignItems: 'center',
        marginTop: theme.spacing.s,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.typography.button.fontSize,
        fontWeight: theme.typography.button.fontWeight,
    },
    linkButton: {
        marginTop: theme.spacing.m,
        alignItems: 'center',
    },
    linkText: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.caption.fontSize,
    },
    linkTextBold: {
        color: theme.colors.primary,
        fontWeight: '600',
    },
});
