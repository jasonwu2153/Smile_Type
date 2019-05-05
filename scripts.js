window.onload = function(){
	if(getIEVersion()){
	$('html').scrollView();
	}
	else{
		$('html').css("overflow", "hidden")
	}
}

// when the page is loaded run the following
$(document).ready(function(){
	$('#smile').on('keydown', function(e) {
		if(aboutOpen == true){return;}
		idelTime = 0;
		var str="#a" + (index);
		var str2="#a" + (index+1);
		var str3="#a" + (index+2);
		var code = e.key || e.which;
		code = code.toLowerCase();
		console.log(code);
		if(code<0){index=0;}
		if(code == "backspace"){
			if(index==0){return;}
			index--;
			$(str).attr('src', "glyphs/empty.jpg")
			$(str2).attr('src', "glyphs/empty.jpg")
		}
		else if(code == " " || code =="spacebar"){
			index++
			$(str2).attr('src', "glyphs/empty.jpg")
		}
		else if(code == "."){
			index++
			var id = "glyphs/period.jpg?" + Math.random();
			$(str2).attr('src', id)
		}
		else if(code == "?"){
			index++
			var id = "glyphs/question.jpg?" + Math.random();
			$(str2).attr('src', id)
		}
		else{
			for(x=0; x<lib.length; x++){
			if(code == lib[x]){
			index++;
			var id  = "glyphs/" + code + ".jpg?" + Math.random();
			// $(str).attr('src', "tester-gif.gif?" + Math.random());
			$(str2).attr('src', id);
			}
		}
		}
		document.getElementById("smile").focus();
	});

	var idleInterval = setInterval(timerIncrement, 800);

		$("#clear").click(function(){
				cleare();
		})

		$("#random").click(function(){
			typeRandom();
		})

		$("#melt").val("");
		document.getElementById("melt").focus();
		typeRandom();
})

$.fn.scrollView = function() {
return this.each(function() {
    $('html, body').animate({
        scrollTop: $(this).offset().top
    }, 10);
    $('html, body').animate({
        scrollLeft: 0
    }, 10);
});
};

var index = 0;

var aboutOpen = false;
var cameraOpen = false;

var idleTime=0

var lib = [
				"a","b","c","d","e","f","g","h","i","j",
				"k","l","m","n","o","p","q","r","s","t",
				"u","v","w","x","y","z","1","2","3","4",
				"5","6","7","8","9","0",",","?","!"
			  ]

var ranSentences = [
	"how long will the ice caps last?",
	"nothing lasts forever.",
	"we are running out of time",
	"ephemerality hurts",
	"temporary temporary temporary",
	"temperatures rising",
	"is it too late to save the earth?",
	"glaciers. gone.",
	"ice caps. defrosting.",
	"a very short life.",
	"alive for only a moment.",
	"...and it is gone.",
	"poof! disappeared.",
	"a global disappearing act.",
	"unfortunate impermanence.",
	"goodbye greenland.",
	"goodbye maldives.",
	"the earth is melting. panic faster.",
	"the climate changes, and humans do not.",
	"if it could last a little longer",
	"eventually, everything goes away.",
	"nothing endures, except change.",
	"today will be the nostalgia of tomorrow.",
	"immortality is infinitely boring.",
	"illegibility is not beauty."
]

function typeRandom(){
	cleare();
	var ind = Math.floor(Math.random()*ranSentences.length);
	typeRecurse(ind,0);
}

function typeRecurse(i,e){
	if(e==ranSentences[i].length){
		var str2 = "#a" + (index+1);
		$(str2).attr('src', "typing.gif");
		return;
	}
	setTimeout(function(){
			var code = ranSentences[i].charAt(e);
			console.log(code)
			index++;
			var str = "#a" + index;
			var str2 = "#a" + (index+1)
			if(code === " "){
				$(str).attr('src', "glyphs/empty.jpg")
			}
			else if(code === ".")
			{
				$(str).attr('src', "glyphs/period.jpg")
			}
			else if(code === "?")
			{
				$(str).attr('src', "glyphs/question.jpg")
			}
			else{
			var id  = "glyphs/" + code + ".jpg?" + Math.random();
			// $(str).attr('src', "tester-gif.gif?" + Math.random());
			$(str).attr('src', id);
			}
			typeRecurse(i,e+1)
	},70);
}

function cleare(){
		index = 0;
		for(x=1;x<=99;x++)
		{
			var str = "#a" + x;
			$(str).attr('src', 'glyphs/empty.jpg');
		}
		$("a1").attr('src', 'glyphs/typing.gif');
		document.getElementById("smile").focus();
}

//measuring idle time
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 2) { //1.6 seconds
        var str2 = "#a" + (index+1);
        $(str2).attr('src', "glyphs/typing.gif");
        ;
    }
}

function getIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0){
  	console.log("dear god. Who uses internet explorer?")
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));}

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;

  else
    return 0; //It is not IE
}
