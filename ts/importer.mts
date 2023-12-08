/**
 * @file `importer.mts`
 *
 * An ESM module that imports stuff
 */

import defaultCjsExport, { namedCjsExport } from './exporter.cts'
import defaultMjsExport, { namedMjsExport } from './exporter.mts'

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
