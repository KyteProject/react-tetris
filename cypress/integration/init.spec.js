describe( 'The Home Page', () => {
	before( () => {
		cy.visit( '/' );
	} );

	it( 'successfully loads', () => {
		cy
			.get( '[data-cy=stage]' )
			.should( 'have.attr', 'width', '12' )
			.should( 'have.attr', 'height', '20' );

		cy
		.get( '[data-cy=cell' )
		.each(($el, index, $list) => {
			cy.wrap($el)
				.should( 'have.attr', 'color', '0, 0, 0' )
				.should( 'have.attr', 'type', '0' );
		});

		// cy.contains( 'Score' );
		// cy.contains( 'Rows' );
		// cy.contains( 'Level' );

		cy.get( '[data-cy=btn-start]' );
	} );
} );
