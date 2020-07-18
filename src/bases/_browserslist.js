const sass = require('node-sass')
const browserslist = require('browserslist')

module.exports = {
  '_browserslist()': () => {
    const browsers = browserslist()
    const targets = browsers.reduce((prev, curr) => {
      const target = curr.split(' ')
      const browser = target[0]
      const version = parseFloat(target[1].split('-')[0], 10)

      return {
        ...prev,
        [browser]: isNaN(version) ? 0 : version,
      }
    }, {})
    const map = new sass.types.Map(Object.keys(targets).length)

    for (const [index, key] of Object.keys(targets).entries()) {
      map.setKey(index, new sass.types.String(key))
      map.setValue(index, new sass.types.Number(targets[key]))
    }

    return map
  },
}