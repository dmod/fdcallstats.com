export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Calls',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
    },
    {
      name: 'New Call',
      url: '/newcall',
      icon: 'icon-doc',
    },
    {
      name: 'View Calls',
      url: '/vcalls',
      icon: 'icon-fire',
    },
  ],
};
