document.getElementById("btn-1").addEventListener("click", function(){
 let first = document.getElementById('seat_count');
 let firstString = first.innerText;
 let firstPrice = parseFloat(firstString);
 first.innerText = firstPrice - 1;

 let parentele = document.getElementById('tbody')
 let childele = document.createElement('tr')
 let called_1 = document.createElement('td')
 let called_2 = document.createElement('td')
 let called_3 = document.createElement('td')

 called_1.textContent = 'A1 '
 called_2.textContent = 'Economy '
 called_3.textContent = '550'

 childele.appendChild(called_1)
 childele.appendChild(called_2)
 childele.appendChild(called_3)
 parentele.insertBefore(childele,parentele.firstChild);
 
})

document.getElementById("btn-1").addEventListener("click", function(){

    let firstTicket = document.getElementById('seat_counter');
    let firstTicketString = firstTicket.innerText;
    let firstTicketPrice = parseFloat(firstTicketString);
    firstTicket.innerText = firstTicketPrice + 1;
})

document.getElementById('btn-1').addEventListener('click', function() {
let firstTotal = document.getElementById('total');
let firstString = firstTotal.innerText;
let firstTotalPrice = parseFloat(firstString);
firstTotal.innerText = firstTotalPrice + 550;

});
document.getElementById('btn-1').addEventListener('click', function() {
let firstTotal = document.getElementById('grand_total');
let firstString = firstTotal.innerText;
let firstTotalPrice = parseFloat(firstString);
firstTotal.innerText = firstTotalPrice + 550;

});


function disableButton_1() {
 document.getElementById('btn-1').disabled = true;
}
//-----------------------------------btn2-----------------------------------------

document.getElementById('btn-2').addEventListener('click', function() {
let secend = document.getElementById('seat_count');
let secendString = secend.innerText;
let secendPrice = parseFloat(secendString);
secend.innerText = secendPrice - 1 ;

let parentele = document.getElementById('tbody')
let childele = document.createElement('tr')
let called_1 = document.createElement('td')
let called_2 = document.createElement('td')
let called_3 = document.createElement('td')

called_1.textContent = 'A2 '
called_2.textContent = 'Economy '
called_3.textContent = '550'

childele.appendChild(called_1)
childele.appendChild(called_2)
childele.appendChild(called_3)
parentele.insertBefore(childele,parentele.firstChild);
});

document.getElementById('btn-2').addEventListener('click', function() {
    let secendTicket = document.getElementById('seat_counter');
    let secendTicketString = secendTicket.innerText;
    let secendTicketPrice = parseFloat(secendTicketString);
    secendTicket.innerText = secendTicketPrice + 1;
});

document.getElementById('btn-2').addEventListener('click', function() {
    let secendTotal = document.getElementById('total');
    let secendString = secendTotal.innerText;
    let secendTotalPrice = parseFloat(secendString);
    secendTotal.innerText = secendTotalPrice + 550;
    
    });
document.getElementById('btn-2').addEventListener('click', function() {
    let secendTotal = document.getElementById('grand_total');
    let secendString = secendTotal.innerText;
    let secendTotalPrice = parseFloat(secendString);
    secendTotal.innerText = secendTotalPrice + 550;
    
    });

    
function disableButton_2() {
    document.getElementById('btn-2').disabled = true;
   }

   //-----------------------------------btn3-----------------------------------------

   document.getElementById('btn-3').addEventListener('click', function() {
    let third = document.getElementById('seat_count');
    let thirdString = third.innerText;
    let thirdPrice = parseFloat(thirdString);
    third.innerText = thirdPrice - 1 ;

    let parentele = document.getElementById('tbody')
    let childele = document.createElement('tr')
    let called_1 = document.createElement('td')
    let called_2 = document.createElement('td')
    let called_3 = document.createElement('td')
   
    called_1.textContent = 'A3 '
    called_2.textContent = 'Economy '
    called_3.textContent = '550'
    
    childele.appendChild(called_1)
    childele.appendChild(called_2)
    childele.appendChild(called_3)
    parentele.insertBefore(childele,parentele.firstChild);
    });
    
    document.getElementById('btn-3').addEventListener('click', function() {
        let thirdTicket = document.getElementById('seat_counter');
        let thirdTicketString = thirdTicket.innerText;
        let thirdTicketPrice = parseFloat(thirdTicketString);
        thirdTicket.innerText = thirdTicketPrice + 1;
    });
    
    document.getElementById('btn-3').addEventListener('click', function() {
        let thirdTotal = document.getElementById('total');
        let thirdString = thirdTotal.innerText;
        let thirdTotalPrice = parseFloat(thirdString);
        thirdTotal.innerText = thirdTotalPrice + 550;
        
        });
    document.getElementById('btn-3').addEventListener('click', function() {
        let thirdTotal = document.getElementById('grand_total');
        let thirdString = thirdTotal.innerText;
        let thirdTotalPrice = parseFloat(thirdString);
        thirdTotal.innerText = thirdTotalPrice + 550;
        
        });
    
        
    function disableButton_3() {
        document.getElementById('btn-3').disabled = true;
       }

       //-----------------------------------btn4-----------------------------------------

       document.getElementById('btn-4').addEventListener('click', function() {
        let forth = document.getElementById('seat_count');
        let forthString = forth.innerText;
        let forthPrice = parseFloat(forthString);
        forth.innerText = forthPrice - 1 ;

        let parentele = document.getElementById('tbody')
        let childele = document.createElement('tr')
        let called_1 = document.createElement('td')
        let called_2 = document.createElement('td')
        let called_3 = document.createElement('td')
       
        called_1.textContent = 'A4'
        called_2.textContent = 'Economy '
        called_3.textContent = '550'
        
        childele.appendChild(called_1)
        childele.appendChild(called_2)
        childele.appendChild(called_3)
        parentele.insertBefore(childele,parentele.firstChild);
        });
        
        document.getElementById('btn-4').addEventListener('click', function() {
            let forthTicket = document.getElementById('seat_counter');
            let forthTicketString = forthTicket.innerText;
            let forthTicketPrice = parseFloat(forthTicketString);
            forthTicket.innerText = forthTicketPrice + 1;
        });
        
        document.getElementById('btn-4').addEventListener('click', function() {
            let forthTotal = document.getElementById('total');
            let forthString = forthTotal.innerText;
            let forthTotalPrice = parseFloat(forthString);
            forthTotal.innerText = forthTotalPrice + 550;
            
            });
        document.getElementById('btn-4').addEventListener('click', function() {
            let forthTotal = document.getElementById('grand_total');
            let forthString = forthTotal.innerText;
            let forthTotalPrice = parseFloat(forthString);
            forthTotal.innerText = forthTotalPrice + 550;
            
            });
        
            
        function disableButton_4() {
            document.getElementById('btn-4').disabled = true;
        }
//--------------------------btn-5---------------------------------

document.getElementById('btn-5').addEventListener('click', function() {
let fifth = document.getElementById('seat_count');
let fifthString = fifth.innerText;
let fifthPrice = parseFloat(fifthString);
fifth.innerText = fifthPrice - 1 ;

let parentele = document.getElementById('tbody')
let childele = document.createElement('tr')
let called_1 = document.createElement('td')
let called_2 = document.createElement('td')
let called_3 = document.createElement('td')

called_1.textContent = 'B1 '
called_2.textContent = 'Economy '
called_3.textContent = '550'

childele.appendChild(called_1)
childele.appendChild(called_2)
childele.appendChild(called_3)
parentele.insertBefore(childele,parentele.firstChild);
});

document.getElementById('btn-5').addEventListener('click', function() {
    let fifthTicket = document.getElementById('seat_counter');
    let fifthTicketString = fifthTicket.innerText;
    let fifthTicketPrice = parseFloat(fifthTicketString);
    fifthTicket.innerText = fifthTicketPrice + 1;
});

document.getElementById('btn-5').addEventListener('click', function() {
    let fifthTotal = document.getElementById('total');
    let fifthString = fifthTotal.innerText;
    let fifthTotalPrice = parseFloat(fifthString);
    fifthTotal.innerText = fifthTotalPrice + 550;
    
    });
document.getElementById('btn-5').addEventListener('click', function() {
    let fifthTotal = document.getElementById('grand_total');
    let fifthString = fifthTotal.innerText;
    let fifthTotalPrice = parseFloat(fifthString);
    fifthTotal.innerText = fifthTotalPrice + 550;
    
    });

    
function disableButton_5() {
    document.getElementById('btn-5').disabled = true;
}

//--------------------------btn-6---------------------------------

document.getElementById('btn-6').addEventListener('click', function() {
let sixth = document.getElementById('seat_count');
let sixthString = sixth.innerText;
let sixthPrice = parseFloat(sixthString);
sixth.innerText = sixthPrice - 1 ;

let parentele = document.getElementById('tbody')
let childele = document.createElement('tr')
let called_1 = document.createElement('td')
let called_2 = document.createElement('td')
let called_3 = document.createElement('td')

called_1.textContent = 'B2 '
called_2.textContent = 'Economy '
called_3.textContent = '550'

childele.appendChild(called_1)
childele.appendChild(called_2)
childele.appendChild(called_3)
parentele.insertBefore(childele,parentele.firstChild);
});

document.getElementById('btn-6').addEventListener('click', function() {
    let sixthTicket = document.getElementById('seat_counter');
    let sixthTicketString = sixthTicket.innerText;
    let sixthTicketPrice = parseFloat(sixthTicketString);
    sixthTicket.innerText = sixthTicketPrice + 1;
});

document.getElementById('btn-6').addEventListener('click', function() {
    let sixthTotal = document.getElementById('total');
    let sixthString = sixthTotal.innerText;
    let sixthTotalPrice = parseFloat(sixthString);
    sixthTotal.innerText = sixthTotalPrice + 550;
    
    });
document.getElementById('btn-6').addEventListener('click', function() {
    let sixthTotal = document.getElementById('grand_total');
    let sixthString = sixthTotal.innerText;
    let sixthTotalPrice = parseFloat(sixthString);
    sixthTotal.innerText = sixthTotalPrice + 550;
    
    });

    function disableButton_6() {
        document.getElementById('btn-6').disabled = true;
    }

    //--------------------------btn-7---------------------------------

    document.getElementById('btn-7').addEventListener('click', function() {
    let seventh = document.getElementById('seat_count');
    let seventhString = seventh.innerText;
    let seventhPrice = parseFloat(seventhString);
    seventh.innerText = seventhPrice - 1 ;

    let parentele = document.getElementById('tbody')
    let childele = document.createElement('tr')
    let called_1 = document.createElement('td')
    let called_2 = document.createElement('td')
    let called_3 = document.createElement('td')
   
    called_1.textContent = 'B3 '
    called_2.textContent = 'Economy '
    called_3.textContent = '550'
    
    childele.appendChild(called_1)
    childele.appendChild(called_2)
    childele.appendChild(called_3)
    parentele.insertBefore(childele,parentele.firstChild);
    });

    document.getElementById('btn-7').addEventListener('click', function() {
        let seventhTicket = document.getElementById('seat_counter');
        let seventhTicketString = seventhTicket.innerText;
        let seventhTicketPrice = parseFloat(seventhTicketString);
        seventhTicket.innerText = seventhTicketPrice + 1;
    });

    document.getElementById('btn-7').addEventListener('click', function() {
        let seventhTotal = document.getElementById('total');
        let seventhString = seventhTotal.innerText;
        let seventhTotalPrice = parseFloat(seventhString);
        seventhTotal.innerText = seventhTotalPrice + 550;
        
        });
    document.getElementById('btn-7').addEventListener('click', function() {
        let seventhTotal = document.getElementById('grand_total');
        let seventhString = seventhTotal.innerText;
        let seventhTotalPrice = parseFloat(seventhString);
        seventhTotal.innerText = seventhTotalPrice + 550;
        
        });

        function disableButton_7() {
            document.getElementById('btn-7').disabled = true;
        }

        //--------------------------btn-8---------------------------------


        document.getElementById('btn-8').addEventListener('click', function() {
        let eighth = document.getElementById('seat_count');
        let eighthString = eighth.innerText;
        let eighthPrice = parseFloat(eighthString);
        eighth.innerText = eighthPrice - 1 ;

        let parentele = document.getElementById('tbody')
        let childele = document.createElement('tr')
        let called_1 = document.createElement('td')
        let called_2 = document.createElement('td')
        let called_3 = document.createElement('td')
       
        called_1.textContent = 'B4 '
        called_2.textContent = 'Economy '
        called_3.textContent = '550'
        
        childele.appendChild(called_1)
        childele.appendChild(called_2)
        childele.appendChild(called_3)
        parentele.insertBefore(childele,parentele.firstChild);
        });


                document.getElementById('btn-8').addEventListener('click', function() {
            let eighthTicket = document.getElementById('seat_counter');
            let eighthTicketString = eighthTicket.innerText;
            let eighthTicketPrice = parseFloat(eighthTicketString);
            eighthTicket.innerText = eighthTicketPrice + 1;
        });

        document.getElementById('btn-8').addEventListener('click', function() {
            let eighthTotal = document.getElementById('total');
            let eighthString = eighthTotal.innerText;
            let eighthTotalPrice = parseFloat(eighthString);
            eighthTotal.innerText = eighthTotalPrice + 550;
            
            });
        document.getElementById('btn-8').addEventListener('click', function() {
            let eighthTotal = document.getElementById('grand_total');
            let eighthString = eighthTotal.innerText;
            let eighthTotalPrice = parseFloat(eighthString);
            eighthTotal.innerText = eighthTotalPrice + 550;
            
            });
         

            function disableButton_8() {
                document.getElementById('btn-8').disabled = true;
            }

          //------------------------------------------------------------------------------------------------

       function applyCupon(){
        let totalPriceele = document.getElementById('total');
        let totalPri = parseFloat(totalPriceele.textContent);
        let cupon = document.getElementById('input').value;
       
        switch(cupon){ 
            case 'NEW15': 

            applyDiscount(15);
            break;
            case 'Couple 20':
               
            applyDiscount(20);
            break;
            default:
                alert('invalid cupon code');

       }
    }

function applyDiscount(discountParcentage){
    let totalPriceele = document.getElementById('grand_total');
    let totalPri = parseFloat(totalPriceele.textContent);
    let discount = totalPri * discountParcentage / 100;
    totalPriceele.textContent = totalPri - discount;
}

