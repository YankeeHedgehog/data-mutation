import { useState } from "react";
import { readExcelFile } from "./utils/readExcel";
import { loginWithPlaywright } from "./utils/login";

const Home = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (file) {
      const loginData = await readExcelFile(file);
      await loginWithPlaywright(loginData);
    }
  };

  return (
    <div>
      <h1>Excelファイルをアップロードしてログイン</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>ログイン</button>
    </div>
  );
};

export default Home;
