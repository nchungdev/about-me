class HeaderBehavior {
  constructor(header, window) {
    this.header = header;
    this.window = window;
    this.sticky = this.header.offset().top;
    this.divActive = $("#content").children("div.active");
    this.tabLg = $("#menu-lg").children("li.tab");
    this.tabSm = $("#menu-sm").children("li.tab");
  }

  activeTab(tabs, hash) {
    tabs.each(function(index, value) {
      const isEqual =
        $(value)
          .children("a")
          .attr("href") == hash;
      if (isEqual) {
        $(value).addClass("active");
        return;
      }
    });
  }
  setTabOnClickListener(tabs) {
    tabs.children("a").click(function(e) {
      const hash = this.hash;
      if (hash == undefined || hash == "") {
        return;
      }
      e.preventDefault();
      window.location.hash = hash;
      if (hash == "#about") $("#content").addClass("no-card");
      else $("#content").removeClass("no-card");
    });
  }

  onScroll() {
    if (this.window.pageYOffset > this.sticky) {
      this.header.addClass("sticky");
      if ($(document).width() > 768) {
        this.header.width($(".panel-background").width());
      }
      $("#content")
        .parent()
        .addClass("sticky");
      $(".profile").width(
        $(".profile")
          .parent()
          .width()
      );
      $(".profile").addClass("sticky");
    } else {
      this.header.removeClass("sticky");
      $("#content")
        .parent()
        .removeClass("sticky");
      $(".profile").removeClass("sticky");
    }
  }

  onLoad() {
    let hash = this.window.location.hash;
    switch (hash) {
      case "":
        $("#about").addClass("active");
        return;
      case "#about":
        $("#content").addClass("no-card");
        break;
      default:
        $("#content").removeClass("no-card");
        break;
    }
    if ("#" + this.divActive.attr("id") != hash) {
      this.divActive.removeClass("active");
      $(hash).addClass("active");
      this.activeTab(this.tabLg, hash);
      this.activeTab(this.tabSm, hash);
    }
    this.setTabOnClickListener(this.tabLg);
    this.setTabOnClickListener(this.tabSm);
  }
}
