function changeMode(){
    //console.log("Button clicked");

    var header = document.getElementById("home");
    if(header.classList.contains("light-mode"))
    {
        header.classList.remove("light-mode");
        header.classList.add("dark-mode");
    }
    else
    {
        header.classList.remove("dark-mode");
        header.classList.add("light-mode");
    }

    var body = document.getElementById("body");
    //var header = document.getElementById("home");
    //var btn = document.getElementById("switchMode");
    if(body.classList.contains("light-mode"))
    {
        //btn.classList.remove("light-mode");
        //btn.classList.add("dark-mode");
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        //header.classList.remove("light-mode");
        //header.classList.add("dark-mode");
        //var elements=document.getElementsByClassName("light-mode");
        /*for(var i=0;i<elements.length;i++)
        {
            elements[i].classList.remove("light-mode");
            elements[i].classList.add("dark-mode");
        }*/
        
    }
    else
    {
        //btn.classList.add("light-mode");
        //btn.classList.remove("dark-mode");
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        //header.classList.remove("dark-mode");
        //header.classList.add("light-mode");
        /*var elements=document.getElementsByClassName("dark-mode");
        for(var i=0;i<elements.length;i++)
        {
            elements[i].classList.remove("dark-mode");
            elements[i].classList.add("light-mode");
        }*/
        
    }

    var btn = document.getElementById("switchMode");
    if(btn.classList.contains("light-mode"))
    {
        btn.classList.remove("light-mode");
        btn.classList.add("dark-mode");
    }
    else
    {
        btn.classList.add("light-mode");
        btn.classList.remove("dark-mode");
    }

    var services = document.getElementById("services");
    if(services.classList.contains("light-mode"))
    {
        services.classList.remove("light-mode");
        services.classList.add("dark-mode");
    }
    else
    {
        services.classList.add("light-mode");
        services.classList.remove("dark-mode");
    }

    var work = document.getElementById("work");
    if(work.classList.contains("light-mode"))
    {
        work.classList.remove("light-mode");
        work.classList.add("dark-mode");
    }
    else
    {
        work.classList.add("light-mode");
        work.classList.remove("dark-mode");
    }

    var headings = document.getElementById("headings");
    var name = document.getElementById("name");
    if(headings.classList.contains("light-mode"))
    {
        headings.classList.remove("light-mode");
        headings.classList.add("dark-mode");
        name.classList.remove("light-mode");
        name.classList.add("dark-mode");
        
    }
    else
    {
        headings.classList.add("light-mode");
        headings.classList.remove("dark-mode");
        name.classList.add("light-mode");
        name.classList.remove("dark-mode");
        
    }

    /*var download = document.getElementById("download");
    if(download.classList.contains("btn-light"))
    {
        download.classList.remove("btn-light");
        download.classList.add("btn-dark");
    }
    else
    {
        download.classList.add("btn-light");
        download.classList.remove("btn-dark");
    }*/



    var modal = document.getElementById("modal");
    if(modal.classList.contains("light-mode"))
    {
        modal.classList.remove("light-mode");
        modal.classList.add("dark-mode");
    }
    else
    {
        modal.classList.add("light-mode");
        modal.classList.remove("dark-mode");
    }

    var para=document.getElementsByTagName("p")
    for(let i=0;i<para.length;i++)
    {
        if(para[i].classList.contains("light-mode"))
        {
            para[i].classList.remove("light-mode");
            para[i].classList.add("dark-mode");
        }
        else
        {
            para[i].classList.remove("dark-mode");
            para[i].classList.add("light-mode");   
        }
    }

    var circles=document.getElementsByClassName("circle")
    for(let i=0;i<circles.length;i++)
    {
        if(circles[i].classList.contains("light-mode"))
        {
            circles[i].classList.remove("light-mode");
            circles[i].classList.add("dark-mode");
        }
        else
        {
            circles[i].classList.remove("dark-mode");
            circles[i].classList.add("light-mode");   
        }
    }

    var resume=document.getElementById("resume")
    if(resume.classList.contains("light-mode"))
    {
        resume.classList.remove("light-mode");
        resume.classList.add("dark-mode");
    }
    else
    {
        resume.classList.add("light-mode");
        resume.classList.remove("dark-mode");
    }

    
}