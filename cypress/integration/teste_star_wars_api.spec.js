describe ('Teste Api - STAR WARS', () => {

  it('cy.request() - API STAR WARS - PEOPLE', () => {

      cy.request('https://swapi.co/api/people/1/')
        .should((response) => {
          
          expect(response.status).to.eq(200)

            expect(response.body).to.contain({
              name: 'Luke Skywalker',
              height: '172',
              mass: '77',
              hair_color: 'blond',
              skin_color: 'fair',
              eye_color: 'blue',
              birth_year: '19BBY',
              gender: 'male'   
          })
        
      })
  })

  it('cy.request() - API STAR WARS - PLANET', () => {

    cy.request('https://swapi.co/api/planets/1/')
      .should((response) => {
        
        expect(response.status).to.eq(200)

          expect(response.body).to.contain({
            name: "Tatooine",
            rotation_period: "23",
            orbital_period: "304",
            diameter: "10465",
            climate: "arid",
            gravity: "1 standard",
            terrain: "desert",
            surface_water: "1",
            population: "200000"  
          })
        
      })
  })

})