
'use strict';



document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promo = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          promoBg = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input');



    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            movieDB.movies.push(newFilm);
            sorting(movieDB);
            createMovieList(movieList, movieDB);
        }
        e.target.reset();
    })




    function makeImage(parentImages, nameGenre) {
      parentImages.forEach(item => {

          item.remove();
      })

      genre.innerHTML = nameGenre;

      promoBg.style.backgroundImage = 'url("img/bg.jpg")'
    }

    function sorting(parent) {
      parent.movies.sort();

    }

    function createMovieList(parent, db) {
      parent.innerHTML = '';

      sorting(movieDB);

      db.movies.forEach( (item, i) => {

      parent.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}
                                <div class="delete"></div>
                           </li>`;
    });



    document.querySelectorAll('.delete').forEach( (item, i) => {

      item.addEventListener('click', () => {

        item.parentElement.remove();

        movieDB.movies.splice(i, 1);

        createMovieList(parent, db);
        })


    })
    }

    makeImage(promo, 'драма');
    createMovieList(movieList, movieDB);
 });

