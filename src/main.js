//Liam Murray
//CMPM 120 - Winter 2024
//Camera Chaos
//Description:
    //an experiment messing with Phaser Cameras
//total hours: 
//Citations: 
    //STATE MACHINE CODE    
        //statemachine.js is taken from professor Altices "CP-Scrolling-States" repositiory


let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    zoom: 2,
    width: 288,
    height: 240,
    scene: [Menu, Play, GameOver, Load]
}

let game = new Phaser.Game(config)

let cursors


//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3