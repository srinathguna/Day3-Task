const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
// console.log(xhr);

// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState);
// }

xhr.onload = () => {
    let data = JSON.parse(xhr.response)
    for (let key in data) {
        console.log("--->")
        console.log(data[key].name.common) // Countryname
        console.log(data[key].region); // region
        console.log(data[key].subregion); // subregion
        console.log(data[key].population); // population

    }

}