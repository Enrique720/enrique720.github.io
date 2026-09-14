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

 function flashCopied($button) {
   const $label = $button.find('.js-copy-bibtex-label');
   const original = $label.text();
   if ($button.data('copy-timer')) {
     clearTimeout($button.data('copy-timer'));
   } else {
     $button.data('copy-original', original);
   }
   $label.text('Copied!');
   $button.addClass('is-copied');
   $button.data('copy-timer', setTimeout(function() {
     $label.text($button.data('copy-original'));
     $button.removeClass('is-copied');
     $button.removeData('copy-timer');
   }, 1800));
 }

 $(document).on('click', '.js-copy-bibtex', function() {
   const $button = $(this);
   const text = $button.attr('data-bibtex');
   if (!text) { return; }
   if (navigator.clipboard && navigator.clipboard.writeText) {
     navigator.clipboard.writeText(text).then(function() {
       flashCopied($button);
     });
     return;
   }
   // Fallback for browsers without the async clipboard API.
   const $scratch = $('<textarea>').val(text).css({ position: 'fixed', opacity: 0 }).appendTo('body');
   $scratch[0].select();
   document.execCommand('copy');
   $scratch.remove();
   flashCopied($button);
 });
});
