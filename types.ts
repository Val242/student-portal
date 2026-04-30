import { IconType } from "./components/profile/Activities";

export type Activity = {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: IconType;
  classId: number;
};

export type Achievement = {
  id: number;
  title: string;
  date: string;
  description: string;
  userId: number;
};