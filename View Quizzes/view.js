$("document").ready(()=>{
	let db = firebase.database()
	let noQ = 0
	db.ref("NoOfQuizzes").on("value", (data)=>{
		noQ = data.val()
		for (let i = 1; i <= noQ; i++){
			let li = document.createElement("li")
			li.className = "quiz"
			li.id = "quiz"+i
			document.getElementById("quizzes").appendChild(li)
			let p = document.createElement("p")

			let name = ""
			db.ref("Quizzes/Quiz"+i+"/name").on("value", (data)=>{
				name = data.val()
				console.log(name)
				p.innerHTML = "Quiz "+i + " - "+name
				p.id = "p"+i
				document.querySelector("#quiz"+i).appendChild(p)
				$("#p"+i).css({
					textAlign: "center",
				})
			})
		}
		for(let i = 1; i <= noQ; i++){
			$("#quiz"+i).click(()=>{
				$(".quiz").hide()
				let type = ""
				db.ref("Quizzes/Quiz"+i+"/type").on("value", (data)=>{
					type = data.val()
					if(type === "mcq"){
						let nq = 0
						db.ref("Quizzes/Quiz"+i+"/numQs").on("value", (data)=>{
							nq = data.val()
							let q, o1, o2, o3, o4, correct
							for(let i = 1; i <= nq; i++){
								db.ref("Quizzes/Quiz"+i+"/"+i+"/question").on("value", (data)=>{
									q = data.val()
								})
								db.ref("Quizzes/Quiz"+i+"/"+i+"/option1").on("value", (data)=>{
									o1 = data.val()
								})	
								db.ref("Quizzes/Quiz"+i+"/"+i+"/option2").on("value", (data)=>{
									o2 = data.val()
								})
								db.ref("Quizzes/Quiz"+i+"/"+i+"/option3").on("value", (data)=>{
									o3 = data.val()
								})
								db.ref("Quizzes/Quiz"+i+"/"+i+"/option4").on("value", (data)=>{
									o4 = data.val()
								})
								db.ref("Quizzes/Quiz"+i+"/"+i+"/correct").on("value", (data)=>{
									correct = data.val()
								})

								let a = setTimeout(()=>{
									let question = document.createElement("p")
									question.innerHTML = q
									document.body.appendChild(question)

									let ol = document.createElement("ol")
									ol.id = "ol"+i
									document.body.appendChild(ol)

									let option1 = document.createElement("li")
									option1.innerHTML = o1
									document.getElementById("ol"+i).appendChild(option1)

									let option2 = document.createElement("li")
									option2.innerHTML = o2
									document.getElementById("ol"+i).appendChild(option2)

									let option3 = document.createElement("li")
									option3.innerHTML = o3
									document.getElementById("ol"+i).appendChild(option3)

									let option4 = document.createElement("li")
									option4.innerHTML = o4
									document.getElementById("ol"+i).appendChild(option4)

								}, 1000)
							}
						})
					}
				})
			})
		}
	})	
})