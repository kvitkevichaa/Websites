Для запуска проекта требуется:
1) Node.js
2) npm

Чтобы установить пакеты, наберите в консоли:
npm i

После установки пакетов, наберите в консоли:
npx json-server --watch db.json

Это запустит web-server на http://localhost:3000. Также, запустится JSON-Server, данные из которого можно получить с http://localhost:3000/data