const http = require("http");
const server = http.createServer((req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta http-equiv="refresh" content="2" />
      <title>MY BOT UPTIME</title>
    </head>
    <body>
      <h1>Hello,BRO IM AKAZA MD</h1>
      <p>JAN LUPA SUBS YT GW NGAB</p>
                <p><a href="https://tes.alandika2.repl.co" class="tbl-pink">HOME PAGE</a></p>
    </body>
    </html>
  `;

  res.write(html);
  res.end();
}).listen(8080);
module.exports = server