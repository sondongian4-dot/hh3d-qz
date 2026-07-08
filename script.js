// --- KHU VỰC DỮ LIỆU ---
// Dữ liệu được bảo toàn nguyên vẹn từ bản gốc
const database = [
    { q: "Ai là huynh đệ và cũng là người thầy mà Vương Lâm trong Tiên Nghịch kính trọng nhất ?", a: "Tư Đồ Nam" },
    { q: "Ai là mẹ của Đường Tam?", a: "A Ngân" },
    { q: "Ai là người đứng đầu Vũ Hồn Điện?", a: "Bỉ Bỉ Đông" },
    { q: "Ai là người thầy của Đường Tam?", a: "Đại Sư" },
    { q: "Ai là nhân vật chính trong bộ phim hoạt hình trung quốc Thần Mộ ?", a: "Thần Nam" },
    { q: "Ám tinh giới được xuất hiện trong bộ phim hoạt hình nào dưới đây ?", a: "Tinh Thần Biến" },
    { q: "Bách Lý Đông Quân là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", a: "Thiếu Niên Bạch Mã Tuý Xuân Phong" },
    { q: "Bạch Nguyệt Khôi là tên nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", a: "Linh Lung" },
    { q: "Bạch Tiểu Thuần là nhân vật chính trong bộ hoạt hình trung quốc nào ?", a: "Nhất Niệm Vĩnh Hằng" },
    { q: "Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng luôn được ai âm thầm giúp đỡ ?", a: "Đỗ Lăng Phỉ" },
    { q: "Bộ phim nào sau đây thuộc tiểu thuyết của tác giả Thiên Tằm Thổ Đậu", a: "Tất cả đáp án" },
    { q: "Các cấp bậc nào sau đây thuộc phim Đấu Phá Thương Khung ?", a: "Đấu Tông" },
    { q: "Cháu dượng của Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng là ai ?", a: "Tống Khuyết" },
    { q: "Chủ nhân đời trước của Vẫn Lạc Tâm Viêm trong Đấu Phá Thương Khung là ai ?", a: "Diệu Thiên Hoả" },
    { q: "Công pháp gì giúp Tiêu Viêm trong Đấu Phá Thương Khung hấp thụ nhiều loại dị hỏa ?", a: "Phần Quyết" },
    { q: "Công pháp nào sau đây là của Hàn Lập trong Phàm Nhân Tu Tiên ?", a: "Tất cả đáp án" },
    { q: "Cơ Tử Nguyệt là nhân vật trong các bộ hoạt hình trung quốc nào sau đây ?", a: "Già Thiên" },
    { q: "Dạ Táng còn là biệt danh của ai trong Nhất Niệm Vĩnh Hằng ?", a: "Bạch Tiểu Thuần" },
    { q: "Danh xưng Tàn Thi Bại Thuế là của nhân vật nào trong Hoạ Giang Hồ Chi Bất Lương Nhân ?", a: "Hàng Thần" },
    { q: "Diễm Linh Cơ là nhân vật trong phim hoạt hình trung quốc nào ?", a: "Thiên Hành Cửu Ca" },
    { q: "Diệp Phàm là nhân vật chính trong bộ hoạt hình trung quốc nào ?", a: "Già Thiên" },
    { q: "Diệp Thần trong Tiên Võ Đế Tôn gia nhập Tông Môn nào đầu tiên ?", a: "Chính Dương Tông" },
    { q: "Dược Trần trong Đấu Phá Thương Khung đã từng bị đồ đệ nào phản bội ?", a: "Hàn Phong" },
    { q: "Đại ca của Tiêu Viêm trong Đấu Phá Thương Khung tên gì ?", a: "Tiêu Đỉnh" },
    { q: "Đàm Vân là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", a: "Nghịch Thiên Chí Tôn" },
    { q: "Đạo lữ của Hàn Lập là ai ?", a: "Nam Cung Uyển" },
    { q: "Đâu là nhân vật chính trong phim Bách Luyện Thành Thần ?", a: "La Chinh" },
    { q: "Đâu là Thái Cổ Thập Hung trong phim Thế Giới Hoàn Mỹ ?", a: "Tất cả đáp án" },
    { q: "Đâu là tuyệt kỹ số 1 Hạo Thiên Tông mà Đường Hạo dạy cho con trai trong Đấu La Đại Lục ?", a: "Đại Tu Di Chùy" },
    { q: "Đấu Sát Toàn Viên Kiếm là một kỹ năng trong bộ phim hoạt hình trung quốc nào ?", a: "Thần Ấn Vương Tọa" },
    { q: "Độc Cô Bác trong Đấu La Đại Lục có vũ hồn gì ?", a: "Bích Lân Xà" },
    { q: "Em trai ruột của Thạch Hạo trong Thế Giới Hoàn Mỹ là ai ?", a: "Tần Hạo" },
    { q: "Hàn lập sở hữu những vật phẩm nào dưới đây ?", a: "Thanh Trúc Phong Vân Kiếm" },
    { q: "Hàn Lập trong Phàm Nhân Tu Tiên đến Thất Huyền Môn bái ai làm thầy ?", a: "Mặc Đại Phu" },
    { q: "Hàn Lập trong Phàm Nhân Tu Tiên gia nhập môn phái nào đầu tiên ?", a: "Thất Huyền Môn" },
    { q: "Hàn Lập trong Phàm Nhân Tu Tiên từng cứu ai mà bị hấp thụ tu vi giảm xuống Luyện Khí Kỳ ?", a: "Nam Cung Uyển" },
    { q: "Hoang Thiên Đế là nhân vật chính trong bộ phim hoạt hình trung quốc nổi tiếng nào ?", a: "Thế Giới Hoàn Mỹ" },
    { q: "Hoắc Vũ Hạo là hậu nhân của ai trong Sử Lai Khắc ?", a: "Đái Mộc Bạch" },
    { q: "Hồn hoàn màu nào mạnh nhất?", a: "Đỏ" },
    { q: "Huân Nhi là công chúa của bộ tộc nào?", a: "Cổ tộc" },
    { q: "Khô Lâu Đà Chủ xuất hiện trong bộ phim hoạt hình nào dưới đây ?", a: "Võ Thần Chúa Tể" },
    { q: "Khi ở Già Nam Học Viện, Tiêu Viêm thu phục được loại dị hỏa nào ?", a: "Vẫn Lạc Tâm Viêm" },
    { q: "Kính Huyền trong Quyến Tư Lượng là hậu duệ của tộc nào ?", a: "Thần Tộc" },
    { q: "Lạc Ly trong Đại Chúa Tể là nhân vật trong Tộc nào ?", a: "Lạc Thần Tộc" },
    { q: "Lâm Động trong Vũ Động Càn Khôn học được Linh Võ Học nào khi vào bia cổ Đại Hoang ?", a: "Đại Hoang Tù Thiên Chỉ" },
    { q: "Lâm Động trong Vũ Động Càn Khôn luyện hóa Tổ Phù nào đầu tiên ?", a: "Thôn Phệ Tổ Phù" },
    { q: "Lâm Động trong Vũ Động Càn Khôn sử dụng vũ khí loại nào sau đây ?", a: "Thương" },
    { q: "Lâm Phong là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", a: "Vạn Giới Độc Tôn" },
    { q: "Lâm Thất Dạ là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", a: "Trảm Thần" },
    { q: "Lâm Thất Dạ trong Trảm Thần sở hữu sức mạnh của vị thần nào ?", a: "Thiên Sứ" },
    { q: "Long Tuyền Kiếm xuất hiện trong bộ phim hoạt hình nào dưới đây ?", a: "Họa Giang Hồ Chi Bất Lương Nhân" },
    { q: "Lục Tuyết Kỳ trong Tru Tiên thuộc Phong nào trong Thanh Vân Môn?", a: "Tiểu Trúc Phong" },
    { q: "Lý Tinh Vân trong Họa Giang Hồ Chi Bất Lương Nhân sử dụng vũ khí nào sau đây ?", a: "Long Tuyền Kiếm" },
    { q: "Lý Tinh Vân là một nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?", a: "Họa Giang Hồ Chi Bất Lương Nhân" },
    { q: "Lý Trường Thọ trong Sư Huynh A Sư Huynh xuyên không về Hồng Hoang bái sư ở đâu ?", a: "Độ Tiên Môn" },
    { q: "Man Hồ Tử trong phim \"Phàm Nhân Tu Tiên\" tu luyện công pháp nào?", a: "Thác Thiên Ma Công" },
    { q: "Mẫu thân của La Phong trong Thôn Phệ Tinh Không tên là gì ?", a: "Cung Tâm Lan" },
    { q: "Mẹ của Mạnh Xuyên trong Thương Nguyên Đồ tên là gì ?", a: "Bạch Niệm Vân" },
    { q: "Mẹ của Tần Trần là ai ?", a: "Tần Nguyệt Trì" },
    { q: "Mẹ của Thạch Hạo trong Thế Giới Hoàn Mỹ tên là gì", a: "Tần Di Ninh" },
    { q: "Mối tình đầu của Diệp Thần trong Tiên Võ Đế Tôn là ai ?", a: "Cơ Ngưng Sương" },
    { q: "Mục đích chính tu luyện của Tần Vũ trong Tinh Thần Biến là gì ??", a: "Vì muốn được cưới Khương Lập" },
    { q: "Mục đích tu luyện của Vương Lâm trong Tiên Nghịch theo diễn biến phim hiện tại là gì ?", a: "Báo Thù" },
    { q: "Mục Trần trong Đại Chúa Tể liên kết Huyết Mạch với ?", a: "Cửu U Tước" },
    { q: "Mục Vân là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", a: "Vô Thượng Thần Đế" },
    { q: "Nam chính trong bộ hoạt hình trung quốc Ám Hà Truyện là ai ?", a: "Tô Mộ Vũ" },
    { q: "Nam chính trong bộ Quyến Tư Lượng là ai ?", a: "Kính Huyền" },
    { q: "Nghịch Hà Tông là Tông Môn trong bộ hoạt hình trung quốc nào sau đây ?", a: "Nhất Niệm Vĩnh Hằng" },
    { q: "Nghịch Thiên Nhi Hành là một nhân vật trong bộ phim hh3d nào sau đây ?", a: "Vũ Canh Kỷ" },
    { q: "Ngụy Anh (Ngụy Vô Tiện) là nhân vật trong bộ hhtq nào sau đây ?", a: "Ma Đạo Tổ Sư" },
    { q: "Người bạn thuở nhỏ của Trương Tiểu Phàm trong Tru Tiên là ai ?", a: "Lâm Kinh Vũ" },
    { q: "Nhân vật Bách Lý Đồ Minh xuất hiện trong phim hoạt hình nào dưới đây ?", a: "Trảm Thần Chi Phàm Trần Thần Vực" },
    { q: "Nhân vật chính của \"Thần Ấn Vương Tọa\" là ai?", a: "Long Hạo Thần" },
    { q: "Nhân vật chính của Đấu La Đại Lục là ai?", a: "Đường Tam" },
    { q: "Nhân vật chính Lý Trường Thọ trong Sư Huynh A Sư Huynh đã tỏ tình với ai ?", a: "Vân Tiêu" },
    { q: "Nhân vật chính trong Thương Nguyên đồ là ai ?", a: "Mạnh Xuyên" },
    { q: "Nhân vật chính trong Yêu Thần Ký tên là gì ?", a: "Nhiếp Ly" },
    { q: "Nhân vật chính trong Man Hoang Tiên Giới là ai ?", a: "Lục Hàng Chi" },
    { q: "Nhân vật nào luôn bất bại trong phim Hoạt Hình Trung Quốc, được ví như One-Punch Man ?", a: "Từ Dương" },
    { q: "Nhân vật nào sau đây được mệnh danh là Vua Lỳ Đòn trong Đấu Phá Thương Khung ?", a: "Phượng Thanh Nhi" },
    { q: "Nhị ca của Tiêu Viêm trong Đấu Phá Thương Khung tên gì ?", a: "Tiêu Lệ" },
    { q: "Nhiếp Phong là nhân vật chính trong phim hoạt hình trung quốc nào ?", a: "Chân Võ Đỉnh Phong" },
    { q: "Ninh Diêu là một nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?", a: "Kiếm Lai" },
    { q: "Nữ chính cũng là vợ Đông Bá Tuyết Ưng trong Tuyết Ưng Lĩnh Chủ là ai sau đây ?", a: "Dư Tĩnh Thu" },
    { q: "Nữ chính trong bộ Quyến Tư Lượng là ai ?", a: "Đồ Lệ" },
    { q: "Ông nội của Lâm Động trong Vũ Động Càn Khôn là ai ?", a: "Lâm Chấn Thiên" },
    { q: "Phụ Thân của Lâm Động trong Vũ Động Càn Khôn là ai ?", a: "Lâm Khiếu" },
    { q: "Phương Hàn là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", a: "Vĩnh Sinh" },
    { q: "Phương Hàn trong Vĩnh Sinh nhận được Giao Phục Hoàng Tuyền Đồ từ ai ?", a: "Bạch Hải Thiện" },
    { q: "Phương Hàn trong Vĩnh Sinh xuất thân là gì ở nhà họ Phương ?", a: "Nô Bộc" },
    { q: "Phượng Thanh Nhi trong Đấu Phá Thương Khung thuộc chủng tộc nào ?", a: "Thiên Yêu Hoàng Tộc" },
    { q: "Số hiệu vị thần của main trong Trảm Thần: Phàm Trần Thần Vực là số mấy ?", a: "003" },
    { q: "Sử Lai Khắc Thất Quái đã từng đến nơi nào để luyện tập?", a: "Hải Thần Đảo" },
    { q: "Sư mẫu của Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng là ai ?", a: "Hứa Mị Nương" },
    { q: "Sư phụ của Bạch Tiểu Thuần trong Nhất Niệm Vĩnh hằng là ai ?", a: "Lý Thanh Hậu" },
    { q: "Sư phụ của Lý Trường Thọ là ai ?", a: "Tề Nguyên" },
    { q: "Sư phụ mà Diệp Thần yêu trong Tiên Võ Đế Tôn là ai ?", a: "Sở Huyên Nhi" },
    { q: "Sư Phụ thứ 2 của Lý Trường Thọ trong phim", a: "Thái Thanh Thánh Nhân" },
    { q: "Tại sao Đường Tam bị Đường Môn truy sát ở tập đầu phim Đấu La Đại Lục ?", a: "Học trộm tuyệt học bổn môn" },
    { q: "Tần Mục là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", a: "Mục Thần Ký" },
    { q: "Tần Nam là nhân vật chính trong bộ hoạt hình trung quốc nào sau đây ?", a: "Tuyệt Thế Chiến Hồn" },
    { q: "Tần Vũ trong Tinh Thần Biến được tặng pháp bảo siêu cấp vip pro nào để tu luyện nhanh chóng ?", a: "Khương Lan Tháp" },
    { q: "Tần Vũ trong Tinh Thần Biến khiếm khuyết đan điền nhờ đâu mới có thể tu luyện ?", a: "Lưu Tinh Lệ" },
    { q: "Thánh nữ nào trong Già Thiên bị nhân vật chính Diệp Phàm lấy mất cái áo lót ?", a: "Diêu Hi" },
    { q: "Thần Thông Bí Cảnh xuất hiện trong bộ phim hoạt hình nào dưới đây ?", a: "Vĩnh Sinh" },
    { q: "Thần vị mà Đường Tam đạt được là gì?", a: "Hải Thần và Tu La Thần" },
    { q: "Thế lực nào là đối thủ lớn nhất của Tiêu Viêm trong Đấu Phá Thương Khung?", a: "Hồn Điện" },
    { q: "Thiên Hoả Tôn Giả trong Đấu Phá Thương Khung dùng thi thể của ai để hồi sinh ?", a: "Vân Sơn" },
    { q: "Thú cưng Thôn Thôn trong Nguyên Tôn sinh ra có sức mạnh ngang cảnh giới nào ?", a: "Thái Sơ Cảnh" },
    { q: "Tiêu Khinh Tuyết xuất hiện trong bộ hoạt hình nào dưới đây ?", a: "Tuyệt Thế Chiến Hồn" },
    { q: "Tiêu Viêm đã lập nên thế lực nào khi ở Học Viện Già Nam ?", a: "Bàn Môn" },
    { q: "Tiêu Viêm trong Đấu Phá Thương Khung đã Hẹn Ước 3 Năm với ai ?", a: "Nạp Lan Yên Nhiên" },
    { q: "Tiêu Viêm trong Đấu Phá Thương Khung sử dụng loại vũ khí nào sau đây ?", a: "Thước" },
    { q: "Tiêu Viêm trong Đấu Phá Thương Khung thuộc gia tộc nào?", a: "Tiêu gia" },
    { q: "Tiêu Thần là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", a: "Trường Sinh Giới" },
    { q: "Tỉnh Cửu là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", a: "Đại Đạo Triều Thiên" },
    { q: "Tình đầu của Diệp Phàm trong Già Thiên là ai ?", a: "Lý Tiểu Mạn" },
    { q: "Trần Bình An là nam chính trong bộ phim hoạt hình trung quốc nào ?", a: "Kiếm Lai" },
    { q: "Triệu Ngọc Chân là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", a: "Thiếu Niên Bạch Mã Tuý Xuân Phong" },
    { q: "Trong bộ Đấu Phá Thương Khung, Tiêu Viêm tìm đến ai để cứu Dược Lão ?", a: "Phong Tôn Giả" },
    { q: "Trong bộ Tiên Nghịch, nhân vật chính Vương Lâm khi ở quê nhà còn có tên khác là gì ?", a: "Thiết Trụ" },
    { q: "Trong Đấu La Đại Lục, Đường Hạo là gì của Đường Tam?", a: "Cha" },
    { q: "Trong Già Thiên, thể chất Diệp Phàm là thể chất gì ?", a: "Hoang Cổ Thánh Thể" },
    { q: "Trong Phàm Nhân Tu Tiên ai bị luyện thành khôi lỗi Khúc Hồn ?", a: "Trương Thiết" },
    { q: "Trong phim Tiên Nghịch, Vương Lâm vô tình có được pháp bảo nghịch thiên nào ?", a: "Thiên Nghịch Châu" },
    { q: "Trong Tiên Nghịch, Vương Lâm nhận được truyền thừa gì ở Cổ Thần Chi Địa ?", a: "Ký Ức" },
    { q: "Trong Tru Tiên, Điền Bất Dịch là thủ tọa của Phong nào?", a: "Đại Trúc Phong" },
    { q: "Trong Vĩnh Sinh - Phương Hàn hẹn ước 10 năm cùng với ai ?", a: "Hoa Thiên Đô" },
    { q: "Trước khi đến Linh Khê Tông, Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng ở đâu ?", a: "Mạo Nhi Sơn Thôn" },
    { q: "Trương Tiểu Phàm trong phim Tru Tiên còn có tên gọi là ?", a: "Quỷ Lệ" },
    { q: "Trương Tiểu Phàm trong Tru Tiên từng được nhận vào môn phái nào?", a: "Thanh Vân Môn" },
    { q: "Tử Nghiên trong Đấu Phá Thương Khung thuộc chủng tộc nào ?", a: "Thái Hư Cổ Long" },
    { q: "Vân Triệt là tên nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?", a: "Nghịch Thiên Tà Thần" },
    { q: "Vũ Canh là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?", a: "Vũ Canh Kỷ" },
    { q: "Vũ hồn của Chu Trúc Thanh là gì?", a: "U Minh Linh Miêu" },
    { q: "Vũ hồn của Đới Mộc Bạch là gì?", a: "Bạch Hổ" },
    { q: "Vũ hồn của Mã Hồng Tuấn là gì?", a: "Hỏa Phượng Hoàng" },
    { q: "Vũ hồn của Tiểu Vũ là gì?", a: "Nhu Cốt Thỏ" },
    { q: "Vũ hồn thứ hai của Đường Tam là gì?", a: "Hạo Thiên Chùy" },
    { q: "Vũ khí của Đàm Vân trong Nghịch Thiên Chí Tôn là gì ?", a: "Hồng Mông Thần Kiếm" },
    { q: "Vũ khí mà Tiêu Viêm trong Đấu Phá Thương Khung luôn mang bên mình có tên gọi là gì ?", a: "Huyền Trọng Xích" },
    { q: "Vương Lâm trong phim Tiên Nghịch dựa vào gì để vô địch cùng cảnh giới ?", a: "Cực cảnh" },
    { q: "Y Lai Khắc Tư là một nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?", a: "Cả 1 và 2" },
    { q: "Trong Đấu Phá Thương Khung, Tiêu Viêm hơn Cổ Hà ở điểm gì ?", a: "Dị Hỏa" },
    { q: "Tại sao Hàn Lập khi gặp Phong Hi không chạy mà ở lại giúp đỡ chế tạo Phong Lôi Sí ?", a: "Vì đánh không lại." },
    { q: "Nhân vật chính trong Ta Có Thể Giác Ngộ Vô Hạn là ai ?", a: "Tiêu Vân" },
    { q: "Nhân vật chính trong Đấu Chiến Thiên Hạ là ai ?", a: "Đại Phong" },
    { q: "1 Trong 2 Admin của website HoatHinh3D là ai ?", a: "Từ Dương" },
    { q: "Ai là sư phụ của Diệp Phàm trong Già Thiên?", a: "Lý Nhược Ngu" },
    { q: "Ai là chủ nhân của Thôn Thôn trong Nguyên Tôn?", a: "Yêu Yêu" },
    { q: "Bạch Nguyệt Khôi còn có tên gọi khác là gì?", a: "Bà chủ Bạch" },
    { q: "Bộ phim Thiên Bảo Phục Yêu Lục lấy bối cảnh thời kỳ nào??", a: "Đường" },
    { q: "Cô Kiếm Tiên trong phim Thiếu Niên Ca Hành là ai?", a: "Lạc Thanh Dương" },
    { q: "Cổ Hà trong Đấu Phá Thương Khung lúc xuất hiện ở Vân Lam Tông là luyện dược sư mấy phẩm?", a: "Lục phẩm" },
    { q: "Chu Tước Thánh Sứ trong Tru Tiên Là Ai?", a: "U Cơ" },
    { q: "Dương Khai trong Võ Luyện Đỉnh Phong song tu với ai đầu tiên?", a: "Tô Nhan" },
    { q: "ID game Diệp Tu sử dụng trong phim Toàn Chức Cao Thủ?", a: "Cả 1 và 2" },
    { q: "Lâm Thất Dạ trong phim Trảm Thần gặp phải biến cố gì?", a: "Bị mù" },
    { q: "Lý Hàn Y trong phim Thiếu Niên Ca Hành sử dụng vũ khí gì?", a: "Cả 1 và 2" },
    { q: "Mục Thần Ký được chuyển thể từ tiểu thuyết của tác giả nào?", a: "Trạch Trư" },
    { q: "Nam chính trong phim Sơn Hà Kiếm Tâm là ai?", a: "Yến Vô Sư" },
    { q: "Nam chính trong phim Ta Là Đại Thần Tiên là?", a: "Thời Giang" },
    { q: "Nam chính của phim Đô Thị Cổ Y Tiên là?", a: "Diệp Bất Phàm" },
    { q: "Nhân vật chính trong Ta Có Thể Giác Ngộ Vô Hạn là ai?", a: "Tiêu Vân" },
    { q: "Nhân vật chính trong phim Duy ngã độc thần là ai?", a: "Ninh Thần" },
    { q: "Nhân vật chính trong phim Sư Huynh a Sư Huynh là ai?", a: "Lý Trường Thọ" },
    { q: "Nhân vật chính trong phim Toàn Chức cao thủ là ai?", a: "Diệp Tu" },
    { q: "Nhân vật chính trong phim Trấn Hồn Nhai là?", a: "Hạ Linh" },
    { q: "Nhân vật chính trong phim Tần Thời Minh Nguyệt?", a: "Kinh Thiên Minh" },
    { q: "Nhân vật chính trong Quân Tử Vô Tật là ai ?", a: "Dao Cơ" },
    { q: "Nhân vật chính trong Vạn Giới Tiên Tung là ai?", a: "Diệp Tinh Vân" },
    { q: "Sở Phong trong Tu La Võ Thần có Huyết Mạch gì?", a: "Thiên Lôi" },
    { q: "Thê tử của Điền Bất Dịch trong Tru Tiên là ai?", a: "Tô Như" },
    { q: "Thế giới trong Mục Thần Ký chia thành mấy đại vực chính?", a: "9" },
    { q: "Trong Kiếm Lai, Khi Man Châu Động Thiên đứng trước nguy cơ bị hủy diệt, là ai đã đứng ra bảo vệ người dân trong trấn?", a: "Tề Tĩnh Xuân" },
    { q: "Trong Na Tra: Ma Đồng Giáng Thế, Na Tra được sinh ra từ gì?", a: "Ma Hoàn" },
    { q: "Trong Phim Na Tra: Ma Đồng Náo Hải, Cha của Ngao Bính tên là?", a: "Ngao Quảng" },
    { q: "Trong các bộ phim sau, bộ nào nhân vật chính có hệ thống?", a: "Ta Có Thể Giác Ngộ Vô Hạn" },
    { q: "Trong phim Đại Đạo Triều Thiên, Tỉnh Cửu đã cùng thư đồng đến đâu tu luyện?", a: "Thanh Sơn Tông" },
    { q: "Trong phim Đại Đạo Triều Thiên, Tỉnh Cửu đã thu nhận ai làm thư đồng?", a: "Lưu Thập Tuế" },
    { q: "Trong phim Đại Đạo Triều Thiên, Triệu Lạp Nguyệt đến từ phong nào?", a: "Thần Mạt Phong" },
    { q: "Tần Mục trong Mục Thần Ký lớn lên ở đâu?", a: "Tàn Lão Thôn" },
    { q: "Tư Mã Ý trong phim Hỏa Phụng Liêu Nguyên có tên tự là gì?", a: "Trọng Đạt" },
    { q: "Vô Tâm trong phim Thiếu Niên Ca Hành còn có tên gọi khác là gì?", a: "Diệp An Thế" },
    { q: "Vương Lâm trong Tiên Nghịch ở đâu có Tiên Ngọc đột phá Anh Biến?", a: "Đi cướp" },
    { q: "Ôn Thiên Nhân trong Phàm Nhân Tu Tiên tu luyện công pháp gì?", a: "Lục Cực Chân Ma Công" },
    { q: "Phong Hi trong Phàm Nhân Tu Tiên là yêu thú nào?", a: "Liệt Phong Thú" },
    { q: "Ai sau đây làm lễ cưới với Lý Mộ Uyển trong Tiên Nghịch thì bị anh Lâm giết ?", a: "Tôn Chấn Vĩ" },
    { q: "Tam Thánh Niết là biệt danh của ai trong Họa Giang Hồ Chi Bất Lương Nhân?", a: "Lý Tinh Vân" },
    { q: "Trong phim Vạn Cổ Tối Cường Tông, Quân Thường Tiếu chiêu mộ ai lam đệ tử đầu tiên?", a: "Lục Thiên Thiên" },
    { q: "Liễu Thất Nguyệt trong Thương Nguyên Đồ sử dụng vũ khí gì ?", a: "Cung" },
    { q: "Nhân vật chính trong phim Vạn Giới Tiên Tung là ai?", a: "Diệp Tinh Vân" },
    { q: "Sư tỷ của Nguyên Dao trong Phàm Nhân Tu Tiên tên là gì?", a: "Nghiên Lệ" },
    { q: "Gia gia Thạch Hạo trong phim Thế Giới Hoàn Mỹ tên gì?", a: "Thạch Trung Thiên" },
    { q: "Phong Hi trong Phàm Nhân Tu Tiên là yêu thú cấp mấy?", a: "9" },
    { q: "Phong Hi trong Phàm Nhân Tu Tiên tại sao được gọi là Đại Thiện Nhân?", a: "Cả 1 và 2" },
    { q: "Con gái của quỷ vương trong Tru Tiên tên là gì?", a: "Bích Dao" },
    { q: "Trong Đấu Phá Thương Khung, khi Vân Lam Tông giải tán thì Vân Vận đã gia nhập tông phái nào ?", a: "Hoa Tông" },
    { q: "Nhân vật chính trong phim 《Nam Đình Cốc Vi》 là ai?", a: "Cao Ảnh" },
    { q: "Cao Ảnh trong Nam Đình Cốc Vi học tại đại học nào", a: "Học viện Mỹ thuật Giang Châu" },
    { q: "Cao Ảnh trong 《Nam Đình Cốc Vi》 vô tình đánh thức ai", a: "Dận Đình" },
    { q: "Chủ khách sạn Đại thanh Vương triều mà Cao Ảnh trong Nam Đình Cốc Vi đang ở là ai", a: "Quan Đông Vũ" },
    { q: "Đội hình Sử Lai Khắc Thất Quái trong 《Đấu La Đại Lục》 có tổng cộng bao nhiêu thành viên?", a: "7" },
    { q: "Học viện đầu tiên mà Đường Tam theo học ở Đấu La Đại Lục là?", a: "Học viện Sử Lai Khắc" },
    { q: "Hồn sư trong 《Đấu La Đại Lục》 đạt tới cấp bậc nào thì được gọi là Phong Hào Đấu La?", a: "Cấp 90" },
    { q: "Biệt danh của Đái Mộc Bạch trong 《Đấu La Đại Lục》 là?", a: "Tà Mâu Bạch Hổ" },
    { q: "Áo Tư Tạp trong 《Đấu La Đại Lục》 thuộc hệ hồn sư nào?", a: "Phụ trợ hệ" },
    { q: "Võ hồn của Ninh Vinh Vinh trong 《Đấu La Đại Lục》 là?", a: "Thất Bảo Lưu Ly Tháp" },
    { q: "Danh xưng của Trần Tâm trong 《Đấu La Đại Lục》 là gì?", a: "Kiếm Đấu La" },
    { q: "Võ hồn của Cổ Dung trong 《Đấu La Đại Lục》 là gì?", a: "Cốt Long" },
    { q: "Ai là người kế thừa thần vị Thiên Sứ trong 《Đấu La Đại Lục》?", a: "Thiên Nhận Tuyết" },
    { q: "Thần khí mà Vân Thanh Nham mang trở về từ tiên giới", a: "Trảm Thiên Thần Kiếm" },
    { q: "Nhân vật Tiểu Y Tiên trong 《Đấu Phá Thương Khung》 chuyên về lĩnh vực gì?", a: "Độc thuật" },
    { q: "Nhân vật Nạp Lan Yên Nhiên quan hệ với Tiêu Viêm là gì?", a: "Vợ chưa cưới " },
    { q: "Thanh Liên địa tâm hỏa xếp thứ mấy trong Dị Hỏa bảng 《 Đấu phá thương khung》", a: "19" },
    { q: "Loại dị hỏa đầu tiên Tiêu Viêm trong 《Đấu Phá Thương Khung》 thu phục là gì?", a: "Thanh Liên Địa Tâm Hỏa" },
    { q: "Loại đan dược giúp Tiêu Viêm khôi phục thiên phú tên là gì?", a: "Phá Tông Đan" },
    { q: "Nhân vật Hải Ba Đông là đảo chủ của tổ chức nào?", a: "Mộ Thiên Hải" },
    { q: "Đấu Khí Hóa Dực là đặc trưng của cấp bậc nào trong 《Đấu Phá Thương Khung》?", a: "Đấu Vương" },
    { q: "Tiêu Viêm từng nhận danh hiệu gì tại Luyện Đan Sư Đại Hội?", a: "Quán quân" },
    { q: "Tiêu Viêm gia nhập tông môn nào đầu tiên?", a: "Vân Lam Tông" },
    { q: "Khôi lỗi Tiêu Viêm《 Đấu Phá Thương Khung》dùng thân thể của Địa Ma Lão Quỷ tạo thành?", a: "Thiên Yêu Khôi" },
    { q: "Dị hỏa từng thuộc về Dược Trần được truyền cho Tiêu Viêm trong 《Đấu Phá Thương Khung》là gì?", a: "Cốt Linh Lãnh Hỏa" },
    { q: "Ai là người dạy Tần Mục đao pháp?", a: "Đồ tể" },
    { q: "Cảnh giới tu luyện ban đầu trong phim được nhắc đến là?", a: "Linh Thai" },
    { q: "Thân phận thật của lão đồ tể trong 《Mục Thần Ký》", a: "Thiên Đao" },
    { q: "Thân phận thật của Tư bà bà - Tư ẤU U trong 《Mục Thần Ký》", a: "Thiên Ma giáo thánh nữ" },
    { q: "Bảo vật Tư bà bà trong 《Mục Thần Ký》để lại cho Tần Mục khi lên ngôi giáo chủ", a: "Đại Dục Thiên Ma Kinh" },
    { q: "Bảo vật Tư bà bà trong 《Mục Thần Ký》 để lại cho Tần Mục khi lên ngôi giáo chủ", a: "Đại Dục Thiên Ma Kinh" },
    { q: "Tư ẤU U trong《Mục Thần Ký》có quan hệ gì với Lệ Thiên Hành", a: "Vợ Chồng" },
    { q: "Ai là người đã chặt mất một bên chân của Lão Què trong《Mục Thần Ký》", a: "Duyên Khang Quốc sư" },
    { q: "Dược sư trong 《Mục Thần Ký》 còn có danh xưng là gì", a: "Ngọc Diện Độc Vương" },
    { q: "Tần Mục lớn lên ở đâu?", a: "Tàn Lão Thôn" },
    { q: "Tần Mục sinh ra ở đâu?", a: "Vô Ưu Hương" },
    { q: "Lão Què trong《Mục Thần Ký》vì sao mất một bên chân", a: "Vì ăn trộm Đế Điệp" },
    { q: "Trong 《Mục Thần Ký》trước Tần Mục, ai là giáo chủ của Thiên Ma giáo", a: "Lệ Thiên Hành" },
    { q: "Trong 《Mục Thần Ký》trước Tần Mục, ai là giáo chủ của Thiên Ma giáo", a: "Lệ Thiên Hành" },
    { q: "Linh Dục Tú trong 《Mục Thần Ký》 gặp mặt Tần Mục lần đầu tiên tại đâu", a: "Đại Khư" },
    { q: "Linh Dục Tú trong 《Mục Thần Ký》 gặp mặt Tần Mục lần đầu tiên với thân phận nào", a: "Thất công tử" },
    { q: "Danh hiệu của Vân thanh nam trong Tiên Đế Trở Về khi còn ở tiên giới", a: "Vân đế" },
    { q: "Vân Thanh Nham là Nhân vật chính trong phim nào?", a: "Tiên Đế Trở Về" },
    { q: "Vị biểu ca bị phế linh hải của Vân thanh nam trong Tiên Đế Trở Về", a: "Vân Hiên" },
    { q: "Klein trong 《Quỷ Bí Chi Chủ》 vô tình bước vào con đường phi phàm thông qua?", a: "Nghi thức cầu nguyện" },
    { q: "Đội trưởng Dạ Ưng ở Tingen trong (Quy Bí Chỉ Chủ) là ai?", a: "Dunn Smith" },
    { q: "Đội trưởng Dạ Ưng ở Tingen trong 《Quy Bí Chỉ Chủ》 là ai?", a: "Dunn Smith" },
    { q: "Nhân vật chính của Quỷ Bí Chi Chủ là ai?", a: "Klein Moretti" },
    { q: "Nhân vật chính của 《Quỷ Bí Chi Chủ》 là ai?", a: "Klein Moretti" },
    { q: "Quốc gia phàm nhân nơi Vương Lâm trong 《Tiên Nghịch》 sinh ra là?", a: "Chu Quốc" },
    { q: "Áo Tư Tạp trong 《Đấu La Đại Lục》 thuộc hệ hồn sư nào?", a: "Phụ trợ hệ" },
    { q: "Áo Tư Tạp trong 《Đấu La Đại Lục》 thuộc hệ hồn sư nào?", a: "Hệ phụ trợ" },
    { q: "Danh hiệu của Đường Hạo trong 《Đấu La Đại Lục》 là gì?", a: "Hạo Thiên Đấu La" },
    { q: "Nhân vật Medusa trong 《Đấu Phá Thương Khung》 vốn là thủ lĩnh của tộc nào?", a: "Xà Nhân tộc" },
    { q: "Môn phái đầu tiên Vương Lâm gia nhập là?", a: "Hằng Nhạc Phái" },
    { q: "Đứng thứ 2 trong Dị hỏa bảng trong 《Đấu Phá Thương Khung》 là ?", a: "Hư Vô Thôn Viêm" },
    { q: "Thạch Mục là nhân vật chính trong phim hoạt hình nào ?", a: "Huyền Giới Chi Môn" },
    { q: "Thành phố nơi câu chuyện ban đầu trong 《Quỷ Bí Chi Chủ》 diễn ra là?", a: "Tingen" },
    { q: "Vân thanh Nham trong 《Tiên Đế Trở Về》 đã thu phục hung thú nào?", a: "Hỗn Độn" },
    { q: "Vân thanh Nham trong (Tiên Đế Trở Về) đã thu phục hung thú nào?", a: "Hỗn Độn" },
    { q: "Nhân vật Nạp Lan Yên Nhiên quan hệ với Tiêu Viêm trong 《Đấu Phá Thương Khung》 là gì?", a: "Vợ chưa cưới " },
    { q: "Loại đan dược giúp Tiêu Viêm trong 《Đấu Phá Thương Khung》 khôi phục thiên phú tên là gì?", a: "Phá Tông Đan" },
    { q: "Nhân vật Hải Ba Đông trong《Đấu Phá Thương Khung》 là đảo chủ của tổ chức nào?", a: "Mộ Thiên Hải" },
    { q: "Tiêu Viêm trong 《Đấu Phá Thương Khung》 từng nhận danh hiệu gì tại Luyện Đan Sư Đại Hội?", a: "Quán quân" },
    { q: "Tiêu Viêm trong 《Đấu Phá Thương Khung》gia nhập tông môn nào đầu tiên?", a: "Vân Lam Tông" },
    { q: "Tần Mục trong 《Mục Thần Ký》 lớn lên ở đâu?", a: "Tàn Lão Thôn" },
    { q: "Tần Mục trong 《Mục Thần Ký》 sinh ra ở đâu?", a: "Vô Ưu Hương" },
    { q: "Thần khí mà Vân Thanh Nham trong 《Tiên Đế Trở Về》 mang trở về từ tiên giới?", a: "Trảm Thiên Thần Kiếm" },
    { q: "Môn phái đầu tiên Vương Lâm trong 《Tiên Nghịch》 gia nhập là?", a: "Hằng Nhạc Phái" },
    { q: "Nhân vật Nạp Lan Yên Nhiên trong 《Đấu Phá Thương Khung》 quan hệ với Tiêu Viêm là gì?", a: "Vợ chưa cưới" },
    { q: "Hồn hoàn thứ nhất của Đường Tam trong 《Đấu La Đại Lục》 được săn bắn từ con hồn thú nào?", a: "Nhân Diện Ma Chu" },
    { q: "Vân Vọng Thư là nhân vật chính trong bộ phim hoạt hình nào?", a: "Vân Thâm Bất Tri Mộng" },
    { q: "Thiên hỏa đầu tiên Vân thanh Nham trong 《Tiên Đế Trở Về》 đã thu phục khi trở về?", a: "Thanh Liên Địa Tâm Hỏa" },
    { q: "Kỹ năng kết hợp nhiều dị hỏa cùng lúc của Tiêu Viêm trong 《Đấu Phá Thương Khung》là gì?", a: "Phật Nộ Hỏa Liên" },
    { q: "Kỹ năng kết hợp nhiều dị hỏa cùng lúc của Tiêu Viêm trong 《Đấu Phá Thương Khung》là gì?", a: "Tinh Thần Biến" },
    { q: "Bộ phim hoạt hình trung quốc nào sau đây đã chính thức kết thúc sau 8 năm ?", a: "Tinh Thần Biến" },
];

const input = document.getElementById("searchInput");
const grid = document.getElementById("resultsGrid");

// --- LOGIC ỨNG DỤNG ---

/**
 * Khởi chạy ứng dụng khi trang web tải xong
 */
window.onload = () => {
    initShootingStars();
    renderList(database);
    input.focus(); // Tự động focus vào ô tìm kiếm
};

/**
 * Hàm khởi tạo hiệu ứng sao băng
 */
function initShootingStars() {
    const container = document.querySelector('.shooting-stars');
    const starCount = 10; // Số lượng sao băng ảo

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';

        // Random vị trí xuất phát
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 50}%`; // Chỉ xuất hiện ở nửa trên màn hình

        // Random thời gian delay để xuất hiện rải rác
        // Delay từ 0s đến 20s cho mỗi ngôi sao
        star.style.animationDelay = `${Math.random() * 20}s`;

        container.appendChild(star);
    }
}

/**
 * Hàm tìm kiếm dữ liệu
 * Được gọi mỗi khi người dùng nhập liệu (onkeyup)
 */
function searchData() {
    const query = input.value.toLowerCase().trim();

    if (!query) {
        renderList(database);
        return;
    }

    // Tối ưu hóa tìm kiếm: Sử dụng includes thay vì regex phức tạp để tăng tốc độ
    const matches = database.filter(item =>
        item.q.toLowerCase().includes(query) ||
        item.a.toLowerCase().includes(query)
    );

    renderList(matches);
}

/**
 * Hàm hiển thị danh sách câu hỏi
 * @param {Array} data - Mảng dữ liệu cần hiển thị
 */
function renderList(data) {
    grid.innerHTML = ""; // Xóa kết quả cũ

    if (data.length === 0) {
        // Hiển thị thông báo đẹp khi không tìm thấy kết quả
        grid.innerHTML = `
            <div class="no-result">
                <i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom: 20px; color: var(--text-sub);"></i>
                <br>
                Không tìm thấy dữ liệu phù hợp...
            </div>`;
    } else {
        // Sử dụng DocumentFragment để tối ưu hiệu suất render khi danh sách dài
        const fragment = document.createDocumentFragment();

        data.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "card";

            // Stagger animation: Hiệu ứng xuất hiện so le
            // Giới hạn delay tối đa để tránh cảm giác lag nếu danh sách quá dài
            const delay = Math.min(index * 0.05, 1.0);
            card.style.animationDelay = `${delay}s`;

            card.innerHTML = `
                <div class="q-label"><i class="far fa-question-circle"></i> Câu Hỏi</div>
                <div class="q-text">${highlightMatch(item.q, input.value)}</div>
                <div class="divider"></div>
                <div class="q-label" style="color: var(--gold);"><i class="fas fa-bolt"></i> Đáp Án</div>
                <div class="a-text">${highlightMatch(item.a, input.value)}</div>
            `;
            fragment.appendChild(card);
        });

        grid.appendChild(fragment);
    }
}

/**
 * Hàm highlight từ khóa tìm kiếm trong kết quả
 * @param {string} text - Văn bản gốc
 * @param {string} query - Từ khóa tìm kiếm
 * @returns {string} - Văn bản đã được highlight
 */
function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span style="background: rgba(0, 242, 255, 0.2); color: #fff; padding: 0 4px; border-radius: 4px;">$1</span>');
}
