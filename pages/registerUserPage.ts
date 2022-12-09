import {expect, Page, selectors} from "@playwright/test";

const filePath = 'upload/user/user.jpg';

export default class RegisterUserPage{

    constructor(public page: Page){ }

    async clickOptionUsuarios(){
        await this.page.getByRole('link', { name: 'Usuarios' }).click()
    }

    async clickAnnadirUsuario(){
        await this.page.click("'Añadir Usuario'")
    }

    async fillNombreUsuario(){
        const nameuser = await this.page.$("input[name='user[firstname]']")
        await nameuser?.type("Melba Alina", {delay: 100})
        //await this.page.fill("input[name='user[firstname]']", "Melba Alina");
    }

    async fillApellidoUsuario(){
        const lastuser = await this.page.$("input[name='user[lastname]']")
        await lastuser?.type("Borges Toirac", {delay: 100})
    }

    async fillEmailUsuario(){
        const emailuser = await this.page.$("input[name='user[email]']")
        await emailuser?.type("melbaalina@infomed.sld.cu", {delay: 100})
    }

    async fillTelefonoUsuario(){
        const emailuser = await this.page.$("input[name='user[phone]']")
        await emailuser?.type("+53 55062418", {delay: 100})
    }

    async fillRolUsuario(){
        await this.page.getByRole('textbox', { name: 'false' }).click()
        await this.page.getByRole('option', { name: 'Admin' }).click()
        await this.page.getByRole('button', { name: 'Remove item: \'ROLE_USER\'' }).click()
        await this.page.getByRole('option', { name: 'User' }).click()

        await this.page.waitForTimeout(100)
    }

    async fillPasswordUsuario(){
        const passuser = await this.page.$("input[name='user[password]']")
        await passuser?.type("123456789", {delay: 100})
    }

    async checkVerificadoUsuario(){
        //Un-check 
        await this.page.uncheck('#user_isVerified')
        //Check
        await this.page.check('#user_isVerified')
    }

    async enterimageUsuario(){
        // await this.page.locator("input[type='file']").click();
        // await this.page.locator("input[type='file']").setInputFiles(filePath);
        // await this.page.locator('filePath').click();
        const [uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.click("#user_imageFile_file")
        ])
        const isMultiple = uploadFiles.isMultiple();
        console.log(isMultiple);
        uploadFiles.setFiles(
            [filePath]
        )
        await this.page.waitForTimeout(1000);
    }

    async clickAñadirUser(){
        await this.page.click('#dom-acad147e-baf6-45ac-9057-cc59f4f6cba7 > div.form-group.row > div > div > button:nth-child(1)')
    }
}