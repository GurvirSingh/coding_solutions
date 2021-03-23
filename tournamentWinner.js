// T - O(n), S - O(k), where k is the number of teams

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
	let currentBestTeam = '';
	const scores = {[currentBestTeam]: 0};
	
	for(let idx = 0; idx < competitions.length; idx++) {
		const result = results[idx];
		const [homeTeam, awayTeam] = competitions[idx];
		
		const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
		
		updateScores(winningTeam, 3, scores);
		
		if(scores[winningTeam] > scores[currentBestTeam]) {
			currentBestTeam = winningTeam;
		}
	}
	
  return currentBestTeam;
}

function updateScores(winningTeam, points, scores) {
	if(!(winningTeam in scores)) scores[winningTeam] = 0;
	
	scores[winningTeam] += points;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;