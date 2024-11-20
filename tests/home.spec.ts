import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("check page metadata", () => {
  test("check page title", async ({ page }) => {
    expect((await page.title()) === "Byte Robotics");
  });
});
