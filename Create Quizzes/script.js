let type = ""
let noQ
let db = firebase.database()
db.ref("NoOfQuizzes").on("value", (data)=>{
	noQ = data.val()
})

let nq = 1
$("#qno").text("Question "+nq)

$('document').ready(()=>{
	let choose = document.querySelector(".choose")
	choose.showModal()
	$('#qnaire').hide()
	$('#newq').hide()
	$('#submit').hide()
	$("#mcq").click(()=>{
		choose.close()
		$('#qnaire').show(500)
		$('#newq').show(500)
		$('#submit').show(500)
		$("#multiple_choice").show(500)
		type = "mcq"
		db.ref("/").update({
			NoOfQuizzes: noQ+1
		})
	})
	$("#wa").click(()=>{
		choose.close()
		$('#qnaire').show(500)
		$('#newq').show(500)
		$('#submit').show(500)
		$("#questions_and_answers").show(500)
		type = "qna"
		db.ref("/").update({
			NoOfQuizzes: noQ+1
		})
	})
})

if (type === "mcq") {
	console.log('oj..')
	$("#newq").click(()=>{
		console.log("happened")
		let q = $("#q").val()
		let o1 = $("#o1").val()
		let o2 = $("#o2").val()
		let o3 = $("#o3").val()
		let o4 = $("#o4").val()
		let correct = $("#correct").val()
		db.ref("Quizzes/Quiz"+noQ).update({
			type: type,
			numQs: nq
		})	
		db.ref("Quizzes/Quiz"+noQ+"/"+nq).update({
			question: q,
			option1: o1,
			option2: o2,
			option3: o3,
			option4: o4,
			correct: correct
		})
		nq+=1
		$("#qno").text("Question "+nq)
		$("#q").val("")
		$("#o1").val("")
		$("#o2").val("")
		$("#o3").val("")
		$("#o4").val("")
		$("#correct").val("")
	})

	$("#submit").click(()=>{
		let q = $("#q").val()
		let o1 = $("#o1").val()
		let o2 = $("#o2").val()
		let o3 = $("#o3").val()
		let o4 = $("#o4").val()
		let correct = $("#correct").val()
		db.ref("Quizzes/Quiz"+noQ).update({
			type: type,
			numQs: nq
		})	
		db.ref("Quizzes/Quiz"+noQ+"/"+nq).update({
			question: q,
			option1: o1,
			option2: o2,
			option3: o3,
			option4: o4,
			correct: correct
		})
		location.href="../index.html"
	})
} else if (type === "qna") {
	$("#newq").click(()=>{
		let q = $("#q1").val()
		let ans = $("#ans").text()
		let correct = $("#correct").val()
		db.ref("Quizzes/Quiz"+noQ).update({
			type: type,
			numQs: nq
		})	
		db.ref("Quizzes/Quiz"+noQ+"/"+nq).update({
			question: q,
			correct: ans
		})
		nq+=1
		$("#qno").text("Question "+nq)
		$("#q").val("")
		$("#ans").text("")
	})

	$("#submit").click(()=>{
		let q = $("#q1").val()
		let ans = $("#ans").text()
		let correct = $("#correct").val()
		db.ref("Quizzes/Quiz"+noQ).update({
			type: type,
			numQs: nq
		})	
		db.ref("Quizzes/Quiz"+noQ+"/"+nq).update({
			question: q,
			correct: ans
		})
		location.href="../index.html"
	})
}
