# CSS Basics

CSS stands for Cascading Style Sheets
CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once

## Type of css

1. Inline CSS - CSS is written directly inside an HTML element using the style attribute.
2. Internal CSS - CSS is written inside a **style** element in the HTML document's **head**.
3. External CSS - CSS is written in a separate .css file and connected to the HTML using a **link** element.

## CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.
We can divide CSS selectors into five categories:

1. Simple selectors (select elements based on name, id, class)
2. Combinator selectors (select elements based on a specific relationship between them)
3. Pseudo-class selectors (select elements based on a certain state)
4. Pseudo-elements selectors (select and style a part of an element)
5. Attribute selectors (select elements based on an attribute or attribute value)

### Simple selectors

Selects all elements with a particular tag name:
```
p {
    color: blue;
}
```

Selects an element by its ID:
```
#title {
    color: red;
}
```

Selects all elements with a particular class:
```
.highlight {
    background-color: yellow;
}
```

Selects all elements:
```
Selects all elements.
```

### Combinator selectors

Combinators select elements based on their relationship with other elements.

1. Descendant selector (space) - Selects all <p> elements anywhere inside .container, including nested descendants.
```
.container p {
    color: blue;
}
```

2. Child selector (>) - Selects only <p> elements that are direct children of .container.
```
.container > p {
    color: red;
}
```

3. Adjacent sibling selector (+) - Selects the first <p> immediately following an <h1> with the same parent.
```
h1 + p {
    color: green;
}
```

###  Pseudo-class selectors

Pseudo-classes select elements based on a state, condition, or position.

1. :hover - Applies when the mouse pointer is over an element.
```
button:hover {
    background-color: blue;
    color: white;
}
```

2. :focus - Applies when an element has keyboard or other focus.
```
input:focus {
    outline: 2px solid blue;
}
```

3. :first-child - Selects an element if it is the first child of its parent.
```
li:first-child {
    color: red;
}
```

Other useful pseudo-classes include :nth-child :last-child, :checked, :disabled, and :not().

1. ::first-letter - Styles the first letter of a text element.
```
p::first-letter {
    font-size: 32px;
    color: red;
}
```

2. ::first-line - Styles the first formatted line of text.
```
p::first-line {
    color: blue;
}
```

3. ::before - Inserts generated content before an element's content.
```
h2::before {
    content: "★ ";
}
```

4. ::after - Inserts generated content after an element's content.
```
h2::after {
    content: " ✓";
    color: green;
}
```

5. ::placeholder - Styles the placeholder text in an input.
```
input::placeholder {
    color: gray;
}
```

## The CSS Box Model

In CSS, the term "box model" is used when talking about web design and layout.
The CSS box model is essentially a box that wraps around every HTML element.

- Content - The content of the box, where text and images appear
- Padding - Clears an area around the content. The padding is transparent
- Border - A border that goes around the padding and content
- Margin - Clears an area outside the border. The margin is transparent

## The Display property

the display property controls how an HTML element is displayed on a webpage and how much space it occupies.

1. display: block - A block element starts on a new line and normally takes up the full available width of its parent.
2. display: inline - An inline element stays within the same line as surrounding text, taking up only the space its content needs.
3. display: inline-block - This combines the useful features of both block and inline.
- Like inline: it can sit beside other elements on the same line.
- Like block: you can set its width, height, padding, and margins.
4. display: none - This completely hides the element from the page's layout.

## CSS units

units are used to define sizes such as width, height, font size, margin, and padding.

1. px — Pixels, A pixel is a fixed CSS length unit. It is useful when you want a specific size.
2. % — Percentage, A percentage is generally calculated relative to the relevant size of the parent element. The exact reference depends on the CSS property.
3. rem — Root em, rem is relative to the font size of the root HTML element, usually the <html> element.
4. vw — Viewport Width, vw is relative to the width of the browser's viewport (the visible browser area).
5. vh — Viewport Height, vh is relative to the viewport's height.