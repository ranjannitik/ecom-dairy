let proObject;
onLoad();

function onLoad() {
  console.log("Hello World");
  mapprod();
  billbox();
  
  getprod();
}



function mapprod(){
    proObject=bag.map((id)=>{
        console.log(id)
        for(let i=0;i<Products.length;i++){
            if(id==Products[i].id){
                return Products[i]

            }
        }
    })
    console.log(proObject);
    billbox();
}


function getprod(){
 let leftop=   document.querySelector(".leftop");
 
 
 leftop.innerHTML='';
 proObject.forEach(element => {
    console.log(element)
    leftop.innerHTML+=generatecodehtml(element);
    
 });
}

function Remove(itemId){
    bag=bag.filter((e)=>e!=itemId);
    localStorage.setItem("item",JSON.stringify(bag));
    console.log(bag)
    mapprod();
    addcart();
    getprod();
    billbox();

    oper.innerHTML = `${bag.length} Items Left`;
    oper.style.visibility = "visible";
    oper.style.opacity = "1";

    // Hide the message after 2 seconds
    setTimeout(function() {
        oper.style.opacity = "0";
        setTimeout(function() {
            oper.style.visibility = "hidden";
        }, 500); // Delay hiding until transition ends (500 milliseconds)
    }, 2000); // 2000 milliseconds = 2 seconds
   
   

}


function billbox(){

    let pricetotal=0;
    let currPrice=0;
    proObject.forEach((e)=>{
        currPrice+=e.Price;
    });
    pricetotal=currPrice+100;
        let bill =document.querySelector(".bill")
        bill.innerHTML=`
        <h3>PRICE DETAILS(${bag.length}Items)</h3>
        <div class="billbox">
            <div class="ki">
                <h4>Total MRP </h4>
                <h4>Rs ${currPrice}</h4>
            </div>
            <div class="ki">
                <h4>Discount </h4>
                <h4> Rs 0</h4>
            </div>
            <div class="ki">
                <h4>Convenience Fee </h4>
                <h4>Rs 100</h4>
            </div>


        </div>
        <hr>
        <div class="ki">
            <h2>Total Amount</h2>
            <h2>Rs ${pricetotal}</h2>
        </div>
        <button class="final">Place Order</button>
        `; 
}


function generatecodehtml(elementObj){
    return`
    <div class="opbox">
    <div class="lopbox">
                        <img class="imgl" src="${elementObj.Image}" alt="">
                    </div>
                    <div class="ropbox">
                        <h3>${elementObj.Name}</h3>
                        <p>${elementObj.Cont}.</p>
                        <h3>₹${elementObj.Price}</h3>
                        <div class="krop">
                            <span>14 days</span>
                            <p> return available</p>
                        </div>
                        <div class="butop">
                            <button onclick="Remove(${elementObj.id});">Remove</button>

                        </div>



                    </div>
                    </div>

    
    `;
}