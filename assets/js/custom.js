$(function() {
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
