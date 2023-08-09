/// <reference types="Cypress"/>

Cypress.Commands.add('SignUp', () => { 

        cy.fixture("SignUpForm.json").then((SignUpForm) =>  {
            cy.get(SignUpForm.SignUp_Form).click()
        
            cy.get(SignUpForm.SignUp_Username)
              .focus()
              .clear()  
              .type(SignUpForm.User_data)

            cy.get(SignUpForm.SignUp_Password)
              .focus()
              .clear()
              .type(SignUpForm.Password_data)

            cy.get(SignUpForm.Btn_SignUp).click()
            
            // cy.contains(SignUpForm.User_exist)
            
        })

})

Cypress.Commands.add('ValidLogin', () => { 

    cy.fixture("LoginForm.json").then((LoginForm) =>  {
        cy.get('#login2').click()
    
        cy.get(LoginForm.User_element)
          .focus()
          .clear()  
          .type(LoginForm.User_data)

        cy.get(LoginForm.Password_element)
          .focus()
          .clear()
          .type(LoginForm.Password_data)

        cy.get(LoginForm.Btn_LogIn).click()
        
        cy.get(LoginForm.Welcome_Name).should('contain.text', LoginForm.Welcome_Text)
        cy.log("Valid Login")
    })

})
