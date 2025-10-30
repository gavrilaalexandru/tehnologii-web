const { rimraf } = require("rimraf");
const fs = require("fs");
const path = require("path");
const dirPath = "./newDir";
const fileName = "text.txt";
const filePath = path.join(dirPath, fileName);

fs.access(dirPath, (error) => {
  if (error) {
    fs.mkdir(dirPath, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Nou director creat cu succes");
      }
    });
  } else {
    console.log("Directorul exista deja!");
    const text = "Some text";
    fs.writeFile(filePath, text, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Fisierul a fost scris cu succes");
      }
    });
  }
});

rimraf(dirPath)
  .then(() => console.log("Directorul a fost sters cu succes"))
  .catch((err) => console.error("Eroare la stergere:", err));
