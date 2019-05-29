var openId = '293b8d3dfd73419699c0ccdab2867183'
var masterSecret = '987fd5820d114c88a48e72269e89689a'
var appId = '00011'
var app_v = '0.02'

var md5 = require('./md5.js')
function createSign(){
    function randomString(len){
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    } 
    var timestamp = Date.parse(new Date());
    var nonceStr = Math.random().toString(36).substr(2, 15);
    var conent = "nonceStr="+nonceStr+"&openId="+openId+"&timestamp="+timestamp+masterSecret;
    var signature = md5.hexMD5(conent)

    return {
        'nonceStr':nonceStr,
        'openId': openId,
        'signature':signature,
        'timestamp':timestamp,
        'appId':appId,
        '_v': app_v // api版本号
        }
}

export default createSign
// console.log(createSign())


