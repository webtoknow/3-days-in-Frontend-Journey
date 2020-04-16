# Day 1 : HTML & CSS

## Table of contents

- [What is a Webpage?](#what-is-a-webpage)
- [First Webpage created](#first-webpage-created)
- [Types of Webpages](#types-of-webpages)
  - [Static Webpages](#static-webpages)
  - [Dynamic Webpages](#dynamic-webpages)
- [Client-Server model](#client-server-model)
  - [Client](#client)
  - [Server](#server)
  - [How does the Client-Server model works?](#how-does-the-client-server-model-works)
- [HTTP Protocol](#http-protocol)
- [Static vs Dynamic Websites](#static-vs-dynamic-websites)
  - [Static Websites](#static-websites)
  - [Dynamic Websites](#dynamic-websites)
    - [Server Side vs Client Side Rendering](#server-side-vs-client-side-rendering)
      - [Server Side Rendering](#server-side-rendering)
      - [Client Side Rendering](#client-side-rendering)
- [HTML Page Structure](#html-page-structure)
  - [HTML Basic Tags](#html-basic-tags)
  - [Semantic HTML](#semantic-html)
- [Let's add some style using CSS](#lets-add-some-style-using-css)
  - [About CSS](#about-css)
  - [Style element](#style-element)
  - [Include External CSS](#include-external-css)
  - [Representing colors in CSS](#representing-colors-in-css)
  - [Simple Selectors](#simple-selectors)
  - [More Complex Selectors](#more-complex-selectors)
  - [Pseudo-class](#pseudo-class)
  - [Pseudo-element](#pseudo-element)
  - [Specifying CSS Property Values](#specifying-css-property-values)
  - [Specificity](#specificity)
  - [Inheritance](#inheritance)
  - [The box Three](#the-box-three)
  - [Padding, Margin, Border](#padding-margin-border)
  - [Display and Visibility](#display-and-visibility)
  - [Position](#position)
  - [Float](#float)
  - [Flexbox](#flexbox)
  - [CSS Grid](#css-grid)
  - [Responsive Web Design](#responsive-web-design)
  - [Media Query](#media-query)

## What is a Webpage?

- is a document commonly written in **HTML** (***HyperText Markup Language***)
- is accesible through the internet using any web browser (*Google Chrome*, *Opera*, *Safari*, *Mozilla Firefox* and so on)
- may contain text, audio, video, downloadable data files, hyperlinks to other web pages
- can be viewed by entering correct URL pointing to the Web page

## First Webpage created

- First Webpage was created in 1991 by Tim Berners Lee.
- He published it from a lab in the Swiss Alps.
- The page is still up nowadays, but it was updated many times from then.
- It was created to explain the World Wide Web concept to the newcomers.
- If you are curious to see how it looks like, visit [World's first Website](http://info.cern.ch/hypertext/WWW/TheProject.html).

## Types of Webpages

### Static Webpages

- show the same content every time accessing them
- *e.g. : a HTML Webpage*

### Dynamic Webpages

- their content change 
- are usually written in Scripting Languages such as PHP, JSP, ASP, Perl, JavaScript etc.
- scripting languages return information in HTML form from a Database. Then, the browser translates the HTML to computer-understandable language
- *e.g. : a blog which allows the users to put comments*

## Client-Server model

**The web** is a service that allows computers to share and exchange data, such as: images, videos, documents etc.

The web is reffered to as **Client-Server** communication:

- computers that ask for data, so these are **Clients**
- computers that give the data, called also *computers that serve*, so these are the **Servers**

### Client

- can be a machine or a program
- ***Client Machine*** is the device that the user can use to access the web (e.g. : laptop, desktop, smartphones)
- ***Client Program*** is a program that allows the user to ***make requests*** (*e.g. : Web Browser*)

### Server

- is a computer program, **NOT** a device
- by extension, the server is a high-performance computer, but it is called server because it runs **server programs**
- provide functionality and **serve** other programs called clients
- a single server can **serve multiple clients at the same time**, that is the reason why we need servers to be *super-computers*
- **multiple servers** can run on a **single machine**
- there are many types of servers:
  - **Web servers** (*Apache*) - serve **HTTP** requests
  - **Database servers** - run Database Management Systems
- can contain web resources, host web applications, store user and program data etc.
- is always listening for requests and as soon as it receives one, responds with a message

### How does the Client-Server model works?

It is an architecture on the web that splits computers into 2 sections:

- computers that asks for and request services (**Clients**)
- computers that serve clients (**Servers**)

![How HTTP Works](img/How-HTTP-Works.png "How HTTP Works")

> **Note**
>
> - The Client-Server model is just one way for the computers to communicate via the web.
> - It is based on a **centralized structure**
> - There is another way to communicate via a **decentralized structure** - ***The Peer to Peer Model***
> - In The Peer to Peer Model:
>   - there is no client and no server
>   - both computers can be requesters and response providers
>   - each one is able to send and receive data directly with one another
>   - *e.g. : Videochat protocols*

## HTTP Protocol

- most used protocol in the world
- **HTTP** comes from: **Hypertext Transfer Protocol**
- tt is an **application layer protocol** allowing web applications to communicate and exchange data
- **TCP/IP based** protocol
- used to **deliver contents** (*images, videos, documents etc.*)
- it is a **connectionless** protocol: after making the request, the client **disconnect** from the server; then, when the response is ready, the server **re-estabilish** the connection and deliver the response
- can deliver all sort of data, as long as the computers are **able to read** it
- it is a **stateless** protocol: the client and the server know about each other **just durring the current request**. If they wants to reconnect, will estabilish a new connection as the first time
- was designed for the Web in the first place
- a typical HTTP message contains:
  - Start line - contain plain text information
  - Headers - contain plain text information
  - Body - sometimes contains binary data
- the information found in these three sections **vary depending if there is a request or response**:

![HTTP-Request-message](img/Request.png "HTTP-Request-message")
&nbsp;
![HTTP-Response-message](img/Response.png "HTTP-Response-message")

## Static vs Dynamic Websites

### Static Websites

- are webpages delivered to the user's browser exactly as stored
- usually, are written exclusively in HTML
- the user cannot interact with the page
- are purely informational
- advantages:
  - great for SEO since the page is already generated
  - no performance hit since the page is already generated
- disadvantages:
  - not suited for fast-changing content

![Static-Websites](img/Static-Websites.png "Static-Websites")

### Dynamic Websites

- can display different content
- provide user interaction
- is functional
- require using more than HTML

#### Server Side vs Client Side Rendering

- in the past, the websites and web applications has a common strategy to follow: they used to prepare the HTML content to be sent to the browsers at the server side; this content was then rendered as HTML with CSS in the browser
- in the latest years, increased clients' performance changed this approach: it became possible to render dynamic pages (desktop) or screens (mobile) requesting only the required content

##### Server Side Rendering

- when a new URL is accessed, the user sends the request to the server via a browser
- the server checks the resource and, when it is ready, prepare the compiled HTML content for the client
- this HTML is sent to the client for rendering and display
- the browser downloads the HTML and makes the site visible to the user
- advantages:
  - great for SEO since the page is generated on server
  - initial page load is faster
  - better maintainability
- disadvantages:
  - increased loading time when using the app (page reloads)
  - high coupling
  - mobile app development becomes difficult

![Server-Side-Rendering](img/Server-Side-Rendering.png "Server-Side-Rendering")

##### Client Side Rendering

- every time the user clicks to another page, the user sends the request to the server via a browser
- instead of a server, a CDN (Content Delivery Network) can be used to serve static HTML, CSS and other necessary files to the user
- the browser first downloads the HTML, then the app JavaScript files
- after the JavaScript is fetched, the app will bootstrap
- after that, the app will make API requests to fetch the dynamic content
- after the server responds, the final content is rendered using DOM in the browser
- advantages:
  - highly Reactive, mobile like application
  - small loading time when using the app (no page reload)
  - easier debugging, testing and developing because of clear separation between front-end and back-end
  - mobile app development becomes simple
- disadvantages:
  - not great for SEO since the page is generated on client
  - more processing (may have to be) done in browser

![Client-Side-Rendering](img/Client-Side-Rendering.png "Client-Side-Rendering")

## HTML Page Structure

- A HTML element usually consists of a **start** tag and **end** tag, with the content inserted between them:

```HTML
<tagname>Some HTML content...</tagname>
```

- There is a sample of HTML page document:

```HTML
<html>
  <head>
    <title>Sample Web page</title>
  </head>
  <body>
    <table border="0" cellpadding="10">
      <tr>
        <td>
          <img src="images/springsource.png">
        </td>
        <td>
          <h1>Sample "Hello, World" Application</h1>
        </td>
      </tr>
    </table>
    <p>This is the home page for the Web application. </p>
  </body>
</html>
```

- From the sample below, can be seen that all content is between **html** tags.
- Next, we have:
  - a declarative header section (delimited by the **head** element)
  - a body, which contains the document's actual content (delimited by **body** element)

### HTML Basic Tags

**Heading tags: *&lt;h1&gt;,&lt;h2&gt;,&lt;h3&gt;,&lt;h4&gt;,&lt;h5&gt;,&lt;h6&gt;***

- Any document starts with a heading.
- The headings may have 6 different sizes, which use the following elements: *&lt;h1&gt;,&lt;h2&gt;,&lt;h3&gt;,&lt;h4&gt;,&lt;h5&gt;,&lt;h6&gt;*.

**Paragraph tag - *&lt;p&gt;***

- The *&lt;p&gt;* tag offers a way to structure the text into different paragraphs.

**Line break tag - *&lt;br /&gt;***

- After using the *&lt;br /&gt;* tag, anything following it starts from the next line.
- This is an example of **empty** element (named also **self-closing** tag), when no opening or closing tags are needed, because there is nothing to go between them.

**Preserve formatting - *&lt;pre&gt;***

- Sometimes it is needed to keep the exact format for text as it is written; *&lt;pre&gt;* tag may be used for this purpose.

**Nonbreaking spaces - *\&nbsp;***

- To make client browser not to break text, *\&nbsp;* should be used.

> **Note**
>
> This is just a quick preview of some examples of HTML tags. The whole list can be found at [w3schools](https://www.w3schools.com/tags/ref_byfunc.asp)

### Semantic HTML

- refers to the idea that all HTML markup should convey the underlying meaning of the content - not its appearance
- it is about using **tags**, **class names** and **ids** that reinforce the **meaning of the content** within the tags
- it is an additional layer of communication - real people looking only at how your page displays may never get that additional communication, but machines will (like screen readers and search engines)
- **Semantic HTML** is important because it is:
  - **more accessible**: more readable and understandable by both devices and humans (including the 1 billion people with disabilities) 
  - **search engine friendly**: search engines rank content and not code, but using semantics to understand content
  - **clean**: easier to read and edit
- See some examples of using [Semantic HTML](https://internetingishard.com/html-and-css/semantic-html/)

## Let's add some style using CSS

- **CSS1**, first introduced in 1996, with the features: fonts, colors, alignment and spacing
- **CSS2.1**, released in 2004, added to previous features: layout and positioning
- **CSS3** has additional features regarding effects, sizing and speech
- There is **no CSS4**, the language has no longer levels - only the modules will be versioned

### About CSS

- **C**ascading **S**tyle **S**heets
- while HTML gives the structure of the content, CSS gives a way to describe how the content should be presented
- when the browser displays HTML, it uses its own built-in default style
- can control the displaying style of multiple web pages at once
- external stylesheets are stored in **CSS files**

### Style element

- **&lt;style&gt;** element helps to add some design to the web page
- placed inside the head of HTML
- just like other tags, it has an opening tag and a closing one
- but the &lt;style&gt; tag also requires an **attribute** called **type** which tells the browser the kind of style is used. In this case, it will be **text/css**
- an **attribute** provides additional information about an element
- there are not currently any other styles that work with today's browsers, but **type** attribute was created to anticipate possible future ones
- *e.g.:*

```HTML
<html>
  <head>
    <title>Stylized page</title>
    <style type="text/css">
      body {
        background-color: red;
        margin-left: 20px;
        margin-right: 20px;
        border: 1px dotted gray;
        padding: 10px;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    Some content here
  </body>
</html>
```

- Let's analyze the content between *&lt;style&gt;* tags:
  - **body** : is the selector, the content between curly braces follow the template: **propertyName: value**
  - **background-color** : sets the background color to the desired one
  - **margin-left**, **margin-right** : sets the left and right margins
  - **border** : defines a border deisgned with specific width, style and color
  - **padding**: creates some padding
  - **font-family** : sets the font to use for text

### Include External CSS

- Styles are usually included into external CSS files.
- With an external style sheet, look of the entire site can be changed by modifying one file.
- To use an external style sheet, a link should be added in the **&lt;head&gt;** section of the HTML page:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <p>This is a paragraph.</p>
  </body>
</html>
```

```CSS
body {
  background-color: yellow;
}
p {
  color: red;
}
```

### Representing colors in CSS

- **Hexadecimal colors : *#RRGGBB***
  - components of the color: RR(red), GG(green) and BB(blue) hexadecimal integers between 00 and FF
  - *e.g. : #0000FF is blue*
- **RGB colors : *rgb(red, green, blue)***
  - each parameter defines the intensity of the color and can be an integer between 0 and 255
  - *e.g. : rgb(0, 0, 255) is blue*
- **RGBA colors : *rgba(red, green, blue, alpha)***
  - extension of RGB colors
  - *alpha* parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque)
  - *e.g. : rgba(0, 0, 0, 255, 0.3) is blue with 0.3 opacity*
- **HSL Colors: *hsl(hue, saturation, lightness)***
  - hue is a degree on the color wheel (from 0 to 360, 0 or 360 is red, 120 is green, 240 is blue), saturation is a percentage value (0% means a shade of gray and 100% is the full color) and lightness is also a percentage (0% is black, 100% is white)
  - *e.g. : hsl(240, 60%, 70%) is pastel blue*
- **HSLA Colors : *hsla(hue, saturation, lightness, alpha)***
  - extension of HSL colors
  - *alpha* parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque)
  - *e.g. : hsla(240, 60%, 70%, 0.3) is pastel blue with opacity*
- **Predefined/Cross-browser colors**
  - there are 140 color names predefined in CSS specification
  - *e.g. : Aqua, Blue, Brown*

### Simple Selectors

- A selector is a way to select one or multiple elements and then apply some style for them.
- There are 3 types of simple selectors:
  - **based on the type of element**
    - *e.g.: the previous **body** selector will select all body elements in HTML*
  - **based on class**
    - *e.g. : **.bookTitle** identifies the HTML elements matching *bookTitle* class atrribute*
  - **based on id**
    - *e.g. : **#menu** : will select all elements which have the id named menu*
- Same CSS properties may be applied to multiple selectors, by separating them by comma:
  - *e.g.: h1, h2 {...}*
- Also, for selecting everything, **star selector (*)** can be used.

```CSS
nav {
  background-color:#ddd;
}

.container {
  margin: 0 auto;
}

#about {
  padding: 0 30px 25px 5px;
}

h1, h2, h3 {
  color: #000;
}

```

### More Complex Selectors

- **Descendant selector** - *e.g. : apply the style for all **p** elements anywhere inside of **div** elements*

```CSS
div p {
  background-color:#ddd;
}
```

```HTML
<div>
  <article>
      <p>I'm a descendant</p>
  </article>
  <p>I'm also a descendant</p>
</div>
```

- **Child selector** - *e.g. : apply the style for all **p** elements that are direct descendants (children) of **div** elements*

```CSS
div > p {
  background-color:#ddd;
}
```

```HTML
<div>
  <article>
      <p>I'm a descendant but not a child</p>
  </article>
  <p>I'm a child and also a descendent</p>
</div>
```

- **Chain selector** - *e.g. : apply the style for all **div** elements containing the class  **mark***

```CSS
div.mark {
  background-color:#ddd;
}
```

```HTML
<div>
  <article class="mark">
      I'm not a div
  </article>
  <div class="mark">
    I'm a marked div :)
  </div>
</div>
```

- **Attribute selector** - *e.g. : apply the style for all **img** elements that have the value of *alt* atribute equal to *fruit**

```CSS
img[alt=fruit] {
  padding:0 20px;
}
```

```HTML
<img src="apple.jpg" alt="fruit"></img>
```

- **Pseudo-class** - *e.g. : apply the style for all visited **a** elements (hyperlinks)*

```CSS
a:visited {
  color: blue;
}
```

### Pseudo-class

- it is used to define a special state of an element. For example, it can be used to:
  - style an element when a user mouses over it
  - style visited and unvisited links differently

### Pseudo-element

- it is used to style specified parts of an element. For example, it can be used to:
  - style the first letter or line of an element
  - insert content before or after the content of an element
- *e.g.: div::after*

> **Note**
>
> Here there are just a few selectors. In order to see all of possible ones, visit [selectors specs](https://www.w3.org/TR/selectors-3/).

### Specificity

- it is a weight that is applied to a given CSS declaration, determined by the number of each **selector types** in the matching selector
- when multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element
- only applies when the same element is targeted by multiple declarations
- **directly targeted elements** will always take precedence over rules which an element inherits from its ancestor

```CSS
body > div {
  background-color: red;
}

div {
  background-color: black;
}

* {
  background-color: green;
}
```

![specificity](img/specificity.png "specificity")

The following list of selector types increases by specificity:

- **Type selectors** ( *h1* ) and **pseudo-elements** ( *::before* )
- **Class selectors** ( *.example* ), **attributes selectors** ( *[type="radio"]* ) and **pseudo-classes** ( *:hover* )
- **ID selectors** ( *#example* )
- **Inline styles** added to an element ( *style="font-weight:bold"*) **always overwrite** any styles in external stylesheets => have **the highest specificity**
- **!important** rule is used on a style declaration and this one overrides any other declarations. Using of this one is **bad practice** because it makes debugging more difficult by breaking the natural **cascading**.

![specificity-example](img/specificity-example.png "Specificity Exemple")

> **Note**
>
> We can calculate selector specificity using [Keegan Street calculator](https://specificity.keegan.st/).

### Specifying CSS Property Values

- There are a lot of ways to specify the property values:
  - **keywords:** *thin, thick, larger*
  - **physical measurements:** *inches (in), points (pt), picas (pc)*
  - **screen measurements:** *pixels (px)*
  - **relative measurements:** *%,em*
  - **color codes:** *hex, rgb*
  - **fonts:** *Helvetica, sans-serif*
  - **functional notation:** *url("images/ex.jpg")*

> **Note**
>
> To learn more easy CSS properties we can use a [Cheet Sheet](https://github.com/WebToLearn/laborator-tehnici-web/raw/master/doc/laborator-2/css-cheat-sheet.pdf).

### Inheritance

- Some properties will be inherited from the element's parents
  - *e.g. : font-size*
- But others will not be inherited:
  - *e.g. : position*

### The Box Three

- An HTML element can be considered as a box
- There are three big properties that can influence this box:
  - **border**: not visible by default, but the width, style and color can be controlled
  - **padding**: the space between the border and the content of the box
  - **margin**: the space between the box and other elements
  
![Box-Model](img/Box.PNG "Box Model")

### Padding, Margin, Border

- Every box has **4 sides**
- CSS allows to set all sides equally or independently

```CSS
ul li {
  padding-right: 10px;
  margin: 0 3px 0 3px;
  border-botton: 3px solid #000;
}
```

- The order of the 4 values from **margin** are: **top, right, bottom and left** ( clockorder ) - this is the short form, to avoid writing 4 lines by writing only one
- **border** also has a shorter form, the 3 values means: **width**, **type** and **color**

> **Note**
>
> When the **top** and **bottom** margins meet, they overlap by taking the maximum of sizes. This rule is applied only for **vertical margins.**

### Display and Visibility

- **Display** can be **block**, **inline** or **none**
  - **Block elements** sit on top of each other
    - *e.g.: **div** element is a block-level element*
  - **Inline elements** only move downward when there is no enough space
    - *e.g.: **span** element is an inline element*
  - **Display of none** removes an element
- **Visibility**:
  - Elements are visible by default
  - Hidden elements are not visible, but reserve space

### Position

- 5 possible values:
  - **static:**
    - default value
    - an element with **position: static** is not positioned in any special way, it is always positioned according to the normal flow of the page
    - it is used for removing some positioning applied out of our control, but this is fairly rare, as positioning doesn't cascade
  - **fixed:**
    - is positioned relative to the viewport (the user's visible area of a web page) or the browser's window itself
    - the viewport doesn't change when the window is scrolled, so a fixed element always stays in the same place even if the page is scrolled
  - **sticky:**
    - an element with **position: sticky** is positioned based on the user's scroll position
    - can be used for navigation bars or footers to always be accessible even if the user scrolls up or down
  - **relative:**
    - an element with **position: relative** is positioned relative to its normal position
    - if the element does not have other positioning attributes (top, left, bottom or right), it will be exactly like position:static
    - introduces the ability to use z-index on that element
    - limits the scope of absolutely positioned child elements
  - **absolute:**
    - an element with **position: absolute** is positioned relative to the next parent element with relative (or absolute) positioning
    - if there is no such parent, it uses the document body
    
### Float

- CSS positioning property
- page elements with **float** property applied to them are just like the images in the print layout where the text flows around them
- 4 possible values:
  - **left:** - the element floats to the left of its container
  - **right:** - the element floats to the right of its container
  - **none:** - default - the element will be displayed just where it occurs in the text
  - **inherit** - the element inherits the float value of its parent

### Flexbox

- the **Flexible Box Layout Module** makes it easier to design flexible responsive layout structure without using positioning or float
- excels at vertical centering and equal heights
- very easy to reorder boxes
- first, it is needed to define **flex container** (the parent) and next, **flex items** (the children)
- the flex container becomes flexible by setting the **display** property to **flex**

```CSS
.flex-container {
  display: flex
}
```

- the flex container properties are:
  - **flex-direction**
  - **flex-wrap**
  - **flex-flow**
  - **justify-content**
  - **align-items**
  - **align-content**

- it easily solves one of the most common style problem: **perfect centering**:

```CSS
.flex-container {
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
}
```

- the **direct child elements of a flex container** automatically become flexible (flex) items
- the flex item properties are:
  - **order**
  - **flex-grow**
  - **flex-shrink**
  - **flex-basis**
  - **flex**
  - **align-self**

- main disadvantage is that Flexbox was planned to be 1-dimensional

> **Note**
>
> One of the best guide to CSS flexbox layout is on (CSS Tricks)[https://css-tricks.com/snippets/css/a-guide-to-flexbox/].
> To learn flexbox in an easy and funny way, play [Flexbox froggy](https://flexboxfroggy.com/) and [Flexbox defense](http://www.flexboxdefense.com/).

### CSS Grid

- released on March 2017
- excels at dividing a page into major regions and defining the relationship in terms of size, position and layer
- like tables, **grid layout** enables the developer to align elements into columns and rows
- CSS Grid is designed to work in 2-dimensional way
- it is better to use Flexbox for UI elements, but Grid for major layout
- example for using CSS Grid:

```HTML
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

```CSS
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

The display will be divided in this way:
![CSS_Grid](img/CSS_Grid.png "CSS_Grid")

> **Note**
>
> To learn CSS Grid in an easy and funny way, play [CSS Garden](http://cssgridgarden.com/).

### Responsive Web Design

- makes web pages look good on all devices
- the web page should look good and be easy to use, regardless of the device (desktops, tablets and phones)
- it is called responsive web design when CSS and HTML is used in order to resize, hide or move the content to make it looks good on any screen
- it is created using **Media Queries**

### Media Query

- CSS technique introduced in CSS3.
- uses the **@media** rule to include a block of CSS properties only if a certain condition is true.
- a breakpoint is added where certain parts of the design will behave differently depending on the condition

```CSS
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
      width: 100%;
  }
}
@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {
    width: 8.33%;
  }
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {
    width: 8.33%;
  }
}
```

Previous | Next
:------- | ---:
← [Home](../../README.md) | [Day 1 - Exercise](../Exercise/README.md) →
