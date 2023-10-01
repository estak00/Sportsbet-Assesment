/**
 * @class Multiple Cucumber HTML Reporter
 * @description This class will help generate HTML reports based on the specified parameters.
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-var-requires */

const report = require('multiple-cucumber-html-reporter');
const cucumberJsonDir = './misc/reports';
const cucumberHtmlReportsDir = './misc/reports/multiple-cucumber-html-reports/';
const reportTitle = 'Test Execution Report';
const repName = 'Test Automation Report';
const reportFooter =
  '<div><p style = "color:#73879C;">&nbsp;&nbsp;&nbsp; Auto Generated through Test Automation</p></div>';
const projectName = 'SportsBet Automation';
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = new Date().toISOString();
//let tags = '';

let platformName = '';
if (process.platform.indexOf('win32') !== -1) {
  platformName = 'windows';
}
if (process.platform.indexOf('darwin') !== -1) {
  platformName = 'osx';
}
if (process.platform.indexOf('aix') !== -1) {
  platformName = 'linux';
}
if (process.platform.indexOf('linux') !== -1) {
  platformName = 'linux';
}
// if (process.env.tags) {
//   tags = process.env.tags.split('and not @ignore')[0].trim();
// }
const options = {
  jsonDir: cucumberJsonDir,
  reportPath: cucumberHtmlReportsDir,
  pageTitle: reportTitle,
  reportName: repName,
  pageFooter: reportFooter,
  disableLog: true,
  displayDuration: true,
  displayReportTime: true,
  staticFilePath: true,
  metadata: {
    //   browser: {
    //     name: this.details.browserName,
    //     version: this.details.browserVersion,
    //   },
    platform: {
      name: platformName,
      //     version: this.details.osVersion,
    },
    //   device: this.details.osName,
  },
  customData: {
    title: 'Test Execution Info',
    data: [
      { label: 'Project', value: `${projectName}` },
      { label: 'Release', value: `${projectVersion}` },
      { label: 'Report Generation Time', value: `${reportGenerationTime}` },
      { label: 'Playwright Version', value: '1.38.1' },
      {
        label: 'Environment',
        value: 'Sandbox',
      },
      // { label: 'Tags', value: tags },
      // { label: 'Start Time', value: details.startedTestsAt },
      // { label: 'End Time', value: details.endedTestsAt },
    ],
  },
};
report.generate(options);
