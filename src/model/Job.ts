export interface Job {
  status: "New" | "Approved" | "Submitted" | "NeedToChange",
  deadline: string,
  startDate: string,
  name: string,
  id: number,
}

export function getStatusFromJob(job? : Job): string {
  if(!job) {
    return ""
  }

  switch (job.status) {
    case "Approved": {
      return "Đã được phê duyệt"
    }

    case "NeedToChange": {
      return "Cần thay đổi"
    }

    case "New": {
      return "Mới"
    }

    case "Submitted": {
      return "Đã nộp"
    }

    default: {
      return ""
    }
  }
}
