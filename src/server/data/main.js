const jobs = require('./jobs')
const { repos } = require('./github')
const talks = require('./talks')
const projects = require('./projects')
const education = require("./education");
const basic = require('./basic')

module.exports = {
  ...basic,
  jobs,
  repos,
  talks,
  projects,
  education
}
