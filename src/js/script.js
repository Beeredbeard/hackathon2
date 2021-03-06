const loadData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/9b1fc7b1/events');
    const data = await response.json();
    console.log(data);
    // do something with the data
    const container = document.querySelector('.second');

    data.forEach((event) => {

        if (event.id !== 6) {
            return;
        }

        //Primary Container
        const featureName = document.querySelector(".main__right__heading");
        const featureDescription = document.querySelector(".main__right__description");
        const registration = document.querySelector("#registration"); 
        const featureDate = document.querySelector(".main__right__date");
        const featureImage = document.querySelector(".img__left");

        featureImage.src = `${event.image_url}`;
        featureName.textContent = `${event.name}`;
        featureDescription.textContent = `${event.description}`;
        featureDate.textContent = `${event.date}`;  

        const registrationModal = document.createElement('div');

        registrationModal.className = "registration__close";
        document.body.appendChild(registrationModal);

        //Registration Box
        const registrationName = document.createElement("input");
        const registrationSurname = document.createElement("input");
        const registrationEmail = document.createElement("input");
        const registrationPhone = document.createElement("input");
        const registrationSubmit = document.createElement("button");
        // const registrationCheckbox = document.createElement("checkbox");

        registrationName.placeholder = "Name";
        registrationSurname.placeholder = "Surname";
        registrationEmail.placeholder = "Email";
        registrationPhone.placeholder = "Phone"; 
        registrationSubmit.innerHTML = "Submit";

        registrationModal.appendChild(registrationName);
        registrationModal.appendChild(registrationSurname);
        registrationModal.appendChild(registrationEmail);
        registrationModal.appendChild(registrationPhone);
        registrationModal.appendChild(registrationSubmit);

        const regNameValue = registrationName.value;
        

        const registerButton = document.querySelector("#registration");

        registerButton.addEventListener('click', () => {
            registrationModal.className = "registration__open";
        });

        registrationSubmit.addEventListener('click', () => {
            registrationModal.className = "registration__close";
        });

        // openButton.addEventListener('click', () => {
        //     modalDiv.className = 'apiContents';
        //     modalOverlay.className = 'modal-overlay';
        // }); 
    

    });

    data.forEach((event) => {

        if (event.id === 6) {
        return; 
        }

        //Small container
        const eventDiv = document.createElement('div'); 
        eventDiv.classList.add('smallContainer'); 
        const openButton = document.createElement('button');
        openButton.classList.add('smallContainerButton');
        const heading = document.createElement('h2');

        //Small container elements
        heading.textContent = `${event.name}`;
        eventDiv.appendChild(openButton);
        eventDiv.appendChild(heading);
        container.appendChild(eventDiv);
        openButton.innerHTML = "MORE";

        //Modal Window 
        const modalDiv = document.createElement('div');
        modalDiv.classList.add('apiContents__close');
        const title = document.createElement('h3');
        title.classList.add('apiContents__h3');
        const date = document.createElement('span');
        date.classList.add('apiContents__date');
        const paragraph = document.createElement('p');
        paragraph.classList.add('apiContents__paragraph');
        const image = document.createElement('img');
        image.classList.add('apiContents__image'); 
        const closeButton = document.createElement('button');
        closeButton.classList.add('apiContents__closeButton');

        //Modal Window contents
        title.textContent = `${event.name}`;
        date.textContent = `${event.date}`;
        paragraph.textContent = `${event.description}`;
        image.src = `${event.image_url}`;
        closeButton.innerHTML = "CLOSE";

        //Modal Window structure
        modalDiv.appendChild(title);
        modalDiv.appendChild(date);
        modalDiv.appendChild(paragraph);
        modalDiv.appendChild(image);
        modalDiv.appendChild(closeButton)
        console.log(modalDiv);

        document.body.appendChild(modalDiv);

        //scope for both buttons below
        const modalOverlay = document.querySelector('#modalDiv'); 

        openButton.addEventListener('click', () => {
            modalDiv.className = 'apiContents';
            modalOverlay.className = 'modal-overlay';
        });

        closeButton.addEventListener('click', () => {
            modalDiv.className = 'apiContents__close';
            modalOverlay.className = 'apiContents__close';
        });
    
    });
};

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