# S.O.S. Distress App

The Thoughtful Walrus Team's port to native iOS.


## Team

  - __Product Owner__: Brian Hsu
  - __Scrum Master__: Andy Kitson
  - __Development Team Members__: Ryan Atkinson, SungMin Chang, Andy Kitson, Brian Hsu

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

>  This is an app designed for the traveler to help one find local hospitals, police stations, and emergency numbers quickly. If a user signs up, he/she is given the added feature to text all emergency contacts with their current location and a google maps of the surrounding area. 

## Requirements

- angular 1.3.15
- bcrypt-nodejs 0.0.3
- body-parser 1.12.0
- express 4.12.2
- jwt-simple 0.2.0
- mongodb 1.4.34
- mongoose 3.8.25
- morgan 1.5.1
- twilio 1.11.1
- q 1.2.0
- grunt-contrib-clean 0.6.0
- grunt-contrib-concat 0.5.1
- grunt-contrib-copy 0.5.0
- grunt-contrib-uglify 0.8.0 
- grunt-contrib-jshint 0.11.0
- grunt-contrib-sass 0.9.2 
- grunt-shell 1.1.2 

You will also need a twilio account. Only paid accounts can text any number. You will need to setup twilio credentials in /server/config/creds.js. Inside place something along the lines of:

```javascript
module.exports = {
 accountSid: 'FFFFFFFFFFFFFFFFF',
 authToken: 'FFFFFFFFFFFFFFFFF', 
 accountPhoneNumber: "+1112223333",
 distressAuthToken: 'FFFFFFFFFFFFFFFFF'
};
```

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

## Contributing

See [_CONTRIBUTING.md](_CONTRIBUTING.md) for contribution guidelines.
