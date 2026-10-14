#!/usr/bin/env python3
"""
Expenses App Local Web Server
Serves static files on localhost with full MIME type support, clean request logging,
and automatic port selection if the default port is already in use.
"""

import http.server
import socketserver
import socket
import os
import sys

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Disable caching during development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def is_port_available(port, host='0.0.0.0'):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            s.bind((host, port))
            return True
        except OSError:
            return False

def find_available_port(start_port=8000, max_attempts=50):
    candidate = start_port
    for _ in range(max_attempts):
        if is_port_available(candidate):
            return candidate
        candidate += 1
    return None

def parse_target_port():
    # 1. Command line argument: e.g. python3 server.py 8080 or --port 8080
    for i, arg in enumerate(sys.argv[1:]):
        if arg.isdigit():
            return int(arg)
        if arg in ('--port', '-p') and i + 1 < len(sys.argv) - 1:
            try:
                return int(sys.argv[i + 2])
            except ValueError:
                pass
    # 2. Environment variable PORT
    env_port = os.environ.get("PORT")
    if env_port and env_port.isdigit():
        return int(env_port)
    # 3. Default
    return 8000

def run_server():
    requested_port = parse_target_port()
    port = requested_port

    if not is_port_available(port):
        alt_port = find_available_port(start_port=port + 1)
        if not alt_port:
            alt_port = find_available_port(start_port=8080)
        
        if alt_port:
            print(f"⚠️  Notice: Port {port} is already in use.")
            print(f"➡️  Automatically switching to available port: {alt_port}\n")
            port = alt_port
        else:
            print(f"❌ Error: Port {port} is in use and no alternative ports found.", file=sys.stderr)
            sys.exit(1)

    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("0.0.0.0", port), NoCacheHandler) as httpd:
            print("=" * 60)
            print(f"  Expenses App is running!")
            print(f"  Localhost URL:  http://localhost:{port}")
            print(f"  Network URL:    http://127.0.0.1:{port}")
            print(f"  Sign-in Page:   http://localhost:{port}/signin.html")
            print(f"  Serving Dir:    {DIRECTORY}")
            print("=" * 60)
            print("Press Ctrl+C to stop the server.\n")
            sys.stdout.flush()
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped gracefully.")
    except Exception as e:
        print(f"Error starting server: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    run_server()
