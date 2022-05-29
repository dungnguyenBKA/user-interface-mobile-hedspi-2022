export interface Job {
  status: "done" | "todo",
  deadline: string,
  startDate: string,
  name: string,
  id: number,
}
