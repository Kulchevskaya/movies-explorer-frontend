function Gallery(props) {
  return (
    <section className="gallery">
      <ul className="cards">
        <li className="cards__item">
          <img className="cards__image" src="https://images.unsplash.com/photo-1622267607558-624272280d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80" alt="poster"/>
          <div className="cards__box">
            <h2 className="cards__text">Название и f(x) (скоро будет)</h2>
            <button className="cards__like cards__like_active" type="button"></button>
          </div>
          <hr className="cards__line" />
          <p className="cards__time">1ч 22м</p>
        </li>
        <li className="cards__item">
          <img className="cards__image" src="https://images.unsplash.com/photo-1622267607558-624272280d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80" alt="poster"/>
          <div className="cards__box">
            <h2 className="cards__text">А тут можно посмотреть фичу по удалению</h2>
            <button className="cards__dislike" type="button"></button>
          </div>
          <hr className="cards__line" />
          <p className="cards__time">1ч 22м</p>
        </li> 
        <li className="cards__item">
          <img className="cards__image" src="https://images.unsplash.com/photo-1622267607558-624272280d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80" alt="poster"/>
          <div className="cards__box">
            <h2 className="cards__text">А пока что верстка</h2>
            <button className="cards__like" type="button"></button>
          </div>
          <hr className="cards__line" />
          <p className="cards__time">1ч 22м</p>
        </li> 
        <li className="cards__item">
          <img className="cards__image" src="https://images.unsplash.com/photo-1622267607558-624272280d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80" alt="poster"/>
          <div className="cards__box">
            <h2 className="cards__text">Начало финиша</h2>
            <button className="cards__like cards__like_active" type="button"></button>
          </div>
          <hr className="cards__line" />
          <p className="cards__time">1ч 22м</p>
        </li> 
      </ul>
    </section> 
  );
}

export default Gallery;