if (Meteor.isClient) {
  ShareIt.init({
    siteOrder: ['facebook', 'twitter'],
    sites: {
      'facebook': {
        'appId': 'YOUR_APPLICATION_ID',
        'version': 'v2.3',
         'buttonText': 'Share on Facebook'
      },
      'twitter': {
        'appId': 'YOUR_APPLICATION_ID',
        'version': 'v2.3',
         'buttonText': 'Share on Twitter'
      },
    },
    iconOnly: true,
    applyColors: false
  });
} 