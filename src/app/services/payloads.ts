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

// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }
//
// function generateRandomDates(numDates) {
//   var dates = [];
//   for (var i = 0; i < 15; i++) {
//     dates.push(
//       randomDate(i === 0 ?
//           new Date(2010, 0, 1) :
//           new Date(dates[i-1]),
//         new Date()
//       )
//     );
//   }
//   return dates;
// }

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

export const mapData = [
  { 'hc-key': 'fo', 'value': 0 },
  { 'hc-key': 'um', 'value': 1 },
  { 'hc-key': 'us', 'value': 2 },
  { 'hc-key': 'jp', 'value': 3 },
  { 'hc-key': 'sc', 'value': 4 },
  { 'hc-key': 'in', 'value': 5 },
  { 'hc-key': 'fr', 'value': 6 },
  { 'hc-key': 'fm', 'value': 7 },
  { 'hc-key': 'cn', 'value': 8 },
  { 'hc-key': 'pt', 'value': 9 },
  { 'hc-key': 'sw', 'value': 10 },
  { 'hc-key': 'sh', 'value': 11 },
  { 'hc-key': 'br', 'value': 12 },
  { 'hc-key': 'ki', 'value': 13 },
  { 'hc-key': 'ph', 'value': 14 },
  { 'hc-key': 'mx', 'value': 15 },
  { 'hc-key': 'es', 'value': 16 },
  { 'hc-key': 'bu', 'value': 17 },
  { 'hc-key': 'mv', 'value': 18 },
  { 'hc-key': 'sp', 'value': 19 },
  { 'hc-key': 'gb', 'value': 20 },
  { 'hc-key': 'gr', 'value': 21 },
  { 'hc-key': 'as', 'value': 22 },
  { 'hc-key': 'dk', 'value': 23 },
  { 'hc-key': 'gl', 'value': 24 },
  { 'hc-key': 'gu', 'value': 25 },
  { 'hc-key': 'mp', 'value': 26 },
  { 'hc-key': 'pr', 'value': 27 },
  { 'hc-key': 'vi', 'value': 28 },
  { 'hc-key': 'ca', 'value': 29 },
  { 'hc-key': 'st', 'value': 30 },
  { 'hc-key': 'cv', 'value': 31 },
  { 'hc-key': 'dm', 'value': 32 },
  { 'hc-key': 'nl', 'value': 33 },
  { 'hc-key': 'jm', 'value': 34 },
  { 'hc-key': 'ws', 'value': 35 },
  { 'hc-key': 'om', 'value': 36 },
  { 'hc-key': 'vc', 'value': 37 },
  { 'hc-key': 'tr', 'value': 38 },
  { 'hc-key': 'bd', 'value': 39 },
  { 'hc-key': 'lc', 'value': 40 },
  { 'hc-key': 'nr', 'value': 41 },
  { 'hc-key': 'no', 'value': 42 },
  { 'hc-key': 'kn', 'value': 43 },
  { 'hc-key': 'bh', 'value': 44 },
  { 'hc-key': 'to', 'value': 45 },
  { 'hc-key': 'fi', 'value': 46 },
  { 'hc-key': 'id', 'value': 47 },
  { 'hc-key': 'mu', 'value': 48 },
  { 'hc-key': 'se', 'value': 49 },
  { 'hc-key': 'tt', 'value': 50 },
  { 'hc-key': 'my', 'value': 51 },
  { 'hc-key': 'pa', 'value': 52 },
  { 'hc-key': 'pw', 'value': 53 },
  { 'hc-key': 'tv', 'value': 54 },
  { 'hc-key': 'mh', 'value': 55 },
  { 'hc-key': 'cl', 'value': 56 },
  { 'hc-key': 'th', 'value': 57 },
  { 'hc-key': 'gd', 'value': 58 },
  { 'hc-key': 'ee', 'value': 59 },
  { 'hc-key': 'ag', 'value': 60 },
  { 'hc-key': 'tw', 'value': 61 },
  { 'hc-key': 'bb', 'value': 62 },
  { 'hc-key': 'it', 'value': 63 },
  { 'hc-key': 'mt', 'value': 64 },
  { 'hc-key': 'vu', 'value': 65 },
  { 'hc-key': 'sg', 'value': 66 },
  { 'hc-key': 'cy', 'value': 67 },
  { 'hc-key': 'lk', 'value': 68 },
  { 'hc-key': 'km', 'value': 69 },
  { 'hc-key': 'fj', 'value': 70 },
  { 'hc-key': 'ru', 'value': 71 },
  { 'hc-key': 'va', 'value': 72 },
  { 'hc-key': 'sm', 'value': 73 },
  { 'hc-key': 'kz', 'value': 74 },
  { 'hc-key': 'az', 'value': 75 },
  { 'hc-key': 'tj', 'value': 76 },
  { 'hc-key': 'ls', 'value': 77 },
  { 'hc-key': 'uz', 'value': 78 },
  { 'hc-key': 'ma', 'value': 79 },
  { 'hc-key': 'co', 'value': 80 },
  { 'hc-key': 'tl', 'value': 81 },
  { 'hc-key': 'tz', 'value': 82 },
  { 'hc-key': 'ar', 'value': 83 },
  { 'hc-key': 'sa', 'value': 84 },
  { 'hc-key': 'pk', 'value': 85 },
  { 'hc-key': 'ye', 'value': 86 },
  { 'hc-key': 'ae', 'value': 87 },
  { 'hc-key': 'ke', 'value': 88 },
  { 'hc-key': 'pe', 'value': 89 },
  { 'hc-key': 'do', 'value': 90 },
  { 'hc-key': 'ht', 'value': 91 },
  { 'hc-key': 'pg', 'value': 92 },
  { 'hc-key': 'ao', 'value': 93 },
  { 'hc-key': 'kh', 'value': 94 },
  { 'hc-key': 'vn', 'value': 95 },
  { 'hc-key': 'mz', 'value': 96 },
  { 'hc-key': 'cr', 'value': 97 },
  { 'hc-key': 'bj', 'value': 98 },
  { 'hc-key': 'ng', 'value': 99 },
  { 'hc-key': 'ir', 'value': 100 },
  { 'hc-key': 'sv', 'value': 101 },
  { 'hc-key': 'sl', 'value': 102 },
  { 'hc-key': 'gw', 'value': 103 },
  { 'hc-key': 'hr', 'value': 104 },
  { 'hc-key': 'bz', 'value': 105 },
  { 'hc-key': 'za', 'value': 106 },
  { 'hc-key': 'cf', 'value': 107 },
  { 'hc-key': 'sd', 'value': 108 },
  { 'hc-key': 'cd', 'value': 109 },
  { 'hc-key': 'kw', 'value': 110 },
  { 'hc-key': 'de', 'value': 111 },
  { 'hc-key': 'be', 'value': 112 },
  { 'hc-key': 'ie', 'value': 113 },
  { 'hc-key': 'kp', 'value': 114 },
  { 'hc-key': 'kr', 'value': 115 },
  { 'hc-key': 'gy', 'value': 116 },
  { 'hc-key': 'hn', 'value': 117 },
  { 'hc-key': 'mm', 'value': 118 },
  { 'hc-key': 'ga', 'value': 119 },
  { 'hc-key': 'gq', 'value': 120 },
  { 'hc-key': 'ni', 'value': 121 },
  { 'hc-key': 'lv', 'value': 122 },
  { 'hc-key': 'ug', 'value': 123 },
  { 'hc-key': 'mw', 'value': 124 },
  { 'hc-key': 'am', 'value': 125 },
  { 'hc-key': 'sx', 'value': 126 },
  { 'hc-key': 'tm', 'value': 127 },
  { 'hc-key': 'zm', 'value': 128 },
  { 'hc-key': 'nc', 'value': 129 },
  { 'hc-key': 'mr', 'value': 130 },
  { 'hc-key': 'dz', 'value': 131 },
  { 'hc-key': 'lt', 'value': 132 },
  { 'hc-key': 'et', 'value': 133 },
  { 'hc-key': 'er', 'value': 134 },
  { 'hc-key': 'gh', 'value': 135 },
  { 'hc-key': 'si', 'value': 136 },
  { 'hc-key': 'gt', 'value': 137 },
  { 'hc-key': 'ba', 'value': 138 },
  { 'hc-key': 'jo', 'value': 139 },
  { 'hc-key': 'sy', 'value': 140 },
  { 'hc-key': 'mc', 'value': 141 },
  { 'hc-key': 'al', 'value': 142 },
  { 'hc-key': 'uy', 'value': 143 },
  { 'hc-key': 'cnm', 'value': 144 },
  { 'hc-key': 'mn', 'value': 145 },
  { 'hc-key': 'rw', 'value': 146 },
  { 'hc-key': 'so', 'value': 147 },
  { 'hc-key': 'bo', 'value': 148 },
  { 'hc-key': 'cm', 'value': 149 },
  { 'hc-key': 'cg', 'value': 150 },
  { 'hc-key': 'eh', 'value': 151 },
  { 'hc-key': 'rs', 'value': 152 },
  { 'hc-key': 'me', 'value': 153 },
  { 'hc-key': 'tg', 'value': 154 },
  { 'hc-key': 'la', 'value': 155 },
  { 'hc-key': 'af', 'value': 156 },
  { 'hc-key': 'ua', 'value': 157 },
  { 'hc-key': 'sk', 'value': 158 },
  { 'hc-key': 'jk', 'value': 159 },
  { 'hc-key': 'bg', 'value': 160 },
  { 'hc-key': 'qa', 'value': 161 },
  { 'hc-key': 'li', 'value': 162 },
  { 'hc-key': 'at', 'value': 163 },
  { 'hc-key': 'sz', 'value': 164 },
  { 'hc-key': 'hu', 'value': 165 },
  { 'hc-key': 'ro', 'value': 166 },
  { 'hc-key': 'ne', 'value': 167 },
  { 'hc-key': 'lu', 'value': 168 },
  { 'hc-key': 'ad', 'value': 169 },
  { 'hc-key': 'ci', 'value': 170 },
  { 'hc-key': 'lr', 'value': 171 },
  { 'hc-key': 'bn', 'value': 172 },
  { 'hc-key': 'iq', 'value': 173 },
  { 'hc-key': 'ge', 'value': 174 },
  { 'hc-key': 'gm', 'value': 175 },
  { 'hc-key': 'ch', 'value': 176 },
  { 'hc-key': 'td', 'value': 177 },
  { 'hc-key': 'kv', 'value': 178 },
  { 'hc-key': 'lb', 'value': 179 },
  { 'hc-key': 'dj', 'value': 180 },
  { 'hc-key': 'bi', 'value': 181 },
  { 'hc-key': 'sr', 'value': 182 },
  { 'hc-key': 'il', 'value': 183 },
  { 'hc-key': 'ml', 'value': 184 },
  { 'hc-key': 'sn', 'value': 185 },
  { 'hc-key': 'gn', 'value': 186 },
  { 'hc-key': 'zw', 'value': 187 },
  { 'hc-key': 'pl', 'value': 188 },
  { 'hc-key': 'mk', 'value': 189 },
  { 'hc-key': 'py', 'value': 190 },
  { 'hc-key': 'by', 'value': 191 },
  { 'hc-key': 'cz', 'value': 192 },
  { 'hc-key': 'bf', 'value': 193 },
  { 'hc-key': 'na', 'value': 194 },
  { 'hc-key': 'ly', 'value': 195 },
  { 'hc-key': 'tn', 'value': 196 },
  { 'hc-key': 'bt', 'value': 197 },
  { 'hc-key': 'md', 'value': 198 },
  { 'hc-key': 'ss', 'value': 199 },
  { 'hc-key': 'bw', 'value': 200 },
  { 'hc-key': 'bs', 'value': 201 },
  { 'hc-key': 'nz', 'value': 202 },
  { 'hc-key': 'cu', 'value': 203 },
  { 'hc-key': 'ec', 'value': 204 },
  { 'hc-key': 'au', 'value': 205 },
  { 'hc-key': 've', 'value': 206 },
  { 'hc-key': 'sb', 'value': 207 },
  { 'hc-key': 'mg', 'value': 208 },
  { 'hc-key': 'is', 'value': 209 },
  { 'hc-key': 'eg', 'value': 210 },
  { 'hc-key': 'kg', 'value': 211 },
  { 'hc-key': 'np', 'value': 21 }
];
