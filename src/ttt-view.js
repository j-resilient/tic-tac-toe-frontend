class View {
  constructor(game, $el) {
    this.setupBoard($el);
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard($el) {
    const $ul = $("<ul></ul");
    $ul.addClass("grid")

    for (let i = 0; i < 9; i++) {
      let $li = $("<li></li>");
      $li.addClass("cell unclicked-cell");
      $ul.append($li);
    }

    $el.append($ul)
  }
}

module.exports = View;
