barba.init({
  views: [{
    namespace: 'home',

    afterEnter() {
      homePage()
    }
  }],
  transitions: [{
    name: 'opacity-transition',
    sync: true,
    leave(data) {
      return gsap.timeline().to(data.current.container, {
        opacity: 0
      })
        .fromTo('.box', {
          duration:1,
          x: '100%'
        }, {
          x: '-100%'
        }, 0)
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
})

function homePage() {

  const tabItem = document.querySelectorAll('.tabs__btn-item');
  const tabContent = document.querySelectorAll('.tabs__content-item');

  tabItem.forEach(function (element) {
    element.addEventListener('click', open);
  })

  function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;
    tabItem.forEach(function (item) {
      item.classList.remove('tabs__btn-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach(function (item) {
      item.classList.remove('tabs__content-item--active')
    });

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');

  }

  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu__list');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('list--active');
  });

  const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}