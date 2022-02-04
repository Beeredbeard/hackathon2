const loadData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/9b1fc7b1/events');
    const data = await response.json();
    console.log(data);
    // do something with the data
    const container = document.querySelector('.second');

    data.forEach((event) => {
        const eventDiv = document.createElement('div'); 
        eventDiv.classList.add('smallContainer'); 
        const button = document.createElement('button');
        button.classList.add('smallContainerButton');
        const heading = document.createElement('h2');

        heading.textContent = `${event.name}`;
        eventDiv.appendChild(button);
        eventDiv.appendChild(heading);
        container.appendChild(eventDiv);
        button.innerHTML = "MORE";
    })
}

loadData(); 

// document.addEventListener('DOMContentLoaded', () => {
//     const loadData = async () => {
//         const response = await fetch('https://test-api.codingbootcamp.cz/api/9b1fc7b1/events');
//         const data = await response.json()
//         console.log(data);
//         const navigation = document.querySelector(".nav");
//         data.data.forEach((element) => {
//             const menuElement = document.createElement("a");    
//             menuElement.addEventListener('click', () => {
//                 loadArticles(element);
//             })
//             menuElement.textContent = element;
//             navigation.appendChild(menuElement);
//         });
//     }
//     const loadArticles = async (element) => {
//         console.log(element)
//         const response2 = await fetch(`https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${element}`)
//         const data2 = await response2.json();
//         console.log(data2);
//         const list = document.querySelector(".articles");
//         data2.data.channel.item.forEach((article) => {
//             const newArticle = document.createElement("li");
//             newArticle.innerHTML = `
//             <div>${article.title}</div>
//             <div>${article.description}</div><br>
//             <div>${article.link}</div>
//             <div cl>${article.guid}</div><br>
//             <div>${article.pubDate}</div><br>
//             <div>${article.category}</div><br>`;
//             list.appendChild(newArticle);
//         });
//     };
//     loadData();
// });