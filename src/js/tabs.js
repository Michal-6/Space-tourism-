const tabs = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.text-content');
const dist = document.querySelectorAll('.dist');
const time = document.querySelectorAll('.time');
const img = document.querySelectorAll('.destination-img, .crew-img, .tech-img');

tabs.forEach((tab, index)=> {
    tab.addEventListener('click', ()=> {
        tabs.forEach(tab=> {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        content.forEach(content => {content.classList.remove('active')})
        content[index].classList.add('active');

        if(dist.length > 0){
            dist.forEach(dist => {dist.classList.remove('active')})
            dist[index].classList.add('active');
            time.forEach(time => {time.classList.remove('active')})
            time[index].classList.add('active');
        }

        img.forEach(img => {img.classList.remove('active')})
        img[index].classList.add('active');
    })
})
