/**
 * @class Cucumber Options
 * @description This file contains Cucumber configuration details.
 *
 * @author Estak Hossan
 */

const common = `
  --require-module ts-node/register
  --require src/**/*.ts
  --format json:misc/reports/report.json
  --format message:misc/reports/cucumber-messages.ndjson
  --format html:misc/reports/report.html
  --format summary
  --format progress-bar
  --format @cucumber/pretty-formatter
  --format-options '{"theme":{"datatable border":["green"],"datatable content":["green","italic"],"docstring content":["green","italic"],"docstring delimiter":["green"],"feature description":["green"],"feature keyword":["bold","green"],"rule keyword":["yellow"],"scenario keyword":["greenBright"],"scenario name":["green","underline"],"step keyword":["bgGreen","black","italic"],"step text":["greenBright","italic"],"tag":["green"]}}'
  --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
  `;
const getWorldParams = () => {
  const params = {
    projectName: 'SportsBet Automation',
    playwrightVersion: '1.38.1',
  };

  return `--world-parameters ${JSON.stringify({ params })}`;
};

module.exports = {
  default: `${common} ${getWorldParams()}`,
};
