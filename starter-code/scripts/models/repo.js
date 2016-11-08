(function(module) {
  var repos = {};

  repos.allRepos = [];
// TODO DONE: create a githubToken.js file that we can use to generate our headers
         // properly.

  repos.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url:'https://api.github.com/users/julienawilson/repos',
      type:'GET',
      headers:{'Authorization':'token '+'55bcbcd8e46e527095af4becad03c319df269e21'},
      success: function(data,message,xhr){
        repos.allRepos=data;
        callback(data);}
    });
  };

  repos.withTheAttribute = function(myAttr) {
    /* NOTE: This Model method filters the full repos collection based
        on a particular attribute. For example, you could use this
        to filter all repos that have a forks_count, stargazers_count,
        or watchers_count. */
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
