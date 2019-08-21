describe( 'The Home Page', () => {
	it( 'successfully loads', () => {
		cy.visit( '/' );

		cy
			.get( '#stage' )
			.should( 'have.attr', 'width', '12' )
			.should( 'have.attr', 'height', '20' );

		cy.contains( 'Score' );
		cy.contains( 'Rows' );
		cy.contains( 'Level' );

		cy.get( 'button' ).should( 'contain', 'Start Game' );
	} );
} );
