document.querySelector('button').addEventListener('click', getPicture)



function getPicture(){
    const date = document.querySelector('input').value
    const picture = document.querySelector('img');
    picture.style.border = '5px solid white';
    picture.style.width = '325px'
    picture.style.height = '325px'

    const url = `https://api.nasa.gov/planetary/apod?api_key=dzhJNQ9GCNjr9aUmrc8NFJzHtVdSxbzvm4r8aXNO&date=${date}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#name').innerText = data.title
            document.querySelector('#description').innerText = data.explanation
            if (data.media_type === 'image' ){
                document.querySelector ('img').src = data.hdurl
            }else{
                document.querySelector ('iframe').src = data.url
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}

