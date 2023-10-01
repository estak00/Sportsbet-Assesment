@foo
Feature: Playwright docs

  Background: Navigation
    Given Go to the playwright website

  @only
  Scenario: Change theme
    When Change theme to "light" mode
    When Change theme to "dark" mode

  @assertion
  Scenario: Custom Assertions
    Then Perform Custom Assertions

