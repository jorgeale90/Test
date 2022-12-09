import { test, expect } from '@playwright/test';

import LandingPage from '../pages/landingPage';
import LoginPage from '../pages/loginPage';
import RegisterUserPage from '../pages/registerUserPage';
import AddCountryPage from '../pages/addCountryPage';
import AddProvincePage from '../pages/addProvincePage';
import AddTownPage from '../pages/addTownPage';
import TownPage from '../pages/addTownPage';

test.describe("Test Software MenuTo-Go", async () => {

    test.use({
        baseURL: "https://127.0.0.1:8000"
    })

    test("Goto Sign up page", async ({ page }) => {
        await page.goto("/login");
        expect(page.url()).toBe("https://127.0.0.1:8000/login")

    });

    /**
     * En esta prueba, usamos httpCredentials para
     * para cuando nuestro sistema este en un proxy
     * automaticamente se registre.
     */
    test("Http Authentication", async ({ browser }) => {
      const context = await browser.newContext({
          httpCredentials: {
              username: "jorge",
              password: "Gorillaz123/*-+"
          }
      })
      const page = await context.newPage();
      await page.goto("https://127.0.0.1:8000");
      const header = await page.$("h2");
      if (header) {
          console.log(await header.textContent());
          expect(await header.textContent()).toBe("Características Impresionantes");
      }
    })

    /**
     * En esta prueba, usamos page.title() para
     * devolver información del título de la página web
     */
    test("Title Project Test", async ({ browser }) => {
        const context = await browser.newContext({
            httpCredentials: {
                username: "jorge",
                password: "Gorillaz123/*-+"
            }
        })
        const page = await context.newPage();
        await page.goto("https://127.0.0.1:8000")
        
        console.log(await page.title());

        await page.close();
    });

    /**
     * En esta prueba, usamos request.timing() para
     * devolver información de tiempo sobre la solicitud
     * @see https://playwright.dev/docs/api/class-request#request-timing
     */
    test('Get resource timing of request', async ({page}) => {
      const [request] = await Promise.all([
        page.waitForEvent('requestfinished'),
        page.goto('https://127.0.0.1:8000'),
      ]);
      console.log(request.timing());

      await page.close();
    });

    test("Test running log", async ({ page }) => {
      console.log("second test running");
      await page.goto("https://127.0.0.1:8000")
      console.log("second test completed");
    });

    test('Should be able to use assertions', async ({page}) => {
      await page.goto("https://127.0.0.1:8000")
      await expect(page).toHaveTitle('Menu To-Go - Home');
      await expect(page).toHaveURL('https://127.0.0.1:8000');
      await page.close();
    });

    test ("Landingpage MenuTo-Go test_01", async ({ page }) => {
        const landing = new LandingPage(page);
        await page.goto('https://127.0.0.1:8000');
        
        await landing.clickHead1();
        await landing.clickHead2();
        await landing.clickHead3();
        await landing.clickHead4();
        await landing.clickHead0();
    })

    test ("Login MenuTo-Go test_02", async ({ page }) => {
      const loginPage = new LoginPage(page);
      await page.goto('https://127.0.0.1:8000');
      
      await loginPage.clickButtonLogin();
      await loginPage.fillEmail();
      await loginPage.fillPassword();
      await loginPage.clickLogin();
      await loginPage.clickLogout();

      await page.close();
    })

    test ("Register User MenuTo-Go test_03", async ({ page }) => {
      const loginPage = new LoginPage(page);
      const registerPage = new RegisterUserPage(page);

      await page.goto('https://127.0.0.1:8000');
      
      await loginPage.clickButtonLogin();
      await loginPage.fillEmail();
      await loginPage.fillPassword();
      await loginPage.clickLogin();

      await registerPage.clickOptionUsuarios();
      await registerPage.clickAnnadirUsuario();
      await registerPage.fillNombreUsuario();
      await registerPage.fillApellidoUsuario();
      await registerPage.fillEmailUsuario();
      await registerPage.fillTelefonoUsuario();
      await registerPage.fillRolUsuario();
      await registerPage.fillPasswordUsuario();
      await registerPage.checkVerificadoUsuario();
      await registerPage.enterimageUsuario();
      await registerPage.clickAñadirUser();
    })

    test ("Add Country MenuTo-Go test_04", async ({ page }) => {
      const loginPage = new LoginPage(page);
      const addCountryPage = new AddCountryPage(page);

      await page.goto('https://127.0.0.1:8000');
      
      await loginPage.clickButtonLogin();
      await loginPage.fillEmail();
      await loginPage.fillPassword();
      await loginPage.clickLogin();

      await addCountryPage.clickButtonLocation();
      await addCountryPage.clickButtonCountry();
      await addCountryPage.clickButtonAddCountry();
      await addCountryPage.fillCountryModal();
      await addCountryPage.clickButtonAdd();
    })

    test ("Add Province MenuTo-Go test_05", async ({ page }) => {
      const loginPage = new LoginPage(page);
      const addProvincePage = new AddProvincePage(page);

      await page.goto('https://127.0.0.1:8000');
      
      await loginPage.clickButtonLogin();
      await loginPage.fillEmail();
      await loginPage.fillPassword();
      await loginPage.clickLogin();

      await addProvincePage.clickButtonLocation();
      await addProvincePage.clickButtonProvince();
      await addProvincePage.clickButtonAddProvince();
      await addProvincePage.selectCountryModal();
      await addProvincePage.fillProvinceModal();
      await addProvincePage.clickButtonAdd();
    })

    test ("Add Town MenuTo-Go test_06", async ({ page }) => {
      const loginPage = new LoginPage(page);
      const townPage = new TownPage(page);

      await page.goto('https://127.0.0.1:8000');
      
      await loginPage.clickButtonLogin();
      await loginPage.fillEmail();
      await loginPage.fillPassword();
      await loginPage.clickLogin();

      await townPage.clickButtonLocation();
      await townPage.clickButtonTown();
      await townPage.clickButtonAddTown();
      await townPage.selectProvinceModal();
      await townPage.fillTownModal();
      await townPage.clickButtonAdd();
    })

    const computerData = [{
        name: "AA Lotus",
        manufacture: "Tandy Corporation"
    },
    {
        name: "Foxcum",
        manufacture: "Commodore International"
    },
    {
        name: "Selium",
        manufacture: "Thinking Machines"
    },
    {
        name: "Insilium",
        manufacture: "Nokia"
    }
    ]
    computerData.forEach(data => {

      test(`Parameterized test ${data.name}`, async ({ browser }) => {
        const context = await browser.newContext({
              httpCredentials: {
                  username: "jorge",
                  password: "Gorillaz123/*-+"
              }
          })
          const page = await context.newPage();
          

          await page.goto("https://computer-database.gatling.io/computers");
          await page.click("#add");
          await page.fill("#name", data.name);
          await page.selectOption("#company", {
              label: data.manufacture
          });
          await page.click("input[type='submit']");
          expect(page.locator("div.alert-message.warning")).toContainText("Done")
      })
  })
  }
);
