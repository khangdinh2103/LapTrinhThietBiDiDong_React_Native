function Team(name, scores) {
    this.name = name;
    this.scores = scores;
}

const averageScore = (team) => {
    const sumScore = team.scores.reduce((temp, score) => temp + score, 0);
    let averageScoreTeam = sumScore / team.scores.length;
    return parseFloat(averageScoreTeam.toFixed(2));
};

function determineMinScoreAndDraw() {
    let teamDolphins = new Team("Dolphins", [96, 108, 89]);
    let teamKoalas = new Team("Koalas", [88, 91, 110]);
    let averageScoreDolphins = averageScore(teamDolphins);
    let averageScoreKoalas = averageScore(teamKoalas);

    console.log("result 2:");

    if (averageScoreDolphins >= 100 && averageScoreDolphins > averageScoreKoalas) {
        console.log('Dolphins thắng với điểm trung bình là ' + averageScoreDolphins);
    } else if (averageScoreKoalas >= 100 && averageScoreKoalas > averageScoreDolphins) {
        console.log('Koalas thắng với điểm trung bình là ' + averageScoreKoalas);
    } else if (averageScoreDolphins >= 100 && averageScoreKoalas >= 100 && averageScoreDolphins === averageScoreKoalas) {
        console.log('Hòa');
    } else {
        console.log('Không đội nào thắng');
    }
}

function determineMinScore() {
    let teamDolphins = new Team("Dolphins", [97, 112, 101]);
    let teamKoalas = new Team("Koalas", [109, 95, 123]);
    let averageScoreDolphins = averageScore(teamDolphins);
    let averageScoreKoalas = averageScore(teamKoalas);
    console.log("averageScoreDolphins: ", averageScoreDolphins);
    console.log("averageScoreKoalas: ", averageScoreKoalas);
    console.log("result 1:");
    if (averageScoreDolphins >= 100 && averageScoreDolphins > averageScoreKoalas) {
        console.log('Dolphins thắng với điểm trung bình là ' + averageScoreDolphins);
    } else if (averageScoreKoalas >= 100 && averageScoreKoalas > averageScoreDolphins) {
        console.log('Koalas thắng với điểm trung bình là ' + averageScoreKoalas);
    } else if (averageScoreDolphins >= 100 && averageScoreKoalas >= 100 && averageScoreDolphins === averageScoreKoalas) {
        console.log('Hòa');
    } else {
        console.log('Không đội nào thắng');
    }
}

determineMinScore();
determineMinScoreAndDraw();