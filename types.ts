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

export type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
  userId: number;
};