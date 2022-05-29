import { useAppDispatch, useAppSelector } from "../store/store";
import { Job } from "../model/Job";
import { changeStatus } from "../store/slice/jobSlice";

export default function useJob() {
  const dispatch = useAppDispatch();
  const jobData = useAppSelector(state => state.job);

  const doneJob = jobData.filter((_job) => {
    return _job.status === "done";
  });

  const todoJob = jobData.filter((_job) => {
    return _job.status === "todo";
  });

  return {
    changeStatusJob: (job: Job) => {
      dispatch(changeStatus(job));
    },
    doneJob,
    todoJob,
    allJob: jobData
  };
}
