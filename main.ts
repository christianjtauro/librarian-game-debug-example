namespace SpriteKind {
    export const Book = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    Books = sprites.create(img`
        . b b b b b b b b . 
        b 1 1 1 b b 1 1 1 b 
        b 1 1 1 d d 1 1 1 b 
        c 1 1 1 d d 1 1 1 b 
        c 1 1 1 d d 1 1 1 b 
        c 1 1 1 d d 1 1 1 c 
        c b b b d d b b b c 
        . c c c c c c c c . 
        `, SpriteKind.Food)
    Books.setPosition(randint(0, 250), randint(0, 250))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    Books.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.wawawawaa.play()
    mySprite.startEffect(effects.spray, 200)
    mySprite.say("ouch", 200)
})
let Ghost: Sprite = null
let Books: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
Books = sprites.create(img`
    . b b b b b b b b . 
    b 1 1 1 b b 1 1 1 b 
    b 1 1 1 d d 1 1 1 b 
    c 1 1 1 d d 1 1 1 b 
    c 1 1 1 d d 1 1 1 b 
    c 1 1 1 d d 1 1 1 c 
    c b b b d d b b b c 
    . c c c c c c c c . 
    `, SpriteKind.Food)
Books.setPosition(10, 150)
info.startCountdown(60)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
game.showLongText("Find as many books as you can, but be sure to get them to the shelf before the library closes!", DialogLayout.Full)
game.onUpdateInterval(1000, function () {
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost.setFlag(SpriteFlag.DestroyOnWall, true)
    Ghost.setPosition(randint(0, 80), randint(0, 250))
    Ghost.setVelocity(randint(0, 250), randint(0, 80))
})
forever(function () {
    music.playMelody("A F E F D G E F ", 150)
})
