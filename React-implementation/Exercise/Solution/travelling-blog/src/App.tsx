import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="container">
          <nav className="nav">
            <ul className="nav__container">
              <li className="nav__item">
                <a href="" className="nav__link">Travel updates</a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">Reviews</a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">About</a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="add__container">
            <button type="button" className="button"> + Add Article</button>
          </div>
          <main>
            <article>
              <h2 className="title">The complete guide to explore Trasilvania, with your bike</h2>
              <ul className="info__container">
                <li className="info__item">Destination Europe</li>
                <li className="info__item">Added by &nbsp;
                        <span className="info__mark">Jonnathan Mercadina</span>
                </li>
                <li className="info__item">July 01, 2018</li>
              </ul>
              <div className="actions__container">
                <button type="button" className="actions__btn">Edit</button>
                <button type="button" className="actions__btn">Delete</button>
              </div>

              <img src="img/bike.jpg" alt="Bike" />
              <div className="content__container">
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
            </article>
          </main>
          <footer className="footer">
            <a href="#" className="footer__link">previous</a>
            <a href="#" className="footer__link">next</a>
          </footer>
        </div>
        <div className="modal__overlay">
          <div className="modal">
            <div className="modal__content">
              <h2 className="title">Add/Edit article</h2>
              <div className="inputs__container">
                <input type="text" className="input" placeholder="Please enter title" />
                <input type="text" className="input" placeholder="Please enter tag" />
                <input type="text" className="input" placeholder="Please enter author" />
                <input type="text" className="input" placeholder="Please enter date" />
                <input type="text" className="input input--big" placeholder="Please enter image url" />
              </div>
                <textarea className="textarea" name="content" placeholder="Please enter content"></textarea>
                <div className="modal__buttons">
                  <button type="button" className="button">Cancel</button>
                  <button type="button" className="button button--pink">Save</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
