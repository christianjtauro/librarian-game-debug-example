// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile0 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010201010101010101010101020103010102010101060101010101010201010101020101010201010101010102010101010201010102010101020202020101010102010101020101010201010101010101020202020201010102010101010101010101010101010102020101010202020202010101020202020101020202020101020101020201010101010202020201010201010201010101010101010101070702010101010101010101010101010101010101010101010102010202020101010101010101010101020102020201010101020202020202020201020202010101010201010101010101010101010105010102010101010101010101010101`, img`
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . 2 . . . . . . 2 . . 
. . 2 . . . 2 . . . . . . 2 . . 
. . 2 . . . 2 . . . 2 2 2 2 . . 
. . 2 . . . 2 . . . 2 . . . . . 
. . 2 2 2 2 2 . . . 2 . . . . . 
. . . . . . . . . 2 2 . . . 2 2 
2 2 2 . . . 2 2 2 2 . . 2 2 2 2 
. . 2 . . 2 2 . . . . . 2 2 2 2 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . 2 . 2 2 2 . 
. . . . . . . . . . 2 . 2 2 2 . 
. . . 2 2 2 2 2 2 2 2 . 2 2 2 . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.builtin.forestTiles4,sprites.dungeon.chestOpen,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.stairEast,sprites.builtin.forestTiles0,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile0":return tile0;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
