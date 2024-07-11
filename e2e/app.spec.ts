import { setupClerkTestingToken } from '@clerk/testing/playwright'
import { test } from '@nuxt/test-utils/playwright'

test.describe('app', () => {
  test('sign -in', async ({ page, goto }) => {
    await setupClerkTestingToken({ page })

    await goto('/', { waitUntil: 'hydration' })
    // await expect(page.locator("h1")).toContainText("Sign In")
    await page.goto('/dashboard')
    await page.waitForSelector('.cl-signIn-root', { state: 'attached' })
    await page.locator('input[name=identifier]').fill(process.env.E2E_CLERK_USER_USERNAME!)
    await page.getByRole('button', { name: 'Continue', exact: true }).click()
    await page.locator('input[name=password]').fill(process.env.E2E_CLERK_USER_PASSWORD!)
    await page.getByRole('button', { name: 'Continue', exact: true }).click()
    await page.waitForURL('**/dashboard')
  })

  test('sign up', async ({ page }) => {
    await setupClerkTestingToken({ page })

    await page.goto('/sign-up')
    // await expect(page.locator("h1")).toContainText("Sign Up");
    await page.waitForSelector('.cl-signUp-root', { state: 'attached' })
    await page.locator('input[name=username]').fill(`user${Date.now()}`)
    await page.locator('input[name=emailAddress]').fill(`user${Date.now()}+clerk_test@example.com`)
    await page.locator('input[name=password]').fill(`Pass!@${Date.now()}`)
    await page.getByRole('button', { name: 'Continue', exact: true }).click()
    await page.waitForSelector('.cl-signUp-emailCode', { state: 'attached' })
    await page.locator('input[id=digit-0-field]').fill('424242')
    await page.getByRole('button', { name: 'Continue', exact: true }).click()
    await page.waitForURL('**/dashboard')
  })
})
