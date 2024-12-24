import { tokenCache } from "@/cache";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

// This is the main layout of your app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <InitialLayout />
    </ClerkProvider>
  );
};

// This component handles the initial routing
function InitialLayout() {
  // const { isLoaded, isSignedIn } = useAuth();
  // const segments = useSegments();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isLoaded) return;

  //   const inTabsGroup = segments[0] === '(tabs)';

  //   if (isSignedIn && !inTabsGroup) {
  //     // Redirect signed in users to the home page
  //     router.replace('/(tabs)/home');
  //   } else if (!isSignedIn) {
  //     // Redirect signed out users to the sign in page
  //     router.replace('/');
  //   }
  // }, [isSignedIn, segments]);

  return <Slot />;
}

export default RootLayout;