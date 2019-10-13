$(document).ready(function() {
  (function() {
    let hash = window.location.hash;
    let divActive = $("#content").children("div.active");
    const tabLg = $("#menu-lg").children("li.tab");
    const tabSm = $("#menu-sm").children("li.tab");
    setTabOnClickListener(tabLg);
    setTabOnClickListener(tabSm);
    checkIsAbout(hash);
    function setTabOnClickListener(tabs) {
      tabs.children("a").click(function(e) {
        e.preventDefault();
        checkIsAbout(this.hash);
        window.location.hash = this.hash;
      });
    }

    (function checkHashOnLoad() {
      if (hash == "") {
        $("#about").addClass("active");
        return;
      }
      if ("#" + divActive.attr("id") != hash) {
        divActive.removeClass("active");
        $(hash).addClass("active");
        activeTab(tabLg, hash);
        activeTab(tabSm, hash);
      }
    })();

    function activeTab(tabs, hash) {
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

    function checkIsAbout(hash) {
      if (hash == "#about") $("#content").addClass("no-card");
      else $("#content").removeClass("no-card");
      console.log("Changed.." + hash);
    }
  })();

  const headerBehavior = new HeaderBehavior($("header"), window);
  $(document).scroll(function() {
    headerBehavior.fixedHeaderOnScroll();
  });
});
