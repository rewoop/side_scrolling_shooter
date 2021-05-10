class GameScene extends Phaser.Scene {
	constructor() {
		super('Game');
	}

	init() {
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	createBackground() {
		this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'bg').setOrigin(0);
	}

	update() {
		this.player.move();
		this.bg.tilePositionX += 0.5;
	}

	onOverlap(source, target) {
		source.setAlive(false);
		target.setAlive(false);
	}

	addOverlap() {
		this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this);
		this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this);
		this.physics.add.overlap(this.player, this.enemies, this.onOverlap, undefined, this);
	}

	onComplete() {
		this.scene.start('Start');
	}

	createCompleteEvents() {
		this.player.once('killed', this.onComplete, this);
		this.events.once('enemies-killed', this.onComplete, this);
	}

	create() {
		this.createBackground();
		this.player = new Player(this);
		this.enemies = new Enemies(this);
		this.addOverlap();
		this.createCompleteEvents();
	}
}
