var button= document.querySelector('#btnForm')

const sendDataDenuncia = async data => {
    try {
      const response = await axios.post("http://localhost:3000/ok");
  
      console.log(response);
      location.href = "./";
    } catch (error) {
      console.log(error);
    }
  };


function click(event){
    event.preventDefault()


    var produto = document.querySelector('.prdt')
    var quantidade= document.querySelector('qtd')
    var fornecedor = document.querySelector('frnc')

    var produtos= produto.value
    
    const data = {
        'produto': 'cu'
    }

    JSON.parse(data);


    
    console.log(data.produto);
    
    sendDataDenuncia(data);
    
    
}

button.addEventListener("click", click)