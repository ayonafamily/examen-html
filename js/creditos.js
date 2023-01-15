const autor = () => {
    const fecha = new Date();
    const author = "<a href='http//jorgeayona.com' target='_blank' title='Sitio de Jorge Ayona'><em>Jorge Ayona</em></a>";
    const empresa="Constructora Grenco";    
    let mes = "";
      if(fecha.getMonth()==0){
        mes = "Enero";
      }
      else if(fecha.getMonth()==1){
        mes = "Febrero";
      } 
      else if(fecha.getMonth()==2){
        mes = "Marzo";
      }
      else if(fecha.getMonth()== 3){
        mes = "Abril";
      }
      else if(fecha.getMonth()==4){
        mes = "Mayo";
      }
      else if(fecha.getMonth()==5){
        mes = "Junio";
      }
      else if(fecha.getMonth()==6){
        mes = "Julio";
      }
      else if(fecha.getMonth()==7){
        mes = "Agosto";
      }
      else if(fecha.getMonth()==8){
        mes = "Setiembre";
      }
      else if(fecha.getMonth()==9){
        mes = "Octubre";
      }
      else if(fecha.getMonth()==10){
        mes = "Noviembre";
      }
      else {
        mes = "Diciembre";
      } 

              document.getElementById("pie").innerHTML = `&copy; ${mes} ${fecha.getFullYear()} ${empresa} <br> Diseño: ${author}` ;
  }


  autor();