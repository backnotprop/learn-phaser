import Phaser from "phaser";

export default class extends Phaser.State {
  create() {
    console.log("============  1");
    let nameLabel = this.add.text(160, 80, "Click anywhere to start", {
      font: "14px Space Mono",
      fill: "#ffffff"
    });

    this.input.activePointer.capture = true;
  }

  update() {
    if (this.input.activePointer.isDown) {
      this.state.start("play");
    }
  }
}
