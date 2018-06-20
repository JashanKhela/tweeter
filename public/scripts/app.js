$(document).ready(function() { console.log('ready')
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweet) {
  for(let item in tweet) {
    let aTweet = tweet[item];
    let name = aTweet['user'].name;
    let avatar = aTweet['user']['avatars'].small;
    let handle = aTweet['user'].handle;
    let createdDateMilli = aTweet['created_at'] / 86400000000;
    let createdDate = Math.round(createdDateMilli);
    let $tweet = createTweetElement(aTweet['content']);
    let obj = {
      name: name,
      avatar: avatar,
      handle: handle,
      createdDate: createdDate,
      tweet: $tweet
    }
    let myHTMLObj = createHTMLobject(obj);
    $('#tweet-feed').append(myHTMLObj);
  }
}

function createHTMLobject(inputObj) {
  console.log(inputObj);
  let HTMLObj =`
   <article class="new-tweet-article">
    <header>
      <img src="${inputObj.avatar}" height="50px" width="50px" >
      <h3>${inputObj.name}</h3>
      <h5>${inputObj.handle}</h5>
   </header>
    <div class="tweet-body">
    <p class ="message">${inputObj.tweet}</p>
    </div>
    <footer>
      <p>${inputObj.createdDate} Days Ago</p>
      <div class="icons">
      <span class="fa fa-flag"></span>
      <span class="fa fa-refresh" ></span>
      <span class="fa fa-heart" ></span>

    </footer>
  </article>
  `
return HTMLObj;
}

function createTweetElement(tweetObj) {
  return tweetObj.text ;
}

renderTweets(data);
});
