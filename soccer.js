
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0,
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

function getTotalPoints(results) {
  let totalPoints = 0;

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    
    if (result === 'w') {
      totalPoints += 3;
    } else if (result === 'd') {
      totalPoints += 1;
    }
    // No points are added for 'l' (loss)
  }

  return totalPoints;
}

// Check getTotalPoints
const SoundersResults = "wwdl";
const totalPoints =getTotalPoints(SoundersResults);
console.log(getTotalPoints('wwdl')); // should equal 7

const GalaxyResults = "wlld";
const totalPoints1 =getTotalPoints(GalaxyResults);
console.log(getTotalPoints('wlld')); // should equal 4

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

(function() {        //wrapping the code in an IIFE
  function orderTeams(teams) {
  for (const team of teams) {
    const totalPoints = getTotalPoints(team.results);
    console.log(`${team.name}: ${totalPoints}`);
  }
}

const team1 = { name: 'Sounders', results: "wwdl" };
const team2 = { name: 'Galaxy', results: "wlld" };
const teams = [team1, team2];

// Check orderTeams
orderTeams(teams);
})();

