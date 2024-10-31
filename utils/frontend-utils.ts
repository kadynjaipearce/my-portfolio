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

  return `struct Person {
    name: String,
    age: u32,
    occupation: String,
    hobbies: String,
    about: String,
}

impl Person {
    fn new() -> Self {
        Person {
            name: String::from("Kadyn-Jai Pearce"),
            age: 19,
            occupation: String::from("Software Engineering Student"),
            hobbies: String::from("Programming, Reading, Kickboxing"),
            about: String::from("Passionate software developer"),
        }
    }

    fn display_about_me(&self) {
        println!("Name: {}", self.name);
        println!("Age: {}", self.age);
        println!("Occupation: {}", self.occupation);
        println!("Hobbies: {}", self.hobbies);
        println!("About: {}", self.about);
    }
}`;
}

export const heroData = generateHeroData();
