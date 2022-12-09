import {Page} from "@playwright/test";

export default class LandingPage{

    constructor(public page: Page){ }

    async clickHead0(){
        await this.page.locator('a:has-text("Inicio")').click()
    }

    async clickHead1(){
        await this.page.locator('a:has-text("Caracteristicas")').click()
    }

    async clickHead2(){
        await this.page.locator('a:has-text("Servicio")').click()
    }

    async clickHead3(){
        await this.page.locator('a:has-text("Equipo")').click()
    }

    async clickHead4(){
        await this.page.locator('a:has-text("Precios")').click()
    }
}