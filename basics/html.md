# HTML basics 

All HTML documents must start with a document type declaration: <!DOCTYPE html>.
The HTML document itself begins with <html> and ends with </html>.
The visible part of the HTML document is between <body> and </body>.

## The <!DOCTYPE> Declaration

- The <!DOCTYPE> declaration represents the document type, and helps browsers to display web pages correctly.
- It must only appear once, at the top of the page (before any HTML tags).
- The <!DOCTYPE> declaration is not case sensitive.

## The HTML head Element

- The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.
- HTML metadata is data about the HTML document. Metadata is not displayed on the page.
- Metadata typically define the document title, character set, styles, scripts, and other meta information.

### The HTML title Element

The **title** element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.The **title** element is required in HTML documents!

The title element:

- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites
- displays a title for the page in search engine-results

### The HTML style Element

The style element is used to define style information for a single HTML page:

```
<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>
```

### The HTML link Element

- The link element defines the relationship between the current document and an external resource.
- The link tag is most often used to link to external style sheets: 
```
<link rel="stylesheet" href="mystyle.css">
```

### The HTML meta Element

- The meta element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.
- The metadata will not be displayed on the page, but is used by browsers (how to display content or reload page), by search engines (keywords), and other web services

```
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="A task manager to organize daily tasks.">
```

### The HTML script Element

The <script> element is used to define client-side JavaScripts.
```
<script src="script.js"></script>
```

### The HTML <base> Element

- The <base> element specifies the base URL and/or target for all relative URLs in a page.
- The <base> tag must have either an href or a target attribute present, or both.
- There can only be one single <base> element in a document!

```
<head>
<base href="https://www.w3schools.com/" target="_blank">
</head>
```

- The <base> tag is useful in specific situations where you want relative URLs to resolve from a common URL rather than the current page's URL.
- One caution: base affects relative links, images, scripts, stylesheets, and other URL references, so an incorrect base can cause resources to load from the wrong location.

## HTML Eliment, Tag and Attribute

The HTML element is everything from the start tag to the end tag:
```
<tagname>Content goes here...</tagname>
```

**Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!**

A tag is the markup written inside angle brackets (< >). It tells the browser what kind of content or structure you're defining
```
<p></p>
```

An attribute provides additional information or configuration for an HTML element. It is usually written inside the opening tag.
```
<a href="https://google.com">Visit Google</a>
```

### Id and Class attribute

The id and class attributes in HTML are used to identify elements so you can style them with CSS or select them with JavaScript.

The main difference is:
- id identifies one specific element.
- class lets you group multiple elements together.

## Text Formating

HTML contains several elements for defining text with a special meaning.

```
Formatting elements were designed to display special types of text:

<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text
```