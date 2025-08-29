1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
*Answer to the question no: 01-*
*1. getElementById: With the help of getElementById we can extract an element using a specific ID.*
*2. getElementByClassName: With the help of getElementByClassName we can extract an element using a specific Class Name.*
*3. querySelector/querySelectorAll: If we use the same CSS selector inside multiple elements, we can get those elements via querySelector/querySelectorAll.*


2. How do you **create and insert a new element into the DOM**?
*Answer to the question no: 02-*
*We can extract an element by a specific id or class name, then create a new element using document.createElement() and insert it inside the element extracted by id or class name using appendChild().*


3. What is **Event Bubbling** and how does it work?
*Answer to the question no: 03-*
*Through event bubbling, an event can be triggered on an element and then moved step by step from a child element to its parent element.*


4. What is **Event Delegation** in JavaScript? Why is it useful?
*Answer to the question no: 04-*
*Event Delegation: Handling multiple events using a parent listener is called Event Delegation.*
*It is useful because:*
*Doesn't require excess code writing.*
*Dynamic elements can be handled.*
*Code is easy to understand.*


5. What is the difference between **preventDefault() and stopPropagation()** methods?
*Answer to the question no: 04-*
*preventDefault():*
*Disables the browser's default action.*

*stopPropagation():*
*Prevents the event from propagating to the parent element.*
*The browser's default action will continue.*
