const Twit = require('twit')
const T = new Twit(
{  
  consumer_key: 'B5dIZC5aNPGaxpFH2Rmb2yszJ',
  consumer_secret: 'K9prgpcx6nKMMKedVGHq1eWQ6lChkfvrctqgG8l17YC6YCi6ZR',
  access_token: '1569894471646744576-rPZD9Wy28YAnDVkZO8rT7Jw0MqGoQR',
  access_token_secret: 'WXmJAsNaujxvBfF7S8PMNRZSrlcNSwbhAeb6oRTQhpvcw'
}
)
T.get('search/tweets', { q: 'MetroCDMX', count: 10 }, function(err, data, response) {
  console.log(data)
})

 
