import axios from "axios";

const api = axios.create({
  baseURL: 'http://shoes.hungvu.net',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export const getProducts = (params) => {
  return api.get('/get-products', { params });
};
export const getProductDetail = (id) => {
  return api.get(`/product/${id}`);
};
export const getComments = (id) => {
  return api.get(`/comment`);
};
export const createComments = (params) => {
  return api.post(`/comment`, params);
};
export const getGender = (params) => {
  return api.get(`/get-genders`, params);
};
export const getBrand = (params) => {
  return api.get(`/get-brands`, params);
};
export const login = (params) => {
  return api.post(`/login`, params);
};

// fake data
const fakeProductData = [
  { id: 1, name: 'Samsung Galaxy S22 Ultra 5G', price: 30990000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham.jpg' },
  { id: 2, name: 'iPhone 11', price: 16290000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (2).jpg' },
  { id: 3, name: 'OPPO Reno7 series', price: 10490000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (3).jpg' },
  { id: 4, name: 'Realme C35', price: 3990000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (4).jpg' },
  { id: 5, name: 'Samsung Galaxy Z Fold3 5G', price: 38990000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (5).jpg' },
  { id: 6, name: 'iPhone 13 Pro Max Xanh lá', price: 33990000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (6).jpg' },
  { id: 7, name: 'Samsung Galaxy S21 Ultra', price: 25990000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (7).jpg' },
  { id: 8, name: 'Tai nghe Bluetooth AirPods 3 Apple MME73', price: 4590000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (8).jpg' },
  { id: 9, name: 'Tai nghe Bluetooth AirPods 2 Apple MV7N2', price: 3390000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (9).jpg' },
  { id: 11, name: 'Tai nghe Bluetooth True Wireless Galaxy Buds Pro', price: 2495000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (10).jpg' },
  { id: 12, name: 'Tai nghe Bluetooth True Wireless Hydrus TS12BC', price: 275000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (11).jpg' },
  { id: 13, name: 'Tai nghe Bluetooth True Wireless Galaxy Buds Pro', price: 2495000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (12).jpg' },
  { id: 14, name: 'Tai nghe Bluetooth True Wireless Galaxy Buds Pro', price: 2495000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (13).jpg' },
  { id: 15, name: 'Tai nghe Bluetooth True Wireless Galaxy Buds Pro', price: 2495000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (14).jpg' },
  { id: 16, name: 'Tai nghe Bluetooth True Wireless Galaxy Buds Pro', price: 2495000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (15).jpg' },
  { id: 17, name: 'Tai nghe Bluetooth True Wireless Galaxy Buds Pro', price: 2495000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (16).jpg' },
  { id: 18, name: 'Tai nghe Bluetooth True Wireless Galaxy Buds Pro', price: 2495000, image: '../dkt_shop/bai ket thuc mon web/products/sanpham (17).jpg' },
];
export const getFakeProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeProductData);
    }, 1000);
  });
};
