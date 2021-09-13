// type definitions for Cypress object "cy"
// <reference types="cypress" />

import * as assert from "assert";

describe('Automation Test Suite 1 ', function() {

    //Mostly used for Setup Part
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

   /* BLOCKER = "blocker",
        CRITICAL = "critical",
        NORMAL = "normal",
        MINOR = "minor",
        TRIVIAL = "trivial"*/
    //@Severity(SeverityLevel.BLOCKER)
    it('Cypress Test Case', function () {
        //Object Creation for PageObject Page Class and assigning it to a constant variable



    })

    it('Cypress Test Case', function () {


        expect(true).to.be.true;

    })

    it('Cypress second Case', function () {

        expect(true).to.be.true;

    })

})

describe('Automation Test Suite 2 ', function() {

    //Mostly used for Setup Part
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it('Cypress Test Case', function () {
        //Object Creation for PageObject Page Class and assigning it to a constant variable


    })

    it('Cypress Test Case', function () {


        expect(true).to.be.true;

    })

    it('Cypress second Case', function () {

        expect(true).to.be.true;

    })

})