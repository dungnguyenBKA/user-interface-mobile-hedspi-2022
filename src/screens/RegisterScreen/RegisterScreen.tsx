import React, { useState } from "react";
import { Button, SafeAreaView, useWindowDimensions, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import AppBar from "../../components/AppBar/AppBar";
import ValidateEditText from "../../components/ValidateEditText/ValidateEditText";
import { nameLengthValidFn, nameValidFn } from "../../components/ValidateEditText/ValidateFunctions";
import useAuth from "../../hooks/useAuth";
import AppColors from "../../styles/AppColors";
import { unit12, unit32, unit8, unit9 } from "../../utils/appUnit";

const RegisterScreen: React.FC = () => {
  const [registerName, setRegisterName] = useState("");
  const [isValid, setValid] = useState(false);
  const {width} = useWindowDimensions()
  const { signIn } = useAuth();
  return <SafeAreaView
    style={AppStyles.container}>
    <AppBar
      title={"Đăng ký"} />
    <View style={AppStyles.centerContainer}>
      <ValidateEditText
        style={{
          borderWidth: 1,
          borderColor: AppColors.color_divider_1,
          borderRadius: unit8,
          paddingHorizontal: unit12,
          paddingVertical: unit9,
          marginBottom: unit12,
          width: width - unit32
        }}
        placeholder={"Nhập tên bạn"}
        setValid={setValid}
        checkValidFunctions={[nameValidFn, nameLengthValidFn]}
        textValue={registerName}
        setValue={setRegisterName} />
      <Button
        disabled={!isValid}
        onPress={
          () => {
            signIn({
              user: {
                username: registerName,
              },
            });
          }
        }
        title={"Register"}
      />
    </View>
  </SafeAreaView>;
};

export default RegisterScreen;
