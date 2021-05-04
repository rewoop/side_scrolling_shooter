class StartScene extends Phaser.Scene {
	constructor() {
		super('Start');
	}

	createBackground() {
		this.add.sprite(0, 0, 'bg').setOrigin(0);
	}

	createText() {
		this.add
			.text(config.width / 2, 500, 'Tap to start', {
				font: '60px Juliagar',
				fill: '#fff',
			})
			.setOrigin(0.5);
	}

	setEvents() {
		this.input.on('pointerdown', () => this.scene.start('Game'));
	}

	create() {
		this.createBackground();
		this.createText();
		this.setEvents();
	}
}
