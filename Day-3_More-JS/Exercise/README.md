# Day 3 - Let's play with modal

## Start JSON Server

Go to `4-days-in-Frontend-Journey/Day-3_More-JS/Exercises/Code` and run in a terminal the following command:

```bash
json-server --watch db.json
```

Next, let's solve the exercise.

## Add, Edit and Delete articles

- Create JavaScript variables to access DOM elements
- Add event listeners to open and close modal buttons
- Implement `openAddModal()`:
  - Clear the previous `Save` button event
  - Add the new event on the `Save` button to call `addArticleToServer()`
  - Add `show-modal` class on body
- Implement `addArticleToServer()`:
  - Create the new object to be saved
  - Fetch POST method using [fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
  - When the request is resolved:
    - Get the new articles list from the server
    - Reset the form
    - Close the modal
- Implement `resetForm()`
- Implement `closeModal()`
- Add event listeners to Edit and Delete buttons for each article, binding them to `openEditModal(article)` and `deleteArticleFromServer(article.id)`
- Implement `openEditModal(article)`:
  - Fill in the form inputs with article information
  - Clear the previous `Save` button event
  - Add the new event on the `Save` button to call `updateArticleToServer(article.id)`
  - Add `show-modal` class on body
- Implement `updateArticleToServer(id)`:
  - Create the new object to be saved
  - Fetch PUT method using [fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
  - When the request is resolved:
    - Get the new articles list from the server
    - Reset the form
    - Close the modal
- Implement `deleteArticleFromServer(id)`:
  - Fetch DELETE method using [fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
  - When the request is resolved, get the new articles list from the server
