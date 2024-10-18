# eve-online-jump-distance
A Nifty little JavaScript single page app to calculate the shortest path between Star System nodes using a breadth-first-search. It includes a PHP generator script that builds a JSON formatted adjacency map from an SQL dump of the EVE Online universe, which is client side cached to enable real time lookups.

This single page app consists of a small webpage and javascript to find the shortest amount of jumps between two star systems in the game EVE Online. Feel free to change the demo page and use your own pricing calculations.

## Load SQL dumps
See https://wiki.eveuniversity.org/Static_Data_Export

bunzip and load SQL files into your MySQL database:
[mapregions](https://www.fuzzwork.co.uk/dump/latest/mapRegions.sql.bz2)
[mapsolarsystems](https://www.fuzzwork.co.uk/dump/latest/mapSolarSystems.sql.bz2)
[mapsolarsystemjumps](https://www.fuzzwork.co.uk/dump/latest/mapSolarSystemJumps.sql.bz2)
[mapconstellations](https://www.fuzzwork.co.uk/dump/latest/mapConstellations.sql.bz2)
[mapconstellationjumps](https://www.fuzzwork.co.uk/dump/latest/mapConstellationJumps.sql.bz2)

## Regenerate eve data from SQL dumps into JavaScript
If you wish to re-generate the star system database you should obtain a copy of the EVE online universe SQL dump, load it into a MySQL database running on the same host as the php code, and rename `/ws/dbinfo.php.txt` to `/ws/dbinfo.php` (substituting your database credentials in the process). 
Once you have done this you should navigate to `/ws/gen_evedata.js.php` and the adjacency map will be built in `/js/evedata.js`, 

## Run webapp
use your browser at <your domain/directory>/
