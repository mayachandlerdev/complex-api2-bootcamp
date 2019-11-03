    //event listener and variables
    const ul = document.querySelector('ul')
    const btn = document.querySelector("button");
    btn.addEventListener('click', ()=> {
    const input = document.querySelector("input").value
    let name = document.querySelector('#name')
    const apiKey = "c4AUKMxwXFSqPbHGuEmkqE3943XvoiV6"

    fetch(`https://api.nationalize.io?name=${input}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
    console.log(response)
    //looping to get list of countries
    
    let countryName = response.name.country_id;
    name.innerHTML = countryName;
    response.country.forEach(function(name) {
    const ol = document.querySelector('ol') //grab the ol from dom
    let li = document.createElement('li'); //create an li
    li.appendChild(document.createTextNode(name.country_id)); //append text to li
    ol.appendChild(li); //append li to ol

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input}&limit=25&offset=0&rating=G&lang=en`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
    console.log(response)
    let display = document.querySelector('iframe')
    let imgUrl = response.data[0].url
    display.src = imgUrl

    console.log(display, imgUrl)
    })
    })

    })
    })

