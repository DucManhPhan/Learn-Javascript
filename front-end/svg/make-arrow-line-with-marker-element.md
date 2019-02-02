How to make the arrow line in SVG?


In order to draw the arrow line, you can use **line** and **marker**. Because **marker** element defines the graphics that is to be used for drawing arrowheads or polymarkers on a given **path**, **line**, **polyline** or **polygon** element.

Markers are attached to shapes using the **marker-start**, **marker-mid**, and **marker-end** properties.

Ex: 

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7"/>
        </marker>
    </defs>
    <line x1="0" y1="50" x2="20" y2="50" stroke="#000" stroke-width="1" marker-end="url(#arrowhead)"/>
</svg>
```

with: 
- markerWidht / markerHeight: defines the width / height of the marker.
- orient: defines the orientation of the marker relative to the shape it is attached to. (value = auto|auto-start-reverse|angle)
- refX: defines the x coordinate for the reference point of the marker.
- refY: defines the y coordinate for the reference point of the marker.


**defs** element is used to store graphical objects that will be used at a later time. Objects created inside a **defs** element are not rendered directly. To display them you have to reference them (with a *use* element).

Ex:

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Some graphical objects to use -->
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />

    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
  </defs>
 
  <!-- using my graphical objects -->
  <use x="5" y="5" xlink:href="#myCircle" fill="url('#myGradient')" />
</svg>
```