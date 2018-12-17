const isPast = require('date-fns/is_past');

const talks = [
  {
    name: 'Introduction to Ample Labs (co-presenter)',
    event: 'Civic Tech Toronto',
    date: new Date(2018, 12, 11),
    done: !!isPast(new Date(2018, 12, 11)),
    // video: '',
    // slides: '',
    location: 'Toronto, Ontario'
  },
  {
      name: 'Transforming the buffing experience with technology',
      event: '66th Annual IFBA Convention',
      date: new Date(2018, 8, 22),
      done: !!isPast(new Date(2018, 8, 22)),
      slides:
        'https://github.com/1andee/ifba-technology/blob/master/keynote.pdf',
      location: 'Racine, Wisconsin'
  }
]

module.exports = talks.sort((a, b) => (a.date > b.date ? -1 : 1))
