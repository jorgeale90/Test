import {Page, expect} from "@playwright/test";

export default class CountryPage {

    constructor(public page: Page){ }

    private Elements = {
        //item: "ul#navbarVerticalNav>li:nth-of-type(2)>a",
        subitem: "//span[text()='País']",
        //addcountry: "//button[text()='Añadir País']",
        inputCountry: "Nombre del País",
        buttonAdd: "//button[@type='submit']"
    }

    async clickButtonLocation(){
        await this.page.getByRole('button', { name: 'Localización' }).click();
        //await this.page.locator(this.Elements.item).click();
    }

    async clickButtonCountry(){
        await this.page.locator(this.Elements.subitem).click();
    }

    async clickButtonAddCountry(){
        await this.page.getByRole('button', { name: 'Añadir País' }).click();
        //await this.page.locator(this.Elements.addcountry).click();
    }

    async fillCountryModal(){
        await this.page.getByPlaceholder(this.Elements.inputCountry).click();
        await this.page.getByPlaceholder(this.Elements.inputCountry).fill('Cuba');
    }

    async clickButtonAdd(){
        await this.page.locator(this.Elements.buttonAdd).click();
    }
}