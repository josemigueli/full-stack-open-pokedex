/* eslint-disable no-undef */
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})

describe('Select Pokemon', function () {
  it('can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('ivysaur')
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})
