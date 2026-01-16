# Grafana Webhook Debugger

這是一個輕量級的 Webhook 監聽伺服器，專門用於除錯 Grafana Alerting 通知問題。

## 🎯 專案目的

本專案的建立是因為在使用 Grafana 設定 Contact Points (Telegram) 時遇到訊息無法送達且無錯誤訊息的狀況。為了排查問題，我們建立這個 Webhook Server 來直接攔截並顯示 Grafana 發出的 Alert Payload。

透過這個工具，你可以：
1. 確認 Grafana 是否真的有發出 Alert。
2. 檢視 Grafana 發出的完整 JSON 資料結構。
3. 驗證 label 與 annotation 的內容是否符合預期。

## 🚀 功能特色

- **彩色日誌**：使用 ANSI 顏色碼區分 HTTP 方法、URL、時間戳記與內容，提升閱讀性。
- **結構化輸出**：自動將接收到的 JSON Body 格式化並展開，方便閱讀巢狀結構。
- **錯誤處理**：包含基礎的錯誤捕捉，避免因為格式錯誤導致伺服器崩潰。
- **彈性配置**：支援透過環境變數 `PORT` 修改監聽埠口。

## 🛠️ 安裝與執行

### 前置需求
- Node.js (建議 v18+)

### 1. 安裝依賴
```bash
npm install express
```

### 2. 啟動伺服器
```bash
# 預設監聽 9999 port
node server.js

# 或者指定其他 port
PORT=3000 node server.js
```

### 3. VS Code 除錯
本專案已包含 `.vscode/launch.json`，您可以直接在 VS Code 中按下 `F5` 啟動除錯模式。

## ⚙️ Grafana 設定範例

在 Grafana 的 **Contact Points** 設定中：

1. **Integration**: 選擇 `Webhook`
2. **URL**: 輸入本機伺服器位址
   - 若 Grafana 運行於 Docker 中，請使用：`http://host.docker.internal:9999/test`
   - 若直接運行，請使用：`http://localhost:9999/test`
3. **HTTP Method**: POST
4. 點擊 **Test** 按鈕發送測試通知，你應該會在終端機看到彩色的 Payload 輸出。
