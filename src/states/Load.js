import Phaser from "phaser";

export default class extends Phaser.State {
  preload() {
    let loadingLabel = this.add.text(80, 150, "loading...", {
      font: "30px Courier",
      fill: "#fffff"
    });

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.PageAlignHorizontally = true;
    this.scale.PageAlignVertically = true;
    this.stage.backgroundColor = "#000000";

    /***** load graphics assets  *****/
    this.load.spritesheet(
      "characters",
      "./assets/images/characters.png",
      24,
      24
    );
  }

  create() {
    this.state.start("title");
  }
}
