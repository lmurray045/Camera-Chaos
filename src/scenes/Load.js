class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.image('tilesetImage', 'floormap.png')
        this.load.spritesheet('p1sheet', 'p1sheet.png', {
            frameWidth: 16,
            frameHeight: 28
        })
        this.load.spritesheet('p2sheet', 'p2sheet.png', {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.tilemapTiledJSON('tilemapJSON', 'lvl1.json')
    }

    create() {
        console.log("Load Scene")
    }

    update() {
        //go to play
        this.scene.start("playScene")
    }
}