# js-smooth-scroll
A JS smooth scroll function

## How to implement

To use this approach there is a required setup in the HTML elements, ie:

```html
<a id="start-point" data-scroll="true" data-target="#target-point">Go to target</a>

<!-- More HTML elements -->

<div>
  <p id="target-point">
    A paragraph with content
  </p>
</div>
```
The element's id's will be used to pull the DOM object and use their properties to perfom the scrolling computations. Then a "starting point" or the element that triggers the event will use an attribute <code>data-scroll="true"</code> set, and an additional attribute <code>data-target="#target-point"</code> to point to the destination element.

JS will be used to pull the attributes, identify the starting an ending elements and with the aid of the <code>setInterval</code> function will apply an animated scroll.
