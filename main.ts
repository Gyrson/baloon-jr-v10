controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (balloons == 2) {
        Junior.vx = -20
        Junior.setImage(KidLeft)
    } else {
        Junior.vx = -10
        Junior.setImage(KidLeft1)
    }
})
scene.onHitTile(SpriteKind.Enemy, 2, function (sprite) {
    sprite.destroy()
})
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    game.over(true, effects.smiles)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Junior.isHittingTile(CollisionDirection.Top)) {
        Junior.vy = 0
    } else if (balloons == 2) {
        Junior.ay = -50
    } else {
        Junior.ay = -25
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    if (balloons == 1) {
        info.changeLifeBy(-1)
        balloons = 2
        Junior.setImage(KidRight)
    } else {
        balloons += -1
        Junior.setImage(KidRight1)
    }
    Junior.setFlag(SpriteFlag.Ghost, true)
    info.startCountdown(3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Ghostface.setFlag(SpriteFlag.Ghost, false)
    if (balloons == 1) {
        info.changeLifeBy(-1)
        balloons = 2
        Junior.setImage(KidRight)
    } else {
        balloons += -1
        Junior.setImage(KidRight1)
    }
    Junior.setFlag(SpriteFlag.Ghost, true)
    info.startCountdown(3)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (balloons == 2) {
        Junior.vx = 20
        Junior.setImage(KidRight)
    } else {
        Junior.vx = 10
        Junior.setImage(KidRight1)
    }
})
scene.onHitTile(SpriteKind.Enemy, 7, function (sprite) {
    sprite.destroy()
})
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    Junior.vx = 0
})
info.onCountdownEnd(function () {
    Junior.setFlag(SpriteFlag.Ghost, false)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Junior.ay = 50
})
let Ghostface: Sprite = null
let Junior: Sprite = null
let KidLeft1: Image = null
let KidLeft: Image = null
let KidRight1: Image = null
let KidRight: Image = null
let balloons = 0
let Level1 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 . . . . 2 7 7 7 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 8 
7 7 . . . . . . . . . . . . . . . . 7 7 7 2 . . . 7 7 7 . . 7 7 
`
let Level2 = img`
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 2 . . . . . . . . . . . . . . . . . . . 8 
. . . . . 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . 2 . . . . . . . . . . 2 7 7 7 7 7 2 . . . . . . . . 7 2 2 
7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
let Level3 = img`
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 2 . . . . . . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . 2 . . . . . . . . . . 2 7 7 7 7 7 2 . . . . . . . . 7 2 2 
7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`
effects.blizzard.startScreenEffect()
scene.setBackgroundColor(8)
scene.setTile(7, img`
d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d d 1 d d d d d d d 
b b b b b b d e b b b b b b d e 
d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d d 1 d d d d d d d 
b b b b b b d e d b b b b b b e 
`, true)
scene.setTile(2, img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
scene.setTile(8, img`
. . . . . . . c c . . . . . . . 
. . . . c c c 6 5 c 6 6 . . . . 
. . . . c 6 c 5 5 c 7 6 . . . . 
. . . 6 c c 7 5 5 7 c 6 6 . . . 
. . c c 7 7 7 7 7 5 7 7 c 6 . . 
. 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
. c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
. c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
. c c c c 7 7 6 f 7 7 c c c c . 
. . . . c 7 c f f c 7 c . . . . 
. . . . . 6 f e e e c . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e . e e . e e . . . . 
. . . . . . . e e . . . . . . . 
`, true)
balloons = 2
KidRight = img`
. . 6 6 6 . . . 6 6 6 . . . 
. 6 6 6 6 6 . 6 6 6 6 6 . . 
6 6 6 6 1 6 8 6 6 6 1 6 6 . 
6 6 6 6 6 1 6 8 6 6 6 1 6 . 
6 6 6 6 6 6 6 8 6 6 6 6 6 . 
6 6 6 6 6 6 6 8 6 6 6 6 6 . 
6 6 6 6 6 6 8 6 6 6 6 6 6 . 
. 6 6 6 6 6 . 6 6 6 6 6 . . 
. . 6 6 6 . . . 6 6 6 . . . 
. . . f . . . . . f . . . . 
. . . . f . . . f . . . . . 
. . . . . f . f . . . . . . 
. . . . . . f . . . . . . . 
. . . . f f f f f f . . . . 
. . f f f f f f f f f . . . 
. . f f f f f f c f f f . . 
. f f f f c f f f c f f f . 
. f c f f c c f f f c c f f 
. f c c f f f f e f f f f f 
. f f f f f f f e e f f f . 
. f f e e f b f e e f f . . 
. . f e 4 e 1 f 4 4 f f . . 
. . f f f e e 4 4 4 f . . . 
. . . f e 4 4 e e f f . . . 
. . . f e 4 4 e 7 7 f . . . 
. . f f f e e f 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`
KidRight1 = img`
. . . . 6 6 6 . . . . . . 
. . . 6 6 6 6 6 . . . . . 
. . 6 6 6 6 1 6 6 . . . . 
. . 6 6 6 6 6 1 6 . . . . 
. . 6 6 6 6 6 6 6 . . . . 
. . 6 6 6 6 6 6 6 . . . . 
. . 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 . . . . . 
. . . . 6 6 6 . . . . . . 
. . . . . f . . . . . . . 
. . . . . f . . . . . . . 
. . . . . f . . . . . . . 
. . . . . f . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f f . . 
. f f f e e 4 4 4 f . . . 
. . f e 4 4 e e f f . . . 
. . f e 4 4 e 7 7 f . . . 
. f f f e e f 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f . . . f f f . . . 
`
KidLeft = img`
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . 6 6 6 . . . 6 6 6 . . . 
. 6 6 6 6 6 . 6 6 6 6 6 . . 
6 6 6 6 1 6 8 6 6 6 1 6 6 . 
6 6 6 6 6 1 6 8 6 6 6 1 6 . 
6 6 6 6 6 6 6 8 6 6 6 6 6 . 
6 6 6 6 6 6 6 8 6 6 6 6 6 . 
6 6 6 6 6 6 8 6 6 6 6 6 6 . 
. 6 6 6 6 6 . 6 6 6 6 6 . . 
. . 6 6 6 . . . 6 6 6 . . . 
. . . f . . . . . f . . . . 
. . . . f . . . f . . . . . 
. . . . . f . f . . . . . . 
. . . . . . f . . . . . . . 
. . . . . f f f f f f . . . 
. . . . f f f f f f f f f . 
. . . f f f c f f f f f f . 
. . f f f c f f f c f f f f 
. f f c c f f f c c f f c f 
. f f f f f e f f f f c c f 
. . f f f e e f f f f f f f 
. . . f f e e f b f e e f f 
. . . f f 4 4 f 1 e 4 e f . 
. . . . f 4 4 4 e e f f f . 
. . . . f f e e 4 4 e f . . 
. . . . f 7 7 e 4 4 e f . . 
. . . f f 6 6 f e e f f f . 
. . . f f f f f f f f f f . 
. . . . f f f . . . f f . . 
`
KidLeft1 = img`
. . . . 6 6 6 . . . . . . 
. . . 6 6 6 6 6 . . . . . 
. . 6 6 6 6 1 6 6 . . . . 
. . 6 6 6 6 6 1 6 . . . . 
. . 6 6 6 6 6 6 6 . . . . 
. . 6 6 6 6 6 6 6 . . . . 
. . 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 . . . . . 
. . . . 6 6 6 . . . . . . 
. . . . . f . . . . . . . 
. . . . . f . . . . . . . 
. . . . . f . . . . . . . 
. . . . . f . . . . . . . 
. . . . f f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. f f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . f f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 e e f f f . 
. . . f f e e 4 4 e f . . 
. . . f 7 7 e 4 4 e f . . 
. . f f 6 6 f e e f f f . 
. . f f f f f f f f f f . 
. . . f f f . . . f f . . 
`
info.setLife(3)
Junior = sprites.create(KidRight, SpriteKind.Player)
Junior.ay = 50
Junior.setFlag(SpriteFlag.StayInScreen, true)
Junior.setPosition(10, 100)
Junior.setFlag(SpriteFlag.BounceOnWall, false)
scene.setTileMap(img`
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 2 . . . . . . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . 2 . . . . . . . . . . 2 7 7 7 7 7 2 . . . . . . . . 7 2 2 
7 7 7 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
scene.cameraFollowSprite(Junior)
game.onUpdateInterval(10000, function () {
    Ghostface = sprites.create(img`
. . . . f f f f . . . . . . . . 
. . f f 1 1 1 1 f f . . . . . . 
. f b 1 1 1 1 1 1 b f . . . . . 
. f 1 1 1 1 1 1 1 d f . . . . . 
f d 1 1 1 1 1 1 1 d d f . . . . 
f d 1 1 1 1 1 1 d d d f . . . . 
f d 1 1 1 d d d d d d f . . . . 
f d 1 d f b d d d d b f . . . . 
f b d d f c d b b b c f . . . . 
. f 1 1 1 1 1 b b c f . . . . . 
. f 1 b 1 f f f f f . . . . . . 
. f b f c 1 1 1 b f . . . . . . 
. . f f 1 b 1 b f f . . . . . . 
. . . f b f b f f f . f . . . . 
. . . . f f f f f f f f . . . . 
. . . . . . f f f f f . . . . . 
`, SpriteKind.Enemy)
    animation.runImageAnimation(
    Ghostface,
    [img`
. . . . f f f f . . . . . . . . 
. . f f 1 1 1 1 f f . . . . . . 
. f b 1 1 1 1 1 1 b f . . . . . 
. f 1 1 1 1 1 1 1 d f . . . . . 
f d 1 1 1 1 1 1 1 d d f . . . . 
f d 1 1 1 1 1 1 d d d f . . . . 
f d 1 1 1 d d d d d d f . . . . 
f d 1 d f b d d d d b f . . . . 
f b d d f c d b b b c f . . . . 
. f 1 1 1 1 1 b b c f . . . . . 
. f 1 b 1 f f f f f . . . . . . 
. f b f c 1 1 1 b f . . . . . . 
. . f f 1 b 1 b f f . . . . . . 
. . . f b f b f f f . f . . . . 
. . . . f f f f f f f f . . . . 
. . . . . . f f f f f . . . . . 
`, img`
. . . . f f f f . . . . . . . . 
. . f f 1 1 1 1 f f . . . . . . 
. f b 1 1 1 1 1 1 b f . . . . . 
. f 1 1 1 1 1 1 1 d f . . . . . 
f d 1 1 1 1 1 1 1 d d f . . . . 
f d 1 1 1 1 1 1 d d d f . . . . 
f d 1 1 1 d d d d d d f . . . . 
f d 1 d f b d d d d b f . . . . 
f b d d f c d b b b c f . . . . 
. f 1 1 1 f f f f f f . . . . . 
. f 1 b c 1 1 1 b f . . . . . . 
. f b f 1 b 1 b f f . . . . . . 
. . f f b f b f f f . . f f . . 
. . . f f f f f f f f f f . . . 
. . . . . . f f f f f f f . . . 
. . . . . . f f f f f . . . . . 
`],
    200,
    true
    )
    Ghostface.setFlag(SpriteFlag.Ghost, false)
    Ghostface.setPosition(Junior.x + 79, Math.randomRange(Junior.y + -50, Junior.y + 50))
    Ghostface.setVelocity(-20, 0)
})
