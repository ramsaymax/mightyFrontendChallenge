module.exports = {
  servers: {
    one: {
      host: '107.170.237.80',
      username: 'root',
      pem: '~/.ssh/id_rsa'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'app',
    path: '.',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,

    },

    env: {
      ROOT_URL: 'http://maxramsay.club',
      MONGO_URL: 'mongodb://ramsaymax:password@ds153730.mlab.com:53730/payments',
      PORT: 3000
    },

    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:base',
    },
    deployCheckWaitTime: 60,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  },

};
