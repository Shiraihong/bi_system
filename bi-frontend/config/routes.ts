export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', layout: false, name: 'Login', component: './user/login' },
      { path: '/user', redirect: '/user/login' },
      { name: 'Register', icon: 'smile', path: '/user/register', component: './user/register' },
      { component: '404', path: '/user/*' },
    ],
  },
  { path: '/',  redirect: '/add_chart' },
  { path: '/add_chart', name: '智能分析', icon: 'barChart', component: './AddChart' },
  { path: '/my_chart', name: '我的图表', icon: 'pieChart', component: './MyChart' },
  { component: '404', path: '/*' },
];
