import { expect, test } from "@playwright/test";

const homePageTitle = "Rolnopol";
const loginPageTitle = "Login - Rolnopol";
const registrationPageTitle = "Register - Rolnopol";
const swaggerPageTitle = "Rolnopol - Swagger";
const docsPageTitle = "Documentation - Rolnopol";

test(
  "displays the Rolnopol homepage",
  { tag: ["@smoke", "@public"] },
  async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(homePageTitle);
  },
);

test(
  "displays the login page",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    const response = await page.goto("/login.html");

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(loginPageTitle);
    await expect(page.getByRole("main")).toBeVisible();
  },
);

test(
  "displays the registration page",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    const response = await page.goto("/register.html");

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(registrationPageTitle);
    await expect(page.getByRole("main")).toBeVisible();
  },
);

test(
  "displays the Swagger API title",
  { tag: ["@smoke", "@public"] },
  async ({ page }) => {
    const response = await page.goto("/swagger.html", {
      waitUntil: "domcontentloaded",
    });

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(swaggerPageTitle);
  },
);

test(
  "displays the documentation page",
  { tag: ["@smoke", "@public"] },
  async ({ page }) => {
    const response = await page.goto("/docs.html");

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(docsPageTitle);
  },
);
