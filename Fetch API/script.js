const randomDog = document.getElementById("dog");
function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      randomDog.src = json.message;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getRandomDog();
