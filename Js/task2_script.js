const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = () => {
    let data = JSON.parse(xhr.response)
    for (let key in data) {
        console.log("--->") 
        console.log(data[key].flags.png); // png format
        console.log(data[key].flags.svg); // svg format
    }

}