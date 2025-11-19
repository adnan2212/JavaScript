/*

  input:'?foo=hello&bar=world&comp'
  output: {
    foo: 'hello',
    bar: 'world',
    comp: 'true'
  }

*/

function queryStringToObject (str) {
 
  return str
    .substring(0)
    .split('&')
    .reduce((acc, curr) => {
      const [key, value] = curr.split('=');
      acc[key] = value;
      return acc;
    }, {});
  
}

// const queryString = '?foo=hello&bar=world';
// const result = queryStringToObject(queryString);
// console.log(result);

// -------------------------- Example Ends Here --------------------------

/*

  input:'?foo=hello&bar=world&comp&foo=again'
  output: {
    foo: ['hello', 'again'],
    bar: 'world',
    comp: 'true'
  }

*/

function queryStringToObject (str) {
 
  const withoutAmpersand = str.slice(1);
  const keyValuePairs = withoutAmpersand.split('&');
  
  const output = {};
  
  for (let pairs of keyValuePairs) {
    const [key, value] = pairs.split('=');
    
    if (output.hasOwnProperty(key)) {
      if(Array.isArray(output[key])) {
        output[key].push(value ? value : 'true');
      } else {
        output[key] = [output[key]];
        output[key].push(value ? value : 'true')
      }
      
    } else {
      if(key && value)output[key] = value;
      else output[key] = 'true' 
    }
  }
  
  return output;
}

// const queryString = '?foo=hello&bar=world&okay&foo=again&foo&bar';
// const result = queryStringToObject(queryString);
// console.log(result); 


/*

input: {
  foo: [ 'hello', 'again', 'true' ],
  bar: [ 'world', 'true' ],
  okay: 'true'
}
output: '?foo=hello&foo=again&foo=true&bar=world&bar=true&okay=true'

*/

function formatToQueryString(obj) {
  
  let str = '?';
  const objLength = Object.keys(obj).length;
  
  for (let i = 0; i < objLength; i++) {
    
    const val = Object.values(obj)[i];
    
    if (!Array.isArray(val)) {
      valLength = 1;
    } else {
      valLength = Object.values(obj)[i].length;
    }
    
    for (let j = 0; j < valLength; j++) {
      
      let keyVal;
      if(typeof Object.values(obj)[i] === 'string' ? keyVal = Object.values(obj)[i] : keyVal = Object.values(obj)[i][j])
      if(Object.values(obj)[i] === 'true' || Object.values(obj)[i][j] === 'true') {
        str = str + Object.keys(obj)[i] + '&';        
      } else {
        str = str + Object.keys(obj)[i] + '=' + keyVal + '&';
      }
    }
    
  }
  
  return str.substring(0, str.length - 1);

}

// -------------------------- Example Ends Here --------------------------
// method 2
const makeQueryString = (obj) => {
  
  const parts = [];
  
  for (const [key, value] of Object.entries(obj)) {
    
    const values = Array.isArray(value) ? value : [value];
    
    for (const v of values) {
      
      if (v === 'true') {
        parts.push(key)
      } else {
        parts.push(`${key}=${v}`);
      }
      
    }
    
  }
  
  return '?' + parts.join('&');
  
}

const parsedQueryString = {
  foo: [ 'hello', 'again', 'true' ],
  bar: [ 'world', 'true' ],
  okay: 'true'
};
// const result = makeQueryString(parsedQueryString);
// console.log(result); 

// -------------------------- Example Ends Here --------------------------

/**
 * Encode String
 * input: aaabbbccd
 * output: a3b3c2d1
*/

const encodeString = (str) => {

  let map = new Map();

  for (let i = 0; i < str.length; i++) {

    map.set(str[i], (map.get(str[i]) || 0) + 1);

  }

  let result = '';

  for (let [char, count] of map) {
    result+=char + count;
  }

  return result;

}

// console.log(encodeString('aaabbbccd'));

// -------------------------- Example Ends Here --------------------------

const decodeString = (str) => {

  let result = '';

  for (let i = 0; i < str.length; i+=2) {
    let j = str[i + 1];
    while(j > 0) {
      result+=str[i];
      j--;
    }
  }

  return result;
}

// console.log(decodeString('a3b3c2d1'));

// -------------------------- Example Ends Here --------------------------

const decodeStringMultiDigit = (arr) => {

  let map = new Map();
  
  for (let i = 0; i < arr.length; i++) {

    if (!isNaN(arr[i + 1]) && !isNaN(arr[i + 2])) {
      let sum = (Number(arr[i + 1]) * 10) + Number(arr[i + 2]);
      map.set(arr[i], sum);
      i+=2;
    } else if(!isNaN(arr[i+1]) && isNaN(arr[i+2])){
      map.set(arr[i], Number(arr[i+1]));
    }

  }

  let result = '';
  for (let [key, value] of map) {
    let j = value;
    while (j > 0) {
      result+=key;
      j--;
    }
  }

  return result;
}

// console.log(decodeStringMultiDigit('a2b12c3d11'));

// -------------------------- Method-2 --------------------------

const decodeStringMultiDigit2 = (str) => {

  let result = '';
  let i = 0;

  while (i < str.length) {

    let char = str[i];

    i++;

    let numStr = '';
    while (i < str.length && !isNaN(str[i])) {

      numStr+=str[i];
      i++;
    }

    let count = Number(numStr);
    while (count > 0) {
      result+=char;
      count--;
    }
  }

  return result;
}

// console.log(decodeStringMultiDigit2('a2b12c3d11e1'));

// -------------------------- Example Ends Here --------------------------