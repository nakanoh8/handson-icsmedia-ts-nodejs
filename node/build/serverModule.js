"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerAPI = void 0;
const http = require("http");
class ServerAPI {
    initServer() {
        // httpサーバーを設定する
        const server = http.createServer((req, res) => {
            this.requestHandler(req, res);
        });
        server.listen(5000);
        console.log('http://localhost:5000 へアクセスください');
    }
    /**
     * サーバーにリクエストがあった時に実行される関数
     */
    requestHandler(req, res) {
        res.end("Call From ServeAPI Class");
    }
}
exports.ServerAPI = ServerAPI;
//# sourceMappingURL=serverModule.js.map