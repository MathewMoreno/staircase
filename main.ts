scene.setBackgroundColor(6)
let Nacho_Libre = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . 8 8 2 8 2 8 8 . . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. . . . . 8 2 2 2 8 . . . . . . 
. . . . 2 3 3 3 3 3 . . . . . . 
. . . 2 3 3 3 3 3 3 3 . . . . . 
. . . 3 2 3 3 3 3 3 . 3 . . . . 
. . 3 2 2 3 3 f 3 3 . . 3 . . . 
. 2 2 2 2 3 3 3 3 3 . . . . . . 
. 2 2 2 . 2 2 2 2 2 . . . . . . 
. 2 2 2 . 2 2 2 2 2 . . . . . . 
. . . . . 9 2 2 2 9 . . . . . . 
. . . . . 9 . . . 9 . . . . . . 
. . . . . 9 . . . 9 . . . . . . 
`, SpriteKind.Player)
let Nacho_Libre2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . 8 8 2 8 2 8 8 . . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. . . . . 8 2 2 2 8 . . . . . . 
. . . . . 3 3 3 3 3 2 . . . . . 
. . . . 3 3 3 3 3 3 3 2 . . . . 
. . . 3 . 3 3 3 3 3 2 3 . . . . 
. . 3 . . 3 3 f 3 3 2 2 3 . . . 
. . . . . 3 3 3 3 3 2 2 2 2 . . 
. . . . . 2 2 2 2 2 . 2 2 2 . . 
. . . . . 2 2 2 2 2 . 2 2 2 . . 
. . . . . 9 2 2 2 9 . . . . . . 
. . . . . 9 . . . 9 . . . . . . 
. . . . . 9 . . . 9 . . . . . . 
`, SpriteKind.Player)
for (let index = 0; index < 4; index++) {
    pause(500)
    Nacho_Libre.y += 10
    pause(500)
    Nacho_Libre.x += 10
    pause(500)
    Nacho_Libre2.y += 10
    pause(500)
    Nacho_Libre2.x += -10
}
for (let index = 0; index < 4; index++) {
    pause(500)
    Nacho_Libre.y += -10
    pause(500)
    Nacho_Libre.x += -10
    pause(500)
    Nacho_Libre2.y += -10
    pause(500)
    Nacho_Libre2.x += 10
}
