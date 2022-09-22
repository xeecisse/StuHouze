/* eslint-env browser */
(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    var galleryCarousel;
    var galleryCarouselNavbar;
    var $content = document.getElementById('main');
    var $registerModal = document.getElementById('register-modal');
    var $successModal = document.getElementById('success-modal');
    var registerModal = new window.A11yDialog($registerModal, $content);
    var successModal = new window.A11yDialog($successModal, $content);
    var $subscribeForm = document.getElementById('subscribe-form');
    var $galleryModal = document.getElementById('gallery-modal');
    var galleryModal = new window.A11yDialog($galleryModal, $content);
    registerModal.on('show', function(dialogEl) {
      dialogEl.classList.add('is-show');
    });

    registerModal.on('hide', function(dialogEl) {
      dialogEl.classList.remove('is-show');
    });
    successModal.on('show', function(dialogEl) {
      dialogEl.classList.add('is-show');
    });

    successModal.on('hide', function(dialogEl) {
      dialogEl.classList.remove('is-show');
    });
    galleryModal.on('show', function(dialogEl) {
      dialogEl.classList.add('is-show');

      galleryCarousel = new window.Flickity('.js-gallery-carousel', {
        pageDots: false,
        imagesLoaded: true,
        lazyLoad: true
      });

      galleryCarouselNavbar = new window.Flickity('.js-gallery-carousel__navbar', {
        asNavFor: '.js-gallery-carousel',
        contain: true,
        pageDots: false,
        imagesLoaded: true
      });
    });

    galleryModal.on('hide', function(dialogEl) {
      dialogEl.classList.remove('is-show');

      galleryCarousel.destroy();
      galleryCarouselNavbar.destroy();
    });

    $subscribeForm.addEventListener('submit', function(event) {
      event.preventDefault();

      var FD = new FormData($subscribeForm);

      // you can send this data to your server with ajax.
      // https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript#Using_FormData_bound_to_a_form_element
      console.log(FD.get('email'));
      registerModal.hide();
      $subscribeForm.reset();
      successModal.show();
    });

    // Your custom JavaScript goes here
  });
})();
