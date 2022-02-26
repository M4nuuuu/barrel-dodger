controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -1
})
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . f f f . . . . 
    . . . . f 8 8 8 f 8 8 8 f . . . 
    . . . . f 8 8 8 8 8 8 8 f . . . 
    . . . . f 8 8 8 8 8 8 8 f . . . 
    . . . . . f 8 8 8 8 8 f . . . . 
    . . . . . f f 8 8 8 f f . . . . 
    . . . . . . f f 8 f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
tiles.setTilemap(tilemap`level5`)
mySprite.ay = 500
mySprite.setPosition(16, 2)
statusbar = statusbars.create(30, 3, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.setColor(5, 2)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 . 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . . 6 6 . 6 6 . . . . . . 
        `, randint(-100, 80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
forever(function () {
    music.playMelody("G B A G C5 B A B ", 412)
})
forever(function () {
    music.playMelody("- C - C - C - C ", 412)
})
