$(document).ready(function() {
  $('li').hide()

  $('dd').each(function(idx, elem) {
    $(this).click(function() {
      $('li').hide().eq(idx).show()
    })
  })
})
