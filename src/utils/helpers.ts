export const formatDate = (date: string) =>
  new Date(date).toDateString();

export const uuid = () =>
  Math.random().toString(36).substring(2, 10);
