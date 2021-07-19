 window.onload = function () {
    const white_car = document.querySelector('.blockWithImg')
    const width_container = document.querySelector('.witeCar__container').clientWidth;
    let html_page = 0
    let width =0;
    myScreen()
    //вызывается при изменении размера экрана
    window.addEventListener("resize", myScreen())


    window.setTimeout(function () {
        document.querySelector('.place_for_blur').classList.remove("my_blur");
        document.querySelector('.loaderArea').classList.add("loader_stop");
    }, 2000);
   
    
   }

   
window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };

function myScreen() {
    html_page = document.querySelectorAll('html')[0].offsetWidth;
    // console.log(html_page);
    
    if (html_page < 2510 && html_page > 1068) {     
        width = (html_page  - 1068) / 2 +  width_container ; 
    } 
    else {
        if (window.innerWidth > 2510) {
            width = 1237;
        }
    }
    
    white_car.style.width = width + "px"; 
}


const animItems = document.querySelectorAll('.animation');
// window.addEventListener('scroll', animOnScroll())



const white_car = document.querySelector('.blockWithImg')
const width_container = document.querySelector('.witeCar__container').clientWidth;
let html_page = 0


let width =0;
//вызывается при изменении размера экрана
window.addEventListener("resize", function(event) {
html_page = document.querySelectorAll('html')[0].offsetWidth;
// console.log(html_page);

if (html_page < 2510 && html_page > 1068) {     
    width = (html_page  - 1068) / 2 +  width_container ; 
} 
else {
    if (window.innerWidth > 2510) {
        width = 1237;
    }
}

white_car.style.width = width + "px"; 
})
  
  const swiper = new Swiper('.hiddenoverflow', {
    navigation: {
        nextEl: '.str__right',
        prevEl: '.str__left',
    },

    pagination: {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true
    },

    spaceBetween: 30,
    observer: true,
    observerParents: true,
    observerSlideChildren: true,
    speed:1000,

    breakpoints: {
        1079: {
            slidesPerView:3,
            freeMode: false,
            simulateTouch: false,
        },

        917: {
            slidesPerView:2.6,
            freeMode: false,
            simulateTouch: false,
        }, 

        768: {
            slidesPerView:2,
            freeMode: false,
            simulateTouch: false,
        },

        500: {
            slidesPerView:1.5,
            freeMode: true,
            simulateTouch: true,
        },

        350: {
            slidesPerView:0.9,
            freeMode: true,
            simulateTouch: true,
        }
    }
});


const content_page_all = document.querySelectorAll('.content_page');
const title_block = document.querySelectorAll('.title_block')


function ChangeActiveTitle(el) {
    for (let i = 0; i < title_block.length; i++) {
        title_block[i].classList.remove('title_block_active');
    }
    title_block[el].classList.add('title_block_active');
}


let currTab = 0
//узнаём с помощью target элемент, по которому кликнули
for (let i = 0; i<title_block.length; i++) {
    title_block[i].addEventListener('click', e => {
        if (e.target.dataset.title === "1" || e.target.dataset.title === "2" || e.target.dataset.title === "3" ) 
            {
                currTab = e.target.dataset.title - 1;
                // console.log(currTab)
                ChangeActiveTitle(currTab)
            }

            for (let i =0; i < content_page_all.length; i++) 
            {
                content_page_all[i].classList.remove('active_page');
                if (content_page_all[i].dataset.page == (currTab+1)) 
                    {
                        content_page_all[i].classList.add('active_page');
                    }
            }

    })
}

const formTabs = document.querySelectorAll('.formTabs')
const formTabs_container = document.querySelector('.formTabs__container')
const formPages = document.querySelectorAll('.formPage__kawaii')


function ChangeActiveForm(el) {
    for (let i = 0; i < formTabs.length; i++) 
         { formTabs[i].classList.remove('formTabs__active'); }
    el.classList.add('formTabs__active');
}

let formTab = 0
//узнаём с помощью target элемент, по которому кликнули
formTabs_container.addEventListener('click', e => {
    if (e.target.dataset.idea === "login" || e.target.dataset.idea === "enter" ) 
    {
        formTab = e.target.dataset.idea;
        
        ChangeActiveForm(e.target)
    }

    for (let i =0; i < formPages.length; i++) 
        {
            formPages[i].classList.remove('formPage__active');
            if (formPages[i].dataset.page === formTab) 
                {
                    formPages[i].classList.add('formPage__active');
                }
        }

})



//========================================CATALOG
const show__more = document.querySelector('.show__more'),
 icon_search = document.querySelector('.imgSearch'),
 icon_close = document.querySelector('.close'),
 cards_array = document.querySelectorAll('.card_block_catalog'),
 inputZero = document.querySelector('.IputZero'),
 before_click = document.querySelectorAll('.active__before__click__btn'),
 after_click = document.querySelectorAll('.active__after__click__btn');

let was_search = false;
let input_value = "";
let check_morebtn = false;


const subclass = document.querySelectorAll('.subclass');
let subclassCURR = 0;

for (let i = 0; i<subclass.length; i++) {
    subclass[i].addEventListener('click', e => {
        if (e.target.dataset.subletter === "b" || e.target.dataset.subletter === "c" || e.target.dataset.subletter === "d" || e.target.dataset.subletter === "j") 
            {
                subclassCURR = e.target.dataset.subletter;
                console.log(subclassCURR);
                reText_filter(subclassCURR);
                filterSearchLetter();
            }
        else {
            if (e.target.dataset.all === "all") {
                console.log("all");
                shower();
                document.querySelector('.subclass_block').textContent = "Класс автомобиля";
                for (let i = 0; i<cards_array.length; i++) {
                    cards_array[i].classList.remove('hideAllInputZero__1');
                    cards_array[i].classList.add('hideAllInputZero__3');
                }  
            }
        }    

    })
}

function reText_filter(el) {
    for (let i = 0; i<subclass.length; i++) {
        if (subclass[i].dataset.subletter == el) {
            document.querySelector('.subclass_block').textContent = subclass[i].textContent;
        }
    }
}

show__more.addEventListener('click', () => {
    check_morebtn = true;
    show__more.textContent = "Перейти в каталог"
    hello(); 
    if (was_search == false) {
        shower();
    }
    checker_morebtn();
    filterSearchLetter()
})


function hello(){
   if ( show__more.textContent == "Перейти в каталог" ) {
    show__more.setAttribute("onclick", "window.open('hello.html')");
   }
}

function timeEnterMark() {
    document.querySelector('.search_form').placeholder = "Введите марку машины";
}

function vocabulary() {

    if (input_value == "") {
        document.querySelector('.search_form').placeholder = "Вы ничего не ввели!";
        setTimeout(timeEnterMark, 2000);
    }
     
    else {
        if (input_value == "лада" || input_value == "lada") 
        {input_value = "lada";}
        else {
            if (input_value == "бмв" || input_value == "bmw") 
            {input_value = "bmw";}
            else {
                if (input_value == "фиат" || input_value == "fiat") 
                {input_value = "fiat";}
                else {
                    if (input_value == "фольксваген" || input_value == "volkswagen") 
                    {input_value = "volk";}
                    else {
                        if (input_value == "мильтсубиси" || input_value == "mitsubishi" || input_value == "митсубиси") 
                        {input_value = "mitsub";}
                        else {
                                icon_search.classList.add('hideCard');
                                icon_close.classList.add('show__close');
                                inputZero.classList.add('IputZero_show');
                                inputZero.classList.add('hideAllInputZero__3');
                                hider();
                            }
                        }
                    }
                }
            }
        }
}    

function doSearch() {
    for (let i = 0; i<before_click.length; i++) 
    {
        if (before_click[i].dataset.marks == input_value) {
            
            before_click[i].classList.remove('hideAllInputZero__1');
            before_click[i].style.display = "block";
            before_click[i].classList.add('hideAllInputZero__3');
        }
    }
}

function checker_morebtn() {
    for (let i = 0; i<cards_array.length; i++) {
        cards_array[i].style.display = "none";
        cards_array[i].classList.remove('hideAllInputZero__3');
    }



    doSearch();
    if (check_morebtn == true) {
        for (let i = 0; i<after_click.length; i++) 
        {
            if (after_click[i].dataset.marks == input_value) {
                after_click[i].style.display = "block";
                after_click[i].classList.add('hideAllInputZero__3');
            }
        }
    }

}

function filterSearchLetter() {
    for (let i = 0; i<cards_array.length; i++) {
        cards_array[i].style.display = "none";
        cards_array[i].classList.remove('hideAllInputZero__3');
    }
    for (let i = 0; i<before_click.length; i++) 
    {
        if (before_click[i].dataset.letter == subclassCURR) {
            before_click[i].classList.remove('hideAllInputZero__1');
            before_click[i].style.display = "block";
            before_click[i].classList.add('hideAllInputZero__3');
        }

    }

    if (check_morebtn == true) {
        for (let i = 0; i<after_click.length; i++) 
        {
            if (after_click[i].dataset.letter == subclassCURR) {
                after_click[i].style.display = "block";
                after_click[i].classList.add('hideAllInputZero__3');
            }
        }
    }
}


function hider() {
    for (let i = 0; i<cards_array.length; i++) {
        cards_array[i].classList.remove('hideAllInputZero__3');
    }  

    if (check_morebtn == false) {
        for (let i = 0; i<before_click.length; i++) {
        before_click[i].classList.add('hideAllInputZero__1');
        setTimeout( function() { before_click[i].style.display = "none"},400);
        }
    }
    else {
        for (let i = 0; i<before_click.length; i++) {
            before_click[i].classList.add('hideAllInputZero__1');
            setTimeout( function() { before_click[i].style.display = "none"},400);
            }

        for (let i = 0; i<after_click.length; i++) {
        after_click[i].classList.add('hideAllInputZero__1');
        setTimeout( function() { after_click[i].style.display = "none"},400);
        }
    }   
}

function shower() {
    if (check_morebtn == false) {
        for (let i = 0; i<before_click.length; i++) {
        
        before_click[i].style.display = "block";
        before_click[i].classList.add('hideAllInputZero__3');
        }
    }
    else {
        for (let i = 0; i<before_click.length; i++) {
            before_click[i].style.display = "block";
            before_click[i].classList.add('hideAllInputZero__3');
            after_click[i].style.display = "block";
            after_click[i].classList.add('hideAllInputZero__3');
        }
    }


}




function search() {
input_value = document.querySelector('.search_form').value.toLowerCase();
vocabulary();
checker_morebtn();

    if (input_value != "") { 
        icon_search.classList.add('hideCard');
        icon_close.classList.add('show__close');
    }
}

function enterClick() {
    search();
    if (input_value == "") {
        for (let i = 0; i<cards_array.length; i++) {
            cards_array[i].style.display = "block";
        }
    }
}

function close_f() {
    icon_search.classList.remove('hideCard');
    icon_close.classList.remove('show__close');
    document.querySelector('.search_form').value = "";
    inputZero.classList.remove('IputZero_show'); 
    shower();
    document.querySelector('.subclass_block').textContent = "Класс автомобиля";
    for (let i = 0; i<cards_array.length; i++) {
        cards_array[i].classList.remove('hideAllInputZero__1');
        cards_array[i].classList.add('hideAllInputZero__3');
    }   
}



icon_search.addEventListener('click', () => {
    search();
    if (input_value == "") {
        for (let i = 0; i<cards_array.length; i++) {
            cards_array[i].style.display = "block";
        }
    }
})

icon_close.addEventListener('click', () => {   
   close_f() 
})

document.querySelector('.search_form').onkeypress = function (el) {
    if (el.charCode == "13") {
        enterClick() 
    }
}






