import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fakeJob } from "../../utils/faker";
import { Job } from "../../model/Job";

const jobSlice = createSlice({
  name: "job",
  initialState: fakeJob,
  reducers: {
    changeStatus: (state, payload: PayloadAction<Job>) => {
      const payloadJob = payload.payload
      for (let i = 0; i < state.length; i++) {
        const item = state[i]
        if(item.id === payloadJob.id) {
          item.status = payloadJob.status
        }
      }
      return state
    }
  },
});

export const { changeStatus } = jobSlice.actions;

export default jobSlice;
