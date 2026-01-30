import { faker } from '@faker-js/faker'

class CheckoutPage {

    preencherCheckout() {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const address = faker.location.streetAddress()
        const city = faker.location.city()
        const phone = faker.string.numeric(11)

        cy.get('#billing_first_name').clear().type(firstName)
        cy.get('#billing_last_name').clear().type(lastName)
        cy.get('#billing_address_1').clear().type(address)
        cy.get('#billing_city').clear().type(city)
        cy.get('#billing_postcode').clear().type('01001-000')
        cy.get('#billing_phone').clear().type(phone)
    }

    finalizarPedido() {
        cy.get('#payment_method_cod').check({ force: true })
        cy.get('#terms').check({ force: true })
        // usando force:true para garantir que não haverá erro no clique do checkbox
        cy.get('#place_order').click()
    }

    validarPedido() {
        cy.contains('Pedido recebido', { timeout: 10000 })
            // timeout maior para evitar erro por conta da possível demora da página de confirmação
            .should('be.visible')
    }

}

export default new CheckoutPage()