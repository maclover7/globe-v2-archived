import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);

//import Ember from 'ember';

//export default Ember.Route.extend({
  //actions: {
    //signInGoogle: function(){
      //var controller = this.controllerFor('application');
      //this.get('torii').open('google-oauth2').then(function(authorization){
        //var auth_code = authorization.authorizationCode;
        //// Get User Data
        //var userData = 'hi';
        //debugger;
        //// create user
        //controller.set('hasGoogle', true);
      //});
    //},
  //}
//});
