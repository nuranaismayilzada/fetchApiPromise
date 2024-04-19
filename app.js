
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
let tbody=document.querySelector(".bodyy")
fetch('https://northwind.vercel.app/api/products').then(res=>res.json())
.then(data=>{
    data.forEach(elem => {
        let tr=document.createElement("tr") 
        let id=document.createElement("td")
        let tdName=document.createElement("td")
        let country=document.createElement("td")
        let price=document.createElement("td")
        tdName.innerText=elem.name
        id.innerText=elem.id
        price.innerText=elem.unitPrice
        country.innerText=elem.name
        tr.append(id,tdName,price,country)
        tbody.append(tr)

    });
})