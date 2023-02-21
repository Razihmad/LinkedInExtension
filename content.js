function sleep(milliseconds){  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
};

async function  clickBtn(){
    console.log("click the button");
    var btn = document.querySelectorAll(".entity-result__actions .ember-view");
    for(let i=0;i<btn.length;i++){
        var text = btn[i].textContent;
        var res = text.trim();
        await sleep(1000);
        if(res=="Connect"){
            btn[i].click();
            await sleep(1000);
            var dismis = document.querySelector('[aria-label="Dismiss"]');
            var  val = document.querySelector('[aria-label="Send now"]');
            if(val==null){
                var msg = document.querySelector("[aria-label='Other']");
                msg.click();
                var connect = document.querySelector('[aria-label="Connect"]');
                connect.click();
                await sleep(1000);
                var btn2 = document.querySelector('[aria-label="Send now"]');
                btn2.click();
            }
            else{
                val.click();
                console.log("Request Sent");
            }
                
        }
    }
    console.log("all done")
};
clickBtn();