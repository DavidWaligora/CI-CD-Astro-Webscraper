import { test, expect } from '@playwright/test';


test('Test page', async ({ page }) => {
  await page.goto('http://localhost:4321/astro-build');
  // 1. Controleer de titel van de pagina
  const header = page.locator('h1.text-3xl');
  await expect(header).toHaveText("Game discount checker");
  

  // 2. Controleer of het input veld met id 'simple-search' aanwezig is
  const searchInput = page.locator("#simple-search");
  await expect(searchInput).toBeVisible();
  await expect(searchInput).toHaveAttribute(
    "placeholder",
    "Search branch name..."
  );

  // 3. Controleer of er ten minste 2 games in de lijst staan
  const gameList = page.locator("ul.divide-y");
  const gameItems = gameList.locator("li.game-item");
  // To check for more than one, get count and assert it
  const gameCount = await gameItems.count();
  expect(gameCount).toBeGreaterThan(1);
});
