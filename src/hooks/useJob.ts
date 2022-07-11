import { useAppDispatch, useAppSelector } from "../store/store";
import { Job } from "../model/Job";
import { changeStatus } from "../store/slice/jobSlice";

export default function useJob() {
  const dispatch = useAppDispatch();
  const jobData = useAppSelector(state => state.job);

  const newJob = jobData.filter((_job) => {
    return _job.status === "New";
  });

  const submittedJob = jobData.filter((_job) => {
    return _job.status === "Submitted";
  });

  const approvedJob = jobData.filter((_job) => {
    return _job.status === "Approved";
  });

  const needToChangeJob = jobData.filter((_job) => {
    return _job.status === "NeedToChange";
  });

  return {
    changeStatusJob: (job: Job) => {
      dispatch(changeStatus(job));
    },
    newJob,
    submittedJob,
    approvedJob,
    needToChangeJob,
    allJob: jobData
  };
}
