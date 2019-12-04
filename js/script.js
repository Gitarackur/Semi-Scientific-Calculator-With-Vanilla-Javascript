


let UIctrl= (()=>{
    
     let btns1= document.querySelectorAll(".but1");
     let btns10= document.querySelectorAll(".but10");
     let btns2= document.querySelectorAll(".but2");
     let btns3= document.querySelectorAll(".but3");
     let btns4= document.querySelectorAll(".but4");
     let btns5= document.querySelectorAll(".but5");
     let Screen = document.querySelector("#screen");
     let Sci = document.querySelector("#sci");
     let Dsp = document.querySelector("#dps");
     let Resultt= document.querySelector(".Result");
     let RawCalc= document.querySelector(".Rawcalc");
     let total;  
     let rezult;
     let mult;
     let Dio;


     return {

       ShowINN: ()=>{
               return {

                    ShowRad:()=>{
                         Dsp.innerHTML= "RAD";
                    },

                    ClearRad:()=>{
                         Dsp.innerHTML= "";
                    },

                    CalcSound:()=>{
                         Dio= new Audio();
                         Dio.src="./audio/preview(1).mp3";
                         if(Dio.play()!== undefined){
                              Dio.play().then(()=>{
                                   // Dio.play();
                              }).catch(()=>{
                                   alert("playback failed")
                              })
                         }
                    },

                    SigFig:(n, sig)=>{
                              
                         if(Screen.innerHTML===""){
                              Screen.innerHTML= "";
                         }else{
                              mult= Math.pow(10, sig-Math.floor(Math.log(n)/ Math.LN10) - 1);
                              rezult= Math.round(n * mult)/ mult;
                              Screen.innerHTML= rezult;
                         }
                    },

                    topBtns: ()=>{
                              

                              btns1[0].addEventListener("click", ()=>{
                                   Screen.innerHTML= "";
                                   UIctrl().ShowINN().ClearRad();
                              })
                              btns1[1].addEventListener("click", ()=>{
                                   const b1= document.createTextNode("(");
                                   Screen.appendChild(b1);
                              })
                              btns1[2].addEventListener("click", ()=>{
                                   const b2= document.createTextNode(")");
                                   Screen.appendChild(b2);
                              })
                              btns1[3].addEventListener("click", ()=>{
                                   const d= document.createTextNode("/");
                                   Screen.appendChild(d);
                              }) 
                    },

                    btns1:()=>{
                              

                              btns2[0].addEventListener("click", ()=>{
                                   const seven= document.createTextNode("7");
                                   Screen.appendChild(seven);
                              })
                              btns2[1].addEventListener("click", ()=>{
                                   const eight= document.createTextNode("8");
                                   Screen.appendChild(eight);
                              })
                              btns2[2].addEventListener("click", ()=>{
                                   const nine= document.createTextNode("9");
                                   Screen.appendChild(nine);
                              })
                              btns2[3].addEventListener("click", ()=>{
                                   const mul= document.createTextNode("*");
                                   Screen.appendChild(mul);
                              }) 
                    }, 

                    btns10:()=>{
                              

                         btns10[0].addEventListener("click", ()=>{

                                   UIctrl().ShowINN().SigFig(eval(Screen.innerHTML), 2);
                         })
                         btns10[1].addEventListener("click", ()=>{
                              const sin= document.createTextNode("Math.sin(");
                              Screen.appendChild(sin);
                              UIctrl().ShowINN().ShowRad();
                         })
                         btns10[2].addEventListener("click", ()=>{
                              const cos= document.createTextNode("Math.cos(");
                              Screen.appendChild(cos);
                              UIctrl().ShowINN().ShowRad();
                         })
                         btns10[3].addEventListener("click", ()=>{
                              const tan= document.createTextNode("Math.tan(");
                              Screen.appendChild(tan);
                              UIctrl().ShowINN().ShowRad();
                         }) 
               }, 


                    btns2:()=>{
                              

                              btns3[0].addEventListener("click", ()=>{
                                   const four= document.createTextNode("4");
                                   Screen.appendChild(four);
                              })
                              btns3[1].addEventListener("click", ()=>{
                                   const five= document.createTextNode("5");
                                   Screen.appendChild(five);
                              })
                              btns3[2].addEventListener("click", ()=>{
                                   const six= document.createTextNode("6");
                                   Screen.appendChild(six);
                              })
                              btns3[3].addEventListener("click", ()=>{
                                   const min= document.createTextNode("-");
                                   Screen.appendChild(min);
                              }) 
                    },

                    btns3:()=>{
                              

                              btns4[0].addEventListener("click", ()=>{
                                   const one= document.createTextNode("1");
                                   Screen.appendChild(one);
                              })
                              btns4[1].addEventListener("click", ()=>{
                                   const two= document.createTextNode("2");
                                   Screen.appendChild(two);
                              })
                              btns4[2].addEventListener("click", ()=>{
                                   const three= document.createTextNode("3");
                                   Screen.appendChild(three);
                              })
                              btns4[3].addEventListener("click", ()=>{
                                   const plus= document.createTextNode("+");
                                   Screen.appendChild(plus);
                              }) 
                    },

                    btns4:()=>{
                              

                              btns5[0].addEventListener("click", ()=>{
                                   const zero= document.createTextNode("0");
                                   Screen.appendChild(zero);
                              })
                              btns5[1].addEventListener("click", ()=>{
                                   const Per= document.createTextNode("%");
                                   Screen.appendChild(Per);
                              })
                              btns5[2].addEventListener("click", ()=>{
                                   const dot= document.createTextNode(".");
                                   Screen.appendChild(dot);
                              })
                              btns5[3].addEventListener("click", ()=>{
                                   total= eval(Screen.innerHTML);
                                   Screen.innerHTML= total;
                              }) 
                    },

               }

          }
     } 
});



let CompileMods= ((UIctrl)=>{

     //display the clicked numbers in the UI
     // also, the last function call contains the solvings mixed with the ui
     
     UIctrl.ShowINN().topBtns();
     UIctrl.ShowINN().btns1();
     UIctrl.ShowINN().btns10();
     UIctrl.ShowINN().btns2();
     UIctrl.ShowINN().btns3();
     UIctrl.ShowINN().btns4();
     // UIctrl.ShowINN().CalcSound();

     
  

})(UIctrl());

































