import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios'
interface Article {
  title: string;
  tag: string;
  author: string;
  date: string;
  imgUrl: string;
  content: string;
}

interface ArticleFromServer extends Article {
  id: number;
}

interface Props {
}

interface State extends ArticleFromServer {
  openModal: boolean;
  articles: ArticleFromServer[];
}

class App extends Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      openModal: false,
      articles: [],
      id: 0,
      title: '',
      tag: '',
      author: '',
      date: '',
      imgUrl: '',
      content: '',
    };

  }
  componentDidMount() {
    this.getArticle();
  }

  getArticle() {
    axios.get('http://localhost:3000/articles').then((response: AxiosResponse) => {
      const articles: ArticleFromServer[] = response.data;
      this.setState({ articles })
    })
  }

  openModalOnAdd = () => {
    this.setState({ openModal: true })
  }

  openModalOnEdit = (article: ArticleFromServer) => {
    const { id, title, tag, author, date, imgUrl, content } = article;
    this.setState({ id, title, tag, author, date, imgUrl, content, openModal: true })
  }

  closeModalAndResetArticleState = () => {
    this.setState({
      openModal: false,
      id: 0,
      title: '',
      tag: '',
      author: '',
      date: '',
      imgUrl: '',
      content: '',
    })
  }

  handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  saveArticle = () => {
    const { id, title, tag, author, date, imgUrl, content } = this.state;
    const articleForServer = { title, tag, author, date, imgUrl, content }
    if (id !== 0) {
      axios.put(`http://localhost:3000/articles/${id}`, articleForServer).then((response: AxiosResponse) => {
        this.closeModalAndResetArticleState();
        this.getArticle();
      })
    }
    else {
      axios.post(`http://localhost:3000/articles`, articleForServer).then((response: AxiosResponse) => {
        this.closeModalAndResetArticleState();
        this.getArticle();
      })
    }
  }

  deleteArticle = (id: number) => {
    axios.delete(`http://localhost:3000/articles/${id}`).then((response: AxiosResponse) => {
      this.getArticle();
    })
  }

  render() {
    const openModalclassName = this.state.openModal ? 'show-modal' : '';
    const articleList = this.state.articles.map((article: ArticleFromServer) => (
      <article key={article.id}>
        <h2 className="title">{article.title}</h2>
        <ul className="info__container">
          <li className="info__item">{article.tag}</li>
          <li className="info__item">Added by &nbsp;
                        <span className="info__mark">{article.author}</span>
          </li>
          <li className="info__item">{article.date}</li>
        </ul>
        <div className="actions__container">
          <button type="button" onClick={() => this.openModalOnEdit(article)} className="actions__btn">Edit</button>
          <button type="button" onClick={() => this.deleteArticle(article.id)} className="actions__btn">Delete</button>
        </div>

        <img src={article.imgUrl} alt="Bike" />
        <div className="content__container">
          {article.content}
        </div>
      </article>
    ))

    return (
      <div className={openModalclassName}>
        <div className="container">
          <nav className="nav">
            <ul className="nav__container">
              <li className="nav__item">
                <a href="/travel" className="nav__link">Travel updates</a>
              </li>
              <li className="nav__item">
                <a href="/review" className="nav__link">Reviews</a>
              </li>
              <li className="nav__item">
                <a href="/about" className="nav__link">About</a>
              </li>
              <li className="nav__item">
                <a href="/contact" className="nav__link">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="add__container">
            <button type="button" onClick={this.openModalOnAdd} className="button"> + Add Article</button>
          </div>
          <main>
            {articleList}
          </main>
          <footer className="footer">
            <a href="/previous" className="footer__link">previous</a>
            <a href="/next" className="footer__link">next</a>
          </footer>
        </div>
        <div className="modal__overlay">
          <div className="modal">
            <div className="modal__content">
              <h2 className="title">Add/Edit article</h2>
              <div className="inputs__container">
                <input type="text" name="title" className="input" value={this.state.title} onChange={this.handleFieldChange} placeholder="Please enter title" />
                <input type="text" name="tag" className="input" value={this.state.tag} onChange={this.handleFieldChange} placeholder="Please enter tag" />
                <input type="text" name="author" className="input" value={this.state.author} onChange={this.handleFieldChange} placeholder="Please enter author" />
                <input type="text" name="date" className="input" value={this.state.date} onChange={this.handleFieldChange} placeholder="Please enter date" />
                <input type="text" name="imgUrl" className="input input--big" value={this.state.imgUrl} onChange={this.handleFieldChange} placeholder="Please enter image url" />
              </div>
              <textarea className="textarea" name="content" value={this.state.content} onChange={this.handleFieldChange} placeholder="Please enter content"></textarea>
              <div className="modal__buttons">
                <button type="button" onClick={this.closeModalAndResetArticleState} className="button">Cancel</button>
                <button type="button" onClick={this.saveArticle} className="button button--pink">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
