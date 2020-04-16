# Day 3 - Travelling blog page solution

## Table of contents

- [Link JavaScript to DOM](#link-javascript-to-dom)
- [Add event listeners to open and close modal buttons](#add-event-listeners-to-open-and-close-modal-buttons)
- [Open add modal](#open-add-modal)
- [Add article to server](#add-article-to-server)
- [Reset form](#reset-form)
- [Close modal](#close-modal)
- [Add event listeners to Edit and Delete buttons for each article](#add-event-listeners-to-edit-and-delete-buttons-for-each-article)
- [Open edit modal](#open-edit-modal)
- [Update article to server](#update-article-to-server)
- [Delete article from server](#delete-article-from-server)

## Link JavaScript to DOM

We need to add `id` attributes in HTML. Then, we will assign the nodes to variables.

```HTML
<body id="body">
```

```HTML
<button id="add" type="button" class="button"> + Add Article</button>
```

```HTML
<div class="inputs__container">
    <input id="formTitle" type="text" class="input" placeholder="Please enter title">
    <input id="formTag" type="text" class="input" placeholder="Please enter tag">
    <input id="formAuthor" type="text" class="input" placeholder="Please enter author">
    <input id="formDate" type="text" class="input" placeholder="Please enter date">
    <input id="formImgUrl" type="text" class="input" placeholder="Please enter image url">
</div>
<textarea id="formContent" class="textarea" name="content" cols="28" rows="7" placeholder="Please enter content"></textarea>
<div class="modal__buttons">
    <button id="cancel" type="button" class="button">Cancel</button>
    <button id="save" type="button" class="button button--pink">Save</button>
</div>
```

```JavaScript
const body = document.getElementById('body');
const formTitle = document.getElementById('formTitle');
const formTag = document.getElementById('formTag');
const formAuthor = document.getElementById('formAuthor');
const formDate = document.getElementById('formDate');
const formImgUrl = document.getElementById('formImgUrl');
const formSaying = document.getElementById('formSaying');
const formSummary= document.getElementById('formSummary');
const formContent= document.getElementById('formContent');

const addButton = document.getElementById('add');
let saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');

```

## Add event listeners to open and close modal buttons

Bind `openAddModal` and `closeModal` to buttons.

```JavaScript
addButton.addEventListener('click', openAddModal);
cancelButton.addEventListener('click', closeModal);
```

## Open add modal

Because we use same modal for Add and Edit actions, we need to be sure that we bind the right functions (add or update) to the buttons. In order to do this, we remove the previous events and add the appropriate ones.

To show the modal, add `show-modal` class to `<body>` and the rest is CSS magic.

```JavaScript
function openAddModal() {

    // clear all events save button events
    clearSaveButtonEvents();

    saveButton.addEventListener('click', function () {
        addArticleToServer()
    });

    body.className = 'show-modal';
}
```

```JavaScript
function clearSaveButtonEvents() {
    let newUpdateButton = saveButton.cloneNode(true);
    saveButton.parentNode.replaceChild(newUpdateButton, saveButton);
    saveButton = document.getElementById('save');
}
```

## Add article to server

To add the article to server, we will make a POST fetch request to `/articles` route with `postObject` as body.

After the response is received, we need to get articles from server to display the updated list, then reset form and close modal.

```JavaScript
function addArticleToServer() {
    // creat post object
    const postObject = {
        title: formTitle.value,
        tag: formTag.value,
        author: formAuthor.value,
        date: formDate.value,
        imgUrl: formImgUrl.value,
        saying: formSaying.value,
        summary: formSummary.value,
        content: formContent.value
    }
    // Call post request to add a new article
    fetch('http://localhost:3000/articles', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
        // Get the new article list
        getArticlesFromServer();

        // Reset Form
        resetForm();

        // Close Modal
        closeModal();
    });
}
```

## Reset form

To clear the form, we just need to assign empty values to inputs.

```JavaScript
function resetForm() {
    formTitle.value = '';
    formTag.value = '';
    formAuthor.value = '';
    formDate.value = '';
    formImgUrl.value = '';
    formSaying.value = '';
    formSummary.value = '';
    formContent.value = '';
}
```

## Close modal

To close the modal, we should remove the `<body>` class.

```JavaScript
function closeModal() {
    body.className = '';
}
```

## Add event listeners to Edit and Delete buttons for every article

To edit and delete articles, we have to bind appropriate functions in `createArticleDOMNode()` to the buttons.

```JavaScript
editButton.addEventListener('click', function () {
    openEditModal(article);
});

deleteButton.addEventListener('click', function () {
    deleteArticleFromServer(article.id);
});

```

## Open edit modal

The form values should be initialized with the existing information from edited article.

Previous event will be removed from `Save` button and the right one will be added.

To show the modal, add `show-modal` class to `<body>`.

```JavaScript
function openEditModal(article) {
    // Copy article information to form
    formTitle.value = article.title;
    formTag.value = article.tag;
    formAuthor.value = article.author;
    formDate.value = article.date;
    formImgUrl.value = article.imgUrl;
    formSaying.value = article.saying;
    formSummary.value = article.summary;
    formContent.value = article.content;

    // clear all events update button events
    clearSaveButtonEvents();

    saveButton.addEventListener('click', function () {
        updateArticleToServer(article.id)
    });

    body.className = 'show-modal';
}
```

## Update article to server

To update a specific article to server, we will make a PUT fetch request to `/articles/{id}` with `putObject` as body.

After the response is received, we will get updated list of articles from server, reset form and close modal.

```JavaScript
function updateArticleToServer(id) {
    // creat put object
    const putObject = {
        title: formTitle.value,
        tag: formTag.value,
        author: formAuthor.value,
        date: formDate.value,
        imgUrl: formImgUrl.value,
        saying: formSaying.value,
        summary: formSummary.value,
        content: formContent.value
    }
    // Call put request to update the article
    fetch(`http://localhost:3000/articles/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(putObject)
    }).then(function () {
        // Get the new article list
        getArticlesFromServer();

        // Reset Form
        resetForm();

        // Close Modal
        closeModal();
    });
}
```

## Delete article from server

To delete a specific article from server, we just need to make a DELETE fetch request to `/articles/{id}` and get the articles list once again.

```JavaScript
function deleteArticleFromServer(id) {
    // Call delete request to delete the article
    fetch(`http://localhost:3000/articles/${id}`, {
        method: 'DELETE',
    }).then(function () {
        // Get the new articles list
        getArticlesFromServer();
    });
}
```
