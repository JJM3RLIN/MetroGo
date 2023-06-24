const Twit = require('twit')
const T = new Twit(
{  
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: ''
}
)
T.get('search/tweets', { q: 'MetroCDMX', count: 10 }, function(err, data, response) {
  console.log(data)
})

 
