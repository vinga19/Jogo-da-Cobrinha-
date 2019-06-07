import React from 'react';
// import api from '../../services/api';
import './styles.css';


        

    window.onload = function()
        {
            
            let stage = document.getElementById('stage')
            let ctx = stage.getContext("2d");
            document.addEventListener("keydown",keyPush); 
            
            
            
            setInterval(game, 120);
            const vel = 1;
            let vx = 10;
            let vy = 10;
            let px = 10;
            let py = 16;
            let tp = 20;
            let qp = 30;
            let ax = 10;
            let ay = 15;
            let cont = 0;
            let bx = 15;
            let by = 5;
            
            

            let trail = [];
            let tail = 4;
            function game()
            {
                
                 px += vx;
                 py += vy;
                       
                if(px < 1)
                {
                    vx = vy = 0;
                     
                }
                if (px > qp -1)
                {
                    px = 0;
                }
                if (py < 0)
                {
                    py = qp - 1;
                }
                if (py > qp - 1)
                {
                    py = 0;
                }
                ctx.fillStyle = "black";
                ctx.fillRect(0,0,stage.clientWidth,stage.height);
                
                ctx.fillStyle = "red";
                ctx.fillRect(ax*tp, ay*tp, tp, tp);
                ctx.fillStyle = "gray";

                ctx.fillStyle = "blue";
                ctx.fillRect(bx*tp,by*tp,tp,tp);

                
                for(var i = 0; i < trail.length; i++)
                {
                    ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp, tp);
                   
                    if(trail[i].x == px && trail[i].y == py)
                    {
                        vx = vy = 0; 
                        tail = 4;  
                    }
                    
                   
                }
                
                trail.push({x:px,y:py});
                
                while (trail.length > tail)
                {
                    trail.shift();
                }
                if (ax == px && ay == py)
                {
                    tail++;
                    ax = Math.floor(Math.random()*qp);
                    ay = Math.floor(Math.random()*qp);
                }

            
            }
            function keyPush(event){

                switch(event.keyCode){
                    case 37: //left
                            vx = -vel; 
                            vy = 0;
                        break;
                    case 38: // up
                            vx = 0; 
                            vy = -vel;
                        break;
                    case 39: // right
                            vx = vel; 
                            vy = 0;
                        break;
                    case 40: //down
                            vx = 0; 
                            vy = vel;
                        break;
                    default: 
                        break;
                }

            }
            console.log(cont);  
        }
        
        
         
    const Main = () => (
        <canvas id="stage" width = '600' height = '600'  ></canvas>
         
    
        );
   export default Main;
    
 
    






