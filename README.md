# js-smooth-scroll
A JS smooth scroll function

## How to implement

To use this approach there is a required setup in the HTML elements, ie:

```html
<a href="#target-point" data-scroll="true">Go to target</a>

<!-- More HTML elements -->

<div>
  <p id="target-point">
    A paragraph with content
  </p>
</div>
```
The element's target id will be used to pull the DOM object and use their properties to perfom the scrolling computations. The "starting point" will be the element that triggers the event, which will use an attribute <code>data-scroll="true"</code> set, and the <code>href="#target-point"</code> attribute will be used to point to the destination element.

JS will be used to pull the attributes, identify the starting an ending elements and with the aid of the <code>setInterval</code> function will apply an animated scroll.

You can review a sample implemented at: https://accedo-gps.000webhostapp.com/demo/js-smooth-scroll/
