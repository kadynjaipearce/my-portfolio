import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default prisma;

export const heroData =
  "class Person\n{\n  public:\n    std::string name = 'Kadyn-Jai Pearce';\n    int age = 28;\n    std::string occupation = 'Software Developer';\n    std::string hobbies = 'Coding, Hiking, Photography';\n    std::string about = 'Passionate software developer ';\n\n    Person() {}\n\n    void displayAboutMe() {\n        std::cout << 'Name: ' << name << '\\n'\n                  << 'Age: ' << age << '\\n'\n                  << 'Occupation: ' << occupation << '\\n'\n                  << 'Hobbies: ' << hobbies << '\\n'\n                  << 'About: ' << about << std::endl;\n    }\n};";
