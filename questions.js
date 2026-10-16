// Cấu hình + ngân hàng câu hỏi. Mỗi câu: q = câu hỏi, a = 4 đáp án, c = vị trí đáp án đúng (bắt đầu từ 0).
// Thêm bao nhiêu câu cũng được (nên >= 10 câu mỗi vùng).
window.CONFIG = { perTurn: 10 }; // số câu hỏi mỗi lượt
window.QUESTIONS = {
bac: [
 {q:"Thủ đô của Việt Nam là thành phố nào?",a:["Hà Nội","Huế","Đà Nẵng","Hải Phòng"],c:0},
 {q:"Loài hoa nào là biểu tượng của Tết ở miền Bắc?",a:["Hoa mai","Hoa đào","Hoa sen","Hoa cúc"],c:1},
 {q:"Vịnh Hạ Long thuộc tỉnh nào?",a:["Quảng Ninh","Hải Dương","Thanh Hóa","Nghệ An"],c:0},
 {q:"Văn Miếu – Quốc Tử Giám được xây dựng dưới triều đại nào?",a:["Trần","Lê","Lý","Nguyễn"],c:2},
 {q:"Đỉnh Fansipan – nóc nhà Đông Dương – thuộc tỉnh nào?",a:["Lai Châu","Lào Cai","Hà Giang","Sơn La"],c:1},
 {q:"Hát Quan họ là dân ca nổi tiếng của vùng nào?",a:["Bắc Ninh","Quảng Nam","Cần Thơ","Thừa Thiên Huế"],c:0},
 {q:"Dòng sông nào chảy qua thủ đô Hà Nội?",a:["Sông Hương","Sông Hồng","Sông Hàn","Sông Tiền"],c:1},
 {q:"Chùa Một Cột nằm ở thành phố nào?",a:["Hải Phòng","Nam Định","Hà Nội","Huế"],c:2},
 {q:"Hoàng thành Thăng Long được UNESCO công nhận là Di sản thế giới năm nào?",a:["1993","2003","2010","2015"],c:2},
 {q:"Múa rối nước là nghệ thuật dân gian của vùng nào?",a:["Đồng bằng Bắc Bộ","Tây Nguyên","Nam Bộ","Duyên hải miền Trung"],c:0}
],
trung: [
 {q:"Kinh thành Huế là kinh đô của triều đại nào?",a:["Nhà Lý","Nhà Trần","Nhà Hồ","Nhà Nguyễn"],c:3},
 {q:"Phố cổ nào nổi tiếng với những chiếc đèn lồng đủ sắc màu?",a:["Hội An","Hà Nội","Sa Pa","Mỹ Tho"],c:0},
 {q:"Đèo Hải Vân nằm giữa Huế và thành phố nào?",a:["Quy Nhơn","Đà Nẵng","Nha Trang","Vinh"],c:1},
 {q:"Phong Nha – Kẻ Bàng nổi tiếng thế giới với điều gì?",a:["Núi lửa","Hệ thống hang động","Rừng ngập mặn","Ruộng bậc thang"],c:1},
 {q:"Nhã nhạc là nhạc cung đình của kinh đô nào?",a:["Thăng Long","Hoa Lư","Huế","Sài Gòn"],c:2},
 {q:"Mì Quảng là món đặc sản của miền nào?",a:["Miền Bắc","Miền Trung","Miền Nam","Tây Bắc"],c:1},
 {q:"Thánh địa Mỹ Sơn là di tích của nền văn hóa nào?",a:["Óc Eo","Đông Sơn","Chăm Pa","Sa Huỳnh"],c:2},
 {q:"Sông nào chảy qua thành phố Huế thơ mộng?",a:["Sông Hương","Sông Đà","Sông Cửu Long","Sông Mã"],c:0},
 {q:"Cầu Vàng nổi tiếng nằm ở khu du lịch nào?",a:["Fansipan","Bà Nà Hills","Tam Đảo","Đà Lạt"],c:1},
 {q:"Bún bò là đặc sản nổi tiếng của thành phố nào?",a:["Huế","Cần Thơ","Hải Phòng","Hà Nội"],c:0}
],
nam: [
 {q:"Thành phố Hồ Chí Minh có tên gọi cũ là gì?",a:["Thăng Long","Phú Xuân","Sài Gòn","Gia Định Thành"],c:2},
 {q:"Vùng nào được mệnh danh là vựa lúa lớn nhất cả nước?",a:["Đồng bằng sông Hồng","Đồng bằng sông Cửu Long","Tây Nguyên","Duyên hải Nam Trung Bộ"],c:1},
 {q:"Chợ nổi Cái Răng nằm ở thành phố nào?",a:["Cần Thơ","Vũng Tàu","Biên Hòa","Hải Phòng"],c:0},
 {q:"Loài hoa nào là biểu tượng của Tết ở miền Nam?",a:["Hoa đào","Hoa mai vàng","Hoa ban","Hoa phượng"],c:1},
 {q:"Dòng Mê Kông chảy qua Việt Nam được gọi là sông gì?",a:["Sông Đà","Sông Hồng","Sông Đồng Nai","Sông Cửu Long"],c:3},
 {q:"Đờn ca tài tử là loại hình nghệ thuật của miền nào?",a:["Miền Bắc","Miền Trung","Nam Bộ","Tây Bắc"],c:2},
 {q:"Đảo lớn nhất Việt Nam là đảo nào?",a:["Cát Bà","Phú Quốc","Lý Sơn","Côn Đảo"],c:1},
 {q:"Mũi Cà Mau là điểm cực nào của đất liền Việt Nam?",a:["Cực Bắc","Cực Đông","Cực Tây","Cực Nam"],c:3},
 {q:"Bánh tét là món ăn không thể thiếu trong Tết của miền nào?",a:["Miền Nam","Chỉ miền Bắc","Chỉ Tây Nguyên","Không có miền nào"],c:0},
 {q:"Địa đạo Củ Chi nằm ở thành phố nào?",a:["Hà Nội","Đà Nẵng","Thành phố Hồ Chí Minh","Cần Thơ"],c:2}
]};
