'use strict';
var expect = require('chai').expect;
var greet = require('../myGreet');

describe('greets people', function(){
  it('should greet people properly', function() {
    expect(greet('Naeun')).to.eql('hello Naeun');
  })
});
