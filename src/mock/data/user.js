import Mock from 'mockjs';
const LoginUsers = [{
  id: 1,
  username: 'admin',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '*聪聪',
  integral: 400, //积分
  money: '10000.00', //总资产
  shouyi: '5.6', //收益
  balance: '5000.00', //余额
  yuebao: '5000.00'

}];
const profile = [{
    iconClass: 'icon-gift',
    text: '关于我们',
    router: "/profile/aboutMe"

  },
  {
    iconClass: 'icon-chrome',
    text: '帮助中心',
    router: "/profile/aboutMe"
  },
  {
    iconClass: 'icon-linkedin',
    text: '信息披露',
    router: "/profile/infodisclosure"
  }
]
const bannerList = [{
    link: '/Login',
    imageUrl: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6667/290/1495913339/208769/20caf282/595321b3N70d63c46.jpg!q70.jpg'
  },
  {
    link: '/Login',
    imageUrl: 'https://img1.360buyimg.com/da/jfs/t5638/255/4340728551/99084/71c4f46d/594cccd9Nc18d4386.jpg'
  },
  {
    link: '/Login',
    imageUrl: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6175/87/1527048471/155328/21a0964c/59538faaNde929d6a.jpg!q70.jpg'
  },
  {
    link: '/Login',
    imageUrl: 'https://img1.360buyimg.com/da/jfs/t4567/146/2427964850/85636/894eb2e3/58ef3525N7d6d38b4.jpg'
  },
  {
    link: '/Login',
    imageUrl: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5905/159/3522388799/140115/cb15e51b/59522c58N1618a960.jpg!q70.jpg'
  }
]
const Users = [];
for (let i = 0; i < 61; i++) {
  Users.push(Mock.mock({
    'id|1':/^1[0-9]{10}$/,
    'money|2000-100000.2': 1,
  }));
}
export {
  LoginUsers,
  Users,
  profile,
  bannerList
};