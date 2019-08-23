// / <reference types="Cypress" />

describe( 'Start Game', () => {
	it( 'Successfully loads new game state', () => {
		cy.get( 'button' ).click();

		cy.get( '#score' ).should( 'contain', '0' );
		cy.get( '#rows' ).should( 'contain', '0' );
		cy.get( '#level' ).should( 'contain', '1' );
	} );
} );
