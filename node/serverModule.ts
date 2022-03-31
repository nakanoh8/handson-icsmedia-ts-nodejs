import * as http from 'http';

export class ServerAPI {
    public initServer(): void {
        // httpサーバーを設定する
        const server: http.Server = http.createServer(
            (req: http.IncomingMessage, res: http.ServerResponse) => {
                this.requestHandler(req, res);
            }
        );
        server.listen(5000);
        console.log('http://localhost:5000 へアクセスください');
    }

    /**
     * サーバーにリクエストがあった時に実行される関数
     */
    private requestHandler(
        req: http.IncomingMessage,
        res: http.ServerResponse
    ): void {
        res.end("Call From ServeAPI Class");
    }
}
