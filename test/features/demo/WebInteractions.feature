Feature: Web interactions

    @demo
    Scenario Outline: Web Interactions using locators
    #Given Dropdown Web Page is opened
    Given checkbox Web Page is opened
    # When user performs web interactions
    When User selects the checkbox
    #When user validates the dropdown
        # |Please select an option|
        # |Option 1|
        # |Option 2|

    @alertsdemo
    Scenario Outline: Web Interactions using locators
    #Given Dropdown Web Page is opened
    Given Alerts Web Page is opened
    # When user performs web interactions
    # When User selects the checkbox
    #When user validates the dropdown
    When User clicks the generate alerts button
        # |Please select an option|
        # |Option 1|
        # |Option 2|