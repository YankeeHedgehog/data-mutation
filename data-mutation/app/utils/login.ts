import { chromium } from "playwright";

interface LoginData {
  URL: string;
  Username: string;
  Password: string;
}

export const loginWithPlaywright = async (loginData: LoginData[]) => {
  for (const data of loginData) {
    const { URL, Username, Password } = data;

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(URL);
    await page.fill('input[type="email"]', Username);
    await page.click('button[type="submit"]'); // 例として
    await page.waitForSelector('input[type="password"]');
    await page.fill('input[type="password"]', Password);
    await page.click('button[type="submit"]');

    await page.waitForNavigation();
    console.log(`ログイン成功: ${URL}`);

    await browser.close();
  }
};
