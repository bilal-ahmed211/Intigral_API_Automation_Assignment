var reporter = require('cucumber-html-reporter');
var options = {
    theme: "bootstrap",
    jsonFile: "cypress/cucumber-json",
    output: "./reports/cucumber-html-report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {

        "App Version": "0.0.1",
        "Test Environment": "Testing",
        "Browser": "Chrome",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
}
reporter.generate(options)