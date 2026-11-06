import { expect, test } from "@playwright/test";

const WELCOME_TO_ROLNOPOL = "Welcome to Rolnopol";
const USER_LOGIN_SUBTITLE = "User Login & Account Access";
const CREATE_USER_ACCOUNT = "Create Your User Account";
const API_EXPLORER = "API Explorer";
const SYSTEM_GUIDE_API_REFERENCE = "System Guide & API Reference";

test(
  "displays the Rolnopol homepage",
  { tag: ["@smoke", "@public"] },
  async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: WELCOME_TO_ROLNOPOL }),
    ).toHaveText(WELCOME_TO_ROLNOPOL);
  },
);

test(
  "displays the login page",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    const response = await page.goto("/login.html");
    expect(response?.status()).toBe(200);
    await expect(page.getByTestId("login-subtitle")).toHaveText(
      USER_LOGIN_SUBTITLE,
    );
  },
);

test(
  "displays the registration page",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    const response = await page.goto("/register.html");
    expect(response?.status()).toBe(200);
    await expect(page.getByTestId("register-subtitle")).toHaveText(
      CREATE_USER_ACCOUNT,
    );
  },
);

test(
  "displays the Swagger API explorer link",
  { tag: ["@smoke", "@public"] },
  async ({ page }) => {
    const response = await page.goto("/swagger.html", {
      waitUntil: "domcontentloaded",
    });
    expect(response?.status()).toBe(200);
    await expect(page.getByTestId("nav-api-explorer")).toHaveText(API_EXPLORER);
  },
);

test(
  "displays the documentation page",
  { tag: ["@smoke", "@public"] },
  async ({ page }) => {
    const response = await page.goto("/docs.html");
    expect(response?.status()).toBe(200);
    await expect(page.getByTestId("docs-header")).toContainText(
      SYSTEM_GUIDE_API_REFERENCE,
    );
  },
);
