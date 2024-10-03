export default function createIteratorObject(report) {
  const employees = [];

  // Récupérer les employés de chaque département
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  // Retourner un itérateur
  return employees[Symbol.iterator]();
}
