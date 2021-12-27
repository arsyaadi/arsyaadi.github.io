const navItem = document.querySelectorAll(".nav-link")


navItem.forEach(el => {
    el.addEventListener('click',function(e){
        navItem.forEach(el => {
            if(el.classList.contains('active')){
                el.classList.remove('active')
            }
        })
        e.target.classList.toggle('active')
        // console.log('ok')
    })
});
