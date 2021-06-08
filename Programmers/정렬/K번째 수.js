function solution(array, commands) {
  var answer = [];

  for (var i = 0; i < commands.length; i++) {
    var start = commands[i][0] - 1;
    var n = commands[i][1];
    var index = commands[i][2] - 1;
    var tmp = [];

    for (var j = start; j < n; j++) {
      tmp.push(array[j]);
    }

    tmp.sort();
    answer.push(tmp[index]);
  }

  return answer;
}
