import {Page, expect} from "@playwright/test";

export default class ProvincePage {

    constructor(public page: Page){ }

    private Elements = {
        item: "//a[contains(.,'Localización')]",
        subitem: "//span[text()='Provincia']",
        addprovince: "//button[@data-bs-target='#staticBackdrop']",
        selectcountry: ".choices__inner",
        inputprovince: "Nombre de la Provincia",
        buttonAdd: "//button[@type='submit']"
    }

    async clickButtonLocation(){
        await this.page.locator(this.Elements.item).click();
    }

    async clickButtonProvince(){
        await this.page.locator(this.Elements.subitem).click();
    }

    async clickButtonAddProvince(){
        await this.page.locator(this.Elements.addprovince).click();
    }

    async selectCountryModal(){
        await this.page.locator(this.Elements.selectcountry).click();
        await this.page.getByRole('option', { name: 'Cuba' }).click();
    }

    async fillProvinceModal(){
        await this.page.getByPlaceholder(this.Elements.inputprovince).click();
        await this.page.getByPlaceholder(this.Elements.inputprovince).fill('Santiago de Cuba');
    }

    async clickButtonAdd(){
        await this.page.locator(this.Elements.buttonAdd).click();
    }
}