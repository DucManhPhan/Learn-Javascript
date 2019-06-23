https://zellwk.com/blog/9-important-css-properties-you-must-know/



To become front-end developer, you must think as them.

When your element is specific thing such as text, table, button, checkbox, ..., you have to understand about it, you always know how many elements, properties that it has.

For example:

table:
- tr : table row
- th : table header
- td : table column

To change the properties in table, we need to know something like that:
- to push all table's text to left side:

    We have to immediately wonder the question: What is property that make all table's text to left side?

    --> It is ```text-align``` property. So, we have:

    ```html
    th {
        text-align: left;
    }

    td {
        text-align: left;
    }
    ```

- When we color all rows in table, the separation that has white color will appear. 

    Because, each column will have the margin properties. So, each column will have distance between them.

    So, to remove it, we should use ```border-collapse``` to make borders are collapsed into a single border when possible. (```border-spacing``` and ```empty-cells``` properties have no effect.)

- To create the Zebra striples table:

    What are traits to make Zebra effect?

    --> Zebra effect means all even or odd rows that are made effects.

- When we cope with the ```color``` problem:

    Some properties that we need to know:
    - background-color
    - foreground-color
    - 

- ```position``` problem:

    Properties:
    - ```position```: ```relative```, ```absolute```, ```static```, ```fixed```, ```sticky```. To accompany with ```position``` property, we have: ```top```, ```right```, ```bottom```, ```left```, and ```z-index```.
    - ```text-align```: ```left```, ```right```, ```top```, ```bottom```. --> The ```text-align``` property is related to text. Remember!
    - 

- Something about ```width``` and ```height```.

    ```Width``` and ```height``` properties are used closely with ```display:block``` and ```display:inline``` to set the width and height of HTML elements while creating a website.
    
    Common units for Width and Height are:
    - px: Pixels
    - em: A unit of measurement, where 1em = current font-size.
    - rem: Root em. Same measurement as em, but makes life such easier without the inheritance problem.
    - %: Percentage.
    - auto: Highly useful unit.

    Sometimes, we use ```max-width```, ```max-height```, ```min-width``` and ```min-height``` to make responsive websites.

- Layout of website

    There are two things to create layout:
    - float: left, right, none. We have to carefully use float.

        ```clear``` property have the following values:
        - ``none``: allows floating elements on both sides. This is default.
        - ```left```: no floating elements allowed on the left side.
        - ```right```: no floating elements allowed on the right side.
        - ```both```: no floating elements allowed on either the left or the right side.
        - ```inherit```: the element inherits the clear value of its parent.

        The most common way to use the ```clear``` property is after you have used a float property on an element.

        When clearing floats, you should match the clear to the float: If an element is floated to the left, then you should clear to the left. Your floated element will continue to float, but the cleared element will appear below it on the web page.

        If an element is taller than the element containing it, and it is floated, it will "overflow" outside of its container:

        Then we can add overflow: auto; to the containing element to fix this problem:

        ```css
        .clearfix {
            overflow: auto;
        }
        ```

        The ```overflow: auto``` clearfix works well as long as you are able to keep control of your margins and padding (else you might see scrollbars). The new, modern clearfix hack however, is safer to use, and the following code is used for most webpages:

        ```css
        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }
        ```

        The are 3 main methods for clearing floats:
        - clear: The Clear property takes in 3 values. left, right or both. As you might have suspected, clear:left; simply clears any floats on the left side, clear:right; clears floats on the right side while clear:both; ensures that all floats elements are cleared.

        - overflow:hidden: This method is great for ensuring the parent element does not collapse like in problem 2. overflow:hidden; is set to the parent element to combat the problem.

        - clearfix: No doubt you will have heard of or seen clearfix in tutorials. It is also set to the parent element to ensure float issues do not arise. The rationale behind the clearfix hack is to insert some content (a period) after the parent element to force the parent element to self clear since there is content after the floats.

    - flex


From ```Zebra-Stripes-table``` problem, we have:
- When we have element that contains multiple elements, we can access these elements by some properties such as ```nth-child(even | odd)```.