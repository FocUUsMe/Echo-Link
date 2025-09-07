    import express from 'express';
    import http from 'http';
    import path from 'path';
    import WebSocket from 'ws';

    
    const app = express();
    const server = http.createServer(app);
    const wss = new WebSocket.Server({server});
    const port = 3000;

    app.get('/' )
    

    app.listen(port, () => {
        console.log(`Server is runnig on port ${port}`);
    });