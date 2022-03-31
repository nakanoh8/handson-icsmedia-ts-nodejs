"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverModule_1 = require("./serverModule");
// classを指定してクラス化
class Main {
    // コンストラクター
    constructor() {
        // serverModuleの中のServerAPIクラスのインスタンスを作成
        const serverAPI = new serverModule_1.ServerAPI();
        // ServerAPIの関数を実行
        serverAPI.initServer();
    }
}
// Mainクラスのインスタンスを作る
new Main();
//# sourceMappingURL=app.js.map