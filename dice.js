var phew = 0;
var tahr = 0;
var dice = 0;
var ans = [
	"abjad kelb &#128266;",
	"iswed kelb &#128266;",
	"gri&#380; kelb &#128266;",
	"blu kelb &#128266;",
	"a&#295;dar kelb &#128266;",
	"a&#295;mar kelb &#128266;",
	"kannella kelb &#128266;",
	"isfar kelb &#128266;",
	"abjad g&#295;asfur &#128266;",
	"iswed g&#295;asfur &#128266;",
	"gri&#380; g&#295;asfur &#128266;",
	"blu g&#295;asfur &#128266;",
	"a&#295;dar g&#295;asfur &#128266;",
	"a&#295;mar g&#295;asfur &#128266;",
	"kannella g&#295;asfur &#128266;",
	"isfar g&#295;asfur &#128266;",
	"abjad baqra &#128266;",
	"iswed baqra &#128266;",
	"gri&#380; baqra &#128266;",
	"blu baqra &#128266;",
	"a&#295;dar baqra &#128266;",
	"a&#295;mar baqra &#128266;",
	"kannella baqra &#128266;",
	"isfar baqra &#128266;"
	];
var face = [
	"img/whitedog.png",
	"img/blackdog.png",
	"img/greydog.png",
	"img/bluedog.png",
	"img/greendog.png",
	"img/reddog.png",
	"img/browndog.png",
	"img/yellowdog.png",
	"img/whitebird.png",
	"img/blackbird.png",
	"img/greybird.png",
	"img/bluebird.png",
	"img/greenbird.png",
	"img/redbird.png",
	"img/brownbird.png",
	"img/yellowbird.png",
	"img/whitecow.png",
	"img/blackcow.png",
	"img/greycow.png",
	"img/bluecow.png",
	"img/greencow.png",
	"img/redcow.png",
	"img/browncow.png",
	"img/yellowcow.png"
	];
var aud = [
	"aud/whitedog.mp3",
	"aud/blackdog.mp3",
	"aud/greydog.mp3",
	"aud/bluedog.mp3",
	"aud/greendog.mp3",
	"aud/reddog.mp3",
	"aud/browndog.mp3",
	"aud/yellowdog.mp3",
	"aud/whitebird.mp3",
	"aud/blackbird.mp3",
	"aud/greybird.mp3",
	"aud/bluebird.mp3",
	"aud/greenbird.mp3",
	"aud/redbird.mp3",
	"aud/brownbird.mp3",
	"aud/yellowbird.mp3",
	"aud/whitecow.mp3",
	"aud/blackcow.mp3",
	"aud/greycow.mp3",
	"aud/bluecow.mp3",
	"aud/greencow.mp3",
	"aud/redcow.mp3",
	"aud/browncow.mp3",
	"aud/yellowcow.mp3"
	];
	

function reveal()
{
	if(phew == 0)
	{
		document.getElementById("rev").innerHTML = ans[dice];
		document.getElementById("next").innerHTML = "Next";
		phew = 1;
		return;
	}
	random();
}

function random()
{
	document.getElementById("rev").innerHTML = "&nbsp;";
	document.getElementById("next").innerHTML = "Reveal";
	var prev = dice;
	dice=Math.round(Math.random()*23);
	document.images["mydice"].src=face[dice];
	if(dice == prev)
		random();
	phew = 0;
}

function pron()
{
	if(phew == 1)
		new Audio(aud[dice]).play();
}