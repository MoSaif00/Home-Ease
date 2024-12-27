import * as WebBrowser from 'expo-web-browser';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import loginImage from '../../../assets/images/login.png';
import Colors from '@/constants/Colors';
import { useWarmUpBrowser } from '@/app/hooks/useWarmUpBrowser';
import { useCallback } from 'react';
import * as Linking from 'expo-linking';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();


export default function Login() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

    const onPress = useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
                redirectUrl: Linking.createURL('/', { scheme: 'myapp' }),
            });

            // If sign in was successful, set the active session
            if (createdSessionId) {
                setActive!({ session: createdSessionId });
            } else {
                // Use signIn or signUp returned from startOAuthFlow
                // for next steps, such as MFA
            }
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2));
        }
    }, []);



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

                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.buttonText}>
                        Let's Get Started
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
        marginTop: 40
    },
    // googleButton: {
    //     backgroundColor: '#4285F4',
    //     marginTop: 10
    // },
    buttonText: {
        textAlign: 'center',
        fontSize: 17,
        color: Colors.PRIMARY
    }
});