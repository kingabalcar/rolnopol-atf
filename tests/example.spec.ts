import { expect, test } from "@playwright/test";

test("shows the Rolnopol home page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Rolnopol");
  await expect(
    page.getByRole("heading", { name: "Welcome to Rolnopol" }),
  ).toBeVisible();
});
