import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/LoginScreen/Login";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <SignedIn>
        <Text>You are signed in </Text>
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