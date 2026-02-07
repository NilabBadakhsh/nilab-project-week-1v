# Data Toolkit CLI
CSV analysis tool with Node.js

## Project Structure
- data/people.csv
- src/index.js
- src/cli.js
- package.json
- README.md

## Quick Start
```bash
cd NILAB-PROJECT-WEEK-1
node src/index.js

# Commands
node src/index.js --help
node src/index.js stats --file data/people.csv --column age
node src/index.js filter --file data/people.csv --column city --value "Kabul"
node src/index.js sort --file data/people.csv --column name --order asc
node src/index.js export --file data/people.csv --out results.csv

# Sample Data
name,age,city
Nilab,23,Badakhshan
Amina,24,Kabul


tree /f
node src/cli.js
node src/index.js
cat README.md
node src/index.js --help
echo "Week 1 Project - Data Toolkit CLI"
git log --oneline
start https://github.com/NilabBadakhsh/nilab-project-week-1
https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-globalnav-goto