let mobile1 = new Mobile(true, 60, [], [], []);
let mobile2 = new Mobile(true, 89, [], [], []);

mobile1.getDrafMessage("Hello Mobile 2");
mobile2.getDrafMessage("Hello Mobile 1");
document.write(`Trạng thái: ${mobile1.getStatus()}<br>`);
document.write(`Pin: ${mobile1.getBattery()}%<br>`)
mobile1.getChargeBattery();
document.write(`Trạng thái sạc Pin: ${mobile1.getBattery()}<br>`)
document.write(`Tin nhắn nháp trước khi gửi Mobile1: ${mobile1.draftMessage}<br>`);
mobile1.getSendMessage(mobile2);
document.write(`Tin nhắn nháp sau khi gửi Mobile1: ${mobile1.draftMessage}<br>`);
document.write(`Tin nhắn đã gửi: ${mobile1.sendMessage}<br>`);
document.write(`Tin nhắn đã nhận: ${mobile1.inboxMessage}<br><br>`);

document.write(`Status Mobile2: ${mobile2.getStatus()}<br>`);
document.write(`Pin: ${mobile2.getBattery()}%<br>`)
document.write(`Trạng thái sạc pin: ${mobile2.getChargeBattery()}<br>`);
document.write(`Tin nhắn nháp trước khi gửi Mobile1: ${mobile2.draftMessage}<br>`);
mobile2.getSendMessage(mobile1);
document.write(`Tin nhắn nháp sau khi gửi Mobile2: ${mobile2.draftMessage}<br>`);
document.write(`Tin nhắn đã gửi: ${mobile2.sendMessage}<br>`);
document.write(`Tin nhắn đã nhận: ${mobile2.inboxMessage}<br>`);

