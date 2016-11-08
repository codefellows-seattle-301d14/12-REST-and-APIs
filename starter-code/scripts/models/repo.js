(function(module) {
  var repos = {};

  repos.allRepos = [];
// TODO: create a githubToken.js file that we can use to generate our headers
         // properly.
        //  DONE
  repos.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken,},
      url: 'https://api.github.com/users/dbecker4130/repos',
      success: function(data, message, xhr) {
        console.log(data);
      }
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
