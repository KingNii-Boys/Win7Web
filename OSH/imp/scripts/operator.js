var SM = document.getElementById('SM')
			var SMN = document.getElementById('SMN')
			var SMCP = document.getElementById('SMCP')
			var LKGC = document.getElementById('LKGC')
			var SWN = document.getElementById('SWN')
			var TLine = document.getElementById('Timer')
			var body = document.getElementById('body')
			var balls = document.getElementById('hide')
			var WinLog = document.getElementById('hidden')
			var HomePage = document.getElementById('WinPage')
			var StartMenu = document.getElementById('startm')
			var RBD = document.getElementById('RBD')
			var hidden = 0
			var Counting
			var Cur = 1
			var UV
			var sos
			var MSC
			var Count = 10
			var Poli = document.getElementById('Hello')
			SM.style.background = "#ffffff"
			SM.style.color = "#000000"
			window.addEventListener('keydown', function (e) {
				 if (e.key=="ArrowUp"){
						Cur=Cur-1
						if(Cur<1){
								Cur=5
							}
						}
						if (e.key=="ArrowDown"){
							Cur=Cur+1
							if(Cur>5){
								Cur=1
							}
						}
						if (e.key=="Enter"){
							UV=Cur
							Count=0
							TimerCount()
							setTimeout(Load, 1500)
						}
						if(Cur==1){
							SM.style.background = "#ffffff"
							SM.style.color = "#000000"
							SMN.style.background = "#000000"
							SMN.style.color = "#ffffff"
							SMCP.style.background = "#000000"
							SMCP.style.color = "#ffffff"
							LKGC.style.background = "#000000"
							LKGC.style.color = "#ffffff"
							SWN.style.background = "#000000"
							SWN.style.color = "#ffffff"
						}
						if(Cur==2){
							SM.style.background = "#000000"
							SM.style.color = "#ffffff"
							SMN.style.background = "#ffffff"
							SMN.style.color = "#000000"
							SMCP.style.background = "#000000"
							SMCP.style.color = "#ffffff"
							LKGC.style.background = "#000000"
							LKGC.style.color = "#ffffff"
							SWN.style.background = "#000000"
							SWN.style.color = "#ffffff"
							}
						if(Cur==3){
							SM.style.background = "#000000"
							SM.style.color = "#ffffff"
							SMN.style.background = "#000000"
							SMN.style.color = "#ffffff"
							SMCP.style.background = "#ffffff"
							SMCP.style.color = "#000000"
							LKGC.style.background = "#000000"
							LKGC.style.color = "#ffffff"
							SWN.style.background = "#000000"
							SWN.style.color = "#ffffff"
						}
						if(Cur==4){
							SM.style.background = "#000000"
							SM.style.color = "#ffffff"
							SMN.style.background = "#000000"
							SMN.style.color = "#ffffff"
							SMCP.style.background = "#000000"
							SMCP.style.color = "#ffffff"
							LKGC.style.background = "#ffffff"
							LKGC.style.color = "#000000"
							SWN.style.background = "#000000"
							SWN.style.color = "#ffffff"
						}
						if(Cur==5){
							SM.style.background = "#000000"
							SM.style.color = "#ffffff"
							SMN.style.background = "#000000"
							SMN.style.color = "#ffffff"
							SMCP.style.background = "#000000"
							SMCP.style.color = "#ffffff"
							LKGC.style.background = "#000000"
							LKGC.style.color = "#ffffff"
							SWN.style.background = "#ffffff"
							SWN.style.color = "#000000"
						}
						
			}, false);
			setInterval(TimerCount,1000)
			setTimeout(Load,12000)
			function TimerCount(){
				Count=Count-1
				if(Count==-1){
					body.innerHTML=""
				}
				Count=Count+1
				if(Count!=0){
				Count = Count-1
				}
			
				TLine.innerHTML="Use the up and down errors to move the highlight to your choice. Seconds until Windows starts: -"+Count
				
			}
			function getRndInteger(min, max) {
  					rand = Math.floor(Math.random() * (max - min) ) + min;
					MSC=rand
				}
			function StartOS(){
				getRndInteger(1, 8)
				if(MSC==3){
					RBD.hidden=true
					HomePage.hidden=false
					
				}
			}
			function Open(type){
			if(type=="Menu"){
					if(StartMenu.hidden==false){
						StartMenu.hidden=true
					}else{
						if(StartMenu.hidden==true){
								StartMenu.hidden=false
						}
					}
				
			}
			}
			function Load(){
			if(body.innerHTML==""){
				setTimeout(function e(){balls.src = "BOOT/Load.gif"},2650) 
				RBD.hidden=false
				setInterval(StartOS, 1000)
				}
			}
