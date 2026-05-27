import http.server
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
httpd = http.server.HTTPServer(('', 3300), http.server.SimpleHTTPRequestHandler)
httpd.serve_forever()
