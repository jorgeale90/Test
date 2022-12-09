import {Page, expect} from "@playwright/test";

export default class LoginPage{

    constructor(public page: Page){ }

    async clickButtonLogin(){
        await this.page.getByRole('link', { name: 'Login' }).click();
    }

    async fillEmail() {
        await this.page.fill("input[name='email']", 'jorgealec90@gmail.com')
    }

    async fillPassword(){
        await this.page.fill("input[name='password']", 'Gorillaz123/*-+')
    }

    async clickLogin(){
        await this.page.click('button:text("Iniciar sesión")');
    }

    async clickLogout(){
        await this.page.locator('#navbarDropdownUser').click();
        await this.page.locator('#top > div > div > nav > ul > li:nth-child(4) > div > div > a:nth-child(8)').click();
    }

}