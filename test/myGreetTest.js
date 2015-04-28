'use strict';
var expect = require('chai').expect;
var greet = require('../myGreet');

describe('greets people', function(){
  it('should greet people properly', function() {
    expect(greet('Naeun')).to.eql('hello Naeun');
  })
  it('should read passed in command line args', function() {
    var args =  ["some name","ignored args","who am i?"];


    expect(greet(args)).to.eql('hello ' + args);
  })
});
