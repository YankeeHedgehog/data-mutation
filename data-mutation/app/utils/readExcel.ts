import ExcelJS from "exceljs";

interface LoginData {
  URL: string;
  Username: string;
  Password: string;
}

export const readExcelFile = async (file: File): Promise<LoginData[]> => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(file);

  const worksheet = workbook.getWorksheet(1); // 1番目のシートを取得
  const loginData: LoginData[] = [];

  worksheet &&
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        // ヘッダーをスキップ
        const URL = row.getCell(1).value as string;
        const Username = row.getCell(2).value as string;
        const Password = row.getCell(3).value as string;
        loginData.push({ URL, Username, Password });
      }
    });

  return loginData;
};
