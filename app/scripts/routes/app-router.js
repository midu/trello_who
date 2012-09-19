TrelloWho.Router = Ember.Router.extend({
  enableLogging: true,
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      redirectsTo: 'overview'
    })
  }),

  overview: Ember.Route.extend({
    route: '/overview',
    connectOutlets: function(router) {
      router.get('applicationController').connectOutlet('overview');
    }
  })
});

