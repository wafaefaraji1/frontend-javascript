// Interface for Major Credits
export interface MajorCredits {
  credits: number;
  brand: "major";
}

// Interface for Minor Credits
export interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Function to sum Major Credits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

// Function to sum Minor Credits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}
