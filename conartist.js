const { config, preset } = require('conartist');

module.exports = config(preset.babel(), preset.base(), preset.jest(), preset.rollup(), {
  'rollup.config.js'() {
    return Object.assign({}, rollup()['rollup.config.js'](), {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      name: 'skateRendererReact'
    });
  }
});
