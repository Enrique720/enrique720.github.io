$(function() {
 $('.nav-toggle').on('click', function() {
   const $button = $(this);
   const $nav = $button.closest('.greedy-nav');
   const isOpen = $button.attr('aria-expanded') === 'true';
   $button.attr('aria-expanded', String(!isOpen));
   $button.attr('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
   $nav.toggleClass('is-open', !isOpen);
 });

 $('#author-avatar-img')
    .on('mouseenter', function() {
      $(this).data('original-src', $(this).attr('src'));
      $(this).data('original-alt', $(this).attr('alt'));
      $(this).attr('src', '/images/jaguar.jpg');
      $(this).attr('alt', 'You found me!');
    })
    .on('mouseleave', function() {
      $(this).attr('src', $(this).data('original-src'));
      $(this).attr('alt', $(this).data('original-alt'));
    });  
});
