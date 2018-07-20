//function that checks if the env value is valid
//value cannot start with a digit and must only contain alphanumeric characters or an underscore
const checkValidationOfValues = envSpecString => {
  const alphanumericThatDoesNotStartWithDigit = /^[A-Z_][0-9A-Z_]*$/;
  let envValuesChecked = envSpecString.split("\n"); //split lines based on \n character

  return (envValuesChecked = envValuesChecked.filter(element => {
    return element.match(alphanumericThatDoesNotStartWithDigit); //keep valid values
  }));
};

//function that returns the HTML code as a string
const outputHTML = envValues => {
  //create HTML format
  envValues = envValues.map(
    element =>
      `<label for="env_spec_${element.toLowerCase()}">${element}</label>\n` +
      `<input id="env_spec_${element.toLowerCase()}" name="${element.toLowerCase()}" />\n`
  );
  //return as string value
  return envValues.join("");
};

//function that calls functions for final output
const envSpecToHTML = envSpec => {
  return outputHTML(checkValidationOfValues(envSpec));
};

module.exports = envSpecToHTML;