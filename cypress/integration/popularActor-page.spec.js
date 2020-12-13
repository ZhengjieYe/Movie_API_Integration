import Item from "antd/lib/list/Item"

describe("popular actors page",()=>{
  let actors;
  before(()=>{
    cy.request(`https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
      "TMDB_KEY"
    )}&language=en-US&page=1`)
      .its("body")
      .then(res=>{
        actors=res.results
      })
  })
  describe("when in popular list page",()=>{
    beforeEach(()=>{
      cy.visit("/")
      cy.getBySel("site-header-popular").click()
      cy.wait(5000)
    })
    it("should show the right sequence when you choose sort by Name",()=>{
      actors=actors.sort((a,b)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        if(a.name===b.name) return 0;
        return 0
      })
      for (var i=0;i<actors.length;i++){
        cy.get("h4").eq(i).text().should("eq",actors[i].name)
      }
    })

    it("should show the right sequence when you choose sort by Popularity",()=>{
      cy.contains("Popularity").click()
      cy.wait(5000)
      actors=actors.sort((a,b)=>{
        if(a.popularity>b.popularity) return -1;
        if(a.popularity<b.popularity) return 1;
        if(a.popularity===b.popularity) return 0;
        return 0
      })
      for (var i=0;i<actors.length;i++){
        cy.get("h4").eq(i).text().should("eq",actors[i].name)
      }
    })

    it("should show the right sequence when you choose filter by Male",()=>{
      cy.contains("Male").click()
      cy.wait(5000)
      actors=actors.sort((a,b)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        if(a.name===b.name) return 0;
        return 0
      })
      let temp=actors.filter(a=>a.gender===2)
      for (var i=0;i<temp.length;i++){
        cy.get("h4").eq(i).text().should("eq",temp[i].name)
      }
    })

    it("should show the right sequence when you choose filter by Female",()=>{
      cy.contains("Female").click()
      cy.wait(5000)
      actors=actors.sort((a,b)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        if(a.name===b.name) return 0;
        return 0
      })
      let temp=actors.filter(a=>a.gender===1)
      for (var i=0;i<temp.length;i++){
        cy.get("h4").eq(i).text().should("eq",temp[i].name)
      }
    })
  })


  describe("when in detail page",()=>{
    beforeEach(()=>{
      cy.visit("/")
      cy.getBySel("site-header-popular").click()
      cy.wait(5000)
    })
    it("should show the right person when enter into detail page",()=>{
      actors=actors.sort((a,b)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        if(a.name===b.name) return 0;
        return 0
      })
      const seletActor=actors[0]
      cy.get(".card-img-top").eq(0).click()
      cy.wait(5000)
      cy.get("h4").text().should("eq",seletActor.name)
    })

    it("should show the know for goods when click know for button",()=>{
      cy.get(".card-img-top").eq(0).click()
      cy.wait(5000)
      cy.contains("Know for").click()
      cy.wait(5000)
      cy.get(".card").should("have.length",4)
    })
  })
})