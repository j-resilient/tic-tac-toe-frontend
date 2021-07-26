const View = require("./ttt-view");
const Game = require("../back_end/game");

  $(() => {
    const game = new Game();
    const figure = $("figure.ttt");
    const view = new View(game, figure);
  });
