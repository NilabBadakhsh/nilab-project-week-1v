
// src/index.js - Main CLI program
console.log("Data Toolkit CLI - CSV Analysis Tool");
console.log("Usage: node src/index.js [command] [options]");
console.log("\nCommands:");
console.log("  stats    --file <path> --column <name>");
console.log("  filter   --file <path> --column <name> --value <value>");
console.log("  sort     --file <path> --column <name> --order <asc|desc>");
console.log("  export   --file <path> --out <path>");
console.log("\nExample:");
console.log("  node src/index.js stats --file data/people.csv --column age");
console.log("this is for pull request test");