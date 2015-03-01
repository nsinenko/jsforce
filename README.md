jsforce
-------

[![Build Status](https://travis-ci.org/nsinenko/jsforce.svg?branch=master)](https://travis-ci.org/nsinenko/jsforce)

Meteor package for jsforce node.js package providing a wrapper around Salesforce API.

Adding this package to your Meteor application adds jsforce object into the global scope.

Server side only.

Installation
------------
```
meteor add nsinenko:jsforce
```

Quick Start
-----------

```javascript
  Meteor.startup(function(){
    sfdcConnection = new jsforce.Connection({ oauth2: { clientId: process.env.SFDC_CLIENT_ID, clientSecret: process.env.SFDC_CLIENT_SECRET }});
    sfdcConnection.login(process.env.SFDC_USERNAME, process.env.SFDC_PASSWORD);
  });

  if (Meteor.isServer) {
    sfdcConnection.sobject("Contact").find({ LastName : { $like : 'A%' })
      .sort({ CreatedDate: -1, Name : 1 })
      .limit(5)
      .skip(10)
      .execute(function(err, records) {
        if (err) { return console.error(err); }
        console.log("fetched : " + records.length);
      });
  }
```

Documentation
-------------
Refer to the official [jsfore package](https://jsforce.github.io/) documentation.
