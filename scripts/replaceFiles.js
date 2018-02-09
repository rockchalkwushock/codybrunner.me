/* eslint-disable no-console */
// Navtive
const { copyFileSync } = require('fs')
const { resolve } = require('path')

// Package
const { cyan, magentaBright, redBright } = require('chalk')

/**
 * @function replaceFiles(files)
 * @param {Array<String>} files
 *
 * @description
 * Copies the stock manifest.json & manifest.webapp to
 * public/favicons/. This is being done because `gatsby-plugin-favicon`
 * does not fill in all the keys of these files.
 *
 * NOTE: copyFileSync overwrites existing files by default.
 */
const replaceFiles = files => {
  console.log(`${magentaBright('Copying files to public directory...')}`)
  try {
    for (let i = 0; i < files.length; i++) {
      const original = resolve(__dirname, `../utils/${files[i]}`)
      const destination = resolve(__dirname, `../public/favicons/${files[i]}`)
      copyFileSync(original, destination)
      console.log(`${cyan(`Copied ${files[i]} to ${destination}.`)}`)
    }
  } catch (e) {
    throw redBright(e.message)
  }
}

replaceFiles(['manifest.json', 'manifest.webapp'])
