import React from "react";
import { Button, SafeAreaView, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import { NavigationRef } from "../../../App";
import useAuth from "../../hooks/useAuth";
import AppText from "../../components/AppText/AppText";
import PressView from "../../components/PressView/PressView";
import { unit18, unit40 } from "../../utils/appUnit";

const LoginScreen: React.FC = () => {
  const { signIn } = useAuth();
  return <SafeAreaView
    style={[AppStyles.safeAreaContainer, {
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: unit18,
    }]}>
    <AppText
      style={{
        fontSize: unit18,
        marginTop: unit40,
      }}
      fontType={"medium"}>
      Đăng nhập
    </AppText>

    <Button
      onPress={
        () => {
          signIn({
            user: {
              username: "Hedspi UI",
            },
          });
        }
      }
      title={"Đăng nhập với tài khoản test"} />

    <View style={[AppStyles.alignRow, {}]}>
      <AppText>
        Không có tài khoản?
      </AppText>

      <PressView
        onPress={
          () => {
            NavigationRef.current?.navigate("RegisterScreen");
          }
        }>
        <AppText
          style={{
            textDecorationLine: "underline",
          }}>Tạo mới</AppText>
      </PressView>
    </View>

  </SafeAreaView>;
};

export default LoginScreen;
