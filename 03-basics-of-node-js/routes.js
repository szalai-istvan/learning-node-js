const fs = require('fs');

const requestHandler = (request, response) => {
const url = request.url;
    const method = request.method;
    if (url === '/' && method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<body><h1>Hello!</h1>');
        response.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        response.write('</body>');
        response.write('</html>');
        return response.end();  
    } else if (url === '/message' && method === 'POST') {
        const chunks = [];
        request.on('data', (chunk) => {
            chunks.push(chunk);
            console.log(chunk);
        });
        request.on('end', () => {
            const parsed = Buffer.concat(chunks).toString();
            fs.appendFileSync('message.txt', '\n' + parsed.split('=')[1]);
        });
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('Whatap');
    response.end();
}

module.exports = requestHandler;