$(document).ready(function(){var o=$("#top"),e=window.location.pathname.split("/");"tagged"!==e[1]&&"page"!==e[1]&&"search"!==e[1]&&"day"!==e[1]||$(o).removeClass("is-home").addClass("is-nothome"),$(".is-nothome .hp-only").remove()}),$(document).ready(function(){$(".post-timeago").first().removeClass("ribbon-sep").addClass("first-timeago")}),$(document).ready(function(){$(".totalpages-count em").text("/")}),$(document).ready(function(){var o=$(".is-home .follow-link");$(window).scroll(function(){$(this).scrollTop()>50?$(o).addClass("slideUp"):$(o).removeClass("slideUp")})}),$(document).ready(function(){var o=$(".back-top");$(o).hide(),$(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(o).fadeIn():$(o).fadeOut()}),$(o).click(function(o){o.preventDefault(),$("body,html").animate({scrollTop:0},800)})})}),$(document).ready(function(){var o=$("#top"),e=$(".sidebar-link");$(e).click(function(e){e.preventDefault();var t=$(this).attr("href");$(t).toggleClass("sidebar-visible"),$(o).toggleClass("has-sidebar-visible").delay(500).animate({scrollTop:0},800)})}),$(function(){$("body").css("opacity","1")});

/*! Superslides - v0.6.2 - 2013-07-10
 * https://github.com/nicinabox/superslides
 * Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(i,t){var n,e="superslides";n=function(n,e){this.options=t.extend({play:!1,animation_speed:600,animation_easing:"swing",animation:"slide",inherit_width_from:i,inherit_height_from:i,pagination:!0,hashchange:!1,scrollable:!0,elements:{preserve:".preserve",nav:".slides-navigation",container:".slides-container",pagination:".slides-pagination"}},e);var s=this,o=t("<div>",{"class":"slides-control"}),a=1;this.$el=t(n),this.$container=this.$el.find(this.options.elements.container);var r=function(){return a=s._findMultiplier(),s.$el.on("click",s.options.elements.nav+" a",function(i){i.preventDefault(),s.stop(),t(this).hasClass("next")?s.animate("next",function(){s.start()}):s.animate("prev",function(){s.start()})}),t(document).on("keyup",function(i){37===i.keyCode&&s.animate("prev"),39===i.keyCode&&s.animate("next")}),t(i).on("resize",function(){setTimeout(function(){var i=s.$container.children();s.width=s._findWidth(),s.height=s._findHeight(),i.css({width:s.width,left:s.width}),s.css.containers(),s.css.images()},10)}),t(i).on("hashchange",function(){var i,t=s._parseHash();i=t&&!isNaN(t)?s._upcomingSlide(t-1):s._upcomingSlide(t),i>=0&&i!==s.current&&s.animate(i)}),s.pagination._events(),s.start(),s},h={containers:function(){s.init?(s.$el.css({height:s.height}),s.$control.css({width:s.width*a,left:-s.width}),s.$container.css({})):(t("body").css({margin:0}),s.$el.css({position:"relative",overflow:"hidden",width:"100%",height:s.height}),s.$control.css({position:"relative",transform:"translate3d(0)",height:"100%",width:s.width*a,left:-s.width}),s.$container.css({display:"none",margin:"0",padding:"0",listStyle:"none",position:"relative",height:"100%"})),1===s.size()&&s.$el.find(s.options.elements.nav).hide()},images:function(){var i=s.$container.find("img").not(s.options.elements.preserve);i.removeAttr("width").removeAttr("height").css({"-webkit-backface-visibility":"hidden","-ms-interpolation-mode":"bicubic",position:"absolute",left:"0",top:"0","z-index":"-1","max-width":"none"}),i.each(function(){var i=s.image._aspectRatio(this),n=this;if(t.data(this,"processed"))s.image._scale(n,i),s.image._center(n,i);else{var e=new Image;e.onload=function(){s.image._scale(n,i),s.image._center(n,i),t.data(n,"processed",!0)},e.src=this.src}})},children:function(){var i=s.$container.children();i.is("img")&&(i.each(function(){if(t(this).is("img")){t(this).wrap("<div>");var i=t(this).attr("id");t(this).removeAttr("id"),t(this).parent().attr("id",i)}}),i=s.$container.children()),s.init||i.css({display:"none",left:2*s.width}),i.css({position:"absolute",overflow:"hidden",height:"100%",width:s.width,top:0,zIndex:0})}},c={slide:function(i,t){var n=s.$container.children(),e=n.eq(i.upcoming_slide);e.css({left:i.upcoming_position,display:"block"}),s.$control.animate({left:i.offset},s.options.animation_speed,s.options.animation_easing,function(){s.size()>1&&(s.$control.css({left:-s.width}),n.eq(i.upcoming_slide).css({left:s.width,zIndex:2}),i.outgoing_slide>=0&&n.eq(i.outgoing_slide).css({left:s.width,display:"none",zIndex:0})),t()})},fade:function(i,t){var n=this,e=n.$container.children(),s=e.eq(i.outgoing_slide),o=e.eq(i.upcoming_slide);o.css({left:this.width,opacity:1,display:"block"}),i.outgoing_slide>=0?s.animate({opacity:0},n.options.animation_speed,n.options.animation_easing,function(){n.size()>1&&(e.eq(i.upcoming_slide).css({zIndex:2}),i.outgoing_slide>=0&&e.eq(i.outgoing_slide).css({opacity:1,display:"none",zIndex:0})),t()}):(o.css({zIndex:2}),t())}};c=t.extend(c,t.fn.superslides.fx);var d={_centerY:function(i){var n=t(i);n.css({top:(s.height-n.height())/2})},_centerX:function(i){var n=t(i);n.css({left:(s.width-n.width())/2})},_center:function(i){s.image._centerX(i),s.image._centerY(i)},_aspectRatio:function(i){if(!i.naturalHeight&&!i.naturalWidth){var t=new Image;t.src=i.src,i.naturalHeight=t.height,i.naturalWidth=t.width}return i.naturalHeight/i.naturalWidth},_scale:function(i,n){n=n||s.image._aspectRatio(i);var e=s.height/s.width,o=t(i);e>n?o.css({height:s.height,width:s.height/n}):o.css({height:s.width*n,width:s.width})}},l={_setCurrent:function(i){if(s.$pagination){var t=s.$pagination.children();t.removeClass("current"),t.eq(i).addClass("current")}},_addItem:function(i){var n=i+1,e=n,o=s.$container.children().eq(i),a=o.attr("id");a&&(e=a);var r=t("<a>",{href:"#"+e,text:e});r.appendTo(s.$pagination)},_setup:function(){if(s.options.pagination&&1!==s.size()){var i=t("<nav>",{"class":s.options.elements.pagination.replace(/^\./,"")});s.$pagination=i.appendTo(s.$el);for(var n=0;s.size()>n;n++)s.pagination._addItem(n)}},_events:function(){s.$el.on("click",s.options.elements.pagination+" a",function(i){i.preventDefault();var t=s._parseHash(this.hash),n=s._upcomingSlide(t-1);n!==s.current&&s.animate(n,function(){s.start()})})}};return this.css=h,this.image=d,this.pagination=l,this.fx=c,this.animation=this.fx[this.options.animation],this.$control=this.$container.wrap(o).parent(".slides-control"),s._findPositions(),s.width=s._findWidth(),s.height=s._findHeight(),this.css.children(),this.css.containers(),this.css.images(),this.pagination._setup(),r()},n.prototype={_findWidth:function(){return t(this.options.inherit_width_from).width()},_findHeight:function(){return t(this.options.inherit_height_from).height()},_findMultiplier:function(){return 1===this.size()?1:3},_upcomingSlide:function(i){if(/next/.test(i))return this._nextInDom();if(/prev/.test(i))return this._prevInDom();if(/\d/.test(i))return+i;if(i&&/\w/.test(i)){var t=this._findSlideById(i);return t>=0?t:0}return 0},_findSlideById:function(i){return this.$container.find("#"+i).index()},_findPositions:function(i,t){t=t||this,void 0===i&&(i=-1),t.current=i,t.next=t._nextInDom(),t.prev=t._prevInDom()},_nextInDom:function(){var i=this.current+1;return i===this.size()&&(i=0),i},_prevInDom:function(){var i=this.current-1;return 0>i&&(i=this.size()-1),i},_parseHash:function(t){return t=t||i.location.hash,t=t.replace(/^#/,""),t&&!isNaN(+t)&&(t=+t),t},size:function(){return this.$container.children().length},destroy:function(){return this.$el.removeData()},update:function(){this.css.children(),this.css.containers(),this.css.images(),this.pagination._addItem(this.size()),this._findPositions(this.current),this.$el.trigger("updated.slides")},stop:function(){clearInterval(this.play_id),delete this.play_id,this.$el.trigger("stopped.slides")},start:function(){var n=this;n.options.hashchange?t(i).trigger("hashchange"):this.animate(),this.options.play&&(this.play_id&&this.stop(),this.play_id=setInterval(function(){n.animate()},this.options.play)),this.$el.trigger("started.slides")},animate:function(t,n){var e=this,s={};if(!(this.animating||(this.animating=!0,void 0===t&&(t="next"),s.upcoming_slide=this._upcomingSlide(t),s.upcoming_slide>=this.size()))){if(s.outgoing_slide=this.current,s.upcoming_position=2*this.width,s.offset=-s.upcoming_position,("prev"===t||s.outgoing_slide>t)&&(s.upcoming_position=0,s.offset=0),e.size()>1&&e.pagination._setCurrent(s.upcoming_slide),e.options.hashchange){var o=s.upcoming_slide+1,a=e.$container.children(":eq("+s.upcoming_slide+")").attr("id");i.location.hash=a?a:o}e.$el.trigger("animating.slides",[s]),e.animation(s,function(){e._findPositions(s.upcoming_slide,e),"function"==typeof n&&n(),e.animating=!1,e.$el.trigger("animated.slides"),e.init||(e.$el.trigger("init.slides"),e.init=!0,e.$container.fadeIn("fast"))})}}},t.fn[e]=function(i,s){var o=[];return this.each(function(){var a,r,h;return a=t(this),r=a.data(e),h="object"==typeof i&&i,r||(o=a.data(e,r=new n(this,h))),"string"==typeof i&&(o=r[i],"function"==typeof o)?o=o.call(r,s):void 0}),o},t.fn[e].fx={}})(this,jQuery);

/**
 * Plugin: jquery.FlickrFeed
 * Version: 1.0.0
 *
 * Description: jQuery plugin for display of Flickr photo feeds
 **/

(function($){

    $.fn.flickrfeed = function(userid, useroptions) {

        // Set pluign defaults
        var defaults = {
            limit: 8,
            imagesize: 'medium'
        };
        var options = $.extend(defaults, useroptions);

        // Functions
        return this.each(function(i, e) {

            // Define Flickr feed API address
            var api = 'https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&jsoncallback=?';
            if (userid != '') api += '&id=' + userid;

            // Send request
            $.getJSON(api, function(data){

                // Process the feeds
                _callback(e, data, options);
            });
        });
    };

    // Callback function to create HTML result
    var _callback = function(e, data, options) {
        if (!data) {
            return false;
        }
        var html = '';

        // Add body
        html += '<div class="thumbs">';

        var feeds = data.items;
        var count = feeds.length;
        if (count > options.limit) count = options.limit;

        // Add feeds
        for (var i=0; i<count; i++) {

            // Get individual feed
            var photo= feeds[i];
            var link = '<a href="'+ photo.link + '" title="'+ photo.title +' (View on Flickr)" target="_black">';

            // Add feed row
            //html += '<li class="mini-thumbnail unit xs-1-3 gutter-quarter push-quarter">';

            // Select image size
            var src = photo.media.m;
            if (options.imagesize == 'square') src = src.replace('_m', '_s');
            if (options.imagesize == 'thumbnail') src = src.replace('_m', '_t');
            if (options.imagesize == 'medium') src = src.replace('_m', '');

            html += link +'<img src="'+ src +'" class="thumb large-thumb" alt="'+ photo.title +'"></a>';

            //html += '</li>';

        }

        html += '</div>'

        $(e).html(html);
    };
})(jQuery);


/*
 * jQInstaPics
 * Created by: Abid Din - http://craftedpixelz.co.uk
 * Contributions made by: Kacey Coughlin = http://www.kaceycoughlin.com
 * Version: 1.1b
 * Copyright: Crafted Pixelz
 * License: MIT license
 * Updated: 19th August 2013
 * Changed by: Misspato / May 9, 2016
 */

(function ($) {
    $.fn.jqinstapics = function (options) {

        // Defaults
        var defaults = {
            "user_id": null,
            "access_token": null,
            "count": 10,
            "size": "thumbnail",
            "class": "mini-thumb"
        };

        var o = $.extend(defaults, options);

        return this.each(function () {

            // Vars
            var elem = $(this),
                url = "https://api.instagram.com/v1/users/" + o.user_id + "/media/recent?access_token=" + o.access_token + "&count=" + o.count + "&callback=?";

            // Get the images
            $.getJSON(url, function(data){
                $.each(data.data, function (i, val) {
                    var a = $("<a/>", {"href": val.link, "target": "_blank"}).appendTo(elem);

                    //Size
                    if (o.size == null) { // Check if filled out, if not, use default
                        var img = $("<img/>", {"src": val.images.thumbnail.url, "class": o.class}).appendTo(a);
                    } else if (o.size == "low_resolution") {
                        var img = $("<img/>", {"src": val.images.low_resolution.url, "class": o.class}).appendTo(a);
                    } else if (o.size == "standard_resolution") {
                        var img = $("<img/>", {"src": val.images.standard_resolution.url, "class": o.class}).appendTo(a);
                    } else {
                        // Invalid entry, use default
                        var img = $("<img/>", {"src": val.images.thumbnail.url, "class": o.class}).appendTo(a);
                    }

                    if (val.caption){
                        a.attr("title", val.caption.text);
                    }
                });
            });

            if(o.user_id == null || o.access_token == null){
                elem.append("<p>Please specify a User ID and Access Token, as outlined in the docs.</p>");
            }

        });
    };
})(jQuery);


/**
 * @preserve
 * Jribbble v2.0.4 | Thu Jun 4 01:49:29 2015 -0400
 * Copyright (c) 2015, Tyler Gaw me@tylergaw.com
 * Released under the ISC-LICENSE
 */
!function(e,t,r,s){"use strict";e.jribbble={};var n=null,o="https://api.dribbble.com/v1",i=["animated","attachments","debuts","playoffs","rebounds","teams"],u={token:"Jribbble: Missing Dribbble access token. Set one with $.jribbble.accessToken = YOUR_ACCESS_TOKEN. If you do not have an access token, you must register a new application at https://dribbble.com/account/applications/new",singular:function(e){return e.substr(0,e.length-1)},idRequired:function(e){return"Jribbble: You have to provide a "+this.singular(e)+' ID. ex: $.jribbble.%@("1234").'.replace(/%@/g,e)},subResource:function(e){return"Jribbble: You have to provide a "+this.singular(e)+' ID to get %@. ex: $.jribbble.%@("1234").%@()'.replace(/%@/g,e)},shotId:function(e){return"Jribbble: You have to provide a shot ID to get %@. ex: "+' $.jribbble.shots("1234").%@()'.replace(/%@/g,e)},commentLikes:'Jribbble: You have to provide a comment ID to get likes. ex:  $.jribbble.shots("1234").comments("456").likes()'},c=function(e,t){if(e&&"object"!=typeof e)return e;throw new Error(u.idRequired(t))},l=function(e){var t={};return e.forEach(function(e){t[e]=d.call(this,e)}.bind(this)),t},h=function(t){var r=e.param(t);return r?"?"+r:""},a=function(e){if(0!==e.length){var t=e[0],r=typeof t,s={};if("number"===r||"string"===r){var n=i.indexOf(t);n>-1?s.list=t:s.resource=t}else"object"===r&&(s=t);return s}},b=function(){var t=e.extend({},e.Deferred()),r=function(){return this.methods=[],this.response=null,this.flushed=!1,this.add=function(e){this.flushed?e(this.scope):this.methods.push(e)},this.flush=function(e){if(!this.flushed){for(this.scope=e,this.flushed=!0;this.methods[0];)this.methods.shift()(e);return e}},this};return t.queue=new r,t.url=o,t.get=function(){return n?(e.ajax({type:"GET",url:this.url,beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+n)},success:function(e){this.resolve(e)}.bind(this),error:function(e){this.reject(e)}.bind(this)}),this):(console.error(u.token),!1)},t},f=function(t){return function(r){return e.extend(this,b()),this.queue.add(function(e){e.url+="/"+t+"/"+r}),setTimeout(function(){this.queue.flush(this).get()}.bind(this)),this}},d=function(e){return function(t){return this.queue.add(function(r){r.url+="/"+e+"/"+h(t||{})}),this}};e.jribbble.shots=function(t,r){var s=a([].slice.call(arguments))||{},n=r||{},o=function(t){return function(r,s){var n=a([].slice.call(arguments))||{},o=s||{};return this.queue.add(function(r){if(!r.shotId)throw new Error(u.shotId(t));r.url+="/"+t+"/",n.resource&&(r.url+=n.resource,delete n.resource),r.url+=h(e.extend(n,o))}),this}},i=function(){return e.extend(this,b()),this.url+="/shots/",this.queue.add(function(t){s.resource&&(t.shotId=s.resource,t.url+=s.resource,delete s.resource),t.url+=h(e.extend(s,n))}),setTimeout(function(){this.queue.flush(this).get()}.bind(this)),this};return i.prototype.attachments=o("attachments"),i.prototype.buckets=o("buckets"),i.prototype.likes=o("likes"),i.prototype.projects=o("projects"),i.prototype.rebounds=o("rebounds"),i.prototype.comments=function(t,r){var s=a([].slice.call(arguments))||{},n=r||{};return this.queue.add(function(t){if(!t.shotId)throw new Error(u.shotId("comments"));t.url+="/comments/",s.resource&&(t.commentId=s.resource,t.url+=s.resource+"/",delete s.resource),t.url+=h(e.extend(s,n))}),this.likes=function(e){var t=e||{};return this.queue.add(function(e){if(!e.commentId)throw new Error(u.commentLikes);e.url+="likes/"+h(t)}),this},this},new i},e.jribbble.teams=function(e){var t="teams",r=c(e,t),s=f.call(this,t);return s.prototype=l.call(this,["members","shots"]),new s(r)},e.jribbble.users=function(e){var t="users",r=c(e,t),s=f.call(this,t);return s.prototype=l.call(this,["buckets","followers","following","likes","projects","shots","teams"]),s.prototype.isFollowing=function(e){return this.queue.add(function(t){t.url+="/following/"+e}),this},new s(r)},e.jribbble.buckets=function(e){var t="buckets",r=c(e,t),s=f.call(this,t);return s.prototype=l.call(this,["shots"]),new s(r)},e.jribbble.projects=function(e){var t="projects",r=c(e,t),s=f.call(this,t);return s.prototype=l.call(this,["shots"]),new s(r)},e.jribbble.setToken=function(e){return n=e,this}}(jQuery,window,document);



/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */

!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",r.appendChild(d.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=t(this).find(e.join(","));a=a.not("object object"),a=a.not(r),a.each(function(e){var i=t(this);if(!(i.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length)){i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16));var a="object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height(),d=isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10),o=a/d;if(!i.attr("id")){var h="fitvid"+e;i.attr("id",h)}i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),i.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);


