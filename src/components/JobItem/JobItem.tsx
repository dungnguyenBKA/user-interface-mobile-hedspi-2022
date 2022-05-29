import React from "react";
import { Job } from "../../model/Job";
import AppText from "../AppText/AppText";
import { unit12, unit13, unit16 } from "../../utils/appUnit";
import AppColors from "../../styles/AppColors";
import PressView from "../PressView/PressView";
import useJob from "../../hooks/useJob";
import { NavigationRef } from "../../../App";
import { showToastMsg } from "../../utils/Toaster";

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = (props) => {
  const { job } = props;
  const { changeStatusJob } = useJob();
  return <PressView
    onPress={() => {
      if (job.status === "done") {
        changeStatusJob({
          ...job,
          status: "todo",
        });
        showToastMsg("Đã hoàn tác lại công việc " + job.name);
      } else {
        NavigationRef?.current?.navigate("JobDetailScreen", {
          jobId: job.id,
        });
      }
    }}
    style={{
      padding: unit12,
      borderWidth: 1,
      borderColor: AppColors.color_divider_1,
      borderRadius: unit16,
      backgroundColor: AppColors.color_background_1,
    }}>
    <AppText
      style={{
        fontSize: unit13,
      }}
      fontType={"medium"}>
      {job.name}
    </AppText>
    <AppText
      fontType={"medium"}
      style={{
        color: job.status === "todo" ? AppColors.color_E6361F : AppColors.color_18DC18,
      }}>
      {job.status === "done" ? "Đã duyệt" : "Đang chờ duyệt"}
    </AppText>
  </PressView>;
};

export default JobItem;
