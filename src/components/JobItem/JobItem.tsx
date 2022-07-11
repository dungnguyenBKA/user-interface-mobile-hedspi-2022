import React from "react";
import { getStatusFromJob, Job } from "../../model/Job";
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
      if (job.status === "Submitted") {
        changeStatusJob({
          ...job,
          status: "New",
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
        color: job.status === "New" ? AppColors.color_18DC18: AppColors.color_E6361F,
      }}>
      {
        getStatusFromJob(job)
      }
    </AppText>
  </PressView>;
};

export default JobItem;
