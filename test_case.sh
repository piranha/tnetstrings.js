#!/usr/bin/env sh
node -e 'process.stdout.write( require("./tnetstrings.js").dump("\u9999") )' | python ref/test_reading.py
