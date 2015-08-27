  var name, tel, add, orderList;

  $(document).on("pageinit", "#home", function () {
    $('.user_input').keydown(function () {
      if ($('#text-1').val() && $('#text-2').val() && $('#text-3').val()) {
        $('#start_order').attr('class', 'ui-btn');
      } else {
        $('#start_order').attr('class', 'ui-btn ui-state-disabled');
      }
    });
    $('.user_input').blur(function () {
      if ($('#text-1').val() && $('#text-2').val() && $('#text-3').val()) {
        $('#start_order').attr('class', 'ui-btn');
        name = $('#text-1').val();
        tel = $('#text-2').val();
        add = $('#text-3').val();
      } else {
        $('#start_order').attr('class', 'ui-btn ui-state-disabled');
        name = "";
        tel = "";
        add = "";
      }
    });
  });


  $(document).on("pageinit", "#MenuPage", function () {
    $('#drink_list input').unwrap('div');
    $('#drink_list input').focus(function () {
      $('#drink_list li').css({
        '-webkit-box-shadow': 'none'
      });
    });
  });


  $(document).on("pageshow", "#MenuPage", function () {
    $('#user_name').text(name);
    var drinkNum = $('#drink_list li').length;
    var orderList = new Array(drinkNum);
    $('.input_type1').change(function () {
      var num1 = $(this).val();
      if (num1) {
        $(this).parent('li').attr('L', num1);
      } else {
        $(this).parent('li').removeAttr('L');
      }
    });
    $('.input_type2').change(function () {
      var num2 = $(this).val();
      if (num2) {
        $(this).parent('li').attr('M', num2);
      } else {
        $(this).parent('li').removeAttr('M');
      }
    });
    $('#drink_list input').change(function () {
      var L_num = $('#drink_list li[L]').length;
      var M_num = $('#drink_list li[M]').length;
      if ((L_num + M_num) > 0) {
        $('#lets_order').removeAttr('class').attr('class', 'ui-btn ui-btn-right ');
      } else {
        $('#lets_order').removeAttr('class').attr('class', 'ui-btn ui-btn-right ui-state-disabled');
      }
    });
    $('#lets_order').on('click', function () {
      orderList = "";
      for (var ii = 0; ii < $('#drink_list li').length; ii++) {
        if ($('#drink_list li').eq(ii).attr('L')) {
          orderList = orderList + $('#drink_list li').eq(ii).find('span').text() + " L：" + $('#drink_list li').eq(ii).attr('L') + "杯" + "<br/>";
        }
        if ($('#drink_list li').eq(ii).attr('M')) {
          orderList = orderList + $('#drink_list li').eq(ii).find('span').text() + " M：" + $('#drink_list li').eq(ii).attr('M') + "杯" + "<br/>";
        }
      }
      console.log(orderList)
      $('#order_content').html(orderList);
    });
  });

  $(document).on("pageshow", "#ListPage", function () {
    $('#s1').text(name);
    $('#s2').text(tel);
    $('#s3').text(add);
  });