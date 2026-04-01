export type Member = {
  id: number;
  name: string;
  risk: string;
  initial: string;
  attendance: (boolean | string | null)[];
  fails: string;
  color: string;
};

export type QueueItem = {
  name: string;
  wait: string;
  tag: string | null;
  color: string;
};
