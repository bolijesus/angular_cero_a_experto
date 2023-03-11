(function(){
     const avenger = {
        nombre: 'Steve',
        clave:  'Capitan america',
        poder:  'DROGO'
     };

     const extraer = ({nombre, poder}:any) => {
        console.log(nombre);
        console.log(poder);
        
     }

     extraer(avenger);

})();



