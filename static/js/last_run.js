var splide = new Splide( '#splide-rm2d-comp-same', {
    type: 'loop', 
    perPage: 3,
    perMove: 1,
    gap    : '2rem',
    padding: '3rem',
    lazyLoad: 'nearby',
    focus    : 0, //'left',
    // autoplay: false,
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        padding: '2rem',
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
        padding: '2rem',
      },
    },
  }
);
  
splide.mount();


var splide = new Splide( '#splide-kuka-base', {
  type: 'loop', 
  perPage: 1,
  perMove: 1,
  // gap    : '2rem',
  padding: '0rem',
  lazyLoad: 'nearby',
  focus    : 0,
  pagination: true,
  breakpoints: {
    640: {
      arrows: false,
    }
  },
  // arrow: 1,
  // paginationKeyboard: false,
  
}
);

splide.on( 'pagination:mounted', function ( data ) {
  // You can add your class to the UL element
  // data.list.classList.add( 'splide__pagination--custom' );
  // data.list.classList.splice(1, 1)
  // data.list.classList.remove('splide__pagination--ltr')
  // console.log('luotest', data.list.classList)

  // `items` contains all dot items
  // data.items.forEach( function ( item ) {
    // item.button.textContent = String( item.page + 1 );
  // } );

  // var paginationItems = document.querySelectorAll('.splide__pagination__page');
  // paginationItems.forEach(function (item, index) {
  //   item.textContent = index + 1;
  // });
} );

splide.mount();


var splide = new Splide( '#splide-rm2d-cc-base', {
  type: 'loop', 
  perPage: 1,
  perMove: 1,
  // gap    : '2rem',
  padding: '0rem',
  lazyLoad: 'nearby',
  focus    : 0,
  pagination: true,
  breakpoints: {
    640: {
      arrows: false,
    }
  },
  // arrow: 1,
  // paginationKeyboard: false,
  
}
);

splide.mount();


// -------------------------------------------------

var splide = new Splide( '#splide-rm2d-comp-diff', {
  type: 'loop', 
  perPage: 3,
  perMove: 1,
  gap    : '2rem',
  padding: '3rem',
  lazyLoad: 'nearby',
  focus    : 0, //'left',
  // autoplay: false,
  breakpoints: {
    640: {
      perPage: 2,
      gap    : '.7rem',
      padding: '2rem',
    },
    480: {
      perPage: 1,
      gap    : '.7rem',
      padding: '2rem',
    },
  },
}
);

splide.mount();





// -------------------------------------------------


var splide = new Splide( '#splide-rm2d-comp-diff-concave', {
  type: 'loop', 
  perPage: 3,
  perMove: 1,
  gap    : '2rem',
  padding: '3rem',
  lazyLoad: 'nearby',
  focus    : 0, //'left',
  // autoplay: false,
  breakpoints: {
    640: {
      perPage: 2,
      gap    : '.7rem',
      padding: '2rem',
    },
    480: {
      perPage: 1,
      gap    : '.7rem',
      padding: '2rem',
    },
  },
}
);

splide.mount();