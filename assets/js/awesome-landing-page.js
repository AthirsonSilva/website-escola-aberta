/*!

 =========================================================
 * Awesome Landing Page - v1.2.2
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/awesome-landing-page
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/awesome-landing-page/blob/master/LICENSE.md)
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

let big_image;
$().ready(function() {
    $('.selector').click(function() {
        SelectColor(this);
    });
    let selectCol = 0;
    if (selectCol == 0) {
        if ($('body').hasClass('landing-page1')) {

        }
    }

});

$(window).on('scroll', () => {
    responsive = $(window).width();
    if (responsive >= 768) {
        parallax();
    }
});

function SelectColor(btn) {
    oldColor = $('.filter-gradient').attr('data-color');
    newColor = $(btn).attr('data-color');

    oldButton = $('a[id^="Demo"]').attr('data-button');
    newButton = $(btn).attr('data-button');

    $('.filter-gradient').removeClass(oldColor).addClass(newColor).attr('data-color', newColor);

    $('a[id^="Demo"]').removeClass("btn-" + oldButton).addClass("btn-" + newButton).attr('data-button', newButton);

    $('.carousel-indicators').removeClass("carousel-indicators-" + oldColor).addClass("carousel-indicators-" + newColor);

    $('.card').removeClass("card-" + oldColor).addClass("card-" + newColor);

    $('.selector').removeClass('active');
    $(btn).addClass('active');
}

$('.switch').each(() => {
    let selector = $(this).parent('li')
    $(this).click(function() {
        if (selector.siblings().hasClass('active')) {
            selector.addClass('active');
            selector.siblings().removeClass('active');
            let slide = $(this).attr('data-slide')
            let lastClass = $('body').attr('class').split(' ').pop();
            $('body').removeClass(lastClass);
            $('body').addClass('landing-page' + slide);
        }
    });
});

let parallax = debounce(() => {
    no_of_elements = 0;
    $('.parallax').each(() => {
        let $elem = $(this);

        if (isElementInViewport($elem)) {
            let parent_top = $elem.offset().top;
            let window_bottom = $(window).scrollTop();
            let $image = $elem.find('.parallax-background-image')
            let $oVal = ((window_bottom - parent_top) / 3);
            $image.css('margin-top', $oVal + 'px');
        }
    });
}, 6)

function debounce(func, wait, immediate) {
    let timeout;
    return () => {
        let context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};


function isElementInViewport(elem) {
    let $elem = $(elem);

    // Get the scroll position of the page.
    let scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    let viewportTop = $(scrollElem).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    let elemTop = Math.round($elem.offset().top);
    let elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

let btn = document.querySelector("#top-page")

btn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

/* let jQueryScript = document.createElement('index');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

let btn = $("#back-to-top");

btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
}); */

const investimento = document.querySelector('#investimento')
const medidas = document.querySelector('#medidas')
const efeitos = document.querySelector('#efeitos')
const demanda = document.querySelector('#demanda')
const casos = document.querySelector('#casos')
const mortes = document.querySelector('#mortes')
const amazon = document.querySelector('#amazon')
const ifood = document.querySelector('#ifood')
const detran = document.querySelector('#detran')
const magalu = document.querySelector('#magalu')

let counter_investimento = true
let counter_medidas = true
let counter_efeitos = true
let counter_demanda = true
let counter_casos = true
let counter_mortes = true
let counter_amazon = true
let counter_ifood = true
let counter_detran = true
let counter_magalu = true


investimento.addEventListener('click', () => {
  if (counter_investimento) {
    investimento.style.transform = "scale(1.4)"
    counter_investimento = false
  } else {
    investimento.style.transform = "scale(1.0)"
    counter_investimento = true
  }
})

medidas.addEventListener('click', () => {
  if (counter_medidas) {
    medidas.style.transform = "scale(1.4)"
    counter_medidas = false
  } else {
    medidas.style.transform = "scale(1.0)"
    counter_medidas = true
  }
})

efeitos.addEventListener('click', () => {
  if (counter_efeitos) {
    efeitos.style.transform = "scale(1.4)"
    counter_efeitos = false
  } else {
    efeitos.style.transform = "scale(1.0)"
    counter_efeitos = true
  }
})

demanda.addEventListener('click', () => {
  if (counter_demanda) {
    demanda.style.transform = "scale(1.4)"
    counter_demanda = false
  } else {
    demanda.style.transform = "scale(1.0)"
    counter_demanda = true
  }
})

casos.addEventListener('click', () => {
  if (counter_casos) {
    casos.style.transform = "scale(1.4)"
    counter_casos = false
  } else {
    casos.style.transform = "scale(1.0)"
    counter_casos = true
  }
})

mortes.addEventListener('click', () => {
  if (counter_mortes) {
    mortes.style.transform = "scale(1.4)"
    counter_mortes = false
  } else {
    mortes.style.transform = "scale(1.0)"
    counter_mortes = true
  }
})

amazon.addEventListener('click', () => {
  if (counter_amazon) {
    amazon.style.transform = "scale(1.4)"
    counter_amazon = false
  } else {
    amazon.style.transform = "scale(1.0)"
    counter_amazon = true
  }
})

ifood.addEventListener('click', () => {
  if (counter_ifood) {
    ifood.style.transform = "scale(1.4)"
    counter_ifood = false
  } else {
    ifood.style.transform = "scale(1.0)"
    counter_ifood = true
  }
})

detran.addEventListener('click', () => {
  if (counter_detran) {
    detran.style.transform = "scale(1.4)"
    counter_detran = false
  } else {
    detran.style.transform = "scale(1.0)"
    counter_detran = true
  }
})

magalu.addEventListener('click', () => {
  if (counter_magalu) {
    magalu.style.transform = "scale(1.4)"
    counter_magalu = false
  } else {
    magalu.style.transform = "scale(1.0)"
    counter_magalu = true
  }
})
