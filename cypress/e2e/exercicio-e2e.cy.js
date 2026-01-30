/// <reference types="cypress" />
import produtosPage from '../support/page_objects/produtos.page'
import checkoutPage from '../support/page_objects/checkout.page'

context('Exercicio - E2E - Fluxo de pedido', () => {

    /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then((perfil) => {
            cy.login(perfil.usuario, perfil.senha)
            cy.get('.page-title').should('contain', 'Minha conta')
        })
    })

    it('Deve realizar um pedido com sucesso', () => {
        produtosPage.visitarProduto('Abominable Hoodie')
        produtosPage.ColocarProdutoCarrinho('L', 'Green', 1)

        produtosPage.visitarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.ColocarProdutoCarrinho('XS', 'Red', 1)

        produtosPage.visitarProduto('Atlas Fitness Tank')
        produtosPage.ColocarProdutoCarrinho('M', 'Blue', 1)

        produtosPage.visitarProduto('Caesar Warm-Up Pant')
        produtosPage.ColocarProdutoCarrinho('34', 'Purple', 1)

        cy.visit('carrinho')
        cy.get('.checkout-button').click()

        checkoutPage.preencherCheckout()
        checkoutPage.finalizarPedido()
        checkoutPage.validarPedido()
    })

})