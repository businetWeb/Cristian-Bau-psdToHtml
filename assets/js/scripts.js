$(window).on('load', function(){
    $('.toggle-radio a').click(function(){
        var clicked = $(this).attr('data-select');
        $(this).closest('.toggle-radio').find('input[type="radio"]').each(function(){
            $(this).attr('checked', false);
            if($(this).val()==clicked){
                $(this).attr('checked', true);
            }
        });
        $('.toggle-radio a').each(function(){
            if($(this).prev().attr('checked') == 'checked'){
                $(this).addClass('activo');
            }else{
                $(this).removeClass('activo');
            }
        });
        if( $(this).closest('.toggle-radio').find('input[type="radio"]').first().attr('checked') == null ){
            $(this).closest('.toggle-radio').addClass('activo');
        }else{
            $(this).closest('.toggle-radio').removeClass('activo');
        }
        console.log($(this).closest('.toggle-radio').find('input[type="radio"]').first().attr('checked'));
        return false;
    });

    
    function headerSeparacion(){
        if($(window).width() > 992){
            var headerHeight = $('header .navigation-header .topbar').height();
            $('header').next().css('margin-top', headerHeight);
        }else{
            $('header').next().css('margin-top', '0');
        }
    }
    headerSeparacion()
    $(window).on('resize', function(){
        headerSeparacion();
    });
    
    $('.bars-toggler').click(function(){
        if($(this).hasClass('activo')){
            $(this).removeClass('activo');
            $('header .navigation-header .navigation').removeClass('d-block');
        }else{
            $('header .navigation-header .navigation').addClass('d-block');
            $(this).addClass('activo');
        } 
    });

    $('#buscador-interno .orden').click(function(){
        $('#buscador-interno .orden').each(function(){
            $(this).removeClass('activo');
        });
        $(this).addClass('activo');
        return false;
        
    });
    $( ".slider-range" ).slider({
        range: true,
        min: 0,
        max: 300,
        values: [ 0, 300 ],
        slide: function( event, ui ) {
          $( this ).closest('.rangoSlider').find('.amount').text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
    $( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
    " - $" + $( ".slider-range" ).slider( "values", 1 ) );

    $('#galeria').lightGallery({
        thumbnail: true,
    }); 
    //Sliders  
    $('.emprendimientos-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: false,
        dots: true
    });
   
});