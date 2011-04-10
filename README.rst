tnetstrings.js
==============

`tnetstrings`_ implementation in JavaScript. See link for more information on
tnetstrings.

.. _tnetstrings: http://tnetstrings.org/

How to use
----------

Just include ``tnetstrings.js`` on your web page with::

  <script src="tnetstrings.js"></script>

and you'll have global object ``tnetstrings`` in your JavaScript context. Usage
is as simple as calling ``tnetstrings.parse(data)`` and
``tnetstrings.dump(obj)``. Note though that using ``parse()`` will return an
object with two fields - ``value`` and ``extra``, former containing parsed
object (or string, or whatever) and latter containing remaining of string which
was not parsed. If passed string contained only tnetstring, ``extra`` will
contain empty string and can be ignored.

