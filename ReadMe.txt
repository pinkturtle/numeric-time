Download the numeric-time.js file to your computer storage machine:

https://github.com/pinkturtle/numeric-time/raw/master/numeric-time.js

Add the script to your web page, like so:

<script src="numeric-time.js">

Example:

(1).second() + (1).millisecond() is 1001

Guide:

(1).second()  is   1000
(2).seconds() is   2000
(3).seconds() is   3000
(0).seconds() is .... 0

(1).minute()  is  60000
(2).minutes() is 120000
(3).minutes() is 180000
(0).minutes() is .... 0

(1).hour()  is  3600000
(2).hours() is  7200000
(3).hours() is 10800000
(0).hours() is ...... 0

Bonus Feature! Interoperable Date/Time Travel Capability:

(new Date) - (30).seconds() is thirty seconds ago.
(new Date) + (30).seconds() is thirty seconds in the future.
