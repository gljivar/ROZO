require([
  "app",
  "routers/main"
  ],

function(app, Router) {
  app.router = new Router();
  Backbone.history.start({
    pushState: false,
    root: app.root
  });

  $(document).on("click", "a:not([data-bypass])", function(evt) {
    var href = $(this).attr("href");
    if (href && href.indexOf("#") === 0) {
      evt.preventDefault();
      Backbone.history.navigate(href, true);
    }
  });

});