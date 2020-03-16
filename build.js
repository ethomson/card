'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('            Edward Thomson'),
  handle: chalk.white('@ethomson'),
  work: chalk.white('Product Manager at GitHub'),
  future: chalk.white('Product Manager for npm'),
  opensource: chalk.white('Co-Maintainer, ') + chalk.red.bold('libgit2'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan.bold('ethomson'),
  npm: chalk.gray('https://npmjs.com/') + chalk.cyan.bold('~ethomson'),
  github: chalk.gray('https://github.com/') + chalk.cyan.bold('ethomson'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan.bold('ethomson'),
  web: chalk.cyan.bold('https://edwardthomson.com'),
  npxNpm: chalk.cyan('npx') + ' ' + chalk.white('ethomson'),
  npxGitHub: chalk.cyan('npx') + ' ' + chalk.white('@ethomson/card  ') + chalk.cyan('(GitHub Packages)'),
  labelWork: chalk.white.bold('       Work:'),
  labelFuture: chalk.white.bold('     Future:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
  labelBlank: chalk.white.bold('            ')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const work = `${data.labelWork}  ${data.work}`
const future = `${data.labelFuture}  ${data.future}`
const opensource = `${data.labelOpenSource}  ${data.opensource}`
const twitter = `${data.labelTwitter}  ${data.twitter}`
const npm = `${data.labelnpm}  ${data.npm}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const web = `${data.labelWeb}  ${data.web}`
const card_npm = `${data.labelCard}  ${data.npxNpm}`
const card_github = `${data.labelBlank}  ${data.npxGitHub}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               work + newline + // data.labelWork + data.work
               future + newline + // data.labelWork + data.work
               opensource + newline + newline + // data.labelOpenSource + data.opensource
               twitter + newline + // data.labelTwitter + data.twitter
               npm + newline + // data.labelnpm + data.npm
               github + newline + // data.labelGitHub + data.github
               linkedin + newline + // data.labelLinkedIn + data.linkedin
               web + newline + newline + // data.labelWeb + data.web
               card_npm + newline + // data.labelCard + data.npxNpm
               card_github // data.labelCard + data.npxNpm

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.cyan(boxen(output, options)))
