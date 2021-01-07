var request = require("request");
var cheerio = require("cheerio");
var nodemailer = require('nodemailer');
var result = []; // 建立一個儲存結果的容器
var arr = [];
var bigTitle = [];
var time = [];
const fs = require("fs");
const { callbackPromise } = require("nodemailer/lib/shared");
// 這個不需要安裝直接引用即可，用來把資料寫入 JSON檔案
var take = function (callback) {
    request({
        // 爬蟲要爬的網站
        url: "https://news.ltn.com.tw/topic/%E6%AD%A6%E6%BC%A2%E8%82%BA%E7%82%8E/1",
        method: "GET"
    }, function (error, response, body) {
        if (error || !body) {
            // 如果沒爬到就不做事
            return;
        } else {
            // 寫你要做的事情            
            const $ = cheerio.load(body); // 抓到 body            
            const li = $(".searchlist li"); // 爬每一行的 tr
            var today = new Date().toISOString().split('T')[0].replace('-', '/').replace('-', '/');
            for (var i = 0; i < li.length; i++) {
                var check = li.eq(i).find('span');
                var checktoday = check.eq(0).text().split(' ')[0];
                if (today == checktoday) {
                    var title = li.eq(i).find('a');
                    var checktitle = title.eq(0).text();
                    if (checktitle == '生活' || checktitle == '國際') {
                        arr.push(title.eq(1).attr('href'));
                        bigTitle.push(title.eq(0).text());
                        time.push(check.eq(0).text().split(' ')[1]);
                    }
                }
            }

        }
        ; callback(type)
    })
}
var type = function (callback) {
    var exec = (j) => {
        if (j < 8) {
            request(
                {
                    // 爬蟲要爬的網站
                    url: arr[j],
                    method: 'GET',
                },
                function (error, response, body) {
                    if (error || !body) {
                        // 如果沒爬到就不做事
                        return;
                    } else {
                        // 寫你要做的事情
                        const $ = cheerio.load(body); // 抓到 body
                        const div = $('.whitecon div'); // 爬每一行的 tr
                        var temp = div.eq(1).find('p');
                        var totaltext = '';
                        for (i = 1; i < temp.length - 2; i++) {
                            if (temp.eq(i).text().indexOf("「武漢肺炎專區」請點此") != -1) {
                                break;
                            }
                            if (
                                temp.eq(i).text() != '請繼續往下閱讀...' &&
                                temp.eq(i).text() != ''
                            ) {
                                totaltext += temp.eq(i).text() + "<br><br>";

                            }
                        }

                        const checkimgsrc = $('.whitecon div div a img');
                        var imgsrc = checkimgsrc.eq(0).attr('src');
                        var checktitle = $('.whitecon h1');
                        var title = checktitle.eq(0).text();
                        var getTime = time[j];
                        result.push(Object.assign({ getTime, imgsrc, title, totaltext }));
                    }
                    exec(j + 1);
                }
            );
        } else {
            callback();
        }
    };
    exec(0);
};
var write = function () {
    console.log(result.length);
    fs.writeFileSync("resultNews.json", JSON.stringify(result));
    arr = [];
    bigTitle = [];
    result = [];
}
setInterval(() => take(() => type(() => write())), 5 / 60 * 60 * 1000);