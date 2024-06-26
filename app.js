
// fetch('https://northwind.vercel.app/api/products')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data received:', data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });


// const fetchProducts=async ()=>{
//     const promise=await fetch ('https://northwind.vercel.app/api/products')
//     const data = await promise.json();
//     return data;
// }

// fetchProducts().then((data)=>{
//     data.map((item)=>{
//         let tr=document.createElement("tr")
//         let tdName=document.createElement("td")
//         tdName.innerText=item.
//         console.log(item);
//     })
// })
let tbody = document.querySelector(".bodyy")
let modal=document.querySelector(".modal-body")
fetch('https://northwind.vercel.app/api/products').then(res => res.json())
    .then(data => {
        data.forEach(elem => {

            let tr = document.createElement("tr")
            let id = document.createElement("td")
            let tdName = document.createElement("td")
            let country = document.createElement("td")
            let price = document.createElement("td")
            let tdDanger = document.createElement("td")
            let tdWarning = document.createElement("td")
            let tdSuccess = document.createElement("td")
            let deleteButton = document.createElement("button")
            let successButton = document.createElement("button")
            let editButton = document.createElement("button")

            deleteButton.className = "btn btn-danger";
            deleteButton.innerText = "Delete"
            deleteButton.style.backgroundColor = "red"
            successButton.className = "btn btn-success"
            successButton.innerText = "Detail"
            editButton.className = "btn btn-warning";
            editButton.style.backgroundColor = "yellow";
            editButton.innerText = "Edit"
            tdName.innerText = elem.name
            id.innerText = elem.id
            price.innerText = elem.unitPrice
            country.innerText = elem.name

            tdWarning.setAttribute("data-bs-toggle","modal")
            tdWarning.setAttribute("data-bs-target","#exampleModal")

            deleteButton.addEventListener("click", (e) => {
                // fetch('https://northwind.vercel.app/api/products' + '/' + elem.id, {
                //     method: 'delete'
                // })
                //     .then(response => response.json());
    
                e.target.parentElement.parentElement.remove();
            })
            
            tdWarning.addEventListener("click",()=>{
               
                // console.log(modal.innerText);
                // modal.innerText=elem.id
                let inputOne=document.createElement("input")
                let inputTwo=document.createElement("input")
                inputOne.value=elem.id
                inputTwo.value=elem.name
                modal.append(inputOne,inputTwo)
            })




            tdDanger.append(deleteButton)
            tdWarning.append(editButton)
            tdSuccess.append(successButton)
            tr.append(id, tdName, price, country, tdDanger, tdWarning, tdSuccess)
            tbody.append(tr)

        });
    })