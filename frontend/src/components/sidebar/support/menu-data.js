export default {

  // home is a section without childs, set as an empty array
  dashboard: [],

  profiles: [

    {
      type: 'title',
      txt: 'Profiles',
      icon: 'fas fa-list-alt context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'All Action Type profiles',
      link: '/profile',
    },

    {
      type: 'link',
      txt: 'Add New Action Type Profile',
      link: '/profile',
    },
    
    {
      type: 'link',
      txt: 'Manage Action Types',
      link: '/profile',
    },

    {
      type: 'link',
      txt: 'All DMD profiles',
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
    }
  ],

  manage: [

    {
      type: 'title',
      txt: 'Manage Status/Types',
      icon: 'fa fa-user context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Sport type',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Customer status',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Customer type',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Event status',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Event type',
      link: '/page',
    },
    

    {
      type: 'link',
      txt: 'Service status',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Service type',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Payment status',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Payment source',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Profile status',
      link: '/page',
    },
    {
      type: 'link',
      txt: 'Consultant Status',
      link: '/page',
    }

  ],
  payment: [

    {
      type: 'title',
      txt: 'Payment',
      icon: 'fa fa-user context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Service Payment',
      link: '/payment',
    },

    {
      type: 'link',
      txt: 'Event Payment',
      link: '/payment',
    }
  ],
  Events: [

    {
      type: 'title',
      txt: 'Events',
      icon: 'fas fa-calendar-alt context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'List Events',
      link: '/event',
    },

    {
      type: 'link',
      txt: 'Add new event',
      link: '/event',
    },

    {
      type: 'link',
      txt: 'Manage event types',
      link: '/event',
    }

  ],

  Insights: [

    {
      type: 'title',
      txt: 'Insights',
      icon: 'fas fa-calendar-alt context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Prospect Date',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Year Retention Rate',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Last Year Retention Rate',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Current Year Retention Rate',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Company Retention Rate',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Event Attendees',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Annual Payment',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'AT Report Result',
      link: '/report',
    }

  ]

};
