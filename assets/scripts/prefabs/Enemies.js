class Enemies extends Phaser.Physics.Arcade.Group {
	constructor(scene) {
		super();
		this.scene = scene;
	}

	createEnemy() {
		const enemy = Enemy.generate(this.scene);
		this.add(enemy);
		enemy.move();
	}
}
