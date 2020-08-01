
        var canvas = document.querySelector("canvas.lienzo"),
            radio = 20,
            loc = {
                x : radio,
                y : radio
            },
            angulo_inicial = 0,
            angulo_final = Math.PI * 2,
            intervalo = null;


            var a =20;
            var b = 20;

                imagen_fondo = document.createElement("img");

                imagen_fondo.onload = function(){
                document.querySelectorAll("button").forEach(function(e){
                e.removeAttribute("disabled");
            });

        };
             imagen_fondo.src = "111.jpg";





        function dibujar(){
            var ctx = canvas.getContext("2d");

            ctx.clearRect(0, 0, canvas.width, canvas.height); 
            ctx.drawImage(imagen_fondo, 0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#FFFFFF";

            ctx.beginPath();
            ctx.arc(loc.x, loc.y, radio, angulo_inicial, angulo_final);

            ctx.fill();

            ctx.closePath();
        }

        function resetear(){
            loc.x = radio;
            loc.y = radio
            a=20;
            b=20;
        }

        function mover(){
                 
        loc.x = loc.x+a;
        loc.y = loc.y+b;
        

        if (loc.y >= 480)
        {
            b = -20;
        }

        if (loc.y <= 20)
        {
            b =20;           
        }

        if( loc.x >=780)
        {
            a=-20;            
        }

        if (loc.x <=20)
        {
            a=20;   
        }


        }

        function iniciar(){
            parar();

            intervalo = setInterval(function(){
                mover();
                dibujar();
            }, 100);
        }

        function parar(){
            clearInterval(intervalo);
        }
   