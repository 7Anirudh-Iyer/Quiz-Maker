$(document).ready(()=>{
	$(document).scroll(()=>{
		let scroll = $(window).scrollTop()
		var amount = -160+(scroll*0.8);
		console.log(amount)
	    if (amount > 150){
	    	$("#fi1").fadeIn(800);
	    	$("#fi3").fadeIn(800);
	    	$("#fi2").fadeIn(800);
	    } else if (amount < 150){
	    	$("#fi1").fadeOut(800);
	    	$("#fi3").fadeOut(800);
	    	$("#fi2").fadeOut(800);
	    } 
	    if (amount > 700){
	    	$("#fi4").fadeIn(800);
	    	$("#fi5").fadeIn(800);
	    	$("#fi6").fadeIn(800);
	    	$("#fi7").fadeIn(800);
	    } else if (amount < 700){
	    	$("#fi4").fadeOut(800);
	    	$("#fi5").fadeOut(800);
	    	$("#fi6").fadeOut(800);
	    	$("#fi7").fadeOut(800);
	    }
	    if (amount > 1200){
	    	$("#fi8").fadeIn(800);
	    	$("#fi9").fadeIn(800);
	    	$("#fi0").fadeIn(800);
	    } else if (amount < 1200){
	    	$("#fi8").fadeOut(800);
	    	$("#fi9").fadeOut(800);
	    	$("#fi0").fadeOut(800);
	    } 

	    if (amount > 1600){
	    	$("#fi10").fadeIn(800);
	    	$("#fi11").fadeIn(800);
	    	$("#fi12").fadeIn(800);
	    } else if (amount < 1600){
	    	$("#fi10").fadeOut(800);
	    	$("#fi11").fadeOut(800);
	    	$("#fi12").fadeOut(800);
	    } 
	})
	$("#create").click(()=>{
		location.href = "./Create Quizzes/create.html"
	})
})