# Animated-square
A square that moves when you click start and stop when you click stop.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #player{
            position:absolute;
            top: 0px ;
            left: 0px;
            background-color: #00f;
            width: 50px;
            height: 50px;
            
        }
    </style>
</head>
<body>
    <script>

        var player
        var vel
        var dx
        var dy
        var px
        var py
        var anima
        var state
        

        function begin(){
            vel = 5
            dx = 1
            dy = 0
            px = 0
            py = 0
            state = 1
            document.getElementById("bt1").addEventListener("click",move)
            document.getElementById("bt2").addEventListener("click",stop)
            player = document.getElementById("player")
            player.addEventListener("click",moveStop)
            game()
        }
        function moveStop(){
            if(state){
                state = 0
                player.style.backgroundColor = "#f00"
                cancelAnimationFrame(anima)
            }
            else{
                state = 1
                player.style.backgroundColor = "#00f"
                anima = requestAnimationFrame(game)
            }
        }
        function move(){
            if(!state){
                state = 1
                player.style.backgroundColor = "#00f"
                anima = requestAnimationFrame(game)
            }
        }
        function stop(){
            state = 0
            player.style.backgroundColor = "#f00"
            cancelAnimationFrame(anima)
        }

        function game(){
            px += dx*vel
            //py += dy*vel
            player.style.left = px+"px"
            //player.style..top = py+"py"
            if(px > 800){
                dx = -1
            }
            else if(px <= 0){
                dx = 1
            }
            anima = requestAnimationFrame(game)
        }

        window.addEventListener("load",begin)

    </script>

    <div id="player"></div>
    <button id="bt1">Start</button>
    <button id="bt2">Stop</button>
</body>
</html>
