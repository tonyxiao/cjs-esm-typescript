/**
 * @file `importer.cts`
 *
 * From a require-style Node script, import cts and cts modules.
 */

/**
 * Import a module by `require()`ing it. If that results in
 * an error, return the error code.
 */
function requireModule(modulePath: string, exportName?: string) {
  try {
    const imported = require(modulePath)
    return exportName ? imported[exportName] : imported
  } catch (err) {
    return (err as any).code
  }
}

/**
 * CommonJS does not have top-level `await`, so we can wrap
 * everything in an `async` IIFE to make our lives a little easier.
 */
;(async function () {
  console.log({
    title: 'Importing into a CommonJS module',

    // CJS<-CJS and MJS<-CJS are equivalent
    defaultCjsExport: requireModule('./exporter.cjs'),
    namedCjsExport: requireModule('./exporter.cjs', 'namedCjsExport'),

    // Cannot `require` an ESM module
    defaultMjsExportUsingRequire: requireModule('./exporter.mjs'),
    namedMjsExportUsingRequire: requireModule(
      './exporter.mjs',
      'namedMjsExport',
    ),

    defaultMjsExport: (await import('./exporter.mjs')).default,
    namedMjsExport: (await import('./exporter.mjs')).namedMjsExport,
  })
})()
