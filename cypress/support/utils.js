/// <reference types = "Cypress" />
import data from '../fixtures/promotions.json'
const url = Cypress.env('URL')
const invalidAPIKey = Cypress.env('invalidAPIKey')
const blankAPIkey = Cypress.env('blankAPIkey')

export class Promotions {
    static getPromotions() {
        cy.request({
            method: 'GET',
            url: url,
        }).as('get_promotions_data')
    }
    static getPromotionsWithInvalidAPIKey() {
        cy.request({
            method: 'GET',
            url: invalidAPIKey,
            failOnStatusCode: false
        }).as('get_promotions_with_invalidKey')
    }
    static getPromotionsWithBlankAPIKey() {
        cy.request({
            method: 'GET',
            url: blankAPIkey,
            failOnStatusCode: false
        }).as('get_promotions_with_invalidKey')
    }
    static validateStatusCode() {
        cy.get('@get_promotions_data').should((response) => {
            expect(response.status).to.eql(200)
        })
    }
    static validateErrorDetailsInResponse() {
        cy.get('@get_promotions_with_invalidKey').should((response) => {
            expect(response.status).to.eql(403)
            expect(response.body.error.requestId).is.not.null
            expect(response.body.error.code).to.eql('8001')
            expect(response.body.error.message).to.eql('invalid api key')
        })
    }
    static validatePropertiseExists() {
        cy.get('@get_promotions_data').should((response) => {
            expect(response.body.promotions[0]).to.have.property('promotionId')
            expect(response.body.promotions[0]).to.have.property('orderId')
            expect(response.body.promotions[0]).to.have.property('promoArea')
            expect(response.body.promotions[0]).to.have.property('promoType')
            expect(response.body.promotions[0]).to.have.property('showPrice')
            expect(response.body.promotions[0]).to.have.property('showText')
            expect(response.body.promotions[0].localizedTexts).to.have.property('ar')
            expect(response.body.promotions[0].localizedTexts).to.have.property('en')
        })
    }
    static validateshowPriceAndshowTextValues() {
        cy.get('@get_promotions_data').should((response) => {
            expect(response.body.promotions[0].showPrice).to.be.false
            expect(response.body.promotions[0].showPrice).to.be.false
        })
    }
    static validateResponseValues() {
        cy.get('@get_promotions_data').should((response) => {
            expect(response.body.promotions[0].promotionId).to.eql(data.promotions[0].promotionId)
            expect(response.body.promotions[0].orderId).to.eql(data.promotions[0].orderId)
            expect(response.body.promotions[0].promoArea).to.eql(data.promotions[0].promoArea)
            expect(response.body.promotions[0].promoType).to.eql(data.promotions[0].promoType)
            expect(response.body.promotions[0].showPrice).to.eql(data.promotions[0].showPrice)
            expect(response.body.promotions[0].showText).to.eql(data.promotions[0].showText)
            expect(response.body.promotions[0].localizedTexts.ar[0]).to.eql(data.promotions[0].localizedTexts.ar[0])
            expect(response.body.promotions[0].localizedTexts.en[0]).to.eql(data.promotions[0].localizedTexts.en[0])

        })
    }
    static validatePromotionIdField() {
        cy.get('@get_promotions_data').should((response) => {
            expect(response.body.promotions[0].promotionId).to.be.a('string')
        })
    }
    static validateprogramTypeFieldValues() {
        cy.get('@get_promotions_data').should((response) => {
            expect(response.body.promotions[0].properties[0].programType).to.include('movie')
        })
    }

}