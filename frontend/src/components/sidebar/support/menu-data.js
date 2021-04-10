export default {

  // home is a section without childs, set as an empty array
  dashboard: [],

  profiles: [

    {
      type: 'title',
      txt: 'Profiles',
      icon: 'fas fa-sort-amount-up context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'All profiles',
      link: '/profile',
    },

    {
      type: 'link',
      txt: 'Add New Action Type Profile',
      link: '/profile',
    },

    {
      type: 'link',
      txt: 'Add New DMD Profile',
      link: '/profile',
    },

    {
      type: 'link',
      txt: "Manage DMD's",
      link: '/profile',
    },

    {
      type: 'link',
      txt: 'Manage Action Types',
      link: '/profile',
    }

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
      link: '/view',
    },

    {
      type: 'link',
      txt: 'List Businesses',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Add customer',
      link: '/create',
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
