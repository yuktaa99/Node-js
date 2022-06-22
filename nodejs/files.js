const fs = require("fs");

//read file

// fs.readFile("./doc/text.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//write files

// fs.writeFile("./doc/text.txt", "I rewrote this file.", () => {
//   console.log("Writing files.");
// });

// fs.writeFile(
//   "./doc/text2.txt",
//   "I created this file using JS file system.",
//   () => {
//     console.log("Creating files.");
//   }
// );

//create folder

// if (!fs.existsSync("./doc2")) {
//   fs.mkdir("./doc2", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./doc2", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

//remove files

if (fs.existsSync("./doc2/1.txt")) {
  fs.unlink("./doc2/1.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
