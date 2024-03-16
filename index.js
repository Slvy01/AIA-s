const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=shakeitoff&type=track', {
    headers: {
    'Authorization': 'Bearer BQCyOrgmse5ZAIxhwv3ibLcHw_u91RJ_1BSE3B9aZYAzRpSLNXu9aOaHQQ8_B6tx305KvVdxSsm5yDfKUevgcYNO_VYiuTeOCwZWi6KQaVKULtJIa2JB1XSOqBftziIHzOga4jqCbDZL4oZ3pCkRZgcjk_vvpRGi1wdHjTVdpbYxizCMQ5XxKCPhEyKcypVEHvgsQrENHAzO8PcKjqE'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})