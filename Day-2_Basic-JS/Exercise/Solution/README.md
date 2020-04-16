# Day 2 - Travelling blog page solution

## Table of contents

- [Get articles function](#get-articles-function)
- [Get main element by id](#get-main-element-by-id)
- [Render articles](#render-articles)
- [Remove old articles from DOM](#remove-old-articles-from-dom)
- [Create article DOM node](#create-article-dom-node)

## Get articles function

To get the articles from server, we will make a GET fetch request to `/articles` route.

After the response is received, we need to parse it as JSON and call `remderArticles` function.

```JavaScript
function getArticlesFromServer() {
    fetch('http://localhost:3000/articles')
        .then(function (response) {
            // Trasform server response to plain object
            response.json().then(function (articles) {
                renderArticles(articles);
            });
        });
};
```

## Get main element by id

The articles will be added into the `<main>` tag.

In order to do this, we should get the node refference from DOM.

```HTML
<main id='main'>
    <!-- Articles list  -->
</main>
```

```JavaScript
const main = document.getElementById('main');
```

## Render articles

When we render the articles, we need to be sure that there is no items in DOM.

After this:

- iterate through articles list
- create a DOM Node for each element of the list
- append to `<main>` the new created DOM nodes

```JavaScript
function renderArticles(articles) {
    removeOldArticlesFromDOM();

    // Create and append tags
    for (let i = 0; i < articles.length; i++) {
        let articleDOMNode = createArticleDOMNode(articles[i]);
        main.appendChild(articleDOMNode);
    }
}
```

## Remove old articles from DOM

While we have any child in main DOM node, we have to remove it.

```JavaScript
function removeOldArticlesFromDOM () {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}
```

## Create article DOM node

Now it's the time to create all the DOM nodes for the article.

```JavaScript
function createArticleDOMNode(article) {

    // Title
    let title = document.createElement('h2');
    title.className = "title";
    title.textContent = article.title;

    // Tag
    let tag = document.createElement('li');
    tag.className = "info__item";
    tag.textContent = article.tag;

    // Author
    let author = document.createElement('span');
    author.className = "info__mark";
    author.textContent = article.author;

    let authorContainer = document.createElement('li');
    authorContainer.className = "info__item";
    authorContainer.textContent = 'Added By ';
    authorContainer.appendChild(author)

    // Date
    let date = document.createElement('li');
    date.className = "info__item";
    date.textContent = article.date;

    // Information container
    let infoContainer = document.createElement('ul');
    infoContainer.className = "info__container";
    infoContainer.appendChild(tag);
    infoContainer.appendChild(authorContainer);
    infoContainer.appendChild(date);

    // Edit button
    let editButton = document.createElement('button');
    editButton.className = "actions__btn";
    editButton.textContent = 'Edit';

    // Delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = "actions__btn";
    deleteButton.textContent = 'Delete';

    // Buttons container
    let buttonsContainer = document.createElement('div');
    buttonsContainer.className = "actions__container";
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);

    // Image
    let img = document.createElement('img');
    img.src = article.imgUrl;

    // Paragraph
    let paragraph = document.createElement('p');
    paragraph.textContent = article.content;

    // Paragraph container
    let paragraphContainer = document.createElement('div');
    paragraphContainer.className = "content__container";
    paragraphContainer.appendChild(paragraph);

    // Append all article nodes to container
    let articleNode = document.createElement('article');
    articleNode.appendChild(title);
    articleNode.appendChild(infoContainer);
    articleNode.appendChild(buttonsContainer);
    articleNode.appendChild(img);
    articleNode.appendChild(paragraphContainer);

    return articleNode;
}
```