import Phaser from "phaser";

export default class extends Phaser.State {
  create() {
    let self = this;

    self.player = new Player({
      game: self.game,
      x: 50,
      y: 200,
      asset: "characters"
    });

    self.add.existing(self.player);
    self.physics.enable(self.player, Phaser.Physics.ARCADE);

    self.mob = self.add.group();
    self.mob.add(
      new Enemy({ game: self.game, x: 100, y: 100, asset: "characters" })
    );
    self.mob.add(
      new Enemy({ game: self.game, x: 200, y: 100, asset: "characters" })
    );
    self.mob.add(
      new Enemy({ game: self.game, x: 100, y: 200, asset: "characters" })
    );
    self.mob.add(
      new Enemy({ game: self.game, x: 200, y: 200, asset: "characters" })
    );
    self.mob.add(
      new Enemy({ game: self.game, x: 300, y: 300, asset: "characters" })
    );
    self.mob.add(
      new Enemy({ game: self.game, x: 400, y: 200, asset: "characters" })
    );

    self.mob.forEach(enemy => {
      self.physics.enable(enemy, Phaser.Physics.ARCADE);
      enemy.body.immovable = true;
    });

    self.input.activePointer.capture = true;
  }

  update() {
    let self = this;

    self.player.animations.play("wait");
    self.mob.forEach(enemy => {
      enemy.animations.play("wait");
    });

    // moves the player wherever you click
    if (self.input.activePointer.isDown) {
      self.player.setDest(self.input.x, self.input.y);
    }
    self.player.update();

    game.physics.arcade.collide(self.player, self.mob, () => {
      self.player.stop();
    });
  }
}

class Player extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.frame = 0;
    this.anchor.setTo(0.5, 1);
    // add: name, [frames in animation], speed
    this.animations.add("wait", [8, 9], 4);
  }

  setDest(x, y) {
    this.xDest = x;
    this.yDest = y;
  }

  update() {
    let self = this;
    if (Math.floor(self.x / 10) == Math.floor(self.xDest / 10)) {
      self.body.velocity.x = 0;
    } else if (Math.floor(self.x) < Math.floor(self.xDest)) {
      self.body.velocity.x = 80;
      self.scale.x = -1;
    } else if (Math.floor(self.x) > Math.floor(self.xDest)) {
      self.body.velocity.x = -80;
      self.scale.x = 1;
    }

    if (Math.floor(self.y / 10) == Math.floor(self.yDest / 10)) {
      self.body.velocity.y = 0;
    } else if (Math.floor(self.y) < Math.floor(self.yDest)) {
      self.body.velocity.y = 80;
    } else if (Math.floor(self.y) > Math.floor(self.yDest)) {
      self.body.velocity.y = -80;
    }
  }

  stop() {
    let self = this;
    self.xDest = self.x;
    self.yDest = self.y;
    self.body.velocity.x = self.body.velocity.y = 0;
  }
}

class Enemy extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.frame = 544;
    this.anchor.setTo(0.5, 1);
    this.scale.x = -1;
    this.xDest = x;
    this.yDest = y;
    this.animations.add("wait", [544, 545], 4);
  }

  goToXY(x, y) {}

  update() {}
}
