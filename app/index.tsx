import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/LoginScreen/Login";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { StatusBar } from "expo-status-bar";
import TabsNav from "./Navigation/TabsNav";
import { useFonts } from "expo-font";

export default function Index() {
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={styles.container}
    >
      <SignedIn>
        <TabsNav />
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28, // Adjust later according to screen optimal heights
  }
});