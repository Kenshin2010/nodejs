Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web.[1] Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối tiểu tổng chi phí và tối đại khả năng mở rộng.[2] Node.js bao gồm có V8 JavaScript engine của Google, libUV, và vài thư viện khác.

Node.js được tạo bởi Ryan Dahl từ năm 2009, và phát triển dưới sự bảo trợ của Joyent.[3][4]

Mục tiêu ban đầu của Dahl là làm cho trang web có khả năng push như trong một số ứng dụng web như Gmail. Sau khi thử với vài ngôn ngữ Dahl chọn Javascript vì một API Nhập/Xuất không đầy đủ. Điều này cho phép anh có thể định nghĩa một quy ước Nhập/Xuất điểu khiển theo sự kiện, non-blocking.[5]

Vài môi trường tương tự được viết trong các ngôn ngữ khác bao gồm Twisted cho Python, Perl Object Environment cho Perl, libevent cho C và EventMachine cho Ruby. Khác với hầu hết các chương trình Javascript, Nodejs không chạy trên một trình duyệt mà chạy trên Server. Node.js sử dụng nhiều chi tiết kỹ thuật của CommonJS.[6] Nó cung cấp một môi trường REPL cho kiểm thử tương tác.

Node.js được InfoWorld bình chọn là "Công nghệ của năm" năm 2012.[7]


Mục lục
1	Ví dụ
2	Cộng đồng
3	Các Framework nổi tiếng
4	Xem thêm
5	Tham khảo
6	Đọc thêm
7	Liên kết ngoài
Ví dụ
Đây là phiên bản hello world HTTP Server trên Node.js:

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8000);

console.log('Server running at http://localhost:8000/');
Đoạn mã sau là một máy chủ TCP lắng nghe trên cổng 7000 và echo chuỗi 'hello' ra mỗi kết nối:

var net = require('net');

net.createServer(function (stream) {
    stream.write('hello\r\n');

    stream.on('end', function () {
        stream.end('goodbye\r\n');
    });

    stream.pipe(stream);
}).listen(7000);
Cộng đồng
Cộng đồng phát triển Node.js chủ yếu tập trung ở hai nhóm google: nodejs và nodejs-dev, một kênh IRC là #node.js trên mạng freenode. Có một hội thảo về Node.js là NodeConf được tổ chức thường niên.[8]

Hiện nay Node.js được sử dụng bởi nhiều công ty trong đó có Linkedin,[9][10] Microsoft,[11] Yahoo![12] và Walmart.[13]

Hiện tại website của Node.JS tại Việt Nam là nodejs.vn.[cần dẫn nguồn]

Các Framework nổi tiếng
Express.js được sử dụng phổ biến để phát triển ứng dụng trên nền Nodejs.
Xem thêm
	Chủ đề Free software
NPM - bộ quản lý đóng gói nổi bật của Node.js. Từ phiên bản Node.js 0.6.3, npm được cài tự động với Node.js.
YARN - Bộ quản lý đóng gói mã nguồn mở với hiệu năng cao.
JSAN, viết tắt của JavaScript Archive Network - một bộ quản lý gói khác ít dùng hơn.
Opa, một hướng tiếp cận khác cho lập trình ứng dụng web, có nhiều đặc trưng của Node.js
Tham khảo
^ Wait, What's Node.js Good for Again?, By Klint Finley, ngày 25 tháng 1 năm 2011, ReadWriteHack
^ Cade Metz (1 tháng 3 năm 2011). “The Node Ahead: JavaScript leaps from browser into future”. The Register.
^ Why Everyone Is Talking About Node, By Jolie O'Dell, ngày 10 tháng 3 năm 2011, Mashable
^ Alex Handy (24 tháng 6 năm 2011). “Node.js pushes JavaScript to the server-side”. SDTimes. Truy cập ngày 4 tháng 9 năm 2011.
^ Hughes-Croucher, Tom; Wilson, Mike (2012). Up and Running with Node.js. Up and Running (ấn bản 1). Sebastopol: O'Reilly. tr. vii. ISBN 978-1-4493-9858-3. I was concerned about the ability to program advanced push features into the website like I had seen in Gmail
See the book's Foreword at OReilly.com
^ Implementations/node.js - CommonJS Spec Wiki
^ “Node.js Selected by InfoWorld for 2012 Technology of the Year Award”. MarketWatch. Ngày 11 tháng 1 năm 2012. Truy cập ngày 26 tháng 1 năm 2012.
^ NodeConf Schedule Announced, By Klint Finley, ngày 7 tháng 4 năm 2011, ReadWriteHack
^ “You’ll never believe how LinkedIn built its new iPad app”. VentureBeat. Ngày 2 tháng 5 năm 2012. Truy cập ngày 10 tháng 5 năm 2012.
^ [1], LinkedIn's developer blog discusses their Node.js stack optimizations
^ “Here's why you should be happy that Microsoft is embracing Node.js”. The Guardian. Ngày 9 tháng 11 năm 2011. Truy cập ngày 10 tháng 5 năm 2012.
^ [2], Yahoo! Developer Network announces Cocktails project using Node.js
^ “Why Walmart is using Node.js”. VentureBeat. Ngày 24 tháng 1 năm 2012. Truy cập ngày 10 tháng 5 năm 2012.
Đọc thêm
Hughes-Croucher, Tom; Wilson, Mike (tháng 4 năm 2012), Up and Running with Node.js , O'Reilly Media, tr. 204, ISBN 978-1-4493-9858-3
Liên kết ngoài
Website chính thức
npm
Ryan Dahl: Node.js | JSConf.eu on Blip
How to install NodeJS