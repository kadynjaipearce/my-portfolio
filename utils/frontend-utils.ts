// Function to calculate age from birth date
export function calculateAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);

  // Validate birth date
  if (isNaN(birth.getTime())) {
    throw new Error("Invalid birth date format. Please use a valid date.");
  }

  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

function generateHeroData(): string {
  const name = "Kadyn-Jai Pearce";
  const age = calculateAge("2005-05-16");
  const occupation = "Software Engineering Student";
  const hobbies = "Programming, Reading, Kickboxing";
  const about = "Passionate software developer";

  return `class Person {
  
public:
    std::string name = "${name}";
    int age = ${age};
    std::string occupation = "${occupation}";
    std::string hobbies = "${hobbies}";
    std::string about = "${about}";

    Person() {}

    void displayAboutMe() {
        std::cout << "Name: " << name << '\\n'
                  << "Age: " << age << '\\n'
                  << "Occupation: " << occupation << '\\n'
                  << "Hobbies: " << hobbies << '\\n'
                  << "About: " << about << std::endl;
    }
};`;
}

export const heroData = generateHeroData();
