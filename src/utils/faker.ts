import { Job } from "../model/Job";

export const fakeJob = genJob();

function genJob(): Job[] {
  const jobs: Job[] = [];
  const startDate = new Date()
  const deadline = new Date("26/05/2023")
  for (let i = 0; i < 40; i++) {
    jobs.push({
      id: i,
      name: getNameJob(i) + i,
      deadline: deadline.toLocaleDateString(),
      startDate: startDate.toLocaleDateString(),
      status: i < 10 ? "New" : i < 20 ? "Approved" : i < 30 ? "Submitted" : "NeedToChange",
    });
  }
  return jobs;
}

function getNameJob(index: number) : string {
  switch(index % 4) {
    case 0: {
      return "Lắp đèn ở Vincom tầng "
    }
    case 1: {
      return "Lắp chuông ở Time City phòng "
    }
    case 2: {
      return "Sửa đèn Time City phòng "
    }
    case 3: {
      return "Lắp kệ ở Vincom phòng "
    }
    default: {
      return ""
    }
  }
}
