function injectScript(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.executeScript(tabs[0].id,{file:"content.js"})
    })
}

document.getElementById("btn").addEventListener('click',injectScript)