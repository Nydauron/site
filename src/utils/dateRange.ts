export const getDateRangeString = (range: DateRange): string => {
  if (!range.end) {
    // Currently working
    return `${range.start.trim()} - Current`;
  }

  const start = range.start.trim();
  const end = range.end.trim();
  if (start === end) {
    return start;
  }

  return `${start} - ${end}`;
};
