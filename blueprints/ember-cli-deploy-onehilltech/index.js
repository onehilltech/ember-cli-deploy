/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  addons: [
    {name: 'ember-cli-deploy'},
    {name: 'ember-cli-deploy-build'},
    {name: 'ember-cli-deploy-scp'}
  ]
});
