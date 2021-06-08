function solution(numbers) {
  const answer = numbers
    .map((number) => number + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");
  answer[0] === "0" ? "0" : answer;
  return answer;
}
