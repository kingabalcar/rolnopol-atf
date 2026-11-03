import { expect, test } from "@playwright/test";

test("displays the Rolnopol homepage", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Rolnopol");
});
