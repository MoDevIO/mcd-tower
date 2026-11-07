function calcStage(date: Date): number {
  const startDate: Date = new Date(2022, 10, 20);
  const targetDate: Date = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  const daysDiff = Math.round(
    (targetDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000),
  );

  const weeks = Math.floor(daysDiff / 7);

  const result = ((((20 + weeks) % 29) + 29) % 29) + 2;

  return result;
}

function calcTimeUntilNextStage(date: Date): number {
  const startDate: Date = new Date(2022, 10, 20);
  const targetDate: Date = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  const daysDiff = Math.round(
    (targetDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000),
  );

  const result = daysDiff % 7 === 0 ? 0 : 7 - (daysDiff % 7);

  return result;
}
export default calcStage;
export { calcTimeUntilNextStage };
