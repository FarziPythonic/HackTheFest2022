var $CoverImage = $('.page__cover__image__component');
var $CoverTitle = $('.page__cover__container h1 span');
var $CoverButton = $('.page__cover__container a');
var $CoverSubTitle = $('.page__cover__container h2 span');
var $Thumbs = $('.page__cover__footer__article__thumb__image');
var $Footer = $('.page__cover__footer__container');


$('.img__liquid').imgLiquid();

gsap.to($Thumbs,{
    delay: 2,
    duration: 0,
    opacity: 1,
    ease: "expo.inOut",
    onComplete: function(){
        $Thumbs.removeClass('is-animation');
    }
});

gsap.to($CoverTitle,{
    delay: 0.5,
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "expo.inOut"
});

gsap.to($CoverSubTitle,{
    delay: 0.5,
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "expo.inOut"
});

// Footer
gsap.to($Footer,{
    delay: 1.2,
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "expo.inOut"
});

// Shop button
gsap.to($CoverButton,{
    delay: 1.2,
    duration: 1,
    opacity: 1,
    ease: "expo.inOut",
    onComplete: function(){
        // Animation
        $('.page__cover__image__animation').addClass('is-animation');
        
        // Image
        gsap.to($CoverImage,{
            delay: 0.8,
            duration: 1,
            scale: 1,
            ease: "expo.inOut"
        });
    }
});
