# Day 2 : Basic JavaScript

## Table of contents

- [How browsers work?](#how-browsers-work)
    - [The browser's main functionality](#the-browsers-main-functionality)
    - [The browser's high level structure](#the-browsers-high-level-structure)
    - [The main flow](#the-main-flow)
    - [DOM](#dom)
    - [CSS Parsing](#css-parsing)
    - [Processing scripts and style sheets](#processing-scripts-and-style-sheets)
    - [The rendering engine's threads](#the-rendering-engines-threads)
    - [Event loop](#event-loop)
- [Web Application Programming Interfaces](#web-application-programming-interfaces)
    - [API in client-side JavaScript](#api-in-client-side-javascript)
- [What is JavaScript?](#what-is-javascript)
    - [JavaScript running order](#javaScript-running-order)
    - [Interpreted versus compiled code](#interpreted-versus-compiled-code)
    - [How can JavaScript be added to a Web page?](#how-can-javascript-be-added-to-a-web-page)
- [Primitives](#primitives)
    - [Primitive wrapper objects in JavaScript](#primitive-wrapper-objects-in-javascript)
- [Objects](#objects)
    - [Dates](#dates)
    - [Indexed collections: Arrays and Typed Arrays](#indexed-collections-arrays-and-typed-arrays)
    - [Structured data: JSON](#structured-data-json)
- [Functions](#functions)

## How browsers work?

- in the years of IE 90% dominance, the browser was like a "black box"
- now, with open-source browsers serve the majority of the web, so we can see what's inside a web browser -> millions of C++ lines
- as a web developer, **learning the internals of browser operations helps you make better decisions and know the justifications behind development best practices**
- there are 5 major browsers used on desktop today:
    - Chrome
    - Internet Explorer
    - Firefox
    - Safari
    - Opera

### The browser's main functionality

- The main function of a browser is **to present a web resource** (usually a HTML, but may also be image or other type of content), by requesting it from the server and displaying it in the browser's window. The location of the resource is specified by the user using an **URI (Uniform Resource Identifier)**
- The way the browser interprets and displays HTML is specified in the **HTML and CSS specifications**
- specifications are maintained by the [W3C](https://www.w3.org/) (World Wide Web Consortion) organization
- For years browsers conformed to only a part of the specifications and developed their own extensions => browser incompatibility issues
- Today most of the browsers more or less conform to the specifications

### The browser's high level structure

1. **The user interface** (address bar, back/forward button, bookmarking menu etc.)
2. **The browser engine**: manages actions between the UI and the rendering engine
3. **The rendering engine**: displays the requested content (*e.g.: parses HTML and CSS and displays the parsed content on the screen*). IE uses Trident, Firefox uses Gecko, Safari uses WebKit, Chrome and Opera (from version 15) use Blink, a fork of WebKit.
4. **Networking**: for HTTP requests
5. **UI backend**: exposes a generic interface that is not platform specific
6. **JavaSCript interpreter**: parse and execute JS code
7. **Data storage**: persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem

> ### **Note**
>
> Browsers such as Chrome run multiple instances of the rendering engine, one for each tab. Each tab runs in a separate process.

### The main flow

![Rendering-Engine-Flow](img/Rendering-Engine-Flow.png "Rendering-Engine-Flow")

- Start Parsing the HTML document and convert them to DOM nodes in a tree called **content tree**
- Parse the style data, both in external CSS and in style elements
- Styling information & visual intructions in the HTML => **render tree**
- Render tree contains rectangles with visual attributes, places in right order to be displayed to the screen
- **Layout process**: each node receives the exact coordinates where it should appear on the screen
- **Painting**: each node will be painted using the UI backend layer

> ### **Note**
>
> - this is a gradual process
> - for beeter user experience, the rendering engine will try to display contents on the screen as soon as possible (it will not wait until all HTML is parsed before starting to build and layout the render tree, it will start to display parts of it, while the process will continue with the rest of contents)

### DOM

- Coming from **D**ocument **O**bject **M**odel
- The output tree is a tree of DOM element and attribute nodes
- It is the object presentation of the HTML document and the interface of HTML elements
- Like HTML, DOM is specified by the W3C organization
- has an almost one-to-one relation to the markup
- *e.g.:*
```HTML
<html>
    <body>
        <p>
            Hello World
        </p>
        <div>
            <img src="example.png"/>
        </div>
    </body>
</html>
```
will be translated to the following DOM tree:

![DOM-tree](img/DOM-tree.png "DOM-tree")

- during the tree construction stage the DOM tree with the Document in its root will be modified and elements will be added to it
- you will never get an "Invalid Syntax" error on an HTML page (browsers fix any invalid content and go on)

### CSS parsing
- Each CSS file is parsed into a StyleSheet object
- Each object contains CSS rules
- CSS rule objects contain selector and declaration objects and other other objects corresponding to CSS grammar
- *e.g.:*
```CSS
p, div {
    margin-top: 3px;
}
.error {
    color: red;
}
```
will be translated into:

![CSS-tree](img/CSS-tree.png "CSS-tree")

### Processing scripts and style sheets

**Scripts**
- the model of the web is synchronous
- scripts are expecting to be parsed and executed immediately when the parser reaches a &lt;script&gt; tag
- parsing of the document stops until the script has been executed
- if the script is external, then the resource must first be fetched from the network
- both WebKit and Firefox do an optimization: while executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them (**Speculative parsing**)

**Style sheets**
- it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing
- there is an edge case: for the scripts asking for style information during the document parsing steps, if the style is not loaded and parsed yet, the script will get wrong answers and this caused lots of problems
- **Firefox blocks all scripts** when there is a style sheet that is still being loaded and parsed
- **WebKit blocks scripts only when they try to access certain style properties that may be affected by unloaded style sheet**

**Style computation**
- visual properties of each render object will be calculated by style properties of each element
- the style includes style sheets of various origins: **inline elements** and **visual properties in the HTML** (*e.g.: bgcolor property*), then is translated to matching CSS style properties

### The rendering engine's threads
- the rendering engine is single threaded
- almost everything, except network operations, happens in a single thread
- network operations can be performed by several parallel threads
- the number of parralel connections is limited (usually 2-6 connections)

### Event loop
- the browser main thread is an event loop
- it's an infinite loop that keeps the process alive
- it waits for events (like layout and paint events) and processes them

## Web Application Programming Interfaces
- called also API
- are a set clearly defined methods of communication between various software components
- allow developers to create complex functionality more easily

### API in client-side JavaScript
- are not part of the JavaScript language itself
- they are built on top of the core JavaScript language
- there are 2 categories:
    - **Browser APIs**:
        - built into web browser
        - able to expose data from the browser
        - *e.g.: [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) provides some simple JS constructs for retrieving location data* 
    - **Third party APIs:**
        - are not build into the browser by default
        - the developer have to grab their code and information from somewhere on the Web
        - *e.g.: [Twitter API](https://developer.twitter.com/en/docs) alows to display latest tweets on your website*

## What is JavaScript?
- scripting language that allows us to implement complex things on web pages (*e.g.: create dynamically updating content, control multimedia, animate images and so on.*)
- the third layer of the three standard web technologies ( beside HTML and CSS )
- the core JavaScript language consists of some common programming features that allow us to do things like:
    - store useful values inside variables
    - operations with different types of variables
    - running code in response to certain events occuring on a web page (*e.g.: **click** event*)
- when a web page is loaded in the browser, the code (HTML, CSS and JS) are run inside an execution environment (the browser tab)
- is executed by the browser's JavaScript engine, after the HTML and CSS have been assembled and put together into a web page
- dinamically modify HTML and CSS to update an user interface, via the DOM API

### JavaScript running order

- when the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom
- this means that it needs to be careful what order the things are put in

### Interpreted versus compiled code
- **JavaScript is an interpreted language**: 
    - the code is run from top to bottom and the result of running the code is immediately returned
    - code is not needed to be transformed into a different form before the browser runs it
- **Compiled languages** :
    - are transformed (compiled) into another form before they are run by the computer
    - *e.g.: C/C++ are compiled into assembly language that is then run by the computer*

### How can JavaScript be added to a Web page?
- in a similar way to CSS (**&lt;link&gt;** to apply external stylesheets and **&lt;style&gt;** to apply internal stylesheets to HTML)
- uses **&lt;script&gt;** tag
- 2 ways on doing this:
    - **internal JavaScript**

        *e.g.:*
        ```JavaScript
        <script>

            //JavaScript goes here

        </script>
        ```
    - **external JavaScript**

        *e.g.:*
        ```JavaScript
        <script src="script.js"></script>
        ```
## Primitives

- data that is not an object and has no methods
- in JavaScript, there are 6 primitive data types:
    - **string**: textual data
    - **number**: only one number type (no specific type for integer, for example)
    - **boolean**: **true** or **false**
    - **null**: intentional absence of a value
    - **undefined**: no assigned value
    - **symbol** (new to ES6): an **unique** value that may be used as the key of on Object property
> **Note**
>
> All primitives are **immutable** (after they were created, it can never change)

### Primitive wrapper objects in JavaScript

- except for **null** and **undefined**, all primitive values have object equivalents that wrao around the primitive values:
    - **String**
    - **Number**
    - **Boolean**
    - **Symbol**
- **valueOf()** method returns the primitive value

## Objects

- in JavaScript, objects can be seen as a collection of properties
- a limited set of properties are initialized, then properties can be added and removed
- property values can be of any type, including other objects => enables building complex data dtructures
- properties are identified using key values
- a key value is a String or a Symbol value
- 2 types of object properties which have certain attributes:
    - **data property**:
        - associates a key with a value
    - **accessor property**
        - associates a key with one or two accessor functions (**get** and **set**) to retrieve or store a value

### Dates

- when representing dates, the best choice is to use the built-in [Date utility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) in JS

### Indexed collections: Arrays and Typed Arrays
- **Arrays**:
    - inherit from **Array.prototype** which provides to them a set of methods to manipulate arrays 
    - *e.g.: indexOf, push*
- **Typed Arrays**
    - new to ES6
    - keyed collections: **Maps, Sets, WeakMaps, WeakSets**
    - [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) represent a set of objects
    - [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) associate a value to an object

### Structured data: JSON
- [JavaScript Object Notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- derived from JavaScript, but used by many programming languages 

> **Note**
>
> The type can be determined using the **typeof** operator

## Functions
- JavaScript procedure: a set of statements that performs a task or calculates a value
- to use a function, it has to be defined somewhere in the scope from which it will be called

...to be continued
