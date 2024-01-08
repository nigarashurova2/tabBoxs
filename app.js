let tabs = document.querySelectorAll(".tab")
let tabBoxs = document.querySelectorAll(".tabBox")

tabs.forEach((el, index)=>{
   
    el.addEventListener("click", ()=>{
        tabs.forEach((el)=>{
            el.classList.remove("activeTab")
        })
        tabBoxs.forEach((el)=>{
            el.classList.remove("activeBoxs")
        })
        el.classList.add("activeTab")
        document.querySelector(`.tabBox:nth-child(${index+1})`).classList.add("activeBoxs")
        
    })
})