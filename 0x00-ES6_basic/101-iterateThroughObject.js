export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // Utiliser l'itérateur pour récupérer les noms des employés
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Joindre les noms par " | " et les retourner
  return employees.join(' | ');
}
