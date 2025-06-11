# servidor.py
import http.server
import socketserver

# Define el puerto en el que se ejecutará el servidor
PORT = 8000

# Esta línea configura el servidor para que sirva los archivos
# del directorio actual.
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Servidor iniciado en el puerto", PORT)
    print(f"Abre tu navegador y ve a http://localhost:{PORT}")
    # El servidor se mantendrá corriendo hasta que lo detengas (Ctrl+C)
    httpd.serve_forever()