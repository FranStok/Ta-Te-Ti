const Tablero=(()=>{
    const Posiciones=[0,0,0,0,0,0,0,0,0];
    let Termino=false;
    let Turno="X"
    const Actualizar=(Index,SimboloActual)=>{
        if(!Termino){
            if(Posiciones[Index]==0){
                Posiciones[Index]=Turno;
                let Estado=document.querySelector(".EstadoJuego");
                let Finalizo=ComprobarVictoria();
                if(Finalizo==0){
                    if(Turno=="X"){
                        Estado.textContent="Turno del jugador "+"O"
                        Turno="O";
                        return "X";
                    }else{
                        Estado.textContent="Turno del jugador "+"X"
                        Turno="X";
                        return "O";
                    }
                }
                if(Finalizo==1)
                    Estado.textContent="¡Juego terminado! Ganador: "+Turno;
                else
                    Estado.textContent="¡Juego terminado! Empate";
                return Turno;
            }
            return SimboloActual;
        }
        return "Termino";
    } 
    const ComprobarVictoria=()=>{
        if(Posiciones[0]==Posiciones[1] && Posiciones[0]==Posiciones[2] && Posiciones[0]!=0){
            Termino=true;
            return 1;
        }
        if(Posiciones[3]==Posiciones[4] && Posiciones[3]==Posiciones[5] && Posiciones[3]!=0){
            Termino=true;
            return 1;
        }
        if(Posiciones[6]==Posiciones[7] && Posiciones[6]==Posiciones[7] && Posiciones[6]!=0){
            Termino=true;
            return 1;
        }
        if(Posiciones[0]==Posiciones[3] && Posiciones[0]==Posiciones[6] && Posiciones[0]!=0){
            Termino=true;
            return 1;
        }
        if(Posiciones[1]==Posiciones[4] && Posiciones[1]==Posiciones[7] && Posiciones[1]!=0){
            Termino=true;
            return 1;
        }
        if(Posiciones[2]==Posiciones[5] && Posiciones[2]==Posiciones[8] && Posiciones[2]!=0){
            Termino=true;
            return 1;
        }
        if(Posiciones[0]==Posiciones[4] && Posiciones[0]==Posiciones[8] && Posiciones[0]!=0){
            Termino=true;
            return 1;
        }
        if(!Posiciones.includes(0)){
            Termino=true;
            return 2;
        }
        return 0;        
    }
    return {Actualizar};
})();

const FabricaJugadores=(Nombre)=>{
    return{Nombre};
}

const Posicion=document.querySelectorAll(".Posicion");
Posicion.forEach(element => {
    element.addEventListener("click",(e)=>{
        let Index=element.dataset.posicion;
        let Simbolo=Tablero.Actualizar(Index,element.textContent);
        Simbolo=="Termino" ? element.textContent=element.textContent : element.textContent=Simbolo
          
    });
});
