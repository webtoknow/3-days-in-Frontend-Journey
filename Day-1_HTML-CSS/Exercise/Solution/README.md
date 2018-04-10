# Day 1 - Travelling blog page solution

## Table of contents

- [HTML and CSS files](#html-and-css-files)
- [Setup the document](#setup-the-document)
- [Page container](#page-container)
- [Navigation](#navigation)
- [Button](#button)
- [Article](#article)
  - [Article title](#article-title)
  - [Article info](#article-info)
  - [Article edit delete buttons](#article-edit-delete-buttons)
  - [Article image](#article-image)
  - [Article content](#article-content)
  - [Article ReadMore button](#article-readmore-button)
- [Footer](#footer)
- [Modal](#modal)

## HTML and CSS files

Create *index.html* and *style.css* files.

In the document we need to define a HTML document structure.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Travelling blog page</title>
</head>
<body>
    <!-- Page content  -->
</body>
</html>
```

## Setup the document

Within `<head>` tag, link CSS and fonts files:

```HTML
<!-- Reset default CSS properties  -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css">
<!-- Load required fonts -->
<link href="https://fonts.googleapis.com/css?family=Cardo|Montserrat" rel="stylesheet">
<!-- Link the CSS style file -->
<link rel="stylesheet" href="style.css">
```

Add your first CSS lines into *style.css* file:

```CSS
/* Default page font family and color */
html {
    font-family: 'Cardo', serif;
    color: #1e1e1e;
}

/* Paragraph style */
p {
    margin-bottom: 30px;
    line-height: 1.9;
}

```

## Page container

All the content will be put in a container, placed within `<body>` tag:

```HTML
<div class="container">
    <!-- Page sections  -->
</div>
```

```CSS
/* 1280px width container horizontally centered  */
.container {
    margin: 0 auto;
    width: 1280px;
}
```

## Navigation

Our main page should have a navigation menu:

```HTML
<nav class="nav">
    <ul class="nav__container">
        <li class="nav__item">
            <a href="" class="nav__link">Travel updates</a>
        </li>
        <li class="nav__item">
            <a href="" class="nav__link">Reviews</a>
        </li>
        <li class="nav__item">
            <a href="" class="nav__link">About</a>
        </li>
        <li class="nav__item">
            <a href="" class="nav__link">Contact</a>
        </li>
    </ul>
</nav>
```

```CSS
.nav {
    display: flex;
    justify-content: flex-end;
    margin-top: 100px;
}

.nav__container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.nav__item {
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    list-style-type: none;
    margin: 0 0 0 100px;
    padding: 0;
    text-transform: uppercase;
}

.nav__link {
    text-decoration: none;
    color: #1e1e1e;
}
```

## Button

The first button in the page will be `Add Article`.

```HTML
<div class="add__container">
    <button type="button" class="button"> + Add Article</button>
</div>
```

```CSS
.add__container {
    display: flex;
    justify-content: flex-end;
    margin: 130px 0 90px 0;
}

.button {
    background: none;
    border: 1px solid #9b9b9b;
    border-radius: 50px;
    font-size: 14px;
    height: 60px;
    line-height: 1.3;
    width: 300px;
    text-transform: uppercase;
    cursor: pointer;
}
```

> **Note**
>
> To create the layout in an easier way, elements should be placed into a flex container.

## Article

Now it's the time to add the main page content (articles):

```HTML
  <main>
    <article>
         <!-- Article content  -->
    </article>
    <article>
         <!-- Article content  -->
    </article>
    <article>
         <!-- Article content  -->
    </article>
    <article>
         <!-- Article content  -->
    </article>
  </main>
```

For every article we need to create and style:

- [Article title](#article-title)
- [Article info](#article-info)
- [Article edit delete buttons](#article-edit-delete-buttons)
- [Article image](#article-image)
- [Article content](#article-content)
- [Article ReadMore button](#article-readmore-button)

### Article title

```HTML
 <h2 class="title">The complete guide to explore Trasilvania, with your bike</h2>
```

```CSS
.title {
    line-height: 1.2;
    font-family: 'Montserrat', sans-serif;
    font-size: 46px;
    margin: 0 auto;
    text-align: center;
    width: 800px;
}

```

### Article info

```HTML
 <ul class="info__container">
    <li class="info__item">Destination Europe</li>
    <li class="info__item">Added by
        <span class="info__mark">Jonnathan Mercadina</span>
    </li>
    <li class="info__item">July 01, 2018</li>
</ul>
```

```CSS
.info__container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.info__item {
    color: #9b9b9b;
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    list-style-type: none;
    padding: 0;
}

.info__item:not(:last-child):after {
    content: '\2022';
    font-weight: bold;
    padding: 0 20px;

}
.info__mark {
    color: #1e1e1e;
    font-weight: bold;
}
```

### Article edit delete buttons

```HTML
<div class="actions__container">
    <button type="button" class="actions__btn">Edit</button>
    <button type="button" class="actions__btn">Delete</button>
</div>
```

```CSS
.actions__container {
    margin: 40px 0 20px 0;
    display: flex;
    justify-content: flex-end;
}

.actions__btn {
    padding: 0;
    background: none;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.3;
    cursor: pointer;
}

.actions__btn:not(:last-child):after {
    content: '\007c';
    padding: 5px;
}
```

### Article image

```HTML
<img src="img/bike.jpg" alt="My image">
```

### Article content

```HTML
<div class="content__container">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum,
        incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias,
        veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error amet recusandae
        atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur
        repellendus ipsum temporibus libero itaque.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus
        possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis,
        doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia.
        Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum
        nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae
        velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi
        facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!</p>
</div>
```

```CSS
.content__container {
    margin-top: 80px;
}
```

### Article ReadMore button

```HTML
<div class="readme__container">
    <button type="button" class="button">Read More</button>
</div>
```

```CSS
.readme__container {
    display: flex;
    justify-content: center;
    margin: 140px 0 100px 0;
}
```

## Footer

To improve the user experience and not to load all articles, we can use pagination.

We can navigate between pages containing articles list through `previous` and `next` buttons:

```HTML
<footer class="footer">
    <a href="#" class="footer__link">previous</a>
    <a href="#" class="footer__link">next</a>
</footer>
```

```CSS
.footer {
    display: flex;
    justify-content: space-between;
    margin: 35px 0 100px 0;
}

.footer__link {
    color:#1e1e1e;
    font-family: 'Montserrat', sans-serif;
    font-size: 34px;
    line-height: 1.2;
    text-decoration: none;
}
```

## Modal

A Modal is a dialog box/popup window that is displayed on top of the current page.

For our page, the modal will be displayed when the user click on `+Add Article` and `Edit` buttons.

Modal markup will be added within `<body>` tag, after `<div class="container">`.

```HTML
<div class="modal__overlay">
    <div class="modal">
        <div class="modal__content">
            <h2 class="title">Add/Edit new article</h2>
            <div class="inputs__container">
                <input type="text" class="input" placeholder="Please enter title">
                <input type="text" class="input" placeholder="Please enter tag">
                <input type="text" class="input" placeholder="Please enter author">
                <input type="text" class="input" placeholder="Please enter date">
                <input type="text" class="input" placeholder="Please enter image url">
                <input type="text" class="input" placeholder="Please enter saying">
                <input type="text" class="input input--big" placeholder="Please enter summary">
            </div>
            <textarea class="textarea" name="content" cols="28" rows="7" placeholder="Please enter content"></textarea>
            <div class="modal__buttons">
                <button type="button" class="button">Cancel</button>
                <button type="button" class="button button--pink">Save</button>
            </div>
        </div>
    </div>
</div>
```

```CSS

.show-modal {
    overflow: hidden; /* Block body scrolling */
}
.show-modal .modal__overlay{
    display: flex;
}
.modal__overlay {
    background-color: rgba(0,0,0,0.4); /* Overlay background color with opacity */
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left:0;
    top:0;
    height: 100vh; /* Full height */
    width: 100vw; /* Full width */
    overflow: auto; /* Enable scroll if needed */
    align-items: center;
    justify-content: center;
}

.modal {
    width: 1000px;
    height: 750px;
    background: white;
    box-shadow: 0 0 26px 6px; /* Black shadow */
}

.modal__content {
    padding: 50px 75px;
}

.inputs__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
}

.input {
    width: 400px;
    height: 35px;
    border: 1px solid #9b9b9b;
    border-radius: 5px;
    font-size: 18px;
    font-family: 'Cardo', serif;
    padding: 0 5px;
    margin-bottom: 25px;
}

.input--big {
    width: 100%;
}

.textarea {
    display: block;
    border: 1px solid #9b9b9b;
    border-radius: 5px;
    font-size: 18px;
    font-family: 'Cardo', serif;
    width: 100%;
    box-sizing: border-box;
}

.modal__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}

.button--pink {
    background: #FFE3E3;
}
```