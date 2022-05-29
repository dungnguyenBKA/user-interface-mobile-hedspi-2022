import { Platform, StatusBar, StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default AppStyles
