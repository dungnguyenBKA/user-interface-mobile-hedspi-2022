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
import { Job } from "../../model/Job";

type HomeTopTabParamList = {
  NewJobTab: undefined,
  ApprovedJobTab: undefined,
  SubmittedJobTab: undefined,
  NeedToChangeJobTab: undefined,
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
          title: "Công việc vừa được giao",
        }}
        name="NewJobTab"
        component={NewJobTab} />

      <Tab.Screen
        options={{
          title: "Công việc đã được phê duyệt",
        }}
        name="ApprovedJobTab"
        component={ApprovedJobTab} />

      <Tab.Screen
        options={{
          title: "Đã nộp minh chứng",
        }}
        name="SubmittedJobTab"
        component={SubmittedJobTab} />

      <Tab.Screen
        options={{
          title: "Cần thay đổi",
        }}
        name="NeedToChangeJobTab"
        component={NeedToChangeTab} />
    </Tab.Navigator>
  </SafeAreaView>;
};


interface BaseJobTabProps {
  jobs: Job[];
}

const BaseJobTab: React.FC<BaseJobTabProps> = (props) => {
  const { jobs } = props;
  return <View style={AppStyles.container}>
    <FlatList
      ItemSeparatorComponent={() => <View style={{ height: unit16 }} />}
      contentContainerStyle={{
        paddingHorizontal: unit16,
        paddingVertical: unit20,
        backgroundColor: AppColors.color_background_3,
      }}
      data={jobs}
      renderItem={({ item }) => {
        return <JobItem job={item} />;
      }} />
  </View>;
};

const ApprovedJobTab: React.FC = () => {
  const { approvedJob } = useJob();
  return <BaseJobTab jobs={approvedJob} />;
};

const NewJobTab: React.FC = () => {
  const { newJob } = useJob();
  return <BaseJobTab jobs={newJob} />;
};

const SubmittedJobTab: React.FC = () => {
  const { submittedJob } = useJob();
  return <BaseJobTab jobs={submittedJob} />;
};

const NeedToChangeTab: React.FC = () => {
  const { needToChangeJob } = useJob();
  return <BaseJobTab jobs={needToChangeJob} />;
};

export default HomeScreen;
