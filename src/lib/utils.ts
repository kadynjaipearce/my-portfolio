export function calculateAge(birthDate: string) {
  const today = new Date();
  const birth = new Date(birthDate);

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

export const heroData = `class Person\n{\npublic:\n\tstd::string name = "Kadyn-Jai Pearce";\n\tint age = ${calculateAge("2005-05-16")};\n\tstd::string occupation = "Software Engineering Student";\n\tstd::string hobbies = "Programming, Reading, Kickboxing";\n\tstd::string about = "Passionate software developer";\n\n\tPerson() {}\n\n\tvoid displayAboutMe() {\n\t\tstd::cout << "Name: " << name << \'\\n\'\n\t\t\t\t  << "Age: " << age << \'\\n\'\n\t\t\t\t  << "Occupation: " << occupation << \'\\n\'\n\t\t\t\t  << "Hobbies: " << hobbies << \'\\n\'\n\t\t\t\t  << "About: " << about << std::endl;\n\t}\n};`;
