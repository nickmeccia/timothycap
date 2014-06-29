$(document).ready(function() {
  $('li').hide()
  $('li:first-child').show()
  $('dd:first-child img').addClass('selected')

  $('dd').each(function(idx, elem) {
    $(this).click(function() {
      $('img').removeClass('selected')
      $(this).find('img').addClass('selected')
      $('li').hide().eq(idx).show()
    })
  })
})
