import { expect, test } from "@playwright/test";

test(
  "displays the Rolnopol homepage",
  { tag: ["@smoke", "@public"] },
  async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Rolnopol");
  },
);

test(
  "displays the login page",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    const response = await page.goto("/login.html");

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle("Login - Rolnopol");
    await expect(page.getByRole("main")).toBeVisible();
  },
);

test(
  "displays the registration page",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    const response = await page.goto("/register.html");

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle("Register - Rolnopol");
    await expect(page.getByRole("main")).toBeVisible();
  },
);
