

const Carro = function(ligar ){
    var embreagemAtiva;
    const marcha1 = document.querySelector("#marcha1");
    const marcha2 = document.querySelector("#marcha2");
    const marcha3 = document.querySelector("#marcha3");
    const marcha4 = document.querySelector("#marcha4");
    const marcha5 = document.querySelector("#marcha5");
    var embragemblue;
    const music = new Audio('./somCarro.mp3');
 
    const velocidadeMaxima = 220
    this.ligar = ligar
    this.velocidadeAtual = 0


    this.acelerar = function(){
        const velocidade = this.getVelocidade() + 10;
        this.velocidadeAtual = velocidade
        this.setVelocidade(velocidade) 

        //Verificações

    };


    this.getVelocidade = function(){
        return this.velocidadeAtual
    }

    this.setVelocidade = function(velocidade){
        this.velocidadeAtual = velocidade
    }

    this.getLigar = function(){
      document.querySelector("#ligar").innerHTML = `Ligar carro:  ${this.ligar = 'ligado'}`;
      music.play();
      music.loop =true;     
      document.querySelector("#andar").innerHTML = 'Clique na embreagem e clique na marcha , para poder acelerar';
      embragemblue = document.querySelector('#embreagem').disabled = false
    }


    let ligarCarro = document.querySelector("#ligarCar").addEventListener("click", (e)=>{
        this.getLigar()
    });

    
    document.querySelector('#embreagem').addEventListener('click', ()=>{
        if(this.ligar === 'desligado'){
            document.querySelector("#andar").innerHTML = 'Ligar o carro primeiro';
            embragemblue =  document.querySelector('#embreagem').disabled = true
        }else{
            embragemblue = document.querySelector('#embreagem').style.backgroundColor = 'blue'
        }
        
    })

    let marchas = document.querySelectorAll('section .color');
    marchas.forEach((i, index)=>{
        i.addEventListener('click', ()=>{       
            document.querySelector('.color.selected').classList.remove('selected')
            i.classList.add('selected')
            
            if(this.ligar === 'ligado'){
                document.querySelector("#andar").innerHTML = `Marcha trocada com sucesso`;
            }
        })
    });

    document.querySelector("#acelerar").addEventListener("click", ()=>{
        cs = document.querySelector('.color.selected')
        if(this.ligar === 'ligado' && embragemblue === 'blue' && cs === marcha1 && this.velocidadeAtual < 30 ){
            this.acelerar()
            document.querySelector("#veloAtual").innerHTML = `Velocidade Atual:  ${camaro.velocidadeAtual}`;
            document.querySelector('#marcha1').style.backgroundColor = '#fff'
            if(this.velocidadeAtual === 30){
                document.querySelector("#andar").innerHTML = `Troque para marcha 2, clique na embreagem e depois na marcha 2`;
                embragemblue = document.querySelector('#embreagem').style.backgroundColor = 'white'
            }
        }
       
        if(this.ligar === 'ligado' && embragemblue === 'blue' && cs === marcha2 && this.velocidadeAtual >= 30 && this.velocidadeAtual < 60){
            document.querySelector('#marcha2').style.backgroundColor = '#fff'
            this.acelerar()
            document.querySelector("#veloAtual").innerHTML = `Velocidade Atual:  ${camaro.velocidadeAtual}`;
            if(this.velocidadeAtual === 60){
                document.querySelector("#andar").innerHTML = `Antes de acelerar coloque a marcha seguinte, Clique na embreagem e clique na proxima marcha`;
                embragemblue = document.querySelector('#embreagem').style.backgroundColor = 'white'
            }
        };


        if(this.ligar === 'ligado' && embragemblue === 'blue' && cs === marcha3 && this.velocidadeAtual >= 60 && this.velocidadeAtual < 80){
            document.querySelector('#marcha3').style.backgroundColor = '#fff'
            this.acelerar()
            document.querySelector("#veloAtual").innerHTML = `Velocidade Atual:  ${camaro.velocidadeAtual}`;
            if(this.velocidadeAtual === 80){
                document.querySelector("#andar").innerHTML = `Antes de acelerar coloque a marcha seguinte, Clique na embreagem e clique na proxima marcha`;
                embragemblue = document.querySelector('#embreagem').style.backgroundColor = 'white'
            }
        };
    


        if(this.ligar === 'ligado' && embragemblue === 'blue' && cs === marcha4 && this.velocidadeAtual >= 80 && this.velocidadeAtual < 110){
            document.querySelector('#marcha4').style.backgroundColor = '#fff'
            this.acelerar()
            document.querySelector("#veloAtual").innerHTML = `Velocidade Atual:  ${camaro.velocidadeAtual}`;
            if(this.velocidadeAtual === 110){
                document.querySelector("#andar").innerHTML = `Antes de acelerar coloque a marcha seguinte, Clique na embreagem e clique na proxima marcha`;
                embragemblue = document.querySelector('#embreagem').style.backgroundColor = 'white'
            }
        };


        if(this.ligar === 'ligado' && embragemblue === 'blue' && cs === marcha5 && this.velocidadeAtual >= 110 && this.velocidadeAtual < 220){
            document.querySelector('#marcha5').style.backgroundColor = '#fff'
            this.acelerar()
            document.querySelector("#veloAtual").innerHTML = `Velocidade Atual:  ${camaro.velocidadeAtual}`;
            if(this.velocidadeAtual === 220){
                document.querySelector("#andar").innerHTML = `Velocidade maxima`;
                embragemblue = document.querySelector('#embreagem').style.backgroundColor = 'white'
            }
        };
    
    
     });  
    

    //Deslidar carro
    document.querySelector("#desligarCar").addEventListener('click', ()=>{
        if(this.ligar != 'ligado'){
            document.querySelector("#andar").innerHTML = 'O carro já esta desligado';
        }else{
            document.location.reload(true)
        }
    })
    
};

    const camaro = new Carro('desligado');

    
    document.querySelector("#ligar").innerHTML = `Ligar carro:  ${camaro.ligar}`;
    document.querySelector("#veloAtual").innerHTML = `Velocidade Atual:  ${camaro.velocidadeAtual}`;



