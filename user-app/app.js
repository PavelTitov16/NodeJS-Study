const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Main Page</title></head>');
        res.write('<body><h1>Welcome to Node JS!</h1><form action="/create-user" method="POST"><input type="text" name="user" placeholder="username"><button type="submit">Create User</button></form></body>');
        res.write('</html>');
        return res.end();
    };

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk, 'chunk');
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user, 'user');
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    };

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Main Page</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
    }
});

server.listen(3000);
