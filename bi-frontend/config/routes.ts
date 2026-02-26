export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', layout: false, name: 'Login', component: './user/login' },
      { path: '/user', redirect: '/user/login' },
      {
        name: 'Register Result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      { name: 'Register', icon: 'smile', path: '/user/register', component: './user/register' },
      { component: '404', path: '/user/*' },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    routes: [
      { path: '/dashboard', redirect: '/dashboard/analysis' },
      {
        name: 'Analysis',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
      },
      {
        name: 'Monitor',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './dashboard/monitor',
      },
      {
        name: 'Workplace',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './dashboard/workplace',
      },
    ],
  },
  {
    path: '/form',
    icon: 'form',
    name: 'Form',
    routes: [
      { path: '/form', redirect: '/form/basic-form' },
      {
        name: 'Basic Form',
        icon: 'smile',
        path: '/form/basic-form',
        component: './form/basic-form',
      },
      { name: 'Step Form', icon: 'smile', path: '/form/step-form', component: './form/step-form' },
      {
        name: 'Advanced Form',
        icon: 'smile',
        path: '/form/advanced-form',
        component: './form/advanced-form',
      },
    ],
  },
  {
    path: '/list',
    icon: 'table',
    name: 'List',
    routes: [
      {
        path: '/list/search',
        name: 'Search List',
        component: './list/search',
        routes: [
          { path: '/list/search', redirect: '/list/search/articles' },
          {
            name: 'Search List(articles)',
            icon: 'smile',
            path: '/list/search/articles',
            component: './list/search/articles',
          },
          {
            name: 'Search List(projects)',
            icon: 'smile',
            path: '/list/search/projects',
            component: './list/search/projects',
          },
          {
            name: 'Search List(applications)',
            icon: 'smile',
            path: '/list/search/applications',
            component: './list/search/applications',
          },
        ],
      },
      { path: '/list', redirect: '/list/table-list' },
      { name: 'Search Table', icon: 'smile', path: '/list/table-list', component: './table-list' },
      {
        name: 'Basic List',
        icon: 'smile',
        path: '/list/basic-list',
        component: './list/basic-list',
      },
      { name: 'Card List', icon: 'smile', path: '/list/card-list', component: './list/card-list' },
    ],
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'profile',
    routes: [
      { path: '/profile', redirect: '/profile/basic' },
      {
        name: 'Basic Profile',
        icon: 'smile',
        path: '/profile/basic',
        component: './profile/basic',
      },
      {
        name: 'Advanced Profile',
        icon: 'smile',
        path: '/profile/advanced',
        component: './profile/advanced',
      },
    ],
  },
  {
    name: 'Result',
    icon: 'CheckCircleOutlined',
    path: '/result',
    routes: [
      { path: '/result', redirect: '/result/success' },
      { name: 'Success', icon: 'smile', path: '/result/success', component: './result/success' },
      { name: 'Fail', icon: 'smile', path: '/result/fail', component: './result/fail' },
    ],
  },
  {
    name: 'Exception',
    icon: 'warning',
    path: '/exception',
    routes: [
      { path: '/exception', redirect: '/exception/403' },
      { name: '403', icon: 'smile', path: '/exception/403', component: './exception/403' },
      { name: '404', icon: 'smile', path: '/exception/404', component: './exception/404' },
      { name: '500', icon: 'smile', path: '/exception/500', component: './exception/500' },
    ],
  },
  {
    name: 'Account',
    icon: 'user',
    path: '/account',
    routes: [
      { path: '/account', redirect: '/account/center' },
      {
        name: 'Account Center',
        icon: 'smile',
        path: '/account/center',
        component: './account/center',
      },
      {
        name: 'Account Settings',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
      },
    ],
  },
  { path: '/', redirect: '/dashboard/analysis' },
  { component: '404', path: '/*' },
];
