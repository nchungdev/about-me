$(document).ready(function() {
  (function() {
    let hash = window.location.hash;
    let divActive = $("#content").children("div.active");
    const tabLg = $("#menu-lg").children("li.tab");
    const tabSm = $("#menu-sm").children("li.tab");
    setTabOnClickListener(tabLg);
    setTabOnClickListener(tabSm);

    function setTabOnClickListener(tabs) {
      tabs.children("a").click(function(e) {
        e.preventDefault();
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
  })();
});
