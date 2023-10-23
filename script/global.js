const api = '727054372039115'



async function busca(nomePerson){
    const person = await fetch (`https://superheroapi.com/api.php/${api}/search/${nomePerson}/language=pt_br`)
    .then(res => res.json())
    
    console.log(person.results)

    mostraNaTela(person.results)   
    
    
}



function mostraNaTela(person){
for( const hero of person){
    const card = `
    <div class="imagens"> 
    <img src="${hero.image.url}" alt="${hero.name}">            
    <h2>${hero.name}</h2>
    </div>        
    
    `
   
    document.querySelector('.conteudo').innerHTML += card

    
}
}


function cliquei(){
    const nomePerson = document.querySelector('input').value
    
    busca(nomePerson)
}















