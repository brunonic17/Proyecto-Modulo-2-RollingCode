const d = document, 
w = window;

export default function scrollTopBtn (btn){
    let $scrollBtn = d.querySelector(btn)
    w.addEventListener("scroll", e => {
        let $scrollTopBtn = d.documentElement.scrollTop;
        // console.log($scrollTopBtn)
        if ($scrollTopBtn > 1000) {
            $scrollBtn.classList.remove("hidden")
        }else{
            $scrollBtn.classList.add('hidden')
        }
    }
    )
    d.addEventListener("click", (e)=>{
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        
    }

}
    )}