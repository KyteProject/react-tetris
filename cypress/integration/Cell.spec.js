import React from 'react';
import Cell from '../../src/components/Cell';

describe( 'Cell component', () => {
	it( 'Loads with all shape types (IJLOSTZ)', () => {
		cy.mount( <Cell type="0" /> );
		cy.mount( <Cell type="I" /> );
		cy.mount( <Cell type="J" /> );
		cy.mount( <Cell type="L" /> );
		cy.mount( <Cell type="O" /> );
		cy.mount( <Cell type="S" /> );
		cy.mount( <Cell type="T" /> );
		cy.mount( <Cell type="Z" /> );
	} );
} );
