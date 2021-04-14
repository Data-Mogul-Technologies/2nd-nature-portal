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
      txt: 'All Profiles',
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
      txt: 'Add Customer',
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
      txt: 'List Consultants',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Add New Consultant',
      link: '/page',
    }
  ],

  payment: [

    {
      type: 'title',
      txt: 'Payment',
      icon: 'fas fa-dollar-sign',
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
      txt: 'Add New Event',
      link: '/event',
    }

  ],

  Insights: [

    {
      type: 'title',
      txt: 'Insights',
      icon: 'fas fa-chalkboard',
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
    },

    {
      type: 'link',
      txt: 'DMD Profile Report',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'AT Profile Trend',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Count AT Report',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Referral Source Report',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Feedback Report',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Customer Feedback',
      link: '/report',
    },

    {
      type: 'link',
      txt: 'Customers Per Consultant',
      link: '/report',
    }

  ],
  Feedback: [

    {
      type: 'title',
      txt: 'Feedback',
      icon: 'far fa-comments',
    },

    {
      type: 'link',
      txt: 'Feedback',
      link: '/feedback',
    }],
    manage: [

      {
        type: 'title',
        txt: 'Manage Status/Types',
        icon: 'fas fa-user-cog',
      },
  
      {
        type: 'link',
        txt: 'Sport Type',
        link: '/page',
      },
  
      {
        type: 'link',
        txt: 'Customer Status',
        link: '/page',
      },
  
      {
        type: 'link',
        txt: 'Customer Type',
        link: '/page',
      },
  
      {
        type: 'link',
        txt: 'Event Status',
        link: '/page',
      },
  
      {
        type: 'link',
        txt: 'Event Type',
        link: '/page',
      },
      
  
      {
        type: 'link',
        txt: 'Service Status',
        link: '/page',
      },
  
      {
        type: 'link',
        txt: 'Service Type',
        link: '/page',
      },
  
      {
        type: 'link',
        txt: 'Payment Status',
        link: '/page',
      },
  
      {
        type: 'link',
        txt: 'Payment Source',
        link: '/page',
      },
  
      {
        type: 'link',
        txt: 'Profile Status',
        link: '/page',
      },
      {
        type: 'link',
        txt: 'Consultant Status',
        link: '/page',
      },
      {
        type: 'link',
        txt: 'State',
        link: '/page',
      }
  
  
    ],


};
