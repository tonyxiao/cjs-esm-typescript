/**
 * @file `importer.js`
 *
 * An ESM module that imports stuff
 */

import defaultCjsExport, { namedCjsExport } from './exporter.cjs'
import defaultMjsExport, { namedMjsExport } from './exporter.mjs'

await new Promise((resolve) => {
  console.log('Waiting... for 2s')
  setTimeout(() => {
    console.log('Done waiting.')
    resolve()
  }, 2000)
})

console.log({
  title: 'Importing into an ESM module.',
  defaultCjsExport,
  namedCjsExport,
  defaultMjsExport,
  namedMjsExport,
})
