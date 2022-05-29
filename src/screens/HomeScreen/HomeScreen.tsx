import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import useAuth from "../../hooks/useAuth";
import AppText from "../../components/AppText/AppText";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { unit13, unit16, unit20 } from "../../utils/appUnit";
import PressView from "../../components/PressView/PressView";
import AppColors from "../../styles/AppColors";
import JobItem from "../../components/JobItem/JobItem";
import useJob from "../../hooks/useJob";

type HomeTopTabParamList = {
  DoneJobTab: undefined,
  AssignJobTab: undefined,
};

const Tab = createMaterialTopTabNavigator<HomeTopTabParamList>();


const HomeScreen: React.FC = () => {
  const { authData, signOut } = useAuth();
  const user = authData.user;
  return <SafeAreaView style={AppStyles.safeAreaContainer}>
    <View style={[AppStyles.alignRow, {
      padding: unit16,
      backgroundColor: "white",
    }]}>
      <AppText
        fontType={"medium"}
        style={{
          flexGrow: 1,
          color: AppColors.color_primary,
          fontSize: unit13,
        }}>Xin chào, {user?.username}</AppText>

      <PressView onPress={signOut}>
        <AppText>Đăng xuất</AppText>
      </PressView>
    </View>

    <Tab.Navigator screenOptions={{
      tabBarContentContainerStyle: {
        backgroundColor: "white",
      },
    }}>
      <Tab.Screen
        options={{
          title: "Công việc đã được phê duyệt",
        }}
        name="DoneJobTab"
        component={DoneJobTab} />
      <Tab.Screen
        options={{
          title: "Công việc vừa được giao",
        }}
        name="AssignJobTab"
        component={TodoJobTab} />
    </Tab.Navigator>
  </SafeAreaView>;
};


const DoneJobTab: React.FC = () => {
  const { doneJob } = useJob();
  return <View style={AppStyles.container}>
    <FlatList
      ItemSeparatorComponent={() => <View style={{ height: unit16 }} />}
      contentContainerStyle={{
        paddingHorizontal: unit16,
        paddingVertical: unit20,
        backgroundColor: AppColors.color_background_3,
      }}
      data={doneJob}
      renderItem={({ item }) => {
        return <JobItem job={item} />;
      }} />
  </View>;
};

const TodoJobTab: React.FC = () => {
  const { todoJob } = useJob();
  return <View style={AppStyles.container}>
    <FlatList
      ItemSeparatorComponent={() => <View style={{ height: unit16 }} />}
      contentContainerStyle={{
        paddingHorizontal: unit16,
        paddingVertical: unit20,
        backgroundColor: AppColors.color_background_3,
      }}
      data={todoJob}
      renderItem={({ item }) => {
        return <JobItem job={item} />;
      }} />
  </View>;
};


export default HomeScreen;
