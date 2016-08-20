import * as request from 'request';
import * as http from 'http';
import * as fs from 'fs';
import * as path from  'path';
var debug_name = 'vote_for_saber_hbooker';
if (module == require.main) {
    process.env.DEBUG = debug_name;
}
import * as debug from 'debug';

var log_file: string = path.join(__dirname, debug_name + '.log');
var hbooker_debug: debug.IDebugger = debug(debug_name);
hbooker_debug.log = function (...args) {
    fs.appendFile(log_file, `${args.join(' ')}\n`);
};


request.post({
    uri: 'http://www.hbooker.com/book/give_recommend',
    headers: {
        "Accept-Language": "zh-CN,zh;q=0.8,ja;q=0.6,en;q=0.4,zh-TW;q=0.2",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
        "Cookie": "qdgd=1; bookReadTheme=night%2C0%2C20; user_id=572115; reader_id=572115; login_token=93eab04578442d70f24a50e0fb616166; get_task_type_sign=1; Hm_lvt_e843afdff94820d69cd6d82d24b9647e=1471176769,1471351660,1471529165,1471545387; Hm_lpvt_e843afdff94820d69cd6d82d24b9647e=1471545387; ci_session=6e11c510bfa7cce63f635f5a1114de9794b28d49",
        "Connection": "keep-alive",
        "Referer": "http://www.hbooker.com/chapter/get_chapter_list?book_id=100012408",
        "DNT": "1"
    },
    body: "book_id=100012408&count=6"
}, function (err: Error, resp: http.IncomingMessage, body: string) {
    hbooker_debug(body);
});
