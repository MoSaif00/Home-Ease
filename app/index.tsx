import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/LoginScreen/Login";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { StatusBar } from "expo-status-bar";
import TabsNav from "./Navigation/TabsNav";

export default function Index() {
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
  }
});