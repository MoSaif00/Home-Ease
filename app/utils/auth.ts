import * as WebBrowser from 'expo-web-browser';
import { useCallback } from 'react';
import { useOAuth } from '@clerk/clerk-expo';
import { Alert } from 'react-native';
import * as Linking from 'expo-linking';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ 
    strategy: "oauth_google",
    redirectUrl: Linking.createURL('oauth-native-callback')
  });

  const onPress = useCallback(async () => {
    try {
      const result = await startOAuthFlow();
      
      if (result?.createdSessionId && result?.setActive) {
        // Only call setActive if both createdSessionId and setActive are available
        await result.setActive({ session: result.createdSessionId });
      } else {
        // Handle the case where the flow was cancelled or incomplete
        console.log('OAuth flow was not completed');
        Alert.alert("Sign in failed", "Please try again.");
      }
    } catch (err) {
      console.error("OAuth error:", err);
      Alert.alert(
        "Authentication Error",
        "An error occurred during sign in. Please try again.",
        [{ text: "OK" }]
      );
    }
  }, [startOAuthFlow]);

  return { onPress };
}