# HTML and CSS course

## What is a Webpage ?

A **Web page**:
- is a document commonly written in **HTML** (*HyperText Markup Language*)
- is accesible through the internet using any web browser (*Google Chrome*, *Opera*, *Safari*, *Mozilla Firefox* and so on) 
- may contain text, audio, video, downloadable data files, hyperlink to other web pages
- can be viewed by entering correct URL pointing to the Web page

## A little history lesson 

**Q: When was first Webpage created?**

**A:** 
- First Webpage was created in 1991 by Tim Berners Lee. 
- He published it from a lab in the Swiss Alps. 
- The page is still up nowadays, but it was updated many times from then. 
- It was created to explain the World Wide Web concept to the newcomers.
- The actual version of the World's first Website can be found here: http://info.cern.ch/hypertext/WWW/TheProject.html

## Types of Webpages

1. Static Webpages:
- shows the same content each time access it
- e.g. : HTML Webpage
2. Dynamic Webpages:
- changes the content each time access it
- are usually witten in Scripting Languages such as PHP, JSP, ASP, Perl etc.
- Sscripting Languages return information in HTML form from a Database. Then, the browser translate the HTML to computer understandable language
- e.g. : a Webpage displaying current date and time

## Difference between a Webpage, a Website and a Web Application ##

**Webpage:**
- Single document written using HTML
- Can be accessed by entering its URL (Uniform Resource Locator) address in a Web Browser

**Website:**
- A group of ***interlinked*** and ***well-structured*** web pages that exist on the same domain
- We move from one page to another using ***hyperlinks***
- As there exists 2 types of webpages, there are 2 types of websites also: ***static*** (contains only static web pages) and ***dynamic*** (contains dynamic web pages)

**Web Application:**
- A ***software program*** that exists on the server and run using a web browser, through a web page
- Created using a combination of ***programming languages*** and ***web application frameworks***
- It may use the RAM, allow user interactivity and it is designed for many uses
- Based on ***user engagement***
- e.g. : YouTube application

## Client-Server model

***The web*** is a service that allows computers to share and exchange data, such as: images, videos, documents etc.

The web is reffered to as ***Client-Server*** communication: 
- computers that ask for data, so these are ***Clients***
- computers that give the data, calling also *computers that serve*, so this is the ***Servers***

**Q: What is a client?**

**A:**
- is a way to make requests through the web
- can be a machine or a program
- ***Client Machine*** is the device that the user can use to access the web (e.g. : laptop, desktop, smartphones)
- ***Client Program*** is a program that allows the user to ***make requests*** (e.g. : Web Browser)

**Q: What is a server?**

**A:**
- is a computer program, **NOT** a device
- by extension, the server is a high-performance computer, but it is called server because it runs **server programs**
- provide functionality and **serve***other programs called clients
- a single server can **serve multiple clients at the same time**, that is the reason why we need servers to be *super-computers*
- **multiple servers** can run on a **single machine**
- there are many types of servers: 
    - ***Web servers*** (*Apache*) - serve **HTTP** requests
    - ***Database servers*** - run Database Management Systems
- can contain web resources, host web applications, stores user and program data etc.
- is always listening for requests and as soon as it receives one, responds with a message

**Q: How does the Client-Server model works?**

**A:** It is an architecture on the web that splits computers into 2 sections:
- computers that asks for and request services (***Clients***)
- computers that serve clients (***Servers***)

![Client-Server-Architecture](img/Client-Server-Architecture.png "Client-Server-Architecture")

**Q: Is there any alternative?**

**A:**
- The Client-Server model is just one way for the computers to communicate via the web.
- It is based on a **centralized structure**
- There is another way to communicate via a **decentralized structure** - ***The Peer to Peer Model***
- In The Peer to Peer Model:
    - There is no client and no server
    - Both computers can be requesters and response providers
    - Each one is able to send and receive data directly with one another
    - e.g. : Videochat protocols

## HTTP Protocol

- Most used protocol in the world
- **HTTP** comes from: **Hypertext Transfer Protocol**
- It is an **application layer protocol** allowing web applications to communicate and exchange data
- **TCP/IP based** protocol
- Used to **deliver contents** (images, videos, documents etc.)
- It is a **connectionless** protocol: after making the request, the client **disconnect** from the server; then, when the response is ready, the server **re-estabilish** the connection and deliver the response
- Can deliver all sort of data, as long as the computers are **able to read** it.
- It is a **stateless** protocol: the client and the server know about each other **just durring the current request**. If they wants to reconnect, will estabilish a new connection as the first time.
- Was designed for the Web in the first place
- A typical HTTP message contains:
    - Start line - contain plain text information
    - Headers - contain plain text information
    - Body - sometimes contains binary data
- The information found in these three sections **vary depending if there is a request or response**:
![HTTP-Request-message](img/HTTP-request-message.png "HTTP-Request-message")
![HTTP-Response-message](img/HTTP-response-message.png "HTTP-Response-message")

## HTML Page Structure
- A HTML element usually consists of a **start** tag and **end** tag, with the content inserted between them:
```HTML
<tagname>Some HTML content...</tagname>
````
- There is a sample of HTML page document:
````HTML
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
````
- From the sample below, can be seen that all content is between **html** tags. 
- Next, we have:
    - a declarative header section (delimited by the **head** element)
    - a body, which contains the document's actual content (delimited by **body** element)

**HTML - Basic Tags**

***Heading tags***
- Any document starts with a heading
- The headings may have 6 different sizes, which use the following elements: **&lt;h1&gt;,&lt;h2&gt;,&lt;h3&gt;,&lt;h4&gt;,&lt;h5&gt;,&lt;h6&gt;**.

***Paragraph Tag - **&lt;p&gt;*****
- The ***&lt;p&gt;*** tag offers a way to structure the text into different paragraphs

***Line break Tag - &lt;br /&gt;***
- After using the *&lt;br /&gt;* tag, anything following it starts from the next line.
- This is an example of **empty** element, when no opening or closing tags are needed, because there is nothing to go between them

***Centering content - &lt;center&gt;***
- This tag is used to put any content in the center of the page.

***Preserve formatting - &lt;pre&gt;***
- Sometimes it is needed to keep the exact format as it is written; *&lt;pre&gt;* tag may be used for this purpose.

***Nonbreaking Spaces - \&nbsp;***
- To make client browser not to break text, *\&nbsp;* space entity should be used.

**Note**

This is just a quick preview of some samples of HTML tags. The whole list can be found here: https://www.w3schools.com/tags/ref_byfunc.asp

**Semantic HTML**

- reffers to the idea that all HTML markup should convey the underlying meaning of the content - not its appearance
- it is about using *tags*, *class names* and *ids* that reinforce the *meaning of the content* within the tags
- It is an additional layer of communication. Real people looking only at how your page displays may never get that additional communication, but machines will (like screen readers and search engines)
- **Semantic HTML** is important because it is:
    - **Clean**: easier to read and edit
    - **More accessible**: it can be better understood by a greater variety of devices
    - **Search engine friendly**: search engines rank content and not code, but using semantics to understand content
- Some examples of using Semantic HTML can be found here: https://internetingishard.com/html-and-css/semantic-html/

