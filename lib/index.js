const path = require ('path');
const pkg = require (path.resolve ('./package.json'));

function deploy (options) {
  const {
    root,
    name = pkg.name,
    username = process.env.SSH_USERNAME || process.env.USER,
    host,
    path,
    configuration = function (deployTarget, env) {
      return env;
    }
  } = options;

  return function (deployTarget) {
    function getDefaultPath () {
      return `${root}/env/${deployTarget}/${name}`;
    }

    let ENV = {
      build: {},

      scp: {
        nodes: [{
          username,
          host,
          path: path || getDefaultPath (),
        }]
      }
    };

    if (deployTarget === 'development') {
      ENV.build.environment = 'development';
    }

    if (deployTarget === 'staging') {
      ENV.build.environment = 'production';
    }

    if (deployTarget === 'production') {
      ENV.build.environment = 'production';
    }

    return configuration (deployTarget, ENV);
  }
}

module.exports = deploy;
