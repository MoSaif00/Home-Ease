import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import loginImage from '../../../assets/images/login.png';
import Colors from '@/constants/Colors';
import { Link, router } from 'expo-router';
import { useGoogleAuth } from '@/app/utils/auth';

export default function Login() {
    const { onPress: onGooglePress } = useGoogleAuth();

    const handleEmailSignIn = () => {
        router.push("/(auth)/sign-in");
    };

    return (
        <View style={styles.container}>
            <Image
                source={loginImage}
                style={styles.loginImage}
            />
            <View style={styles.subContainer}>
                <Text style={styles.headerText}>
                    Let's Find <Text style={styles.boldText}>
                        Professional Cleaning and Repair
                    </Text> Services
                </Text>
                <Text style={styles.subText}>
                    Best App to find services near you which deliver professional service
                </Text>

                {/* Email Sign In Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleEmailSignIn}
                >
                    <Text style={styles.buttonText}>
                        Sign in with Email
                    </Text>
                </TouchableOpacity>

                {/* Google Sign In Button */}
                <TouchableOpacity
                    style={[styles.button, styles.googleButton]}
                    onPress={onGooglePress}
                >
                    <Text style={[styles.buttonText, { color: Colors.WHITE }]}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    subContainer: {
        width: '100%',
        height: '70%',
        backgroundColor: Colors.PRIMARY,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 15,
    },
    headerText: {
        fontSize: 27,
        color: Colors.WHITE,
        textAlign: 'center'
    },
    boldText: {
        fontWeight: 'bold'
    },
    subText: {
        color: Colors.WHITE,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 17
    },
    button: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 20
    },
    googleButton: {
        backgroundColor: '#4285F4',
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 17,
        color: Colors.PRIMARY
    }
});