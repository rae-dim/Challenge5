// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-01-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};
// const date = data.response.data.NM372.races[data.response.data.NM372.races.length-1];
// const obj = new Date(date.date);
// console.log(obj.getDate());
// console.log(obj.getMonth());

// Only edit below this comment

const createHtml = (athlete) => {
  const {firstName, surname, id, races}= data.response.data.athlete;  // get values for each variable


  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2');
  title.textContent= id;
  fragment.appendChild(title);

  const list = document.createElement('dl');

  const lastRace = races[races.length-1]; // last object of the races
  const dateObj = new Date(lastRace.date); // convert date string to date object
  
  const day = dateObj.getDate();  // get day e.g 2
  const month = MONTHS[dateObj.getMonth()]; // use month as key = 1 - to get shortened month name
  const year = dateObj.getFullYear(); /// get year 

  const {first, second, third, fourth} = lastRace.time; // destructuring array
  const total = first + second + third + fourth; // added const 

  const hours = total / 60;
  const minutes = total / hours / 60;

  list.innerHTML = `
    <dt>Athlete</dt>
    <dd>${firstName surname}</dd>

    <dt>Total Races</dt>
    <dd>${races}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day month year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.padStart(2, 0) minutes}</dd>
  `;

  fragment.appendChild(list);
}

[NM372], [SV782] = data
document.querySelector(NM372).appendChild(createHtml(NM372));
document.querySelector(SV782).appendChild(createHtml(SV782));