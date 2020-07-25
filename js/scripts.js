function changeMode(){
    console.log("Button clicked");

    var body = document.getElementById("body");
    if(body.classList.contains("light-mode"))
    {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }
    else
    {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
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
    if(headings.classList.contains("light-mode"))
    {
        headings.classList.remove("light-mode");
        headings.classList.add("dark-mode");
    }
    else
    {
        headings.classList.add("light-mode");
        headings.classList.remove("dark-mode");
    }

    var download = document.getElementById("download");
    if(download.classList.contains("light-mode"))
    {
        download.classList.remove("light-mode");
        download.classList.add("dark-mode");
    }
    else
    {
        download.classList.add("light-mode");
        download.classList.remove("dark-mode");
    }
    
}