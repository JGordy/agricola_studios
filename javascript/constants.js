// YouTube related credentials
const youTubeChannelId = 'YOUR-CHANNEL-ID';
const YTkey = 'YOUR-API-KEY';
let YTurl = `https://www.googleapis.com/youtube/v3/search?key=${YTkey}&channelId=${youTubeChannelId}&part=snippet,id&order=date&maxResults=20`;

const profileLinks = [
  {
    site: 'YouTube',
    url: 'https://www.youtube.com/channel/UCF6cKDf64M0WFQbL-xfHatQ?view_as=subscriber'
  },
  {
    site: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kevin-agricola-453072147/'
  },
  {
    site: 'Instagram',
    url: 'https://www.instagram.com/agricolastudiosllc/'
  },
  {
    site: 'Facebook',
    url: 'https://www.facebook.com/Agricola-Studios-LLC-416645625511250/?modal=admin_todo_tour'
  }
];

const clients = [
  {
    client: 'North Fulton Young Life',
    url: 'https://northfulton.younglife.org/Pages/Young%20Life%20Committee.aspx'
  },
  {
    client: 'Team Airsoft Georgetown',
    url: 'https://www.teamairsoft.com/'
  },
  {
    client: 'Creation Ministries International',
    url: 'https://creation.com/'
  },
  {
    client: 'Thunder Bay Video',
    url: 'http://thunderbayvideo.com'
  }
];
