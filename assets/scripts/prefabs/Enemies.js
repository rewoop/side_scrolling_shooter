class Enemies extends Phaser.Physics.Arcade.Group {
	constructor(scene) {
		super();
		this.scene = scene;
		this.fires = new Fires(this.scene);
		this.countCreated = 0;
		this.countMax = 10;
		this.timer = this.scene.time.addEvent({
			delay: 1000,
			loop: true,
			callback: this.tick,
			callbackScope: this,
		});
	}

	tick() {
		if (this.countCreated < this.countMax) {
			this.createEnemy();
		} else {
			this.timer.remove();
		}
	}

	createEnemy() {
		let enemy = this.getFirstDead();

		if (!enemy) {
			enemy = Enemy.generate(this.scene, this.fires);
			this.add(enemy);
		} else {
			enemy.reset();
		}

		this.countCreated++;
		enemy.move();
	}
}
