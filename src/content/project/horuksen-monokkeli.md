---
name: Horuksen Monokkeli
shortName: monokkeli
shortDescription: Text parsing from PDF
languages: ['TypeScript']
frameworks: ['React', 'NextJS', 'Robot FW', 'Jest']
other: ['Jenkins', 'Documentation']
type: school
start: 2022-09
end: 2022-12
---

# Horuksen Monokkeli

A web interface for parsing text elements from PDF-files. For a client, [Aiso](https://aiso.fi/), as a school project.

[See source code on GitHub.](https://github.com/RoopeVaarama/Horuksen-Monokkeli)

## Work

7 members on the team working on the project, a few juniors and a few seniors, based on the year of study.
I was a senior on the team, and I took the role of DevOps engineer and testing manager. 
Besides the responsibilities from my roles, I helped other team members with programming
as much as I could by giving advice. 

## Deployment

I implemented a Jenkins workflow to deploy the project to Docker on my own Raspberry Pi.
Jenkins workflow was started by a GitHub Action on every push to main, 
which called a specific endpoint on the Jenkins server.

Some additional steps were required for the deployment:
- SSL certificate creation
- Reinstalling Raspberry Pi OS
  - Reinstalling all the tools
  - It had 32-bit version originally, and MongoDB couldn't be installed on it

## Testing

Deployment workflow ran all the unit tests before building. Another workflow was created to run after
that, which went through the tests written in Robot Framework. At the end of the project, the workflows were also 
able to display test results in our Discord server after each run.

Tests were written for backend functions with Jest on different levels, including simple unit tests and even
end-to-end tests that used a real database on the background. 

Robot Framework was used to test the frontend on the deployed environment. It gave good insight on how
well the site worked on an actual production environment, and what broke when pushing new changes.

99 tests in total with Jest, about half of them by me. I was the only contributor to Robot Framework tests, and 
a total of 48 tests were written with it. From the 48 Robot FW tests, 13 were endpoint tests and the rest
were browser tests. Browser tests each tested a single feature. Almost all frontend features were tested.

## Documentation

I took part in writing some of the general documentation about the project. I wrote the test plan and testing
report together with one team member.

## What I learned?

I learned a lot about testing in general. I had done testing with Jest before, but I definitely learned
something new about it. Robot Framework was totally new for me, and I'm glad I took it into the project.
Testing isn't really something I'm looking forward to or would like to do, 
but it is always nice to know about these things. Broader knowledge makes it easier to understand
bigger projects and processes related to them.
