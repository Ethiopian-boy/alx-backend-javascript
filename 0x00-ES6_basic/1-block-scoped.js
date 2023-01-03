export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // no unused var
    const task = true;
    //no unused var
    const task2 = false;
  }
  
  return [task, task2];
}
