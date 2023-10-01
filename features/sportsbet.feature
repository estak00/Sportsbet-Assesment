@food
Feature: SportsBet Scripts

  Background: Navigation
    Given Navigate to the SportsBet website

  @smoke
  Scenario: 'Next To Jump' Carousel actions
    When Clicking on the specified race card "1" in Next To Jump Carousel
    And Verify the selected Race card Details
    And place specified bets "2" on the selected horse
    Then Verify the Bet Slip Details

  @smoke
  Scenario: 'Popular Now' Carousel actions
    When Clicking on the specified race card "1" in Popular Now Carousel
    Then Verify the selected Race card Details
    And place specified bets "2" on the selected horse
    Then Verify the Bet Slip Details

