
//amazon buy now plugin

if(window.location.href.indexOf("amazon.com") !== -1){

	$('#nav-link-accountList .nav-line-1').html('Hello, Name')  //edit Hello, Name Here
	$('#nav-link-accountList').attr('href', '#')
	//$('#nav-al-signin a').attr('href', '#')
	$('#add-to-cart-button').attr('disabled', 'disabled');

	var today = new Date();
	today.setDate(today.getDate() + 10);  //() + #); = Delivery date/number of days from today
	var date = today.toLocaleDateString('en-US', {year:'numeric', day:'numeric', month:'short'});

	var orderNum = "112-" + Math.floor(Math.random()*9999999) + "-" + Math.floor(Math.random()*9999999);

	$('#dp').prepend(`<div id="congrats">

		<h1>Thank you, your order has been placed.</h1>
		<p>Please check your email for order confirmation  and detailed delivery information or visit <a href="#">Message Center</a> to review your notifications.
		<br /><p><strong>New!</strong> Get shipment information on your mobile device with the free <a href="https://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000625601">Amazon App</a></p>
		<p><strong>Order Number: ${ orderNum }</strong><br />
		<strong>Guaranteed delivery: ${ date }</span></p>

	</div>`);

	$('#buy-now-button').click(function(e){
		setTimeout(function(){
			window.scrollTo(0,0);
			$('#congrats').slideDown();
			//$('#submit.buy-now-announce').html('Buy Again'); doesnt work, possible image rather then .text or .html
		},2000);
		e.preventDefault();
		return false;
	});

}



//google logo plugin

//Google Logo
$( "img.lnXdpd" ).prop('src', 'https://i.imgur.com/PrbshiS.png');
$( "img.lnXdpd" ).prop('srcset', 'https://i.imgur.com/PrbshiS.png');

//Profile Picture
$( "img.gb_Ba.gbii" ).prop('src', 'https://i.imgur.com/K59YHLh.png');
$( "img.gb_Ba.gbii" ).prop('srcset', 'https://i.imgur.com/K59YHLh.png');

//bottom link
$( "span.ktLKi").replaceWith('Supporting Uyghur Concentrating since 2007');
$( "a.pHiOh").prop('href', 'https://stackoverflow.com/questions/39261675/is-it-possible-to-download-a-websites-entire-code-html-css-and-javascript-file')