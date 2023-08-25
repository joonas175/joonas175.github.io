---
name: AudioRyder
shortName: audioryder
shortDescription: Audiosurf-like game
languages: ['Java']
other: ['Android']
type: school
start: 2018-01
end: 2018-05
---

# AudioRyder

Idea basically copied from [Audiosurf](https://store.steampowered.com/app/12900/AudioSurf/) game.

[Project page.](https://webpages.tuni.fi/tamk_17tiko3b/)  
Not available at Play Store anymore, but you can see some photos on the project page.

The game was done as the game project in Tampere University of Applied Sciences. The client
for the project was [Exerium](https://exerium.com/), which specializes in physical
rehabilitation equipment. The game was meant to be played on the [Exerium XR](https://exerium.com/game-xr/)
chair with a connected tablet.

LibGDX framework was used, and the game targeted Android. Gyroscope sensors were utilized for
movement in the game. 

Technically the game was more advanced than what was expected for the course. 
Instead of 2D graphics, we wanted to implement it in 3D. Originally the collision
detection was implemented by coordinate comparison, but was later changed to actual
3D collision detection provided by the library. These things were not taught 
during the course, and we had to learn it by ourselves. Since the game was
a rhythm game, we also had to implement a tool to create levels / charts for
each song. 

Besides these advanced features and the actual gameplay, the game also featured everything
a normal mobile game would. It had working main menu and pause screens, settings screen for adjusting
movement sensitivity, language selection, player selection and high scores.

[Source code available at GitHub.](https://github.com/Clx3/AudioRyder)
