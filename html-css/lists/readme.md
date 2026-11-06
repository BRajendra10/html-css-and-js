# HTML Lists

HTML lists allow web developers to group a set of related items in lists.

## Unordered HTML List

An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.
The list items will be marked with bullets (small black circles) by default:
```
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>
```

The CSS list-style-type property and html type attribute is used to define the style of the list item marker. It can have one of the following values:
- disc	Sets the list item marker to a bullet (default)
- circle	Sets the list item marker to a circle
- square	Sets the list item marker to a square
- none	The list items will not be marked


## Ordered HTML List

An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.
The list items will be marked with numbers by default:
```
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

The type attribute of the <ol> tag, defines the type of the list item marker:
- type="1"	The list items will be numbered with numbers (default)
- type="A"	The list items will be numbered with uppercase letters
- type="a"	The list items will be numbered with lowercase letters
- type="I"	The list items will be numbered with uppercase roman numbers
- type="i"	The list items will be numbered with lowercase roman numbers

## HTML Description Lists

HTML also supports description lists.
A description list is a list of terms, with a description of each term.
The **div** tag defines the description list, the **dt** tag defines the term (name), and the **dd** tag describes each term:

```
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

