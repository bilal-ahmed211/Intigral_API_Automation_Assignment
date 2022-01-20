Feature: Promotions GET API

    Scenario: Verify the status code is 200
        When I hit the promotion api end point
        Then Verify the status code is 200

    Scenario: Verify all the properties exist in response
        When I hit the promotion api end point
        Then Verify all the propertise exists in response

    Scenario: Verify showPrice and showText can have value as True or False
        When I hit the promotion api end point
        Then showPrice and showText fields return only true or false value

    Scenario: Verify the response values for all the fields
        When I hit the promotion api end point
        Then The response values should be correct

    Scenario: Verify the promotionId and programType field values
        When I hit the promotion api end point
        Then promotionId field should have string values
        And programType should contain EPISODE MOVIE SERIES or SEASON

    Scenario: Verify the error details in response when apikey is invalid
        When I hit the promotion api end point with invalid apikey
        Then Verify the status code is 403
        And requestId is not null
        And code is 8001
        And message is invalid api key

    Scenario: Verify the error details in response when apikey is blank
        When I hit the promotion api end point with blank apikey
        Then Verify the status code is 403
        And requestId is not null
        And code is 8001
        And message is invalid api key