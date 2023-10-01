# typescript-cucumber-playwright

A starter repo for writing E2E tests based on Cucumber(7) with Playwright using Typescript.

## Kudos

This repository is based on the [Cucumber-typescript-starter](https://github.com/hdorgeval/cucumber7-ts-starter/blob/main/package.json) repo.

## What's inside

- Typescript setup for writing steps with eslint/typescript and prettier
- Launching of Playwright browser before running all tests
- Launching new context and page for each scenario
- Running feature with video recording option
- Report generated with last good image attached
- Utilities function to help you with writing steps
- VScode configuration to debug a single feature or an only scenario (run when located on the feature file)

## Usage

Create a repo based on this template and start writing your tests.

1. Clone the Repo.
2. In Command Prompt or any IDE, Navigate to the project root and Type npm i to install all the project dependencies. node_modules folder will be created with all the dependency libraries.
3. Update the dependencies versions cautiously, as it will sometimes have severe impact. Better to go through the dependency Changelog first.
4. Run the available npm scripts in package.json. Pass the relevant environment variables. Modify script for OS compatibility.

## To run your tests

`npm run test` or `npx cucumber-js` runs all tests
`npm run test <feature name>` or `npx cucumber-js <feature name>` run the single feature

## Browser selection

By default we will use chromium. You can define an envrionment variable called BROWSER and
set the name of the browser. Available options: chromium, firefox, webkit

On Linux and Mac you can write:

`BROWSER=firefox npm run test` or `BROWSER=firefox npx cucumber-js` runs all tests using Firefox

On Windows you need to write

```
set BROWSER=firefox
npm run test
```

## Debugging Features

### From CLI

- `npm run debug` - headful mode with APIs enables both APIs and debug options
- `npm run api` - headless mode with debug apis
- `npm run video` - headless mode vith video

## In Visual Studio Code

- Open the feature
- Select the debug options in the VSCode debugger
- Set breakpoints in the code

To stop the feature, you can add the `Then debug` step inside your feature. It will stop your debugger.

## To choose a reporter

Note: Future Versions of Cucumber will not support generating json report. we need to keep an eye on the plugins like multiple-cucumber-html report, as it uses json to generate html report. There is a plugin/utility which converts cucumber's ndjson report to json report. you can download them according to the OS from the below link. Save them in the Formatters folder.
https://github.com/cucumber/common/releases/tag/cucumber-json-formatter%2Fv7.0.1
Plugin/Utility Info - https://github.com/cucumber/common/tree/main/json-formatter

The last reporter/formatter found on the cucumber-js command-line wins:

```text
--format summary --format @cucumber/pretty-formatter --format cucumber-console-formatter
```

In [cucumber.js](cucumber.js) file, modify the options.

## To ignore a scenario

- tag the scenario with `@ignore`

## To check for typescript, linting and gherkin errors

- run the command `npm run build`.

## To view the steps usage

- run the command `npm run steps-usage`.

## To view the html report of the last run

- run the command `npm run report`.

## TroubleShooting:

1. Whitelist the ip address in Salesforce to avoid additional authentication like email verification, mobile verification.
2. Provide valid credentials in users.json under src -> fixtures folder to execute the test.
3. Read the error logs in console and figure out where the error originated from.
4. Provide valid Test Data to avoid unnecessary execution failures.
5. Use await for most of the methods, as they are asynchronous.
