'use strict';

function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillin = function (dictionary) {
  return this.template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
    return dictionary[key] !== undefined ? dictionary[key] : '';
  });
};

// Test 2 (working)
const template2 =
  'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
const dateTemplate2 = new TemplateProcessor(template2);
const str2 = dateTemplate2.fillin({ month: 'July', day: '1', year: '2016' });

console.log(str2);

// Test 1 (doesn't work)
import * as assert from 'assert';

const template =
  'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
const dateTemplate = new TemplateProcessor(template);

const dictionary = { month: 'July', day: '1', year: '2016' };
let str = dateTemplate.fillIn(dictionary);

assert(str === 'My favorite month is July but not the day 1 or the year 2016');

//Case: property doesn't exist in dictionary
const dictionary2 = { day: '1', year: '2016' };
str = dateTemplate.fillIn(dictionary2);

assert(str === 'My favorite month is  but not the day 1 or the year 2016');
