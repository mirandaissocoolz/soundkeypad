import http.server
import os

os.chdir(os.path.join(os.path.dirname(__file__), '..'))
httpd = http.server.HTTPServer(('', 3300), http.server.SimpleHTTPRequestHandler)
httpd.serve_forever()
