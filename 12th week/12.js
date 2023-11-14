function blink_text() {
	$(".blink").fadeOut(500);
	$(".blink").fadeIn(500);
}
setInterval(blink_text, 2000);

$("p").each(function() {
	var pdata = $(this);
	pdata.html(pdata.text().replace(/(^\w+)/,'<strong>$1</strong>'))
});