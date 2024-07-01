Feature: Demo feature

    Scenario Outline: Running the first automation script
    Given Google page is opened
    Then Search the keyword <SearchKeyword>
    Then Click on first search item
    Then Url should match <ExpectedUrl>

        Examples:
            | TestID | SearchKeyword | ExpectedUrl|
            | DemoTC01  | WDIO  | https://webdriver.io/  |