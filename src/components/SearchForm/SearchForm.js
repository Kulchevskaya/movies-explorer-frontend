import React from 'react';

function SearchForm(props) {
  const [query, setQuery] = React.useState('');

  function handleChange(evt) {
    setQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // props.onRegister(data);
  }

  return (
    <form className="SearchForm" method="POST" name="search-form" noValidate onSubmit={handleSubmit}>
      <div className="SearchForm__container">
      <label>    
        <input className="SearchForm__item SearchForm-item_type_search-input" name="query" id="query" placeholder="Фильм"
            type="text" required minLength="2"
            value={query || ''} onChange={handleChange} />
          <span className="SearchForm__error-text" id="query-error"></span> 
        </label>
        <button type="submit" className="SearchForm__submit-button SearchForm__submit-button_type_query">Найти</button>
      </div>
      <div className="SearchForm__container">
        <input className="SearchForm__checkbox" name="shorts" id="shorts" type="checkbox" />
        <label className="SearchForm__label" htmlFor="shorts">Короткометражки</label> 
      </div>
    </form>
  )
}

export default SearchForm;
