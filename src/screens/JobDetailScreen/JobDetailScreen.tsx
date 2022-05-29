import React from "react";
import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { NavigationRef, RootStackParamList } from "../../../App";
import useJob from "../../hooks/useJob";
import { Button, SafeAreaView, ScrollView, StyleSheet, TextInput } from "react-native";
import AppStyles from "../../styles/AppStyles";
import AppText from "../../components/AppText/AppText";
import useAuth from "../../hooks/useAuth";
import { unit12, unit14, unit16, unit18, unit20, unit8 } from "../../utils/appUnit";
import AppColors from "../../styles/AppColors";
import { showToastMsg } from "../../utils/Toaster";

type JobDetailScreenRouteProp = RouteProp<RootStackParamList, "JobDetailScreen">;

const JobDetailScreen: React.FC = () => {
  const { params } = useRoute<JobDetailScreenRouteProp>();
  const { jobId } = params;
  const { authData } = useAuth();
  const { user } = authData;
  const { allJob, changeStatusJob } = useJob();

  const job = allJob.find((_item) => {
    return _item.id === jobId;
  });

  function handleSubmit() {
    if (!job) {
      return;
    }
    changeStatusJob({
      ...job,
      status: "done",
    });
    NavigationRef?.current?.goBack();
    showToastMsg("Đã duyệt công việc " + job.name);
  }

  if (!job) {
    return null;
  }

  return <SafeAreaView
    style={[AppStyles.safeAreaContainer, {
      backgroundColor: AppColors.color_background_1,
    }]}>
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        paddingVertical: unit20,
        paddingHorizontal: unit16,
      }}
    >
      <AppText
        style={{
          fontSize: unit18,
        }}
        fontType={"medium"}>
        {job.name}
      </AppText>
      <AppText
        style={styles.text1}>Tên công nhân: {user?.username}</AppText>
      <AppText
        style={styles.text1}>Quản đốc: {"Karim Benzema"}</AppText>
      <AppText
        style={styles.text1}>Ngày giao việc <AppText>{job.startDate}</AppText></AppText>
      <AppText
        style={styles.text1}>Hạn chót <AppText>{job.deadline}</AppText></AppText>
      <AppText
        style={styles.text1}>Ý kiến đến quản đốc</AppText>

      <TextInput
        placeholder={"Ý kiến"}
        style={{
          borderWidth: 1,
          borderColor: AppColors.color_divider_1,
          borderRadius: unit8,
          padding: unit12,
        }} />

      <AppText>Tải ảnh minh chứng</AppText>

      <Button title={"Hoàn thành & Gửi quản đốc"} onPress={handleSubmit} />
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  text1: {
    color: AppColors.color_text_2,
    fontSize: unit14,
  },
});

export default JobDetailScreen;
