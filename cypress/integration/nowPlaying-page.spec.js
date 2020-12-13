describe("now playing page",()=>{
  it("should show the now playing movies",()=>{
    cy.visit("/")
    cy.getBySel("site-header-nowplaying").click()
    cy.wait(5000)
    cy.get('.card').should("have.length",20)
  })
})