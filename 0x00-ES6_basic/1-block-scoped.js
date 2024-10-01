export default function taskBlock(trueOrFalse) {
  const task = false;  // Utilisation de const car task ne changera pas
  const task2 = true;  // Utilisation de const car task2 ne changera pas

  if (trueOrFalse) {
    let task = true;   // Nouvelle déclaration limitée à ce bloc
    let task2 = false; // Nouvelle déclaration limitée à ce bloc
  }

  return [task, task2];  // Renvoie les valeurs en dehors du bloc if
}
