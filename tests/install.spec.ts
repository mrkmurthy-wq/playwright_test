import {test, expect} from '@playwright/test'
test('install test', async ({page}) => {
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'Search' }).fill('test');
    await page.getByRole('button', { name: 'Google Search' }).press('Enter');
    await expect(page.locator('iframe[name="*"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' })).toBeVisible()
})