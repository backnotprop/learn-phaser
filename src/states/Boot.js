import Phaser from "phaser";

export default class extends Phaser.State {
  create() {
    // pre rendering here if needed
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.state.start("load");
  }
}
