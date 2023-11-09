
//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data[0])
      document.querySelector('h2').innerText = data[0].id
      document.querySelector('h3').innerText = data.value.quote
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

