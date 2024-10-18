# eve-online-jump-distance
A Nifty little JavaScript single page app to calculate the shortest path between Star System nodes using a breadth-first-search. It includes a PHP generator script that builds a JSON formatted adjacency map from an SQL dump of the EVE Online universe, which is client side cached to enable real time lookups.

This single page app consists of a small webpage and javascript to find the shortest amount of jumps between two star systems in the game EVE Online. 

RvB was a corporation in EVE but has left and was used to help courier contracts where players transfer in game items originally. Now the EVE data dumps, breadth-first-search to mainly find the length (Jumps), a cached larger adjacency map to skip from the PHP an be faster, use jQuery Autocomplete, and a simple calculator that may be useful for similar applications.

Either way was fun and a great Corp, tons of PvP and cool people. I haven't played EVE for years either but maybe sometime Pew Pew a bit another time!

## Load SQL dumps
See https://wiki.eveuniversity.org/Static_Data_Export

Download SQL dumps
[mapRegions](https://www.fuzzwork.co.uk/dump/latest/mapRegions.sql.bz2)
[mapSolarSystems](https://www.fuzzwork.co.uk/dump/latest/mapSolarSystems.sql.bz2)
[mapSolarSystemJumps](https://www.fuzzwork.co.uk/dump/latest/mapSolarSystemJumps.sql.bz2)
[mapConstellations](https://www.fuzzwork.co.uk/dump/latest/mapConstellations.sql.bz2)

Uncompress the files
`bunzip2 *`

Load SQL files into your MySQL database tables:
`mysql -u username -p database_name < mapConstellationJumps.sql`
`mysql -u username -p database_name < mapConstellations.sql`
`mysql -u username -p database_name < mapRegions.sql`
`mysql -u username -p database_name < mapSolarSystemJumps.sql`
`mysql -u username -p database_name < mapSolarSystems.sql`

## Regenerate eve data from SQL dumps into JavaScript
If you wish to re-generate the star system database you should obtain a copy of the EVE online universe SQL dump, load it into a MySQL database running on the same host as the php code, and copy `/ws/dbinfo.php.txt` to `/ws/dbinfo.php` (substituting your database credentials in the process).
Once you have done this you should navigate to `/ws/gen_evedata.js.php` and the adjacency map will be built in `/js/evedata.js`,

## Run webapp
use your browser at <your domain/directory>/

### Note
Optional for further dev [mapConstellationJumps](https://www.fuzzwork.co.uk/dump/latest/mapConstellationJumps.sql.bz2)
