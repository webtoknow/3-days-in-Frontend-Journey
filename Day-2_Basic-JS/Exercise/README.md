# Day 2 - My Travels page exercises

## Get the repository

This is the simple way to get the project. It will download all files.

```SH
git clone https://github.com/danamunteanu/4-days-in-Frontend-Journey.git
```

```SH
cd 4-days-in-Frontend-Journey/Day-2_Basic-JS/Exercises/Code
```

and follow the instructions.

## Table of contents

- [JSON Server](#html-document-structure)

## JSON Server

Create a db.json file

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

Install JSON Server

```bash
npm install -g json-server
```

Start JSON Server

```bash
json-server --watch db.json
```

Now if you go to [http://localhost:3000/articles/1](http://localhost:3000/articles/1), you'll get

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

Also when doing requests, it's good to know that:

- If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to `db.json` using [lowdb](https://github.com/typicode/lowdb).
- Your request body JSON should be object enclosed, just like the GET output. (for example `{"name": "Foobar"}`)
- Id values are not mutable. Any `id` value in the body of your PUT or PATCH request wil be ignored. Only a value set in a POST request wil be respected, but only if not already taken.
- A POST, PUT or PATCH request should include a `Content-Type: application/json` header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data.

> **Note**
>
> You can find more about Routes, Paginate, CLI, HTTPS visiting [JSON Server Github Page](https://specificity.keegan.st/).