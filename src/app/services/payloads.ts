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

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateRandomDates(numDates) {
  var dates = [];
  for (var i = 0; i < 15; i++) {
    dates.push(
      randomDate(i === 0 ?
          new Date(2010, 0, 1) :
          new Date(dates[i-1]),
        new Date()
      )
    );
  }
  return dates;
}

export const csvRawData = '1397118824518,Nike,issues@nike.com,Cannot access my data,open,,Mark\n\
1399607428366,Adidas,issues@adidas.com,Something weird happens,closed,1399866628366,John\n\
1467106945001,Nike,issues@nike.com,API access broken,closed,1467970945001,Mark\n\
1467546348630,Levis,issues@levis.com,Something does not work,open,,Mark\n\
1473361284544,Adidas,issues@adidas.com,Offers invalid in campaign,closed,1473534084544,John\n\
1473550488863,Nike,issues@nike.com,Thanks for your help,open,,John\n\
1473924727470,Levis,issues@levis.com,Please help!,closed,1474961527470,Mark\n\
1473955813281,Adidas,issues@adidas.com,I dont know what is going on,open,,Lewis\n\
1473956502014,Levis,issues@levis.com,My offers are not visible to public,open,,Mark\n\
1473956816902,Levis,issues@levis.com,Please help please!,closed,1474561616902,Lewis';
