const config = {
    type: Phaser.AUTO, // webgl or canvas
    width: 1280,
    height: 720,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
};

const game = new Phaser.Game(config);
