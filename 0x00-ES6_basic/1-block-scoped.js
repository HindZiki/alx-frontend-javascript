export default function taskBlock(trueOrFalse) {
  const task = false;  // Utilisation de const car task ne changera pas
  const task2 = true;  // Utilisation de const car task2 ne changera pas

  if (trueOrFalse) {
    const innerTask = true;   // Nouvelles déclarations avec un nom différent
    const innerTask2 = false; // Nouvelles déclarations avec un nom différent
    console.log(innerTask, innerTask2); // Utilisation interne si nécessaire
  }

  return [task, task2];  // Renvoie les valeurs en dehors du bloc if
}
