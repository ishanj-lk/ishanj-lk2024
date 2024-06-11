$(document).ready(function(){

    /* This code snippet is handling a click event on an element with the id `burger`. This use to toggle the menu in the mobile and tablet view */
    let isBurger = false;
    $('#burger').click(function(){
        if(isBurger){
            isBurger = false;
            $('.navLinks').fadeOut("slow");
            $('.navLinks').css('display', 'none');
        }
        else{
            isBurger = true;
            $('.navLinks').fadeIn("slow");
            $('.navLinks').css('display', 'flex');
        }
    });

    /* This code block is setting up a scroll event listener on the `<main>` element. When the user scrolls within the `<main>` element, the function inside the `scroll` event handler is triggered. This use to change the color of the menu links when the user scrolls to a certain point */
    $('main').scroll(function(){
        let top = $(this).scrollTop();
        let height = $(this).height();
        let width = $(this).width();

        $('.navLink').css('color', '#000');

        if (top<height-300 ){
            $('#homeLink').css('color', '#ff014f');
        }
        if(top/height > 0.7 && top/height < 1.6){
            $('#workLink').css('color', '#ff014f');
        }
        if(top/height > 1.6 && top/height < 2.8){
            $('#projectLink').css('color', '#ff014f');
        }
        let mark = 3.8
        if (width>height) {
            mark = 4
        }
        if(top/height > 2.6 && top/height < mark){
            $('#newsLink').css('color', '#ff014f');
        }
        if(top/height > mark){
            $('#contactLink').css('color', '#ff014f');
        }
    });

    const desktopContainer = $('.projectCards');
    const mobileContainer = $('.carousel-inner');
    
    const request = fetch('https://projectsapi.ishanj.lk/getProjectsPublic', {method: 'POST'});
    request.then((response) => {
        return response.json();
    }).then((data) => {
        if (!data) {
            return
        }
        console.log(data);
        desktopContainer.empty();
        mobileContainer.empty();
        for (let i = 0; i < 4; i++) {
            let techs = data[i].technologies.split(';');
            desktopContainer.append(`
            <div class="projectCard">
                <img src="${data[i].imageUrl}" alt="Project Image">
                <h5>${data[i].title}</h5>
                <p>${data[i].description}</p>
                <a href="${data[i].pageUrl}">Visit Project</a>
                <div class="techs">
                    <span>${techs[0]}</span>
                    <span>${techs[1]}</span>
                    <span>${techs[2]}</span>
                    <span>${techs[3]}</span>
                </div>
            </div>
            `);

            let active = i == 0 ? 'active' : '';
            mobileContainer.append(`
            <div class="carousel-item ${active}"><div class="projectCard">
                <img src="${data[i].imageUrl}" alt="Project Image">
                <h5>${data[i].title}</h5>
                <p>${data[i].description}</p>
                <a href="${data[i].pageUrl}">Visit Project</a>
                <div class="techs">
                    <span>${techs[0]}</span>
                    <span>${techs[1]}</span>
                    <span>${techs[2]}</span>
                    <span>${techs[3]}</span>
                </div>
                </div>
            </div>    
            `)

        }
    }).catch((err) => {
        console.log(err);
    });
    
});