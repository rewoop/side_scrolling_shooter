class GameScene extends Phaser.Scene {
	constructor() {
		super('Game');
	}

	createBackground() {
		this.add.sprite(0, 0, 'bg').setOrigin(0);
	}

	create() {
		this.createBackground();
	}
}
