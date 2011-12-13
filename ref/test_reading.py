#!/usr/bin/env python
import sys
import tnetstrings

for line in sys.stdin.readlines():
    try:
        value, _ = tnetstrings.parse(line)
        print "succeeded: %s %s" % (type(value), value)


    except Exception as err:
        print "failed: %s" % (err,)
