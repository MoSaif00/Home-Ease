import * as WebBrowser from 'expo-web-browser';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import loginImage from '../../../assets/images/login.png';
import Colors from '@/constants/Colors';
import { useWarmUpBrowser } from '@/app/hooks/useWarmUpBrowser';
import { useCallback } from 'react';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    useWarmUpBrowser();
    const router = useRouter();
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

    const onPress = useCallback(async () => {
        try {
            const { createdSessionId, setActive } = await startOAuthFlow();

            if (createdSessionId) {
                await setActive!({ session: createdSessionId });
                // Navigate to index (main entry point)
                router.replace('/');
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    }, []);

    return (
        <View style={styles.container}>
            <Image source={loginImage} style={styles.loginImage} />
            <View style={styles.subContainer}>
                <Text style={styles.headerText}>
                    Let's Find <Text style={styles.boldText}>
                        Professional Cleaning and Repair
                    </Text> Services
                </Text>
                <Text style={styles.subText}>
                    Best App to find services near you which deliver professional service
                </Text>

                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Let's Get Started</Text>
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
    buttonText: {
        textAlign: 'center',
        fontSize: 17,
        color: Colors.PRIMARY
    }
});