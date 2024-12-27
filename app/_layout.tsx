import { tokenCache } from "@/cache";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot, } from "expo-router";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;


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

function InitialLayout() {
  return <Slot />;
}

export default RootLayout;