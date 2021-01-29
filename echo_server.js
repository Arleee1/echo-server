const http = require("http");
var server = http.createServer(handler);
var args = process.argv;
var server_port_arg = parseInt(args[2]);
var server_port = isNaN(server_port_arg) ? 1000 : server_port_arg;
server.listen(server_port);
console.log(`Server running on port: ${server_port}`);
function handler(req, res) {
  console.log(req.url);
  res.end(req.url);
}
