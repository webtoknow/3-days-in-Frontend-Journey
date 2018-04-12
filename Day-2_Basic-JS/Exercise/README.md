# Day 2 - Let's make the web page more dynamic

## JSON Server Setup

Create a *db.json* file into the folder `4-days-in-Frontend-Journey/Day-2_Basic-JS/Exercises/Code` with the following content:

```json
{
  "articles": [
    {
      "id": 1,
      "title": "The complete guide to explore Trasilvania, with your bike",
      "tag": "Destination Europe",
      "author": "Jonnathan Mercadina",
      "date": "July 01, 2018",
      "imgUrl": "img/bike.jpg",
      "saying": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "summary": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!"
    },
    {
      "id": 2,
      "title": "Bucegi: Places you must visit before you die",
      "tag": "Must Visit",
      "author": "Jonnathan Mercadina",
      "date": "June 30, 2018",
      "imgUrl": "img/bucegi.jpg",
      "saying": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "summary": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!"
    },
    {
      "id": 3,
      "title": "Romania: The land of dreams",
      "tag": "Village",
      "author": "Jonnathan Mercadina",
      "date": "June 17, 2018",
      "imgUrl": "img/village.jpg",
      "saying": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "summary": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!"
    },
    {
      "id": 4,
      "title": "Sarmale - stuffed cabbage rolls. Good or bad?",
      "tag": "Food",
      "author": "Jonnathan Mercadina",
      "date": "December 29, 2017",
      "imgUrl": "img/sarmale.jpg",
      "saying": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "summary": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!"
    }
  ]
}
```

Install JSON Server:

```bash
npm install -g json-server
```

Start JSON Server:

```bash
json-server --watch db.json
```

Let's check we have properly configured JSON Server. If you go to [http://localhost:3000/articles/1](http://localhost:3000/articles/1), you should get:

```json
 {
    "id": 1,
    "title": "The complete guide to explore Trasilvania, with your bike",
    "tag": "Destination Europe",
    "author": "Jonnathan Mercadina",
    "date": "July 01, 2018",
    "imgUrl": "img/bike.jpg",
    "saying": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "summary": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!"
}
```

It is good to know that:

- If you make **POST**, **PUT** or **DELET**E requests, changes will be automatically and safely saved to `db.json` using [lowdb](https://github.com/typicode/lowdb).
- Your request body JSON should be an object, just like the **GET** output. (for example `{"name": "Foobar"}`)
- Id values are not mutable. Any `id` value in the body of your **PUT** request wil be ignored. Only a value set in a **POST** request wil be respected, but only if not already taken.
- A **POST** or **PUT** request should include a `Content-Type: application/json` header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data.

> **Note**
>
> You can find more about Routes, Paginate, CLI, HTTPS visiting [JSON Server Github Page](https://github.com/typicode/json-server).

## Get articles from server

We will solve the exercise in `4-days-in-Frontend-Journey/Day-1_HTML-CSS/Exercise/Code`, following the steps below:

- Implement `getArticlesFromServer` function using [fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- Get main element by id
- Render articles:
  - Iterate through articles list
  - Create a DOM Node for each element of the list
  - Append to main the new created DOM nodes
- Remove old articles from DOM
- Create article DOM node