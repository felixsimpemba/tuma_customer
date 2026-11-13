import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../types/navigation';

type OTPVerificationScreenNavigationProp = NativeStackNavigationProp<
    AuthStackParamList,
    'OTPVerification'
>;

type OTPVerificationScreenRouteProp = RouteProp<AuthStackParamList, 'OTPVerification'>;

interface Props {
    navigation: OTPVerificationScreenNavigationProp;
    route: OTPVerificationScreenRouteProp;
}

export default function OTPVerificationScreen({ navigation, route }: Props) {
    const { phoneNumber } = route.params;
    const [otp, setOtp] = useState('');

    const handleVerify = () => {
        // TODO: Implement OTP verification API call
        console.log('Verify OTP:', otp, 'for phone:', phoneNumber);
    };

    const handleResend = () => {
        // TODO: Implement resend OTP API call
        console.log('Resend OTP to:', phoneNumber);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Verify Your Number</Text>
                <Text style={styles.subtitle}>
                    We sent a code to {phoneNumber}
                </Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.otpInput}
                        placeholder="Enter OTP"
                        value={otp}
                        onChangeText={setOtp}
                        keyboardType="number-pad"
                        maxLength={6}
                        placeholderTextColor="#999"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleVerify}>
                        <Text style={styles.buttonText}>Verify</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton} onPress={handleResend}>
                        <Text style={styles.linkText}>
                            Didn't receive code? <Text style={styles.linkTextBold}>Resend</Text>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.linkText}>Change phone number</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
    },
    form: {
        width: '100%',
    },
    otpInput: {
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        padding: 16,
        fontSize: 24,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        textAlign: 'center',
        letterSpacing: 8,
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    linkButton: {
        marginTop: 16,
        alignItems: 'center',
    },
    linkText: {
        color: '#666',
        fontSize: 14,
    },
    linkTextBold: {
        color: '#007AFF',
        fontWeight: '600',
    },
});
