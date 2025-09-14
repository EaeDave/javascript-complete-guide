# Basics

## Base Syntax & Features

> Diving Right Into JavaScript

## Module Content

> Dive into Core Syntax

> Understand Variables & Data Types

> Work with Operators

> Explore & Use Functions

## Variables & Constants

### Variables

**Variables structure:**
> **let** userName = 'David';
- Variables are "data container"/"data storage".
- **let** is a special keyword to declare variables in js.
- **userName** is the name that i used, could be anything.
- **=** Equal sign to refer the other value, like: this means this.
- **'David'** is de data
- **Variables can be reassign:**
  
> userName = 'Dave'; **(It doesn't need to use let keyword when reassign a variable).**

### Constants

**Constants structure:**
> **const** totalUsers = 15;
- Constants still being a "data container"/"data storage".
- **const** is a special keyword to declare constants in js.
- **totalUsers** is the name that i used, could be anything.
- **=** Equal sign to refer the other value, like: this means this.
- **15** is de data.
- **Constants can't be reassign like variables.**
- Values must not change!
- Typically **use as often as possible** (more restrict, less errors).

## Variable Naming

![variable-naming-diagram.png](assets/basics/variable-naming-diagram.png)

## Operators

![basic-operators-diagram.png](assets/basics/basic-operatos-diagram.png)

## Data Types

> **Numbers:** 2, -3, 22.956 Important for calculations and code where you need to "work with a number".

> **Strings (Text):** 'Hi', "Hi", \`Hi` Important for outputting results, gathering input

## Functions

![functions-diagram.png](assets/basics/functions-diagram.png)

## Shadowed Variables

You learned about local ("function-internal") variables and global variables.

**What happens if you have this code?**

`let userName = 'Max';`
`function greetUser(name) {`
`  let userName = name;`
`  alert(userName);`
`}`
`userName = 'Manu';`
`greetUser('Max');`
**This will actually show an alert that says 'Max' (NOT 'Manu').**

You might've expected that an error gets thrown because we use and declare userName more than once - and as you learned, that is not allowed.

It indeed is not allowed on the same level/ in the same scope.

So this would fail:

`let userName = 'Max';`
`let userName = 'Manu';`
Why does it work in the first code snippet though?

**Because we first create a global variable userName via**

`let userName = 'Max';`
But then we never re-declare that on the global level (that would not be allowed).

We only declare another variable inside of the function. But since variables in functions get their own scope, JavaScript does something which is called "shadowing".

It creates a new variable on a different scope - this variables does not overwrite or remove the global variable by the way - both co-exist.

When referring to userName inside of the greetUser function we now always refer to the local, shadowed variable. Only if no such local variable existed, JavaScript would fall back to the global variable.

## "Indirect" vs "Direct" Function Execution - Summary

### Two Ways of Using a Function in JavaScript

It can be confusing to see that there seem to be two ways of executing a function:

```js
function add() {
  something = someNum + someOtherNum;
}
```

- Calling the function directly:

```js
add()
```

- Referencing the function (without executing):

```js
add
```

---

### Calling a Function

In general, you call a function that you defined by using its **name** (e.g. `add`) and adding **parentheses** (with any parameters the function might need – or empty parentheses if no parameters are required like in the above example).

```js
add()
```

This is how you **execute a function from your code**.  
Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. **Period!**

---

### When You Don’t Want to Call It Immediately

Sometimes however, you don't want to execute the function immediately.  
You rather want to **tell JavaScript** that it should execute a certain function at some point in the future (e.g. when some event occurs).

That's when you don't directly call the function but instead just **provide JavaScript with the name of the function**.

Example:

```js
someButton.addEventListener('click', add);
```

This snippet would tell JavaScript:  
> "Hey, when the button is clicked, go ahead and execute `add`."

---

### Common Mistake: Adding Parentheses in `addEventListener`

```js
someButton.addEventListener('click', add());
```

This would be **wrong**.

**Why?**

Because JavaScript would encounter that line when it parses/executes your script and:

1. Register the event listener.  
2. **Immediately execute** `add` – because you added parentheses.  

That means (see above):  
> "Please execute that function!"

Remember:  

- `add` → reference to the function (not executed).  
- `add()` → executes the function immediately.

---

### Just Writing the Function Name Does Nothing

Example:

```js
let someVar = 5;
add
alert('Do something else...');
```

**Why?**

Because you just throw the **name of the function** in there but you don’t give any other information to JavaScript.  

It basically doesn’t know what to do with that name:  

> "Should I run that when a click occurs? After a certain amount of time? I don’t know..."  

Hence, JavaScript kind of **ignores** this statement.

---
