export const issuesOverview = {
  total: { value: 320, diff: -5.2 },
  open: { value: 130, diff: 3.5 },
  closed: { value: 190, diff: 20 },
  owned: { value: 35, diff: 12.4 }
};

export interface ITimeData {
  date: number;
  value: number;
};

export function generateRandomTimeline(days: number): Array<ITimeData> {
  days = days || 30;

  var data = [];
  var startDate = new Date(2016, 0, 1).getTime();

  for (var i = 0; i < days; i++) {
    data.push({
      date: startDate + i * 86400000, // add days
      value: Math.round(Math.random() * 30)
    });
  }

  return data;
};
