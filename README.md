# school-schedule-cli
> You will be writing a command line interface to represent a weekly school schedule.

In lieu of a database, we're writing and reading from a courses.json file. We can restore to a courses.default.json at any time. Both files live in the `/data/` directory.

## Setup
1. Copy repository
2. Install Node 18.12.1+ / NPM 8.19.2+
3. `npm install`

## Using the CLI

### Init
`npm run start`

### Add Course
`npm run add_course`

Follow Prompts

### Print Schedule
`npm run print_courses`

### Reset Courses - NOTE! This will erase any changes made to your courses.json file
`npm run reset_courses`
