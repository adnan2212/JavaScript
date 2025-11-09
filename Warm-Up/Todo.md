Absolutely 😎 — you seem to enjoy deep, *real-world JavaScript logic* challenges — especially those involving string/object/array transformations.

Here are **10 progressively harder** problems in the same spirit — focusing on reasoning, JS quirks, and algorithmic thinking rather than just syntax.

---

## 🧠 **Level 1 – Intermediate**

### **1. Flatten Query Parameters**

**Input:**

```js
'?user[name]=John&user[age]=30&tags[]=js&tags[]=node'
```

**Output:**

```js
{
  user: { name: 'John', age: '30' },
  tags: ['js', 'node']
}
```

> Convert nested query strings (like PHP-style params) into proper JS objects.

---

### **2. Merge Deep Objects**

Write a function `deepMerge(obj1, obj2)` that merges deeply nested objects **without mutating** either.

**Example:**

```js
deepMerge(
  { user: { name: 'John', info: { age: 20 } } },
  { user: { info: { age: 25, country: 'US' } } }
)
// → { user: { name: 'John', info: { age: 25, country: 'US' } } }
```

---

### **3. Compact Object**

Remove all falsy values (`false, null, 0, "", undefined, NaN`) recursively from a nested object.

**Example:**

```js
compact({
  a: null,
  b: 1,
  c: '',
  d: { e: undefined, f: 'hi', g: 0 }
})
// → { b: 1, d: { f: 'hi' } }
```

---

## ⚙️ **Level 2 – Harder Logic**

### **4. Deep Equality Checker**

Implement `deepEqual(a, b)` that correctly compares arrays, objects, nested structures, and primitive values.

**Example:**

```js
deepEqual(
  { a: [1, { b: 2 }] },
  { a: [1, { b: 2 }] }
) // true
```

---

### **5. Convert Query Object Back**

Given:

```js
{
  user: { name: 'John', age: 30 },
  tags: ['js', 'node']
}
```

Output:

```js
'?user[name]=John&user[age]=30&tags[]=js&tags[]=node'
```

> This is the reverse of problem #1 — harder because you must handle arrays & nested objects correctly.

---

### **6. Object Diff**

Write a function that compares two objects and returns a new one with only the changed keys.

**Example:**

```js
diff(
  { a: 1, b: 2, c: 3 },
  { a: 1, b: 4, d: 5 }
)
// → { b: 4, c: undefined, d: 5 }
```

---

## 🔥 **Level 3 – Advanced**

### **7. Serialize with Custom Rules**

Create a serializer that turns any object into a string, with the following rules:

* Keys are sorted alphabetically.
* Arrays are represented as comma-separated strings.
* `null` and `undefined` values are skipped.

**Example:**

```js
serialize({ b: [1,2], a: null, c: 'x' })
// → 'b=1,2&c=x'
```

---

### **8. Reverse Function Arguments**

Implement a function `reverseArgs(fn)` that returns a new function which calls `fn` with reversed arguments.

**Example:**

```js
function join(a, b, c) { return `${a}-${b}-${c}`; }
const reversed = reverseArgs(join);
reversed('x', 'y', 'z'); // 'z-y-x'
```

---

### **9. Parse and Evaluate**

Write a simple arithmetic expression parser:

```js
evaluate('3 + 4 * (2 - 1)'); // 7
```

> You can’t use `eval()` — you must parse the string and compute using stacks.

---

### **10. Object Path Resolver**

Write `get(obj, path)` that safely retrieves a nested property.

**Example:**

```js
get({ a: { b: { c: 5 } } }, 'a.b.c'); // 5
get({ a: { b: { c: 5 } } }, 'a.x.c'); // undefined
```

> Bonus: Support array paths like `'a.b[0].c'`.

---

Would you like me to:

* 📘 provide **solutions step-by-step** for each of these,
* or 🎯 give you **only the problems**, so you can try solving them first?
