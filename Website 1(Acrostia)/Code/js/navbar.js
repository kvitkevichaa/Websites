$(document).ready(function() {
            
    $('#navbarSupportedContent ul.navbar-nav li.nav-item a.home').click(function () {
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.home').addClass('home-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.services').removeClass('services-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.about').removeClass('about-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.work').removeClass('work-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.contact').removeClass('contact-focus');
        $('div.show').removeClass('show');
      });
    $('#navbarSupportedContent ul.navbar-nav li.nav-item a.services').click(function () {
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.services').addClass('services-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.home').removeClass('home-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.about').removeClass('about-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.work').removeClass('work-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.contact').removeClass('contact-focus');
        $('div.show').removeClass('show');
    });
    $('#navbarSupportedContent ul.navbar-nav li.nav-item a.about').click(function () {
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.about').addClass('about-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.services').removeClass('services-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.home').removeClass('home-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.work').removeClass('work-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.contact').removeClass('contact-focus');
        $('div.show').removeClass('show');
    });
    $('#navbarSupportedContent ul.navbar-nav li.nav-item a.work').click(function () {
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.work').addClass('work-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.about').removeClass('about-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.services').removeClass('services-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.home').removeClass('home-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.contact').removeClass('contact-focus');
        $('div.show').removeClass('show');
    });
    $('#navbarSupportedContent ul.navbar-nav li.nav-item a.contact').click(function () {
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.contact').addClass('contact-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.work').removeClass('work-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.about').removeClass('about-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.services').removeClass('services-focus');
        $('#navbarSupportedContent ul.navbar-nav li.nav-item a.home').removeClass('home-focus');
        $('div.show').removeClass('show');
    });
      
  });