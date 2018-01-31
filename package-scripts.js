const npsUtils = require('nps-utils')

const { rimraf, series } = npsUtils

module.exports = {
  scripts: {
    clean: series(rimraf('.cache'), rimraf('coverage'), rimraf('public')),
    commit: 'git cz',
    reportCoverage: 'codecov',
    test: {
      default: 'jest --runInBand --updateSnapshot',
      config: series.nps('test --showConfig'),
      coverage: series.nps('test --coverage'),
      watch: series.nps('test --watch')
    }
  }
}
