$(function(){

    window.navButton_isActive = false;

    document.getElementById('navButton').addEventListener('click', function(){
        if(!window.navButton_isActive){
            $('.nav').show()
            window.navButton_isActive = true
        }

        else{
            $('.nav').hide();
            window.navButton_isActive = false
        }
    })

    var navButtonSvg = document.getElementById('navButtonSvg');

    navButtonSvg.addEventListener('mouseover', function(){
        document.getElementById('navButtonSvg').style.fill = "red !important"
    })

    jQuery('img.svg').each(function(){

	var $img = jQuery(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');
    var imageHeight = $img.attr('height');
    var imageWidth = $img.attr('width');

    jQuery.get(imgURL, function(data) {

        var $svg = jQuery(data).find('svg');
        var $path = jQuery(data).find('svg path');

        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
            $path = $path.attr('id', imgID)
        }

        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+ ' replaced-svg');
        }

        $svg = $svg.removeAttr('xmlns:a');

        if(typeof imageHeight !== "undefined" && typeof imageWidth !== "undefined")
        {
            $svg.attr('width', imageWidth)
            $svg.attr('height', imageHeight)
        }

        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        $img.replaceWith($svg);

    }, 'xml');

});
});
