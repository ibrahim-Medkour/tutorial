
fetch('../backend/categories.php')

.then(response =>response.json())
.then(data=>{

    const categories = document.getElementById("categories")
    
    data.forEach(category  =>  {
    const li = document.createElement("li");
    li.textContent=category.nom;
    categories.appendChild(li);
        
    });


  });