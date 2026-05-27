#!/bin/sh
cd /tmp/keypad
exec python3 -m http.server 3300
