const main = document.getElementById('main');
// Declare the other variables - get elements by id


// Fetch the articles list
function getArticlesFromServer() {
    fetch('http://localhost:3000/articles')
        .then(function (response) {
            // Trasform server response to plain object
            response.json().then(function (articles) {
                renderArticles(articles);
            });
        });
};

// Add article
function addArticleToServer() {
    // Solution here
}

// Delete article from server
function deleteArticleFromServer(id) {
    // Solution here
}

// Update article
function updateArticleToServer(id) {
    // Solution here
}

// Copy edited article information to form and add event listener on Update button
function openAddModal() {
    // Solution here
}

// Copy edited article information to form and add event listener on Update button
function openEditModal(article) {
    // Solution here
}

// Remove articles list if exist
function removeOldArticlesFromDOM () {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

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
    
    // Add event on edit button and pass article object to populate the form  more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
    
    editButton.textContent = 'Edit';

    // Delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = "actions__btn";
    
    // Add event on delete button and pass article id to delete it form server more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
    
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

// Create DOM objects and append them to DOM
function renderArticles(articles) {
    
    removeOldArticlesFromDOM()

    // Create and append tags
    for (let i = 0; i < articles.length; i++) {
        let articleDOMNode = createArticleDOMNode(articles[i]);
        main.appendChild(articleDOMNode);
    }
}

// Reset form values
function resetForm() {
    // Solution here
}
//  Remove Save Button to clear events more at https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
function clearSaveButtonEvents() {
    // Solution here
}

// Close modal
function closeModal() {
    // Solution here
}

// Add event listener on Add button

// Add event listener on Cancel button

// Get all articles
getArticlesFromServer();