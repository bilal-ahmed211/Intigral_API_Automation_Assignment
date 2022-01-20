import {
    When,
    Then,
    And
} from 'cypress-cucumber-preprocessor/steps'
import {
    Promotions
} from '../../../support/utils'

When('I hit the promotion api end point', () => {
    Promotions.getPromotions()
})
Then('Verify the status code is 200', () => {
    Promotions.validateStatusCode()
});

When('I hit the promotion api end point', () => {
    Promotions.getPromotions()
})
Then('Verify all the propertise exists in response', () => {
    Promotions.validatePropertiseExists()
});

When('I hit the promotion api end point', () => {
    Promotions.getPromotions()
})
Then('showPrice and showText fields return only true or false value', () => {
    Promotions.validateshowPriceAndshowTextValues()
});

When('I hit the promotion api end point', () => {
    Promotions.getPromotions()
})
Then('The response values should be correct', () => {
    Promotions.validateResponseValues()
});

When('I hit the promotion api end point', () => {
    Promotions.getPromotions()
})
Then('promotionId field should have string values', () => {
    Promotions.validatePromotionIdField()
})
And('programType should contain EPISODE MOVIE SERIES or SEASON', () => {
    Promotions.validateprogramTypeFieldValues()
});

When('I hit the promotion api end point with invalid apikey', () => {
    Promotions.getPromotionsWithInvalidAPIKey()
})
Then('Verify the status code is 403', () => {
    Promotions.validateErrorDetailsInResponse()
})
And('requestId is not null', () => {
    Promotions.validateErrorDetailsInResponse()
})
And('code is 8001', () => {
    Promotions.validateErrorDetailsInResponse()
})
And('message is invalid api key', () => {
    Promotions.validateErrorDetailsInResponse()
});

When('I hit the promotion api end point with blank apikey', () => {
    Promotions.getPromotionsWithInvalidAPIKey()
})
Then('Verify the status code is 403', () => {
    Promotions.validateErrorDetailsInResponse()
})
And('requestId is not null', () => {
    Promotions.validateErrorDetailsInResponse()
})
And('code is 8001', () => {
    Promotions.validateErrorDetailsInResponse()
})
And('message is invalid api key', () => {
    Promotions.validateErrorDetailsInResponse()
});