import { test, expect } from '@playwright/test';

test('task list renders with items', async ({ page }) => {
  await page.goto('/');

  const taskList = page.getByTestId('task-list');
  await expect(taskList).toBeVisible();

  const items = taskList.locator('li');
  await expect(items).toHaveCount(3);
});

test('at least one checkbox is visible', async ({ page }) => {
  await page.goto('/');

  const firstCheckbox = page.getByTestId('checkbox-task-1');
  await expect(firstCheckbox).toBeVisible();
});
