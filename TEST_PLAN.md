# Rolnopol Application Test Plan

## Purpose

Verify the application's core user journeys and the rules described in the
[official Rolnopol documentation](http://localhost:3000/docs.html). This is a
small functional smoke-test plan, not an exhaustive regression or security
test.

## Test setup

- Start the application and confirm it is available at `http://localhost:3000`.
- Use the demo accounts listed in the documentation for role-based and
  multi-user checks. Use a newly registered account for the farm setup flow.
- Use disposable test data. Restore or remove created data after testing.
- Check feature-flagged scenarios only when the corresponding feature is
  enabled.

## Test cases

| ID    | Scenario                             | Tags                           | Steps                                                                                                                                                                                          | Expected result                                                                                                                                                           |
| ----- | ------------------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TP-01 | Public pages and API docs            | `@smoke`, `@public`            | Open the home page, `/docs.html`, and `/swagger.html`.                                                                                                                                         | Pages load and navigation links work; Swagger UI is available for API exploration.                                                                                        |
| TP-02 | Register, log in, and log out        | `@smoke`, `@auth`              | Register with a unique email, confirm the user is signed in, log out, then log in again. Try a login with an invalid password.                                                                 | Registration and valid login succeed; logout ends the session; invalid login shows an error without signing in.                                                           |
| TP-03 | Farm setup and resource management   | `@smoke`, `@farm`              | As a farmer, add a field, animal, staff member, and staff-to-field assignment. Review the farm dashboard, then edit or remove a test resource.                                                 | Changes are saved and reflected in the farm data; the assignment links the intended staff member and field.                                                               |
| TP-04 | Role-based access                    | `@smoke`, `@access-control`    | Sign in as a farmer and attempt to access an admin-only view or action. Repeat with the appropriate documented admin role, if available.                                                       | Farmers can manage their own farm but cannot access admin/superadmin capabilities; authorized roles can access their permitted functions.                                 |
| TP-05 | Marketplace sale and purchase        | `@smoke`, `@marketplace`       | As one user, offer an unassigned field or animal for sale. As another user with sufficient funds, purchase it. Check both users' resources, balances, offer status, and transaction histories. | The offer is listed and purchasable; ownership transfers, balances and transaction histories update, and the offer is marked sold.                                        |
| TP-06 | Marketplace restrictions             | `@smoke`, `@marketplace`       | Attempt to offer an assigned/in-use asset and attempt to buy an offer priced above the buyer's balance.                                                                                        | An assigned asset cannot be bought or sold; an insufficient-funds purchase is blocked and does not change ownership, balances, or transaction history.                    |
| TP-07 | Financial operations                 | `@smoke`, `@finance`           | View an account balance and transaction history; perform a permitted transfer between users, if available.                                                                                     | The balance and history are shown; a valid transfer updates the appropriate accounts; spending beyond the available balance is rejected.                                  |
| TP-08 | Optional alerts and contact features | `@smoke`, `@optional-features` | When enabled, open `/alerts.html`, try the severity filter if enabled, and submit `/contact.html` with valid form data.                                                                        | Alerts load and the filter narrows results; contact submission is accepted and a confirmation is shown. When disabled, the relevant feature is unavailable as documented. |

## Test tags

Treat the scenarios and tags in this plan as the source of truth when creating
or updating tests. Use the tags as Playwright test tags (for example,
`tag: ["@auth"]`) and filter cases with `npx playwright test --grep @auth`.
Keep this plan synchronized with the test suite: update its scenarios and tag
assignments whenever tests or supported tags change, and document new tags
here before using them. The shared `@smoke` tag selects all cases in this plan.

## Completion criteria

- All applicable cases pass, or failures are recorded with the test ID,
  steps to reproduce, and observed versus expected results.
- Optional feature cases are marked **Not run** when their feature flags are
  disabled.

## Documentation reference

Source: [Rolnopol System Guide & API Reference](http://localhost:3000/docs.html),
especially **Key User Flows**, **API Basics**, **Testing Tips**, **Asset–Finance–Marketplace Flow**,
**End-to-End Scenarios**, and the feature-flagged **Alerts** and **Contact Form** sections.
