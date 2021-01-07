var request = require("request");
var cheerio = require("cheerio");
var nodemailer = require('nodemailer');
const fs = require("fs");
// 這個不需要安裝直接引用即可，用來把資料寫入 JSON檔案
var take = function () {
    request({
        // 爬蟲要爬的網站
        url: 'https://covid19.mohw.gov.tw/ch/mp-205.html',
        method: "GET"
    }, function (error, response, body) {
        if (error || !body) {
            // 如果沒爬到就不做事
            return;
        } else {
            // 寫你要做的事情            
            const $ = cheerio.load(body); // 抓到 body            
            const li = $(".event"); // 爬每一行的 tr   
            const result = []; // 建立一個儲存結果的容器        
            for (i = 0; i < li.length; i++) {
                var checkTime =  li.eq(i).find('span');
                var checkEvent = li.eq(i).find('p');
                var time = checkTime.eq(0).text();
                var event = checkEvent.eq(0).text();                
                result.push(Object.assign({time,event}))
            }
            console.log(result);
            fs.writeFileSync("resultTime.json", JSON.stringify(result));
        }
    })
}
take();
setInterval(take, 5 / 60 * 60 * 1000);