function procurar(){
   var input,filtro,menulink,menuItens,links;
   input = document.getElementById("pesquisar");
   filtro = input.Value.toUpperCase();
   menulink = document.getElementById("menulink");
   menuItens = menulink.getElementByTagName(li);
   for(var i=0;i<menuItens.length;i++){
       links = menuItens[i].getElementBysTagName("a")[0];
       if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
           menuItens[i].style.display="";
       }else{
           menuItens[i].style.display="none";
       }
   }
}