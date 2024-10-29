document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-5bdb0438' );
});
window.addEventListener( 'DOMContentLoaded', function() {
	UAGBLottie._run( {"block_id":"34a7f32b","lottieSource":"url","lottieURl":"https:\/\/lottie.host\/c6dc6e30-bc36-4a66-aacd-79555fd38a57\/aPHcoY0TBV.json","jsonLottie":"","height":"","heightTablet":"","heightMob":"","width":"","widthTablet":"","widthMob":"","backgroundColor":"","backgroundHColor":"","loop":true,"speed":1,"reverse":false,"playOn":"none"}, 'uagb-block-34a7f32b' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-3ed924de' );
});
window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"e3e0dd8c","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":false,"afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"Form Submission","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Please fill up the above captcha.","confirmationUrl":""}, '.uagb-block-e3e0dd8c', 26 );
});
var ssLinksParent = document.querySelector( '.uagb-block-a1720a0c' );
ssLinksParent?.addEventListener( 'keyup', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link && e.keyCode === 13 ) {
	handleSocialLinkClick( link );
}
});

ssLinksParent?.addEventListener( 'click', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link ) {
	handleSocialLinkClick( link );
}
});

function handleSocialLinkClick( link ) {
var social_url = link.dataset.href;
var target = "";
if ( social_url == "mailto:?body=" ) {
	target = "_self";
}
var request_url = "";
if ( social_url.indexOf("/pin/create/link/?url=") !== -1 ) {
	request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
} else {
	request_url = social_url + encodeURIComponent( window.location.href );
}
window.open( request_url, target );
}
 });