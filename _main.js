$(function(){
    $('.accordionWrapper > .accordionBtn').on('click', function() {
      $(this).parents(".accordionWrapper").toggleClass('view');
      $(this).parents(".accordionWrapper").children(".accordionCont").slideToggle();
    });
});


$(function(){
  // erea切り替え
  $('input[name="erea"]').on('click', function() {
    var ereaValue = $(this).attr('value');
    if (ereaValue == 'erea-1') {
      $('#planList-2').fadeOut('slow', function() {
        $('#planList-1').fadeIn('slow', function() {});
      });
      
    } else if (ereaValue == 'erea-2') {
      $('#planList-1').fadeOut('slow', function() {
        $('#planList-2').fadeIn('slow', function() {});
      });
    };
  });


// typeRadio
  $('input[class^="boxRadio-"]').on('click', function() {
    $('.'+boxRadioClass($(this))).prop('checked',false);
    $(this).prop('checked',true);
  });



});


function boxRadioClass($elm) {
  var boxRadioClassList = $elm[0].className.split(" ");
  for (var i = 0; i < boxRadioClassList.length; i++) {
    if(boxRadioClassList[i].indexOf('boxRadio-') == 0){return boxRadioClassList[i];
    };
  };
};