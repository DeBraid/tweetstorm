Meteor.call("getTweets", function(error, result) {
  if (error)
      console.log(error)
  console.log(result); 
  
  Session.set("tweets", result);
});

Template.tweets.helpers({
  rant: function () {
    return Session.get("tweets");
  }
});