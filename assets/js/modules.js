class HeaderBehavior {
  constructor(header, window, sticky) {
    this.header = header;
    this.window = window;
    this.sticky = this.header.offset().top;
  }

  fixedHeaderOnScroll() {
    if (this.window.pageYOffset > this.sticky) {
      this.header.addClass("sticky");
      $("#content")
        .parent()
        .addClass("sticky");
    } else {
      this.header.removeClass("sticky");
      $("#content")
        .parent()
        .removeClass("sticky");
    }
  }
}
