import "pixi";
import "p2";
import Phaser from "phaser";

import bootState from "./states/Boot";
import loadState from "./states/Load";
import titleState from "./states/Title";
import playState from "./states/Play";

export default class Game extends Phaser.Game {
  constructor() {
    super(480, 360, Phaser.AUTO, "gameDiv", null);

    // state
    this.state.add("boot", bootState, false);
    this.state.add("load", loadState, false);
    this.state.add("title", titleState, false);
    this.state.add("play", playState, false);

    // start
    this.state.start("boot");
  }
}

window.game = new Game();
