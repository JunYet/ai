$(document).ready(function(){
    function removeHash () { 
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    removeHash ();
    $('html, body').animate({scrollTop:0}, 'fast');
    $("body").addClass("overflow-hidden");

    var num = 1;

    
    $(".scrollBtn").click(function(event){
        event.preventDefault();
        $("body").removeClass("overflow-hidden");
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
        return false;
    });
    
    $('.section1').on('click', function(e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
    });

    

    $(document).scroll(function(){
        var wholeBody = $('body').outerHeight(),
            topBanner = $('.sq-stuff').height(),
            listenScroll = $('.listen-scroll').height();

        if($(window).scrollTop() >= topBanner) {
            $('body').addClass('at-section2');
            return false;
        } else if($('body').hasClass('at-section2') && $(window).scrollTop() < topBanner - 150){
            $('html, body').animate({scrollTop:0}, 1000);
            $("body").addClass("overflow-hidden");
            $('.expand-stuff').removeClass("listen-scroll");
            $('body').removeClass('at-section2');
            return false;
        }
    });

    // SCROLLER

    //$(".cd-btn").click(function(){
        //$("body").toggleClass("overflow-hidden");

        //if($(".cd-intro-block").hasClass("projects-visible")) {
            //$("body").toggleClass("overflow-hidden");
        //}
    //});
    //$(".cd-intro-block.projects-visible").click(function(){
        //if(intro.hasClass('projects-visible') && !$(event.target).is('a[data-action="show-projects"]')) {
        //	console.log("click");
        //	$("body").toggleClass("overflow-hidden");
        //}
        
    //});

    var t=0,e=localStorage.getItem("transcriptNextWordNo");null!==e&&void 0!==e&&(t=parseInt(e));
    var i,n=["websites","apps","front-ends","for print","user interfaces","for ecommerce"],o=function(){$("#transcript > span").text("");
    
    for(var e=n[t],i=0;i<e.length;i++){var a=e.charAt(i);
    
    if(printChar(i,a,155,e.length-1),i==e.length-1){t===n.length-1?t=0:t+=1,localStorage.setItem("transcriptNextWordNo",t);
    var s=155*e.length+1500;setTimeout(o,s)}}};
    
    setTimeout(o,1e3);$("nav li").hover(function(){var t=$(this);
    
    i=setTimeout(function(){var e=t.position().top+3;
    
    t.parent("ul").animate({"background-position-y":e+"px"},"fast")},150,t)},function(){clearTimeout(i)}),$("nav ul").mouseleave(function(t){var e=$(this).find("li.active").position().top+3;
    
    $(this).animate({"background-position-y":e+"px"},"fast")});
    
    var a=$(window),s=$(".project");
    
    a.on("scroll resize",function(){var t=a.height(),e=a.scrollTop()+t;
    
    $.each(s,function(t,i){var n=$(this),o=n.outerHeight(),a=n.offset().top;
    
    a+o/6<=e&&n.find(".animate").addClass("play")})}),a.trigger("scroll"),$(".components").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend webkitAnimationEnd oanimationend msAnimationEnd animationend",
    function(){$(".bar",this).each(function(t,e){
        var i=$(this),n=i.data("value");
    
        setTimeout(function(){i.animate({width:n+"%"},400)},200*t,i,n)
    })}),
    
    
    $(window).on("load resize",function(t){
        window.matchMedia("only screen and (max-width: 767px)").matches?$("nav").addClass("mobile"):($("nav").removeClass("mobile"),$("nav ul").fadeIn())
    })
});
    
var printChar=function(t,e,i,n){
    setTimeout(function(){
        var i=$("#transcript span");
        i.append(e),t===n?i.addClass("highlight"):i.removeClass("highlight")
    },i*t)
};