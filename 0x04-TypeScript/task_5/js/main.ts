// Définition des interfaces avec des propriétés de marque
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Fonction pour sommer les crédits majeurs
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
}

// Fonction pour sommer les crédits mineurs
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
}

// Exemples d'utilisation
const major1: MajorCredits = { credits: 3, brand: 'Major' };
const major2: MajorCredits = { credits: 2, brand: 'Major' };
const minor1: MinorCredits = { credits: 1, brand: 'Minor' };
const minor2: MinorCredits = { credits: 2, brand: 'Minor' };

const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`); // Affiche le total des crédits majeurs
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`); // Affiche le total des crédits mineurs
