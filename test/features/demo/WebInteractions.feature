Feature: Web interactions

    @demo
    Scenario Outline: Web Interactions using locators
    Given Web Page is opened
    # When user performs web interactions
    When user validates the dropdown
        |Please select an option|
        |Option 1|
        |Option 2|