import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default prisma;

export const heroData =
  'class Person\n{\npublic:\n\tstd::string name = "Kadyn-Jai Pearce";\n\tint age = 18;\n\tstd::string occupation = "Software Engineering Student";\n\tstd::string hobbies = "Programming, Reading, Kickboxing, Gaming";\n\tstd::string about = "Passionate software developer";\n\n\tPerson() {}\n\n\tvoid displayAboutMe() {\n\t\tstd::cout << "Name: " << name << \'\\n\'\n\t\t\t\t  << "Age: " << age << \'\\n\'\n\t\t\t\t  << "Occupation: " << occupation << \'\\n\'\n\t\t\t\t  << "Hobbies: " << hobbies << \'\\n\'\n\t\t\t\t  << "About: " << about << std::endl;\n\t}\n};';
