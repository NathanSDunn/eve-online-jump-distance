//javascript implementation of http://blog.evepanel.net/eve-online/static-data-dump/calculating-the-shortest-route-between-two-systems.html
function systemToID(system){    
   if (typeof system !== 'string'){
            throw new Error("systemToID(system): system must be a string");
   }
   var s=system.replace(' ', '').replace('-','');
   return systemToID_hash[s];
}
function getJumpPath(origin, target, nodes) {   
    var resultPath = []; 
    if (nodes===undefined){
        nodes=jumps;
    }
    
function checkSystemID(system){
        if (typeof system === 'string'){
            //if a string is entered, translate to the systemID equivalent
            var id=parseInt(systemToID(system));
            if (typeof id ==='number'){
                system = id;
            } else {                
                throw new Error("getJumpPath(): ["+system+"] could not be matched to a systemID");
            }
        }  
        
        if (typeof system === 'number'){
            if (nodes[system]===undefined){
                throw new Error("getJumpPath(): ["+system+"] not found in nodes");                
            } else {
                return system;
            }
        } else {
            throw new Error("getJumpPath(): ["+system+"] invalid object type");               
        }
    }    
    origin=checkSystemID(origin);
    target=checkSystemID(target);
    
    // Target and origin the same, no distance
    if (origin === target) {
        resultPath.push(origin);
        return resultPath;
    } else if (nodes[origin][target]) {
        // Target is a neigbour system of origin
        resultPath.push(origin);
        resultPath.push(target);
        return resultPath;
    } else {
        // Already visited system
        var visitedSystems = {};
        // Limit the number of iterations
        var remainingJumps = 9000;
        // Systems we can reach from here
        var withinReach = [];        
        withinReach.push(origin);
        // Will contain the system IDs         
        
        while (withinReach.length > 0 && remainingJumps > 0) {                       
            remainingJumps--;//timeout at 9k jumps

            // Jump to the first system within reach          
            var currentSystem = withinReach.shift();

            // Get the IDs of the systems, connected to the current
            var links = nodes[currentSystem];

            // Enqueue all connected systems
            for (var i = 0; i < links.length; i++) {
                var neighborSystem = links[i];

                // If neighbour system is the target,
                // Build an array of ordered system IDs we need to
                // visit to get from the origin system to the
                // target system
                if (neighborSystem === target) {
                    //build path by traversing jump parents
                    resultPath.push(neighborSystem);
                    resultPath.push(currentSystem);
                    while (visitedSystems[currentSystem] !== origin) {   
                        currentSystem = visitedSystems[currentSystem];
                        resultPath.push(currentSystem);     
                    }
                    resultPath.push(origin);
                    resultPath.reverse();
                    return resultPath;
                }

                // Otherwise, store the current - neighbour
                // Connection in the visited systems and add the
                // neighbour to the systems within reach
                if (visitedSystems[neighborSystem] === undefined) {
                    visitedSystems[neighborSystem] = currentSystem;
                    withinReach.push(neighborSystem);
                }                
            }
        }
        return false;
    }
}