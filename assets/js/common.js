$(document).ready(function() {
  (function() {
    let hash = window.location.hash;
    if (hash == "") {
      $("#about").addClass("active");
    }
    let divActive = $("#content").children("div.active");
    const tabLg = $("#menu-lg").children("li.tab");
    const tabSm = $("#menu-sm").children("li.tab");
    setTabOnClickListener(tabLg);
    setTabOnClickListener(tabSm);

    function setTabOnClickListener(tabs) {
      tabs.children("a").click(function(e) {
        e.preventDefault();
        console.log($(this));
        window.location.hash = this.hash;
        activeTab(tabLg, hash);
        activeTab(tabSm, hash);
      });
    }

    (function checkHashOnLoad() {
      if ("#" + divActive.attr("id") != hash) {
        divActive.removeClass("active");
        $(hash).addClass("active");
        activeTab(tabLg, hash);
        activeTab(tabSm, hash);
      }
    })();

    function activeTab(tabs, hash) {
      tabs.each(() => {
        const isNeedActiveTab =
          $(this)
            .children("a")
            .attr("href") == hash;
        if (isNeedActiveTab) {
          $(this).addClass("active");
          return;
        }
      });
    }
  })();
});
