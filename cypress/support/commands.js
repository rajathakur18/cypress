import 'cypress-file-upload';
import "cypress-localstorage-commands";
import "cypress-commands";
import "cypress-xpath";
//import "clipboardy";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


/*Cypress.Commands.add('loginAs', (UserEmail, UserPwd) => {
    cy.request({
        method: 'POST',
        url: "/loginWithToken",
        body: {
            user: {
                email: UserEmail,
                password: UserPwd,
            }
        }
    })
        .its('body')
        .then((body) => {
            cy.setLocalStorage("accessToken", body.accessToken);
            cy.setLocalStorage("refreshToken", body.refreshToken);
        });
})*/

/*
beforeEach(() => {
    // before each test, we can automatically preserve the
    // 'session_id' and 'remember_token' cookies. this means they
    // will not be cleared before the NEXT test starts.
    //
    // the name of your cookies will likely be different
    // this is an example
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')

   /!* Cypress.Cookies.defaults({
        whitelist: 'session_id'
    })

    const clear = Cypress.LocalStorage.clear

    Cypress.LocalStorage.clear = function (keys, ls, rs) {
        // do something with the keys here
        if (keys) {
            return clear.apply(this, arguments)
        }

    }*!/

    //Cypress.Cookies.preserveOnce();
})*/

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});

Cypress.Commands.add("clearLocalStorageCache", () => {
    localStorage.clear();
    LOCAL_STORAGE_MEMORY = {};
});

/*Cypress.Commands.add('',(username=" test",
                              password="test") => {
    cy.request({
        method: "POST",
        url: "/api/public/login",
        body: `{:person/email "${username}", :person/password "${password}"}`,
        headers: {
            "Accept": "application/edn",
            "Content-Type": "application/edn"
        }
    })
})*/

Cypress.Commands.add('post_airmeet_creation_validation',() => {
    cy.get('.tab-content > :nth-child(1)').should("be.visible").then(($btn) => {

        cy.get('.heading').should('contain', 'Airmeet successfully updated')
        cy.get('.inner > :nth-child(1)').should('contain','An event page for your airmeet has been created. Once you go live, anyone with the event link or your community members can be a part of same.')
        cy.get('.inner > :nth-child(2)').should('contain', 'Upcoming Airmeet summary')
        cy.get('.inner > :nth-child(4)').should('contain', 'Share link')

        cy.get('.inner > :nth-child(7)')
            .should("be.visible")
            .should('have.text', 'Go to Airmeet')

    })
})

Cypress.Commands.add('create_airmeet_skip_flow',() => {
    let link_text = ""
    cy.visit('https://demo.airmeet.com/community-manager/4236b770-e72f-4377-a7aa-1320deff9314')
    cy.title('Airmeet: Testing_Security')

    //login
    cy.get('.d-inline-block').click()

    //
    cy.get('.auth-choices > .d-flex > .btn').click()



    //Email
    cy.xpath('//*[@id="root"]//label[@for="email"]').should("be.visible").then(($btn) => {
        cy.xpath('//*[@id="root"]//label[@for="email"]')
            .type('rajakumar.thakur18@gmail.com')
    })

    Cypress.log(cy.get('label'))


    cy.get('.mr-1').click()
    cy.get('#password').type('testing@123', {force: true})

    cy.get('[data-testid=form] > .btn').click()

    // Post Login- Operation
    cy.get('a > .d-none').click()
    cy.wait(5000)
    cy.get('.btn > .d-none').click()

    cy.get('.no-style > :nth-child(1) > .btn-group > .dropdown-menu > :nth-child(1)').click()
    cy.get('.cm-dashboard').click({force: true})

    //Create an airmeet

    cy.wait(2000)

    cy.get('#name').type('test_airmeet')

    cy.get('#name').should("be.visible").then(($btn) => {
        cy.get('#name')
            .clear()
            .type('test_airmeet')
            .should('have.value','test_airmeet')
    })

    cy.get('#description').should("be.visible").then(($btn) => {
        cy.get('#description')
            .clear()
            .type('test')
            .should('have.value','test')
    })

    cy.get('.slider').click()

    //cy.get(':nth-child(2) > .inner').click()

    cy.get('.form-btn > .btn').click()

    cy.contains('Create this Airmeet').should("be.visible").click()

    cy.contains('Add details now').should("be.visible").click()

    cy.contains('I will add details later').should("be.visible").click()

    cy.post_airmeet_creation_validation()

    /* cy.get('.tab-content > :nth-child(1)').should("be.visible").then(($btn) => {

       cy.get('.heading').should('contain', 'Airmeet successfully updated')
       cy.get('.inner > :nth-child(1)').should('contain','An event page for your airmeet has been created. Once you go live, anyone with the event link or your community members can be a part of same.')
       cy.get('.inner > :nth-child(2)').should('contain', 'Upcoming Airmeet summary')
       cy.get('.inner > :nth-child(4)').should('contain', 'Share link')

       cy.get('.inner > :nth-child(7)')
           .should("be.visible")
           .should('have.text', 'Go to Airmeet')

     })*/

    /* cy.wait(2000)

     cy.get('.copy_url > p').then(($btn) => {
         link_text = $btn.text()
         //const link_text = $btn.text()
         cy.visit(link_text)

     })*/
    //cy.get('button[class="close btn-close"]').click({force:true}, {multiple:true})

})

Cypress.Commands.add(
    'paste',
    {prevSubject: true},
    function (subject, pasteOptions) {
        const {pastePayload, pasteType} = pasteOptions;
        const data = pasteType === 'application/json' ? JSON.stringify(pastePayload) : pastePayload;
        // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
        const clipboardData = new DataTransfer();
        clipboardData.setData(pasteType, data);
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
        const pasteEvent = new ClipboardEvent('paste', {
            bubbles: true,
            cancelable: true,
            dataType: pasteType,
            data,
            clipboardData,
        });
        subject[0].dispatchEvent(pasteEvent);

        return subject;
    }
);



/*
Cypress.Commands.add('post_airmeet_creation_validation',(username=" test",
                                                         password="test") => {
    cy.get('.tab-content > :nth-child(1)').should("be.visible").then(($btn) => {

        cy.get('.heading').should('contain', 'Airmeet successfully updated')
        cy.get('.inner > :nth-child(1)').should('contain','An event page for your airmeet has been created. Once you go live, anyone with the event link or your community members can be a part of same.')
        cy.get('.inner > :nth-child(2)').should('contain', 'Upcoming Airmeet summary')
        cy.get('.inner > :nth-child(4)').should('contain', 'Share link')

        cy.get('.inner > :nth-child(7)')
            .should("be.visible")
            .should('have.text', 'Go to Airmeet')

    })
})*/
