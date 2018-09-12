const isPast = require('date-fns/is_past')

/*

    name: '',
    event: '',
    date: new Date(2019, 1, 1),
    done: !!isPast(new Date(2019, 1, 1)),
    slides:
      'https://github.com/1andee/talk/blob/master/talk.pptx',
    location: ''
    
*/

const talks = [
]

module.exports = talks.sort((a, b) => (a.date > b.date ? -1 : 1))
