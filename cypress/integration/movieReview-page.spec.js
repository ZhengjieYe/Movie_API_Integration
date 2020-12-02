describe("movie review page",()=>{
    describe("review on detailed movie page",()=>{
        let reviewId;

        before(() => {
            cy.request(
              `https://api.themoviedb.org/3/movie/531219/reviews?api_key=${Cypress.env(
                "TMDB_KEY"
              )}`
            )
              .its("body")
              .then((response) => {
                reviewId=response.results[0].id;
              })
        });
        it("should toggle between show and hidden",()=>{
            cy.visit("/");
            cy.get(".card").eq(2).find("img").click();
            cy.get("table").should("not.be.visible");
            cy.getBySel("show-review-button").click();
            cy.get("table").should("be.visible");
        })

        it("should show full review when you click the show full review button",()=>{
            cy.visit("/movies/531219");
            cy.getBySel("show-review-button").click();
            cy.contains("Full Review").click();
            cy.url().should("match",new RegExp(`${reviewId}$`));
        })
    })

    describe("add movie review to favoriate movie",()=>{
        beforeEach(()=>{
            cy.visit("/");
            cy.getBySel("add-to-favorites-button").eq(0).click();
            cy.getBySel("site-header-favorites").click();
            cy.getBySel("wirte-review-button").click();
        })
        it("should enter the /review/form page when you click write review button",()=>{
            cy.url().should("include","/reviews/form");
        })
    
        it("should show warning message when you didn't enter author or review",()=>{
            cy.contains("Submit").click();
            cy.getBySel("author-error-message").should("exist");
            cy.getBySel("content-error-message").should("exist");
        })
    
        it("should show warning when review is too short",()=>{
            cy.getBySel("review-form-author").focus().type("test from ZhengjieYe");
            cy.getBySel("review-form-textarea").focus().type("short");
            cy.contains("Submit").click();
            cy.getBySel("content-error-message").should("exist");
        })
        
        it("should return to favorites page when click submit",()=>{
            cy.getBySel("review-form-author").focus().type("test from ZhengjieYe");
            cy.getBySel("review-form-textarea").focus().type("longggggggggg review");
            cy.contains("Submit").click();
            cy.location((loc)=>{
                expect(loc.pathname).to.eq("/favoriate");
            })
        })
        it("should be empty when you click reset",()=>{
            cy.getBySel("review-form-author").focus().type("test from ZhengjieYe");
            cy.getBySel("review-form-textarea").focus().type("Reset");
            cy.contains("Reset").click();
            cy.getBySel("review-form-author").should("be.empty");
            cy.getBySel("review-form-textarea").should("be.empty");
        })
    })
})