import { ServerAPI } from './serverModule';

// classを指定してクラス化
class Main {
    // コンストラクター
    constructor() {
        // serverModuleの中のServerAPIクラスのインスタンスを作成
        const serverAPI = new ServerAPI();
        // ServerAPIの関数を実行
        serverAPI.initServer();
    }
}

// Mainクラスのインスタンスを作る
new Main();
