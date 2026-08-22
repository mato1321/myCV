# Professional Profile

我要做一個個人履歷網站。我上傳了我的履歷 PDF，請讀裡面的內容來建立這個網站。

【網站要有的內容】

1. 首頁最上方：我的名字、一句話自我介紹、聯絡方式

2. 工作／實習經歷（用時間軸或卡片呈現，最新的在上面）

3. 技能專長

4. 學歷

5. 專案作品（如果 PDF 裡面有的話）

【一定要有的功能】

請在首頁明顯的位置放一個按鈕，文字是「查看完整履歷 PDF」。

點下去要在新分頁開啟 /resume.pdf 這個檔案。

請直接用一般的 <a> 連結，href 寫死成 "/resume.pdf"，並加上 target="_blank" 和 rel="noopener"。

PDF 檔案本身我等一下會自己放進 public 資料夾，你不需要處理檔案。

【重要限制，請務必遵守】

1. 這個網站之後要放在 GitHub Pages，那是純靜態空間，沒有後端

2. 所以請不要使用 Lovable Cloud、不要用資料庫、不要做登入功能、不要做聯絡表單送出功能

3. 不要串接任何需要金鑰的外部 API

4. 全站使用繁體中文

5. 手機上也要好看

【風格】

【簡潔專業，適合給面試官看。配色以白底加深藍色為主。】

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/29fd1e86-51d0-4207-95ad-4dad9f82b9ab).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
