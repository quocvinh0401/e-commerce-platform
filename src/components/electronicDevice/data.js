const allCategory = {
  "thiet-bi-dien-tu": {
    desc: "thiết bị điện tử",
    items: [
      "thiết bị đeo thông minh",
      "phụ kiện tivi",
      "máy game console",
      "đĩa game",
    ],
  },
};
const filterProduct = {
  types: {
    title: "theo danh mục",
    items: {
      "thiết bị điện tử": [
        "tai nghe nhét tai & chụp tai",
        "dàn âm thanh",
        "điện thoại & phụ kiện",
        "thiết bị điện gia dụng",
      ],
      "thiết bị đeo thông minh": [
        "phụ kiện cho đồng hồ thông minh",
        "đồng hồ thông minh & vòng đeo tay sức khỏe",
        "thiết bị thực tế ảo",
      ],
      "phụ kiện tivi": [
        "thiết bị điều khiển từ xa",
        "giá treo tivi",
        "ăng ten tivi",
      ],
      "máy game console": ["playstation", "gameboy"],
      "đĩa game": ["game playstation", "game gameboy"],
    },
  },
  locations: {
    title: "nơi bán",
    items: ["hà nội", "hồ chí minh", "nước ngoài"],
  },

  range: {
    title: "khoảng giá",
  },
};

const products = [
  {
    id: 3,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/dieu-khien-remote-1.jpg"),
      require("../../assets/images/electronicDevicePage/dieu-khien-remote-2.jpg"),
    ],
    sale: 40,
    mainCategory: "thiết bị điện tử",
    subCategory: "phụ kiện tivi",
    type: "thiết bị điều khiển từ xa",
    desc: "Điều khiển remote đầu VTVcab Kaon",
    price: 45000,
    rating: [100, 0, 51, 40, 6, 3], //rating: [total, 1 star, 2 stars, 3 star, 4 stars, 5 stars]
    sold: 49,
    location: filterProduct.locations.items[1],
  },
  {
    id: 7,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/day-dong-ho-1.jpg"),
      require("../../assets/images/electronicDevicePage/day-dong-ho-2.jpg"),
    ],
    sale: 0,
    mainCategory: "thiết bị điện tử",
    subCategory: "thiết bị đeo thông minh",
    type: "phụ kiện cho đồng hồ thông minh",
    desc: "Dây đồng hồ Apple Watch , Iwatch , Iphone Watch Da Bò Xanh Coban RAM Leather 1963",
    price: 199000,
    rating: [2, 0, 0, 0, 0, 2],
    sold: 7,
    location: filterProduct.locations.items[0],
  },
  {
    id: 6,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/dong-ho-thong-minh-1.jpg"),
      require("../../assets/images/electronicDevicePage/dong-ho-thong-minh-2.jpg"),
    ],
    sale: 0,
    mainCategory: "thiết bị điện tử",
    subCategory: "thiết bị đeo thông minh",
    type: "đồng hồ thông minh & vòng đeo tay sức khỏe",
    desc: "HUAWEI SAMSUNG Đồng Hồ Thông Minh Đa Năng 2021 Có Chức Năng Đo Nhịp Tim Dành Cho Nam",
    price: 878000,
    rating: [0, 0, 0, 0, 0, 0],
    sold: 0,
    location: filterProduct.locations.items[2],
  },
  {
    id: 1,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/kinh-thuc-te-ao-1.jpg"),
      require("../../assets/images/electronicDevicePage/kinh-thuc-te-ao-2.jpg"),
    ],
    sale: 22,
    mainCategory: "thiết bị điện tử",
    subCategory: "thiết bị đeo thông minh",
    type: "thiết bị thực tế ảo",
    desc: "Kính thực tế ảo Vr Shinecon G06E, G06, G10",
    price: 200000,
    rating: [968, 28, 19, 58, 111, 752],
    sold: 2965,
    location: filterProduct.locations.items[0],
  },
  {
    id: 4,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/gia-treo-tivi-1.jpg"),
      require("../../assets/images/electronicDevicePage/gia-treo-tivi-2.jpg"),
    ],
    sale: 8,
    mainCategory: "thiết bị điện tử",
    subCategory: "phụ kiện tivi",
    type: "giá treo tivi",
    desc: "Giá treo, Khung treo tivi xoay đa năng North Bayou NB-P4 từ 32 đến 55 inch - Tải trọng tối đa 27Kg - Xoay mọi góc độ",
    price: 192000,
    rating: [854, 2, 1, 2, 17, 833], //rating: [total, 1 star, 2 stars, 3 star, 4 stars, 5 stars]
    sold: 2415,
    location: filterProduct.locations.items[1],
  },
  {
    id: 2,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/ang-ten-tivi-1.jpg"),
      require("../../assets/images/electronicDevicePage/ang-ten-tivi-2.jpg"),
    ],
    sale: 27,
    mainCategory: "thiết bị điện tử",
    subCategory: "phụ kiện tivi",
    type: "ăng ten tivi",
    desc: "Ăng Ten Từ Tính Gsm Gprs 900-1800mhz 3dbi Sma Dài 1m",
    price: 18200,
    rating: [2, 0, 0, 0, 2, 0], //rating: [total, 1 star, 2 stars, 3 star, 4 stars, 5 stars]
    sold: 118,
    location: filterProduct.locations.items[1],
  },
  {
    id: 10,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/may-choi-game-sup-1.jpg"),
      require("../../assets/images/electronicDevicePage/may-choi-game-sup-2.jpg"),
    ],
    sale: 42,
    mainCategory: "thiết bị điện tử",
    subCategory: "máy game console",
    type: "playstation",
    desc: "Máy Chơi Game SUP 400 trò chơi [TẶNG KÈM TAY CHƠI GAME],SUP400 Cầm Tay G1 Plus 400 In 1 - HƠN 400 TRÒ CHƠI",
    price: 139000,
    rating: [285, 243, 4, 8, 19, 11], //rating: [total, 1 star, 2 stars, 3 star, 4 stars, 5 stars]
    sold: 3245,
    location: filterProduct.locations.items[0],
  },
  {
    id: 5,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/may-choi-game-1.jpg"),
      require("../../assets/images/electronicDevicePage/may-choi-game-2.jpg"),
    ],
    sale: 40,
    mainCategory: "thiết bị điện tử",
    subCategory: "máy game console",
    type: "gameboy",
    desc: "Máy chơi game X7 Plus máy chơi game màn hình lớn 5.1 inch 8G HD Giải trí Chip trò chơi chuyên nghiệp- Bảo Hành 3Tháng",
    price: 649000,
    rating: [5, 0, 0, 4, 1, 0], //rating: [total, 1 star, 2 stars, 3 star, 4 stars, 5 stars]
    sold: 26,
    location: filterProduct.locations.items[1],
  },
  {
    id: 8,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/dia-game-playstation-1.jpg"),
      require("../../assets/images/electronicDevicePage/dia-game-playstation-2.jpg"),
    ],
    sale: 0,
    mainCategory: "thiết bị điện tử",
    subCategory: "đĩa game",
    type: "game playstation",
    desc: "Đĩa Game PS4 Likenew Giá Rẻ 99%",
    price: 200000,
    rating: [56, 0, 0, 4, 4, 48], //rating: [total, 1 star, 2 stars, 3 star, 4 stars, 5 stars]
    sold: 146,
    location: filterProduct.locations.items[1],
  },
  {
    id: 9,
    imgSrc: [
      require("../../assets/images/electronicDevicePage/dia-gameboy-1.jpg"),
      require("../../assets/images/electronicDevicePage/dia-gameboy-2.jpg"),
    ],
    sale: 45,
    mainCategory: "thiết bị điện tử",
    subCategory: "đĩa game",
    type: "game gameboy",
    desc: "Thẻ Chơi Game 369 Trong 1 Cho Máy Game Boy Advance GBA SP NDS NDSL English WT",
    price: 176000,
    rating: [56, 0, 48, 4, 4, 0], //rating: [total, 1 star, 2 stars, 3 star, 4 stars, 5 stars]
    sold: 11,
    location: filterProduct.locations.items[1],
  },
];

export { allCategory, filterProduct, products };
