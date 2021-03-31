export default {

  // home is a section without childs, set as an empty array
  dashboard: [],

  profiles: [

    {
      type: 'title',
      txt: 'Profiles',
      icon: 'fa fa-tag context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'List profiles',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Add New profile',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Manage DMD profile types',
      link: '/page',
    },

  ],

  customers: [

    {
      type: 'title',
      txt: 'Customers',
      icon: 'fa fa-users context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'List Customers',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'List Businesses',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'List //',
      link: '/page',
    },

  ],

  account: [

    {
      type: 'title',
      txt: 'Consultants',
      icon: 'fa fa-user context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'List consultants',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Add new consultant',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Logout',
      link: '/page',
    }

  ],

};
