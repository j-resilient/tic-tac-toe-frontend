class View {
  constructor(game, $el) {
    this.game = game;
    this.setupBoard($el);
  }

  bindEvents() {
    $("ul").on("click", "li", e => {
      let $square = $(e.currentTarget);

      this.makeMove($square);

      $square.removeClass("unclicked-cell");
      $square.addClass("clicked-cell");

      // if game won, alert win
      if (this.game.isOver()) {
        const winner = this.game.winner();
        if (winner) {
          alert(winner + " wins!");
        } else {
          alert("It's a tie!");
        }

        $("ul").off("click");
      }
    });
  }

  makeMove($square) {
    let mark = this.game.currentPlayer;
    try {
      this.game.playMove($square.data("pos"));
    } catch(err) {
      alert(err.msg);
      return;
    }
    $square.append(mark);
  }

  setupBoard($el) {
    const $ul = $("<ul></ul");
    $ul.addClass("grid")

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        let $li = $("<li></li>");
        $li.addClass("cell unclicked-cell");
        $li.data("pos", [x, y]);
        $ul.append($li);
      }
    }
    $el.append($ul)
    this.bindEvents();
  }
}

module.exports = View;
