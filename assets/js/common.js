$(document).ready(function() {
  const headerBehavior = new HeaderBehavior($("header"), window);
  $(document).scroll(function() {
    headerBehavior.onScroll();
  });
  headerBehavior.onLoad();
});
