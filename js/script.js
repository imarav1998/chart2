$(function(){
    function bar(){
        $('.chart-top-bar').each(function(){
            var per1 = $(this).attr('percentage');
            var per2 = 0-per1;
            if(per1 > 0){
                $(this).find('span').css({"bottom":"0%","top":""});
                $(this).find('span').animate({
                    'height': per1 + '%'
                },2000);
            }
            else{
                $(this).find('span').css({"top":"100%", "bottom":""});
                $(this).find('span').animate({
                    'height': per2 + '%'
                },2000);
            }
        });
    
        $('.chart-bot-bar').each(function(){
            var per3 = $(this).attr('percentage');
            var per4 = 0-per3;
            if(per3 > 0){
                $(this).find('span').css({"bottom":"100%","top":""});
                $(this).find('span').animate({
                    'height': per3 + '%'
                },2000);
            }
            else{
                $(this).find('span').css({"top":"0","bottom":""});
                $(this).find('span').animate({
                    'height': per4 + '%'
                },2000);
            }
        });
    }
    bar();
    var i = 0;
    $('.upd').click(function(){
        if(i==0){
            $(this).text('close');
            $('.update').show();
            $('.sub').show();
            i++;
        }
        else{
            $(this).text('update');
            $('.sub').hide();
            $('.update').hide();
            i=0;
        }
    });
    $('.sub').click(function(){
        var top = $('.chart-top-bar');
        var bot = $('.chart-bot-bar');
        var d1 = $('.num1');
        var d2 = $('.num2');
        for(var i=0;i<top.length;i++){
            if(d1.eq(i).val() <= 100 && d1.eq(i).val() >= -100 && d2.eq(i).val() <= 100 && d2.eq(i).val() >= -100){
                top.eq(i).attr('percentage',d1.eq(i).val());
                bot.eq(i).attr('percentage',d2.eq(i).val());
            }
            else{
                alert('please enter value in the range of chart');
            }
        }
        bar();
    });
});