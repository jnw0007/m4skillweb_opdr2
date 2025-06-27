let observer = new IntersectionObserver(
    function(entries){
        if (entries[0].isIntersecting === true){
            document.getElementsByTagName("main")[0].classList.add("in-beeld");
            observer.disconnect();
        }
        else{
            console.log("minder dan 50%");
        }
    }, {
        threshold: 0.5,
        
    }
);

observer.observe(document.getElementsByTagName("main")[0]);