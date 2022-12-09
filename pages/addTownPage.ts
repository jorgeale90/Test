import {Page} from "@playwright/test";

export default class TownPage {

    constructor(public page: Page){ }

    private Elements = {
        item: "//a[contains(.,'Localización')]",
        subitem: "//span[text()='Municipio']",
        addtown: "//button[@data-bs-target='#staticBackdrop']",
        selectprovince: ".choices__inner",
        inputtown: "Nombre del Municipio",
        buttonAdd: "//button[@type='submit']"
    }

    async clickButtonLocation(){
        await this.page.locator(this.Elements.item).click();
    }

    async clickButtonTown(){
        await this.page.locator(this.Elements.subitem).click();
    }

    async clickButtonAddTown(){
        await this.page.locator(this.Elements.addtown).click();
    }

    async selectProvinceModal(){
        await this.page.locator(this.Elements.selectprovince).click();
        await this.page.getByRole('option', { name: 'Santiago de Cuba' }).click();
    }

    async fillTownModal(){
        await this.page.getByPlaceholder(this.Elements.inputtown).click();
        await this.page.getByPlaceholder(this.Elements.inputtown).fill('Santiago de Cuba');
    }

    async clickButtonAdd(){
        await this.page.locator(this.Elements.buttonAdd).click();
    }
}