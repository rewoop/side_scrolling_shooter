class StartScene extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    createBackground() {
        this.add.sprite(0, 0, 'bg').setOrigin(0);
    }

    create() {
        this.createBackground();
    }
}
