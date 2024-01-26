const axios = require('axios')
async function tryServer1(url) {
    let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
    let response = await axios.get(tiklydownAPI);
    console.log(response.data)
    return response.data
    
}
tryServer1('https://vm.tiktok.com/ZSNot9qCL/')
