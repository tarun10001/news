async function apiCall(url) {

    //add api call logic here

    try {
        let res = await fetch(url);

        let data = await res.json();
        return data;
    } catch (error) {
        console.error("error:",error);
    }
}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach((element) => {
        
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = element.urlToImage;

        let p = document.createElement("p");
        p.innerText = element.title;

        div.append(image, p);

        div.onclick = () => {
            var arr = [];
            arr.push(element);
            localStorage.setItem('article', JSON.stringify(arr));
            console.log(arr);
            window.location.href = "news.html";
        }
        main.append(div);
    })
}

export { apiCall, appendArticles };