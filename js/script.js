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
        console.log(top);

        $('.navLink').css('color', '#000');

        if (top<600 ){
            $('#homeLink').css('color', '#ff014f');
        }
        if(top > 600 && top <1500){
            $('#workLink').css('color', '#ff014f');
        }
        if(top > 1500 && top < 2400){
            $('#projectLink').css('color', '#ff014f');
        }
        if(top > 2400 && top < 3300){
            $('#newsLink').css('color', '#ff014f');
        }
        if(top > 3300){
            $('#contactLink').css('color', '#ff014f');
        }
    });

    const desktopContainer = $('.projectCards');
    const mobileContainer = $('.carousel-inner');
    
    const request = fetch('https://dashboardapi.ishanj.lk/api/projects');
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
            let techs = data[i].techs.split(';');
            desktopContainer.append(`
            <div class="projectCard">
                <img src="${data[i].img}" alt="Project Image">
                <h5>${data[i].title}</h5>
                <p>${data[i].description}</p>
                <a href="${data[i].page}" target="_blank">View Project</a>
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
                <img src="${data[i].img}" alt="Project Image">
                <h5>${data[i].title}</h5>
                <p>${data[i].description}</p>
                <a href="${data[i].page}" target="_blank">View Project</a>
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

    const newsContainer = $('.newsCards');
    const request2 = fetch('https://dashboardapi.ishanj.lk/api/news');
    request2.then((response) => {
        return response.json();
    }).then((data) => {
        if (!data) {
            return
        }
        console.log(data);
        newsContainer.empty();
        for (let i = 0; i < 4; i++) {
            newsContainer.append(`
            <div class="newsCard">
                <h5>${data[i].title}</h5>
                <p>${data[i].description}</p>
                <div class="newsInfo">
                    <a href="${data[i].page}" target="_blank">Read more</a>
                    <p class="newDate">${data[i].date}</p>
                </div>
            </div>
            `);
        }
    }).catch((err) => {
        console.log(err);
    });

    $('#sendMail').click(()=> {
        const name = $('#name').val();
        const subject = $('#subject').val();
        const message = $('#message').val();
        const data = {
            name,
            subject,
            message
        }
        $('#sendMail').attr('href', `mailto:ishanrashithajayasinghe@gmail.com?subject=${subject}&body=${message}%0A%0ABest Regards,%0A${name}.`);
    });
    
    
});