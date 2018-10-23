var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
                        'Content-Type': 'text/json', 
                        'Access-Control-Allow-Origin': 'http://localhost:8001',
                        'Access-Control-Allow-Headers': 'X-Requested-With'
            });
    res.write(`[
                { "name": "Ziya", 
                  "image": "ejdaha-ziya.jpg"
                },
                { "name": "Ali", 
                  "image": "ejdaha-ali.jpg"
                },
                { "name": "Vusal", 
                  "image": "ejdaha-vusal.jpg"
                },    
                { "name": "Elnur", 
                  "image": "ejdaha-elnur.jpg"
                }
            ]
        `);
    res.end();
}).listen(8080);
  
