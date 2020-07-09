module.exports = api => {
  api.cache(true)

  return {
    sourceType: 'unambiguous',
    presets: [
      ['@babel/preset-env', {
        targets: {
          node: 'current',
        },
      }],
    ],
  }
}