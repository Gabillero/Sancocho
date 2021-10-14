//- verify which scripts to use
//- verify options per script
//- verify if hooks are ids or classes
//- remove unnecessary code


// Slider //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Superslides
$(function() {
    $('#slides').superslides({
        animation: 'slide',
        hashchange: false,
        pagination: true,
        play: 5000 // change to false to stop animation
    });
});


// Fitvids /////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    $(".media-embed").fitVids();
});



// Widget: Flickr //////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    $('#flickr').flickrfeed('127711888@N06', {                          // Your Flickr User ID
        limit: 8,                                                       // Thumbnails quantity
        imagesize: 'medium'                                             // Thumbnail size
    });
});



// Widget: Instagram ///////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    $("#instagram").jqinstapics({
        "user_id": "1497086074",                                                    // Your Instagram User ID
        "access_token": "1497086074.2562842.d950ec1c600343fc8b6f8aa76ee3acb1",      // Your Instagram Access Token
        "count": 8,                                                                 // Thumbnails quantity
        "size": "standard_resolution",                                              // Thumbnail size
        "class": "thumb large-thumb"                                                // Thumbnail class
    });
});



// Widget: Dribbble ////////////////////////////////////////////////////////////////////////////////////////////////////

$.jribbble.setToken('e1b2b748c02ef1fdd3cf942782b54bfb687faa01a7a351cef32deb9f98170d8e');
$.jribbble.users('davidappleyard').shots({per_page: 8}).then(function(shots) {
    var html = [];
    shots.forEach(function(shot) {
        html.push('<a href="' + shot.html_url + '" target="_blank">');
        html.push('<img src="' + shot.images.normal + '" class="thumb large-thumb">');
        html.push('</a>');
    });
    $('#dribbble-shots').html(html.join(''));
});


// Masonry + Infinite Scroll ///////////////////////////////////////////////////////////////////////////////////////////

$(function(){

    var $container = $('.grid');

    $container.imagesLoaded(function(){
        $container.masonry({
            itemSelector: '.grid-item',
            columnWidth: 350,
            gutter: 30
        });
    });

    $container.infinitescroll({
            navSelector  : '.site-pagination',                      // selector for the paged navigation
            nextSelector : '.site-pagination a.pagination-next',    // selector for the NEXT link (to page 2)
            itemSelector : '.grid-item',                            // selector for all items you'll retrieve
            loading: {
                finishedMsg: 'No more pages to load.',
                img: '../img/ajax-loader.gif'
            }
        },
        // trigger Masonry as a callback
        function( newElements ) {
            // hide new items while they are loading
            var $newElems = $( newElements ).css({ opacity: 0 });
            // ensure that images load before adding to masonry layout
            $newElems.imagesLoaded(function(){
                // show elems now they're ready
                $newElems.animate({ opacity: 1 });
                $container.masonry( 'appended', $newElems, true );
            });
        }
    );

});

