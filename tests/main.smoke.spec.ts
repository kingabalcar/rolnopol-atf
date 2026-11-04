import { expect, test } from "@playwright/test";

test(
  "displays the Rolnopol homepage",
  { tag: ["@smoke", "@public"] },
  async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Rolnopol");
  },
);
