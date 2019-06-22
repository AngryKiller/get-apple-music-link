/* Get Apple Music Link 1.0
   by AngryKiller  */

var exports = module.exports = {};
const request = require('request');

function encodeUri(text){
    return encodeURIComponent(text).replace(/'/g,"%27").replace(/"/g,"%22");
}

exports.track = function(title, artist, callback) {
    const reqParam = encodeUri(`${title} ${artist}`);
    request(`https://itunes.apple.com/search?term=${reqParam}&entity=musicTrack`, function (error, response, body) {
        const res = JSON.parse(body.toString()).results[0];
        if(res){
            callback(res.trackViewUrl);
        }
        else{
            callback(null, true);
        }
    });
};
