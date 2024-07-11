import puppeteer from 'puppeteer'
import ExcelJS from 'exceljs'

interface Credential {
  url: string
  username: string
  password: string
}

async function readExcel(file: string): Promise<Credential[]> {
  const workbook = new ExcelJS.Workbook()
  await workbook.xlsx.readFile(file)
  const worksheet = workbook.getWorksheet(1)
  const data: Credential[] = []

  if (!worksheet) return data

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      // Assuming the first row is the header
      const values = row.values as (string | undefined)[]
      const [url, username, password] = values
        .slice(1)
        .map((value) => value?.toString()) // Adjust if needed

      url &&
        username &&
        password &&
        data.push({ url: url, username: username, password: password })
    }
  })

  return data
}

async function login(
  url: string,
  username: string,
  password: string
): Promise<void> {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url)

  await page.type('input[name="username"]', username) // Adjust the selector as needed
  await page.type('input[name="password"]', password) // Adjust the selector as needed

  await page.click('button[type="submit"]') // Adjust the selector as needed

  // Wait for navigation or any post-login activity
  await page.waitForNavigation()

  // Optionally, close the browser
  // await browser.close();
}

;(async () => {
  const excelFilePath = 'path/to/your/excel/file.xlsx'
  const credentials = await readExcel(excelFilePath)

  for (const { url, username, password } of credentials) {
    await login(url, username, password)
  }
})()
