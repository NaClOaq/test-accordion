$(function(){
    $('.accordionWrapper > .accordionBtn').on('click', function() {
      $(this).parents(".accordionWrapper").toggleClass('view');
      $(this).parents(".accordionWrapper").children(".accordionCont").slideToggle();
    });
});


$(function(){
  // 初期設定
  var defaultCheckedValue = $('#ereaList [name="erea"]:checked').attr('value');
  if(defaultCheckedValue == 'erea-1') {
    $('#planList-1').removeClass('hide');
    $('#planList-2').addClass('hide');
  }else if(defaultCheckedValue == 'erea-2'){
    $('#planList-1').addClass('hide');
    $('#planList-2').removeClass('hide');
  }
  

  // erea切り替え
  $('input[name="erea"]').on('change', function() {
    var ereaValue = $(this).attr('value');
    // if (ereaValue == 'erea-1') {
    //   $('#planList-2').fadeOut('fast', function() {
    //     $('#planList-1').fadeIn('fast', function() {});
    //   });
    // } else if (ereaValue == 'erea-2') {
    //   $('#planList-1').fadeOut('fast', function() {
    //     $('#planList-2').fadeIn('fast', function() {});
    //   });



      // toggle
      if (ereaValue == 'erea-1') {
        $('#planList-2').toggle('fast', function() {$('#planList-1').toggle('fast', function() {})})
      } else if (ereaValue == 'erea-2') {
        $('#planList-1').toggle('fast', function() {$('#planList-2').toggle('fast', function() {})})


    };
  });


// typeRadioCheckBox
  $('input[class^="boxRadio-"]').on('click', function() {
    $('.'+boxRadioClass($(this))).prop('checked',false);
    if($(this).hasClass('checked')){
      $(this).prop('checked',false);
      $('.'+boxRadioClass($(this))).removeClass('checked');
    }else{
      $(this).prop('checked',true)
      $('.'+boxRadioClass($(this))).removeClass('checked');
      $(this).addClass('checked');
    };
  });

});


function boxRadioClass($elm) {
  var boxRadioClassList = $elm[0].className.split(" ");
  for (var i = 0; i < boxRadioClassList.length; i++) {
    if(boxRadioClassList[i].indexOf('boxRadio-') == 0){return boxRadioClassList[i];
    };
  };
};