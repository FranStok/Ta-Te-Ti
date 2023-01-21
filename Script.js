const Tablero=(()=>{
    const Posiciones=[0,0,0,0,0,0,0,0,0];
    let Jugador1;
    let Jugador2;
    let Finalizo=0;
    let Turno;
    const Actualizar=(Index,SimboloActual)=>{
        if(Finalizo!=1 && Finalizo!=2){
            if(Posiciones[Index]==0){
                Posiciones[Index]=Turno.Simbolo;
                let Estado=document.querySelector(".EstadoJuego");
                Finalizo=ComprobarVictoria();
                if(Finalizo==0){
                    if(Turno.Simbolo=="X"){
                        Estado.textContent="Turno del jugador O: "+Jugador2.Nombre;
                        Turno=Jugador2;
                        return "X";
                    }else{
                        Estado.textContent="Turno del jugador X: "+Jugador1.Nombre;
                        Turno=Jugador1;
                        return "O";
                    }
                }
                if(Finalizo==1){
                    if(Turno.Simbolo=="X")
                        Estado.textContent="¡Juego terminado! Ganador: "+Jugador1.Nombre;
                    else
                        Estado.textContent="¡Juego terminado! Ganador: "+Jugador2.Nombre;
                }
                else
                    Estado.textContent="¡Juego terminado! Empate";
                return Turno.Simbolo;
            }
            return SimboloActual;
        }
        return "Termino";
    } 
    const ComprobarVictoria=()=>{
        if(Posiciones[0]==Posiciones[1] && Posiciones[0]==Posiciones[2] && Posiciones[0]!=0){
            return 1;
        }
        if(Posiciones[3]==Posiciones[4] && Posiciones[3]==Posiciones[5] && Posiciones[3]!=0){
            return 1;
        }
        if(Posiciones[6]==Posiciones[7] && Posiciones[6]==Posiciones[7] && Posiciones[6]!=0){
            return 1;
        }
        if(Posiciones[0]==Posiciones[3] && Posiciones[0]==Posiciones[6] && Posiciones[0]!=0){
            return 1;
        }
        if(Posiciones[1]==Posiciones[4] && Posiciones[1]==Posiciones[7] && Posiciones[1]!=0){
            return 1;
        }
        if(Posiciones[2]==Posiciones[5] && Posiciones[2]==Posiciones[8] && Posiciones[2]!=0){
            return 1;
        }
        if(Posiciones[0]==Posiciones[4] && Posiciones[0]==Posiciones[8] && Posiciones[0]!=0){
            return 1;
        }
        if(Posiciones[2]==Posiciones[4] && Posiciones[2]==Posiciones[6] && Posiciones[2]!=0){
            return 1;
        }
        if(!Posiciones.includes(0)){
            return 2;
        }
        return 0;        
    }
    const SetJugadores=(J1,J2)=>{
        Jugador1=FabricaJugadores(J1,"X");
        Jugador2=FabricaJugadores(J2,"O");
        Turno=Jugador1;
    }
    return {Actualizar,SetJugadores};
})();

const FabricaJugadores=(Nombre,Simbolo)=>{
    return{Nombre,Simbolo};
}

const Posicion=document.querySelectorAll(".Posicion");
Posicion.forEach(element => {
    element.addEventListener("click",(e)=>{
        let Index=element.dataset.posicion;
        let Simbolo=Tablero.Actualizar(Index,element.textContent);
        Simbolo=="Termino" ? element.textContent=element.textContent : element.textContent=Simbolo
          
    });
});
const Submit=document.querySelector(".Submit");
Submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let J1=document.querySelector("#Jugador1").value;
    let J2=document.querySelector("#Jugador2").value;
    if(J1!=J2 && J1!="" && J2!=""){
        Tablero.SetJugadores(J1,J2);
        let Form=document.querySelector("form");
        let Wraper=document.querySelector(".Wraper");
        Form.style.display="none";
        Wraper.style.display="flex";
        let Estado=document.querySelector(".EstadoJuego");
        Estado.textContent="Turno del jugador X: "+J1.Nombre;
    }else
        alert("Los nombres son iguales o estan vacios");
})
