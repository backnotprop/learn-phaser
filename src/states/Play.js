import Phaser from "phaser";

export default class extends Phaser.State {
  create() {
    var player = this.add.sprite(100, 200, "characters");
    player.frame = 0;
    this.add.existing(player);
    player.anchor.setTo(0.5, 1);
  }

  update() {}
}
