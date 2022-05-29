import { Job } from "../model/Job";

export const fakeJob = genJob();

function genJob(): Job[] {
  const jobs: Job[] = [];
  const startDate = new Date()
  const deadline = new Date("26/05/2023")
  for (let i = 0; i < 20; i++) {
    jobs.push({
      id: i,
      name: "Job " + i,
      deadline: deadline.toLocaleDateString(),
      startDate: startDate.toLocaleDateString(),
      status: i < 10 ? "done" : "todo",
    });
  }
  return jobs;
}
