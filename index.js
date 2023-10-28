const expect = require("expect");

function introduction(name = "Aki"){
   console.log(name); 
   return(`Hi, my name is ${name}.`);
  }

  function introductionWithLanguage(name = "Aki", language = "Ember.js"){
    console.log(name);
    console.log(language);
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }

  function introductionWithLanguageOptional(name = "Gracie") {
    console.log(name);
    return `Hi, my name is ${name} and I am learning to program in JavaScript.`;
  }
  
  function introductionWithLanguageOptional2(name = "Gracie", language = "Python") {
    console.log(language);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }