export default function returnHowManyArguments(...rest) {
    let count = 0;
    for (const iter of rest) {
        count += 1;
    }
  return count;
}
