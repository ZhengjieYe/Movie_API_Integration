describe("user authentication page",()=>{
    describe("when user sign up",()=>{
        beforeEach(()=>{
            cy.visit("/");
            cy.getBySel("site-header-login").click()
            cy.contains("Sign up now").click()
        })
        it("should show error when password is empty",()=>{
            cy.getBySel("signup-email").clear().type("aaa");
            cy.get(".btn-primary").click();
            cy.contains("Please enter your password");
        })

        it("should show error when password is shorter than 8",()=>{
            cy.register("aaa","1234567");
            cy.contains("your password should be longer than 8");

        })

        it("should show error when email's format is not correct",()=>{
            cy.register("aaa","123456789");
            cy.contains("The email address is badly formatted.");
        })

        it("should show error when email has already been registered",()=>{
            cy.register("20091571@mail.wit.ie","123456789");
            cy.contains("The email address is already in use by another account.");
        })

        it("should show navigation info when register successful",()=>{
            const randomEmail="email"+Math.random()*10+"@test.com"
            cy.register(randomEmail,"123456789")
            cy.contains("Welcome!. To continue please verify your email.")
            cy.get("button").click()
            cy.url().pipe((url)=>{
                expect(url).to.include("/login")
            })
        })
    }) 

    describe("when log in",()=>{
        beforeEach(()=>{
            cy.visit("/")
            cy.getBySel("site-header-login").click()
        })
        it("should show error when format are wrong",()=>{
            cy.login("aaa")
            cy.contains("Please enter your password")
            cy.login("aaa","111")
            cy.contains("your password should be longer than 8")
            cy.login("aaa","123456789")
            cy.contains("The email address is badly formatted.")
        })

        it("should show error when email is not exits",()=>{
            cy.login("20091571YZJ@mail.wit.ie","123456789")
            cy.contains("There is no user record corresponding to this identifier. The user may have been deleted.")
        })

        it("should jump to home page when log in successfully",()=>{
            cy.login("20091571@mail.wit.ie","123456789")
            cy.url().pipe((url)=>{
                expect(url).to.include("/")
            })
        })
    })
})