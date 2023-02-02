import { useState } from 'react'
import flower from './assets/flower.jpg'
import idea1 from './assets/idea-1.jpg'
import idea2 from './assets/idea-2.jpg'
import idea3 from './assets/idea-3.jpg'
import idea4 from './assets/idea-4.jpg'
import './App.css'

function App() {

  const [article, setArticle] = useState(1)

  const switchActiveNavItem = (e) => {
    document.querySelector('.nav__item--active').classList.remove('nav__item--active')
    e.target.parentNode.classList.add('nav__item--active')
  }

  return (
    <div className='app'>

      <header className="header">
        <nav className="nav">
          <div className="nav__item nav__item--active"><button onClick={e => {

            switchActiveNavItem(e)

            document.querySelectorAll('article').forEach(article => {
              article.className = 'article--hidden'
            })
            document.querySelector('article').className = 'article'
            document.querySelector('.next-button').style.display = null
            setArticle(1)

          }}>Feed</button></div>

          <div className="nav__item"><button onClick={e => {

            switchActiveNavItem(e)

            document.querySelectorAll('article').forEach(article => {
              article.className = 'article'
            })
            document.querySelector('.next-button').style.display = 'none'
            
          }}>Show all</button></div>
        </nav>
      </header>

      <section className="articles">
        <article className={article === 1 ? 'article' : 'article--hidden'}>
          <h1>About me</h1>
          <p>Hi, I'm Ella and I've been programming/coding for about a year and a half. After studenten I studied Webbdesign och Webbutveckling at <a href="https://karlskogafolkhogskola.se/utbildning/webbdesign/">Karlskoga Folkhögskola</a> for a year. Soon after I moved to Stockholm to start my education here at Changemakers.</p>
          <img className='article-1__image' src={flower} alt="" />
          <p>During my year in Karlskoga i studied the basics in frontend development, backend development, UI design and graphic design. I aquired skills in HTML, CSS, SASS and JavaScript. Wordpress and wordpress related PHP. We dipped our toes in React but it was a very brief introduction. I also learnt multiple Adobe softwares such as Illustrator, XD, Photoshop and InDesign. Since starting here at Changemakers I've aquired skills in Figma, jQuery and APIs aswell.</p>
        </article>

        <article className={article === 2 ? 'article' : 'article--hidden'}>
          <h1>Ideas for my first project</h1>
          <p>I've come up with a copule of ideas but I find it hard deciding on which one to go for. Especially since I'm not really sure which ones are "too hard".</p>
          <p>These are my ideas so far:</p>
          <ul>
            <li>Character calculator</li>
            <li>Date countdown</li>
            <li>Expense tracker</li>
            <li>Calculator</li>
            <li>Sticky notes app</li>
            <li>Grocery list</li>
          </ul>
          <p>I'm currently leaning towards either the character calculator or a sticky notes app.</p>
        </article>

        <article className={article === 3 ? 'article' : 'article--hidden'}>
          <h1>Design style for personal project</h1>
          <p>I'm planning on creating my own design and you can follow the process <a href="https://www.figma.com/file/aX4RlB7y6RdyMc1t6DGZTh/react-one?node-id=0%3A1&t=BmsbJ2zs1A7RCvXL-1">here</a>. This is my moodboard:</p>
          <div className="gallery">
            <img src={idea1} alt="" />
            <img src={idea2} alt="" />
            <img className='gallery__img--small' src={idea3} alt="" />
            <div className="gallery__colors">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <img src={idea4} alt="" />
          </div>
        </article>

        <button className='next-button' onClick={() => {

          if (article === 3) {
            setArticle(1)
          } else {
            setArticle(article + 1)
          }

        }}>Next post</button>
      </section>
      
    </div>
  )
}

export default App
