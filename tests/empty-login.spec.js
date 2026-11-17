import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  await page.goto('/')

  const loginButton = page.locator('[data-marker="login-button-desktop"]');
  await loginButton.click();

  const loginSubmitButton = page.locator('[data-marker="login-submit-button"]');
  await loginSubmitButton.click();

  const emailError = page.locator('[data-marker="email-error"]')
  await expect(emailError).toHaveText('Email обязателен');

  const passwordError = page.locator('[data-marker="password-error"]')
  await expect(passwordError).toHaveText('Пароль обязателен');
});
