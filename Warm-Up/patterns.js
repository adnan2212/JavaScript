// ====== STAR PATTERS ==========
// ----------------------------------------------------
/*
Pattern 1
---------
n = 4

* * * *
* * * *
* * * *
* * * *

*/ 

function Pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = ' ';
    for (let j = 0; j < n; j++) {
      row+='*';
    }
    console.log(row)
  }
}

// Pattern1(4)
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 2
---------
n = 4

* 
* *
* * *
* * * *

*/ 

function Pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = ' ';
    for (let j = 0; j <= i; j++) {
      row+='*'
    }
    console.log(row);
  }
}

// Pattern2(4)
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 3
---------
n = 4

* * * *
* * *
* *
* 

*/ 

function Pattern3(n) {
  for (let i = n; i > 0; i--) {
    let row = ' ';
    for (let j = i; j > 0; j--) {
      row+='*'
    }
    console.log(row);
  } 
}

// Pattern3(4);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 4
---------
n = 4

 *
 * *
 * * *
 * * * *
 * * * *
 * * *
 * *
 *

*/ 

function Pattern4(n) {
  // Top half
  for (let i = 0; i < n; i++) {
    let row = ' ';
    for (let j = 0; j <= i; j++) {
      row+='*'
    }
    console.log(row);
  }

  // Bottom half
  for (let i = n - 1; i >=0; i--) {
    let row = ' ';
    for (let j = 0; j <= i; j++) {
      row+='*'
    }
    console.log(row);
  }
}

// Pattern4(4);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 5
---------
n = 4

  * * * *
    * * *
      * * 
        * 

*/ 

function Pattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for(let j = i; j < n; j++) {
      row+=' '
    }

    for(let k = 0; k <= i; k++) {
      row+='*'
    }
    console.log(row);
  }
}

// Pattern5(4);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 6
---------
n = 4

        *
      * *
    * * *
  * * * *

*/ 

function Pattern6(n) {
  for (let i = 0; i < n; i++) {
    let row = ' ';
    for (let j = i; j < n - 1; j++) {
      row+=' '
    }

    for (let k = 0; k <= i; k++) {
      row+='*';
    }
    console.log(row);
  }
}

// Pattern6(4);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 7
---------
n = 4

  * * * *
    * * *
      * *
        *

*/ 

function Pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = i; j > 0; j--) {
      row+=' ';
    }

    for(let k = i; k < n; k++ ) {
      row+='*';
    }
    console.log(row);
  }
}

// Pattern7(4);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 8
---------
n = 5

    *
   * *
  * * *
 * * * *
* * * * *

*/ 

function Pattern8(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = i; j < n; j++) {
      row+=' ';
    }

    for (let k = 0; k < i; k++) {
      row+='* ';
    }
    console.log(row);
  }
}

// Pattern8(5);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 9
---------
n = 5

  * * * * *
   * * * *
    * * *
     * *
      * 

*/ 

function Pattern9(n) {

  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row+=' ';
    }

    for(let k = i; k < n; k++) {
      row+='* '
    }
    console.log(row)
  }

} 

// Pattern9(5);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------


// ====== NUMBER PATTERS ==========
// ----------------------------------------------------

// -------------------------- Example Ends Here --------------------------

/*
Pattern 10
---------
n = 4

  1
  1 2
  1 2 3
  1 2 3 4

*/ 

function Pattern10(n) {

  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str+=j;
    }
    console.log(str);
  }

} 

// Pattern10(4);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 11
---------
n = 4

  1
  2 2
  3 3 3
  4 4 4 4

*/ 

function Pattern11(n) {

  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str+=i;
    }
    console.log(str);
  }

} 

// Pattern11(4);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 12
---------
n = 4

  1 2 3 4 5
  1 2 3 4
  1 2 3
  1 2
  1

*/ 

function Pattern12(n) {

  for (let i = 5; i >= 1; i--) {
    let str = '';
    for (let j = 1; j <= i ; j++) {
      str = str + ' ' + j
    }
    console.log(str);
  }

} 

// Pattern12(4);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

/*
Pattern 13 (Pascal’s Triangle)
---------
n = 4

  1
  1 1
  1 2 1
  1 3 3 1
  1 4 6 4 1

*/ 

function Pattern13(n) {

  for (let i = 1; i <= n; i++) {
    let num = 1;
    let row = '';
    let prevRow = '';
    let str = '';
    for (let j = 1; j < 2; j++) {
      str+=num
    }

    for (let k = 2; k <= i; k++) {
      row = str.slice(0, 1) +  
    }

    console.log(str);
  }

} 

Pattern13(4);
// console.log('\n=================\n');

// -------------------------- Example Ends Here --------------------------

