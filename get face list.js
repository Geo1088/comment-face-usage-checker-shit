// Paste the sub's stylesheet into the input string. I'm too lazy to write a
// function to grab the current version.

const input = `
    /* Spritesheet 1 */
    .md [href="#asuka-shouting"],.md [href="#chiyo-uhh"],.md [href="#she-ded"],.md [href="#deko-cry"],.md [href="#gendo-pls"],.md [href="#k-on-hug"],.md [href="#lewd"],.md [href="#nanami-hug"],.md [href="#super-happy"],.md [href="#yui-crying"],.md [href="#objection"],.md [href="#ok"]
    { background-image: url(%%spritesheet1%%) }
    .md [href="#asuka-shouting"]{ width: 80px; height: 80px; background-position: 0 -0px; }
    .md [href="#chiyo-uhh"]{ width: 100px; height: 80px; background-position: 0 -130px; }
    .md [href="#she-ded"]{ width: 100px; height: 80px; background-position: 0 -260px; }
    .md [href="#deko-cry"]{ width: 80px; height: 80px; background-position: 0 -389px; }
    .md [href="#gendo-pls"]{ width: 171px; height: 114px; background-position: 0 -520px; }
    .md [href="#k-on-hug"]{ width: 180px; height: 120px; background-position: 0 -814px; }
    .md [href="#lewd"]{ width: 100px; height: 150px; background-position: 0 -984px; }
    .md [href="#nanami-hug"]{ width: 120px; height: 150px; background-position: 0 -1184px; }
    .md [href="#super-happy"]{ width: 80px; height: 80px; background-position: 0 -1514px; }
    .md [href="#yui-crying"]{ width: 80px; height: 80px; background-position: 0 -1644px; }
    .md [href="#objection"]{ width: 100px; height: 80px; background-position: -230px 0; }
    .md [href="#ok"]{ width: 100px; height: 100px; background-position: -100px 0; }

    /* Spritesheet 2 */
    .md [href="#chiho-wut"], .md [href="#stare"], .md [href="#what"], .md [href="#ehehehe"], .md [href="#mandomstatic"]
    { background-image: url(%%spritesheet2%%) }
    .md [href="#chiho-wut"]{ display: inline-block; width: 100px; height: 80px; background-position: 0 -130px; }
    .md [href="#stare"]{ display: inline-block; width: 150px; height: 100px; background-position: 0 -780px; }
    .md [href="#what"]{ display: inline-block; width: 100px; height: 80px; background-position: 0 -1060px; }
    .md [href="#ehehehe"]{ display: inline-block; width: 80px; height: 80px; background-position: 0 -1343px; }
    .md [href^="#mandomstatic"]{ display: inline-block; width: 181px; height: 99px; background-position: 0 -1473px; }

    /* Spritesheet 3 */
    .md [href="#pointandlaugh"], .md [href="#yunocaine"], .md [href="#gununu"], .md [href="#cry"]
    { background-image: url(%%spritesheet3%%) }
    .md [href="#pointandlaugh"]{ display: inline-block; width: 79px; height: 80px; background-position: 0 0; }
    .md [href="#yunocaine"]{ display: inline-block; width: 80px; height: 80px; background-position: 0 -390px; }
    .md [href="#gununu"]{ display: inline-block; width: 107px; height: 80px; background-position: 0 -780px; }
    .md [href="#cry"]{ display: inline-block; width: 89px; height: 80px; background-position: 0 -1299px; }

    /* Spritesheet 4 */
    .md [href="#facepalm"], .md [href="#kanie-disgust"], .md [href="#nerrr"], .md [href="#nico-heart"], .md [href="#sparkle-ika"], .md [href="#suave"], .md [href="#shocked"], .md [href="#thumbs-up"], .md [href="#ugh-peasants"], .md [href="#you-bore-me"], .md [href="#kukuku"]
    { background-image: url(%%spritesheet4%%) }
    .md [href="#facepalm"]{ display: inline-block; width: 80px; height: 80px; background-position: 0 0; }
    .md [href="#kanie-disgust"]{ display: inline-block; width: 80px; height: 80px; background-position: 0 -260px; }
    .md [href="#nerrr"]{ display: inline-block; width: 80px; height: 80px; background-position: 0 -390px; }
    .md [href="#nico-heart"]{ display: inline-block; width: 100px; height: 80px; background-position: 0 -520px; }
    .md [href="#sparkle-ika"]{ display: inline-block; width: 80px; height: 80px; background-position: 0 -780px; }
    .md [href="#suave"]{ display: inline-block; width: 100px; height: 80px; background-position: 0 -910px; }
    .md [href="#shocked"]{ display: inline-block; width: 73px; height: 80px; background-position: 0 -1300px; }
    .md [href="#thumbs-up"]{ display: inline-block; width: 120px; height: 100px; background-position: 0 -1430px; }
    .md [href="#ugh-peasants"]{ display: inline-block; width: 100px; height: 80px; background-position: 0 -1710px; }
    .md [href="#you-bore-me"]{ display: inline-block; width: 100px; height: 80px; background-position: -170px -130px; }
    .md [href="#kukuku"]{ display: inline-block; width: 100px; height: 150px; background-position: -170px -390px; }

    /* Spritesheet 5 */
    .md [href="#kininarimasu"], .md [href="#kotori"], .md [href="#araragi-1"], .md [href="#blank-stare"], .md [href="#chaika-smile"], .md [href="#chitoge-pissed"], .md [href="#deadpan"], .md [href="#head-tilt"], .md [href="#jiii"], .md [href="#manly-tears"], .md [href="#not-raining"], .md [href="#ohmygod"], .md [href="#shock"], .md [href="#heart-thumbs-up"], .md [href="#worried"], .md [href="#wow-really"]
    { background-image: url(%%spritesheet5%%) }
    .md [href="#kininarimasu"]{ display: inline-block; width: 90px; height: 75px; background-position: -115px -5px; }
    .md [href="#kotori"]{ display: inline-block; width: 85px; height: 89px; background-position: -215px -5px; }
    .md [href="#araragi-1"]{ display: inline-block; width: 100px; height: 50px; background-position: -5px -95px; }
    .md [href="#blank-stare"]{ display: inline-block; width: 80px; height: 80px; background-position: -115px -95px; }
    .md [href="#chaika-smile"]{ display: inline-block; width: 77px; height: 80px; background-position: -5px -155px; }
    .md [href="#chitoge-pissed"]{ display: inline-block; width: 85px; height: 100px; background-position: -205px -155px; }
    .md [href="#deadpan"]{ display: inline-block; width: 80px; height: 85px; background-position: -300px -155px; }
    .md [href="#head-tilt"]{ display: inline-block; width: 121px; height: 100px; background-position: -312px -290px; }
    .md [href="#jiii"]{ display: inline-block; width: 100px; height: 60px; background-position: -5px -400px; }
    .md [href="#manly-tears"]{ display: inline-block; width: 150px; height: 100px; background-position: -445px -5px; }
    .md [href="#not-raining"]{ display: inline-block; width: 146px; height: 100px; background-position: -480px -115px; }
    .md [href="#ohmygod"]{ display: inline-block; width: 175px; height: 100px; background-position: -443px -290px; }
    .md [href="#shock"]{ display: inline-block; width: 170px; height: 100px; background-position: -115px -400px; }
    .md [href="#heart-thumbs-up"]{ display: inline-block; width: 79px; height: 100px; background-position: -295px -400px; }
    .md [href="#worried"]{ display: inline-block; width: 170px; height: 100px; background-position: -384px -400px; }
    .md [href="#wow-really"]{ display: inline-block; width: 80px; height: 85px; background-position: -564px -400px; }

    /* SoloSheet */
    @keyframes urbansmile {
    	from { background-position:0 -11522px; }
    	to { background-position:0 -8954px; }
    }

    .md [href^="#urbansmile"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%SoloSheet%%) 0px -11522px no-repeat;
    }

    .md [href^="#urbansmile"]:hover {
    	animation:urbansmile 1.46s steps(24);
    	animation-fill-mode: forwards;
    }

    @keyframes hyoukawink {
    	from { background-position: 0px -1342px; }
    	to { background-position: 0 0px; }
    }

    .md [href^="#hyoukawink"] {
    	display:inline-block;
    	height: 120px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%SoloSheet%%) -0px -1342px no-repeat;
    }

    .md [href^="#hyoukawink"]:hover {
    	animation: hyoukawink 1.8s steps(11);
    	animation-fill-mode: forwards;
    }

    @keyframes peasants {
    	from { background-position: 0px -13769px; }
    	to { background-position: 0 -11629px; }
    }

    .md [href^="#peasants"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%SoloSheet%%) -0px -13769px no-repeat;
    }

    .md [href^="#peasants"]:hover {
    	animation: peasants 1.2s steps(20);
    	animation-fill-mode: forwards;
    }

    @keyframes yousaidsomethingdumb {
    	from { background-position: 0px -8847px; }
    	to { background-position: 0 -3604px; }
    }

    .md [href^="#yousaidsomethingdumb"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%SoloSheet%%) -0px -8847px no-repeat;
    }

    .md [href^="#yousaidsomethingdumb"]:hover {
    	animation: yousaidsomethingdumb 2.5s steps(49);
    	animation-fill-mode: forwards;
    }

    @keyframes hajimepout {
    	from { background-position: 0px -3497px; }
    	to { background-position: 0 -1464px; }
    }

    .md [href^="#hajimepout"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%SoloSheet%%) -0px -3497px no-repeat;
    }

    .md [href^="#hajimepout"]:hover {
    	animation: hajimepout 1.74s steps(19);
    	animation-fill-mode: forwards;
    }

    /* Animated Sheet 1 */

    @keyframes excitedyui {
    	from { background-position: 0px 0px; }
    	to { background-position: 0 -1148px; }
    }

    .md [href^="#excitedyui"] {
    	display:inline-block;
    	height: 162px;
    	width: 122px;
    	overflow:hidden;
    	background: url(%%animatedsheet1%%) -0px 0px no-repeat;
    }

    .md [href^="#excitedyui"]:hover {
    	animation: excitedyui 0.8s steps(7) infinite;
    }

    /* DrPepperSheet */

    @keyframes banjo {
    	from { background-position: 0px -5029px; }
    	to { background-position: 0 -1605px; }
    }

    .md [href="#banjo"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%DrPepperSheet%%) -0px -5029px no-repeat;
    }

    .md [href="#banjo"]:hover {
    	animation: banjo 1.44s steps(32);
    	animation-fill-mode: forwards;
    }

    @keyframes slightoverreaction {
    	from { background-position: 0px -13375px; }
    	to { background-position: 0 -5136px; }
    }

    .md [href^="#slightoverreaction"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%DrPepperSheet%%) -0px -13375px no-repeat;
    }

    .md [href^="#slightoverreaction"]:hover {
    	animation: slightoverreaction 6.24s steps(77) infinite;
    }

    @keyframes anko {
    	from { background-position: 0px -1498px; }
    	to { background-position: 0 0px; }
    }

    .md [href^="#anko"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%DrPepperSheet%%) -0px -1498px no-repeat;
    }

    .md [href^="#anko"]:hover {
    	animation: anko 1.8s steps(14);
    	animation-fill-mode: forwards;
    }

    ele { color: #f00; }

    /* StaticSpriteSheet1 */
    .md [href="#badassmugi"]{ background: 0 -2922px; }
    .md [href^="#banjoisahellofadrug"]{ background: 0 -3022px; }
    .md [href="#bearhug"] { background: 0 -3122px; }
    .md [href="#bearwithme"] { background: 0 -3222px; }
    .md [href="#biribiricat"]{ background: 0 -3322px; }
    .md [href="#csikon"]{ background: 0 -3622px; }
    .md [href="#elsieqq"]{ background: 0 -3922px; }
    .md [href="#flclawe"]{ height: 133px!important; background: 0 -841px; }
    .md [href="#haruhiisnotamused"]{ background: 0 -4222px; }
    .md [href="#hisokaclown"]{ background: 0 -4422px; }
    .md [href="#hanasakueurgh"]{ background: 0 -4122px; }
    .md [href="#jibrilaww"]{ background: 0 -4622px; }
    .md [href="#jibrilfetish"]{ background: 0 -4722px; }
    .md [href="#katoupls"]{ background: 0 -4922px; }
    .md [href="#mechablush"]{ background: 0 -5222px; }
    .md [href="#miiaembarassed"]{ background: 0 -5422px; }
    .md [href="#miiatears"]{ background: 0 -5522px; }
    .md [href="#misakiteehee"]{ background: 0 -5622px; }
    .md [href="#misakiwink"]{ background: 0 -5722px; }
    .md [href="#nononkek"]{ background: 0 -5822px; }
    .md [href="#ohgodwhathaveidone"]{ background: 0 -6022px; }
    .md [href="#smugpoint"]{ background: 0 -6622px; }
    .md [href="#smugshinobu"]{ background: 0 -6722px; }
    .md [href="#SPORTS"]{ background: 0 -6922px; }
    .md [href="#takeofiredup"]{ background: 0 -7222px; }
    .md [href="#whowouldathunkit"]{ background: 0 -7822px; }
    .md [href="#yandereyuno"]{ background: 0 -8022px; }
    .md [href="#cup2"]{ background: 0 -3722px; }
    .md [href="#annoyedkirito"]{ height: 113px!important; background: 0 -2472px; }
    .md [href="#bestiathumbsup"]{ height: 133px!important; background: 0 -706px; }
    .md [href="#crazedlaugh"]{ height: 119px!important; background: 0 -1879px; }
    .md [href="#cup1"]{ height: 124px!important; background: 0 -1508px; }
    .md [href="#sunglasses"]{ height: 120px!important; background: 0 -1757px; }
    .md [href="#gintamaspillage"]{ height: 129px!important; background: 0 -1377px; }
    .md [href="#hunchedover"]{ height: 141px!important; background: 0 -144px; }
    .md [href="#hypeoverload"]{ width: 125px!important; height: 150px!important; background: 0 -8122px; }
    .md [href="#infernocopu"]{ width: 125px!important; height: 123px!important; background: 0 -8274px; }
    .md [href="#niatilt"]{ height: 114px!important; background: 0 -2704px; }
    .md [href="#nosepick"]{ height: 116px!important; background: 0 -2119px; }
    .md [href="#mug1"]{ height: 131px!important; background: 0 -1111px; }
    .md [href="#mug3"]{ height: 131px!important; background: 0 -1244px; }

    .md [href="#badassmugi"], .md [href^="#banjoisahellofadrug"], .md [href="#bearhug"], .md [href="#bearwithme"], .md [href="#biribiricat"], .md [href="#csikon"], .md [href="#elsieqq"], .md [href="#haruhiisnotamused"], .md [href="#hisokaclown"], .md [href="#hanasakueurgh"], .md [href="#jibrilaww"], .md [href="#jibrilfetish"], .md [href="#katoupls"], .md [href="#mechablush"], .md [href="#miiaembarassed"], .md [href="#miiatears"], .md [href="#misakiteehee"], .md [href="#misakiwink"], .md [href="#nononkek"], .md [href="#ohgodwhathaveidone"], .md [href="#smugpoint"], .md [href="#smugshinobu"], .md [href="#SPORTS"], .md [href="#takeofiredup"], .md [href="#whowouldathunkit"], .md [href="#yandereyuno"], .md [href="#cup2"], .md [href="#annoyedkirito"], .md [href="#bestiathumbsup"], .md [href="#flclawe"], .md [href="#crazedlaugh"], .md [href="#cup1"], .md [href="#sunglasses"], .md [href="#gintamaspillage"], .md [href="#hunchedover"], .md [href="#hypeoverload"], .md [href="#infernocopu"], .md [href="#niatilt"], .md [href="#nosepick"], .md [href="#mug1"], .md [href="#mug3"] {
    	display: inline-block;  background-image: url(%%StaticSpriteSheet1%%); width: 178px; height: 98px;}


    /* New Comment Faces - Static Sprite Sheet 2 */
    /* too many sizes for new format */
    .md [href="#akyuusqueel"],.md [href="#arakawascream"],.md [href="#asunanotamused"],.md [href="#barakamonnotcool"],.md [href="#bestiacheckyourprivilage"],.md [href="#charlpumped"],.md [href="#chiyomad"],.md [href="#comewithmeifyouwanttobebestgirl"],.md [href="#crazyhatgirlexcited"],.md [href="#disbelief"],.md [href="#dontdometh"],.md [href="#duckhue"],.md [href="#embarassedisla"],.md [href="#erirismile"],.md [href="#flclcatface"],.md [href="#gintamacrushed"],.md [href="#gintamasunlight"],.md [href="#gintamathispleasesme"],.md [href="#happycharl"],.md [href="#happypoi"],.md [href="#insolentkek"],.md [href="#izananotthisshitagain"],.md [href="#katoupout"],.md [href="#nocomment"],.md [href="#kumikouninterested"],.md [href="#kyonfacepalm"],.md [href="#maidshock"],.md [href="#marikalewd"],.md [href="#mug2"],.md [href="#nichijouqq"],.md [href="#psychoshock"],.md [href="#rengehype"],.md [href="#scaredmio"],.md [href="#sheerdisgust"],.md [href="#smugillya"],.md [href="#smuglancer"],.md [href="#smugshinoa"],.md [href="#soumadisdain"],.md [href^="#thoughtful"],.md [href="#trollarcher"],.md [href="#uglycry"],.md [href="#utahagottrolled"],.md [href="#vashheadscratch"],.md [href="#WRYYY"],.md [href="#yuitriggered"],.md [href="#yuruyuriapprove"],
    .md [href="#happydera"],.md [href="#holdme"],.md [href="#misakaheh"],.md [href="#ohnoudidnt"],.md [href="#startled"],.md [href="#teehee"],.md [href="#tiredfate"],.md [href="#chitogheh"] {
    	display: inline-block;  background: url(%%StaticSpriteSheet2%%); width: 178px; height: 98px;}

    .md [href="#akyuusqueel"]{ width: 129px; height: 121px; background-position: 0 -8621px; }
    .md [href="#arakawascream"]{ width: 143px; height: 117px; background-position: 0 -7733px; }
    .md [href="#asunanotamused"]{ width: 125px; height: 118px; background-position: 0 -10136px; }
    .md [href="#barakamonnotcool"]{ background-position: 0 -400px; }
    .md [href="#bestiacheckyourprivilage"]{ width: 123px; height: 106px; background-position: 0 -10615px; }
    .md [href="#charlpumped"]{ width: 151px; height: 102px; background-position: 0 -5532px; }
    .md [href="#chiyomad"]{ background-position: 0 -700px; }
    .md [href="#comewithmeifyouwanttobebestgirl"]{ background-position: 0 -800px; }
    .md [href="#crazyhatgirlexcited"]{ background-position: 0 -1000px; }
    .md [href="#disbelief"]{ width: 125px; height: 119px; background-position: 0 -10015px; }
    .md [href="#dontdometh"]{ width: 143px; height: 96px; background-position: 0 -8410px; }
    .md [href="#duckhue"]{ width: 143px; height: 122px; background-position: 0 -7485px; }
    .md [href="#embarassedisla"]{ background-position: 0 -1100px; }
    .md [href="#erirismile"]{ width: 142px; height: 162px; background-position: 0 -5933px; }
    .md [href="#flclcatface"]{ background-position: 0 -1400px; }
    .md [href="#gintamacrushed"]{ background-position: 0 -1600px; }
    .md [href="#gintamasunlight"]{ background-position: 0 -2000px; }
    .md [href="#gintamathispleasesme"]{ width: 143px; height: 141px; background-position: 0 -6403px; }
    .md [href="#happycharl"]{ background-position: 0 -2100px; }
    .md [href="#happypoi"]{ width: 143px; height: 142px; background-position: 0 -6259px; }
    .md [href="#insolentkek"]{ width: 125px; height: 99px; background-position: 0 -10721px; }
    .md [href="#izananotthisshitagain"]{ width: 125px; height: 135px; background-position: 0 -9616px; }
    .md [href="#katoupout"]{ background-position: 0 -2300px; }
    .md [href="#nocomment"]{ background-position: 0 -2400px; }
    .md [href="#kumikouninterested"]{ width: 125px; height: 140px; background-position: 0 -9336px; }
    .md [href="#kyonfacepalm"]{ background-position: 0 -2500px; }
    .md [href="#maidshock"]{ width: 107px; height: 106px; background-position: 0 -10978px; }
    .md [href="#marikalewd"]{ width: 125px; height: 157px; background-position: 0 -8864px; }
    .md [href="#mug2"]{ width: 143px; height: 105px; background-position: 0 -8198px; }
    .md [href="#nichijouqq"]{ width: 123px; height: 118px; background-position: 0 -8744px; }
    .md [href="#psychoshock"]{ background-position: 0 -2900px; }
    .md [href="#rengehype"]{ background-position: 0 -3000px; }
    .md [href="#scaredmio"]{ width: 123px; height: 154px; background-position: 0 -10822px; }
    .md [href="#sheerdisgust"]{ width: 143px; height: 158px; background-position: 0 -6097px; }
    .md [href="#smugillya"]{ width: 142px; height: 128px; background-position: 0 -7228px; }
    .md [href="#smuglancer"]{ width: 143px; height: 122px; background-position: 0 -7609px; }
    .md [href="#smugshinoa"]{ width: 143px; height: 113px; background-position: 0 -7968px; }
    .md [href="#soumadisdain"]{ background-position: 0 -3500px; }
    .md [href^="#thoughtful"]{ width: 143px; height: 114px; background-position: 0 -7852px; }
    .md [href="#trollarcher"]{ width: 125px; height: 154px; background-position: 0 -9180px; }
    .md [href="#uglycry"]{ background-position: 0 -4000px; }
    .md [href="#utahagottrolled"]{ width: 125px; height: 117px; background-position: 0 -10496px; }
    .md [href="#vashheadscratch"]{ width: 143px; height: 103px; background-position: 0 -8305px; }
    .md [href="#WRYYY"]{ background-position: 0 -4100px; }
    .md [href="#yuitriggered"]{ background-position: 0 -4200px; }
    .md [href="#yuruyuriapprove"]{ background-position: 0 -4400px; }
    .md [href="#happydera"]{ background-position: 0 -4500px; }
    .md [href="#holdme"]{ background-position: 0 -4600px; }
    .md [href="#misakaheh"]{ background-position: 0 -4700px; }
    .md [href="#ohnoudidnt"]{ background-position: 0 -4800px; }
    .md [href="#startled"]{ background-position: 0 -5000px; }
    .md [href="#teehee"]{ width: 155px; height: 122px; background-position: 0 -5408px; }
    .md [href="#tiredfate"]{ background-position: 0 -5200px; }
    .md [href="#chitogheh"]{ background-position: 0 0px; }

    /* Fuckin etotama face */

    .md [href="#etotamadunno"]{ display: inline-block;  background: url(%%etotamaface%%); width: 150px; height: 144px;}

    /* Fanta Sheet */

    @keyframes breakingnews {
    	from { background-position: 0px -9197px; }
    	to { background-position: 0 -8387px; }
    }

    .md [href^="#breakingnews"] {
    	display:inline-block;
    	height: 133px;
    	width: 176px;
    	overflow:hidden;
    	background: url(%%FantaSheet%%) -0px -9197px no-repeat;
    }

    .md [href^="#breakingnews"]:hover {
    	animation: breakingnews 0.5s steps(6) infinite;
    }

    @keyframes brofist {
    	from { background-position: 0px -3852px; }
    	to { background-position: 0 -1712px; }
    }

    .md [href^="#brofist"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%FantaSheet%%) -0px -3852px no-repeat;
    }

    .md [href^="#brofist"]:hover {
    	animation: brofist 1.68s steps(20);
    	animation-fill-mode: forwards;
    }

    @keyframes cokemasterrace {
    	from { background-position: 0px -856px; }
    	to { background-position: 0 -0px; }
    }

    .md [href^="#cokemasterrace"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%FantaSheet%%) -0px -856px no-repeat;
    }

    .md [href^="#cokemasterrace"]:hover {
    	animation: cokemasterrace 1.14s steps(8);
    	animation-fill-mode: forwards;
    }

    @keyframes curious {
    	from { background-position: 0px -5992px; }
    	to { background-position: 0 -3959px; }
    }

    .md [href^="#curious"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%FantaSheet%%) -0px -5992px no-repeat;
    }

    .md [href^="#curious"]:hover {
    	animation: curious 1.6s steps(19);
    	animation-fill-mode: forwards;
    }

    @keyframes evilgrin {
    	from { background-position: 0px -1605px; }
    	to { background-position: 0 -963px; }
    }

    .md [href^="#evilgrin"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%FantaSheet%%) -0px -1605px no-repeat;
    }

    .md [href^="#evilgrin"]:hover {
    	animation: evilgrin 0.56s steps(6);
    	animation-fill-mode: forwards;
    }

    @keyframes fedup {
    	from { background-position: 0px -8283px; }
    	to { background-position: 0 -6099px; }
    }

    .md [href^="#fedup"] {
    	display:inline-block;
    	height: 102px;
    	width: 185px;
    	overflow:hidden;
    	background: url(%%FantaSheet%%) -0px -8283px no-repeat;
    }

    .md [href^="#fedup"]:hover {
    	animation: fedup 2.4s steps(21);
    	animation-fill-mode: forwards;
    }

    /* Coke Sheet */

    @keyframes flattered {
    	from { background-position: 0px -7666px; }
    	to { background-position: 0 -3638px; }
    }

    .md [href^="#flattered"] {
    	display:inline-block;
    	height: 104px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%CokeSheet%%) -0px -7666px no-repeat;
    }

    .md [href^="#flattered"]:hover {
    	animation: flattered 2.34s steps(38);
    	animation-fill-mode: forwards;
    }

    @keyframes flyingbunsofdoom {
    	from { background-position: 0px -1177px; }
    	to { background-position: 0 -0px; }
    }

    .md [href^="#flyingbunsofdoom"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%CokeSheet%%) -0px -1177px no-repeat;
    }

    .md [href^="#flyingbunsofdoom"]:hover {
    	animation: flyingbunsofdoom 1.2s steps(11);
    	animation-fill-mode: forwards;
    }

    @keyframes forgotkeys {
    	from { background-position: 0px -8949px; }
    	to { background-position: 0 -7772px; }
    }

    .md [href^="#forgotkeys"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%CokeSheet%%) -0px -8949px no-repeat;
    }

    .md [href^="#forgotkeys"]:hover {
    	animation: forgotkeys 0.9s steps(11);
    	animation-fill-mode: forwards;
    }

    @keyframes garlock {
    	from { background-position: 0px -2140px; }
    	to { background-position: 0 -1284px; }
    }

    .md [href="#garlock"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%CokeSheet%%) -0px -2140px no-repeat;
    }

    .md [href="#garlock"]:hover {
    	animation: garlock 0.72s steps(8);
    	animation-fill-mode: forwards;
    }

    @keyframes giveuponlife {
    	from { background-position: 0px -3531px; }
    	to { background-position: 0 -2247px; }
    }

    .md [href^="#giveuponlife"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%CokeSheet%%) -0px -3531px no-repeat;
    }

    .md [href^="#giveuponlife"]:hover {
    	animation: giveuponlife 1.69s steps(12);
    	animation-fill-mode: forwards;
    }

    @keyframes helmetbro {
    	from { background-position: 0px -10396px; }
    	to { background-position: 0 -9056px; }
    }

    .md [href^="#helmetbro"] {
    	display:inline-block;
    	height: 132px;
    	width: 177px;
    	overflow:hidden;
    	background: url(%%CokeSheet%%) -0px -10396px no-repeat;
    }

    .md [href^="#helmetbro"]:hover {
    	animation: helmetbro 1.0s steps(10);
    	animation-fill-mode: forwards;
    }

    /* Anything But Pepsi Sheet */

    @keyframes idoruwinkdesu {
    	from { background-position: 0px -1498px; }
    	to { background-position: 0 -0px; }
    }

    .md [href^="#idoruwinkdesu"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%AnythingButPepsiSheet%%) -0px -1498px no-repeat;
    }

    .md [href^="#idoruwinkdesu"]:hover {
    	animation: idoruwinkdesu 1.05s steps(14);
    	animation-fill-mode: forwards;
    }

    @keyframes justno {
    	from { background-position: 0px -9050px; }
    	to { background-position: 0 -7490px; }
    }

    .md [href^="#justno"] {
    	display:inline-block;
    	height: 102px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%AnythingButPepsiSheet%%) -0px -9050px no-repeat;
    }

    .md [href^="#justno"]:hover {
    	animation: justno 1.72s steps(15);
    	animation-fill-mode: forwards;
    }

    @keyframes missedthepoint {
    	from { background-position: 0px -4066px; }
    	to { background-position: 0 -1605px; }
    }

    .md [href^="#missedthepoint"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%AnythingButPepsiSheet%%) -0px -4066px no-repeat;
    }

    .md [href^="#missedthepoint"]:hover {
    	animation: missedthepoint 2.4s steps(23);
    	animation-fill-mode: forwards;
    }

    @keyframes nuidideverythingright {
    	from { background-position: 0px -5885px; }
    	to { background-position: 0 -5243px; }
    }

    .md [href^="#nuidideverythingright"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%AnythingButPepsiSheet%%) -0px -5885px no-repeat;
    }

    .md [href^="#nuidideverythingright"]:hover {
    	animation: nuidideverythingright 0.5s steps(6);
    	animation-fill-mode: forwards;
    }

    /* Mountain Dew Sheet */

    @keyframes rerorero {
    	from { background-position: 0px -6634px; }
    	to { background-position: 0 -0px; }
    }

    .md [href^="#rerorero"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%MountainDewSheet%%) -0px -6634px no-repeat;
    }

    .md [href^="#rerorero"]:hover {
    	animation: rerorero 4.4s steps(62) infinite;
    }

    @keyframes scrumptiouslymoe {
    	from { background-position: 0px -11021px; }
    	to { background-position: 0 -6741px; }
    }

    .md [href^="#scrumptiouslymoe"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%MountainDewSheet%%) -0px -11021px no-repeat;
    }

    .md [href^="#scrumptiouslymoe"]:hover {
    	animation: scrumptiouslymoe 3.28s steps(40);
    	animation-fill-mode: forwards;
    }

    @keyframes slapbet {
    	from { background-position: 0px -11984px; }
    	to { background-position: 0 -11128px; }
    }

    .md [href^="#slapbet"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%MountainDewSheet%%) -0px -11984px no-repeat;
    }

    .md [href^="#slapbet"]:hover {
    	animation: slapbet 0.72s steps(8) infinite;
    }

    /* Mother Sheet*/

    @keyframes prelenny {
    	from { background-position: 0px -7323px; }
    	to { background-position: 0 -6313px; }
    }

    .md [href^="#prelenny"] {
    	display:inline-block;
    	height: 99px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%MotherSheet%%) -0px -7323px no-repeat;
    }

    .md [href^="#prelenny"]:hover {
    	animation: prelenny 1.1s steps(10);
    }

    @keyframes volibearQ {
    	from { background-position: 0px -6206px; }
    	to { background-position: 0 -3317px; }
    }

    .md [href^="#volibearQ"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%MotherSheet%%) -0px -6206px no-repeat;
    }

    .md [href^="#volibearQ"]:hover {
    	animation: volibearQ 1.72s steps(27);
    	animation-fill-mode: forwards;
    }

    @keyframes mywaifumadeyouasandwich {
    	from { background-position: 0px -8708px; }
    	to { background-position: 0 -7424px; }
    }

    .md [href^="#mywaifumadeyouasandwich"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%MotherSheet%%) -0px -8708px no-repeat;
    }

    .md [href^="#mywaifumadeyouasandwich"]:hover {
    	animation: mywaifumadeyouasandwich 1.3s steps(12);
    	animation-fill-mode: forwards;
    }

    /*Ginger Ale Sheet*/

    @keyframes torrentialdownpour {
    	from { background-position: 0px -8667px; }
    	to { background-position: 0 -3210px; }
    }

    .md [href^="#torrentialdownpour"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%GingerAleSheet%%) -0px -8667px no-repeat;
    }

    .md [href^="#torrentialdownpour"]:hover {
    	animation: torrentialdownpour 3.64s steps(51);
    }

    @keyframes watchadoin {
    	from { background-position: 0px -10914px; }
    	to { background-position: 0 -8774px; }
    }

    .md [href^="#watchadoin"] {
    	display:inline-block;
    	height: 105px;
    	width: 191px;
    	overflow:hidden;
    	background: url(%%GingerAleSheet%%) -0px -10914px no-repeat;
    }

    .md [href^="#watchadoin"]:hover {
    	animation: watchadoin 2.1s steps(20) infinite;
    }

    /* Centered text on comment face wiki titles */

    .wiki-page[class*="commentface"] table strong{display:block;text-align:center}

    /* Below here be new comment faces. Ye Be Warned */

    /*Budget Smile */

    @keyframes budgetsmile {
    	from { background-position: 0px -6634px; }
    	to { background-position: 0 0px; }
    }

    .md [href^="#budgetsmile"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%budgetsheet%%) -0px -6634px no-repeat;
    }

    .md [href^="#budgetsmile"]:hover {
    	animation: budgetsmile 3.78s steps(62);
    	animation-fill-mode: forwards;
    }

    /* New Animated Sheet 1 - Red Bull Sheet */

    @keyframes elsiesigh {
    	from { background-position: 0px -3008px; }
    	to { background-position: 0 -1296px; }
    }

    .md [href^="#elsiesigh"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%RedBullSheet%%) -0px -3008px no-repeat;
    }

    .md [href^="#elsiesigh"]:hover {
    	animation: elsiesigh 2.04s steps(16);
    	animation-fill-mode: forwards;
    }

    @keyframes hnng {
    	from { background-position: 0px -3115px; }
    	to { background-position: 0 -8144px; }
    }

    .md [href^="#hnng"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%RedBullSheet%%) -0px -3115px no-repeat;
    }

    .md [href^="#hnng"]:hover {
    	animation: hnng 4.8s steps(47);
    	animation-fill-mode: forwards;
    }

    @keyframes shittaste {
    	from { background-position: 0px -13167px; }
    	to { background-position: 0 -11247px; }
    }

    .md [href^="#shittaste"] {
    	display:inline-block;
    	height: 78px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%RedBullSheet%%) -0px -13167px no-repeat;
    }

    .md [href^="#shittaste"]:hover {
    	animation: shittaste 1.96s steps(24);
    	animation-fill-mode: forwards;
    }

    @keyframes taigasigh {
    	from { background-position: 0px -1188px; }
    	to { background-position: 0 0px; }
    }

    .md [href^="#taigasigh"] {
    	display:inline-block;
    	height: 106px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%RedBullSheet%%) -0px -1188px no-repeat;
    }

    .md [href^="#taigasigh"]:hover {
    	animation: taigasigh 1.68s steps(11);
    	animation-fill-mode: forwards;
    }

    @keyframes woo {
    	from { background-position: 0px -9214px; }
    	to { background-position: 0 -8251px; }
    }

    .md [href^="#woo"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%RedBullSheet%%) -0px -9214px no-repeat;
    }

    .md [href^="#woo"]:hover {
    	animation: woo 1.0s steps(9) infinite;
    }

    @keyframes yuitears {
    	from { background-position: 0px -11140px; }
    	to { background-position: 0 -9321px; }
    }

    .md [href^="#yuitears"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%RedBullSheet%%) -0px -11140px no-repeat;
    }

    .md [href^="#yuitears"]:hover {
    	animation: yuitears 2.16s steps(17) infinite;
    }

    /* New Animated Sheet 2 - Monster Sheet */

    @keyframes kurisudisappointed {
    	from { background-position: 0px -1441px; }
    	to { background-position: 0 0px; }
    }

    .md [href^="#kurisudisappointed"] {
    	display:inline-block;
    	height: 129px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%MonsterSheet%%) -0px -1441px no-repeat;
    }

    .md [href^="#kurisudisappointed"]:hover {
    	animation: kurisudisappointed 1.63s steps(11);
    	animation-fill-mode: forwards;
    }

    @keyframes kobeniblush {
    	from { background-position: 0px -5568px; }
    	to { background-position: 0 -1572px; }
    }

    .md [href^="#kobeniblush"] {
    	display:inline-block;
    	height: 109px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%MonsterSheet%%) -0px -5568px no-repeat;
    }

    .md [href^="#kobeniblush"]:hover {
    	animation: kobeniblush 1.48s steps(36);
    	animation-fill-mode: forwards;
    }

    @keyframes moeshitarcher {
    	from { background-position: 0px -18174px; }
    	to { background-position: 0 -10894px; }
    }

    .md [href^="#moeshitarcher"] {
    	display:inline-block;
    	height: 138px;
    	width: 150px;
    	overflow:hidden;
    	background: url(%%MonsterSheet%%) -0px -18174px no-repeat;
    }

    .md [href^="#moeshitarcher"]:hover {
    	animation: moeshitarcher 2.24s steps(52);
    	animation-fill-mode: forwards;
    }

    @keyframes kinirohug {
    	from { background-position: 0px -8033px; }
    	to { background-position: 0 -5679px; }
    }

    .md [href^="#kinirohug"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%MonsterSheet%%) -0px -8033px no-repeat;
    }

    .md [href^="#kinirohug"]:hover {
    	animation: kinirohug 2.3s steps(22);
    	animation-fill-mode: forwards;
    }
    @keyframes panic {
    	from { background-position: 0px -10792px; }
    	to { background-position: 0 -8140px; }
    }

    .md [href^="#panic"] {
    	display:inline-block;
    	height: 100px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%MonsterSheet%%) -0px -10792px no-repeat;
    }

    .md [href^="#panic"]:hover {
    	animation: panic 2.7s steps(26) infinite;
    }

    /* New Animated Sheet 3 - 7up Sheet*/

    @keyframes frustration {
    	from { background-position: 0px -6894px; }
    	to { background-position: 0 -4968px; }
    }

    .md [href^="#frustration"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%7upSheet%%) -0px -6894px no-repeat;
    }

    .md [href^="#frustration"]:hover {
    	animation: frustration 1.9s steps(18);
    	animation-fill-mode: forwards;
    }

    @keyframes laughter {
    	from { background-position: 0px -4860px; }
    	to { background-position: 0 0px; }
    }

    .md [href^="#laughter"] {
    	display:inline-block;
    	height: 106px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%7upSheet%%) -0px -4860px no-repeat;
    }

    .md [href^="#laughter"]:hover {
    	animation: laughter 4.6s steps(45) infinite;
    }

    @keyframes oilup {
    	from { background-position: 0px -15681px; }
    	to { background-position: 0 -13421px; }
    }

    .md [href^="#oilup"] {
    	display:inline-block;
    	height: 111px;
    	width: 150px;
    	overflow:hidden;
    	background: url(%%7upSheet%%) -0px -15681px no-repeat;
    }

    .md [href^="#oilup"]:hover {
    	animation: oilup 1.89s steps(20);
    	animation-fill-mode: forwards;
    }

    @keyframes popcorn {
    	from { background-position: 0px -13314px; }
    	to { background-position: 0 -7108px; }
    }

    .md [href^="#popcorn"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%7upSheet%%) -0px -13314px no-repeat;
    }

    .md [href^="#popcorn"]:hover {
    	animation: popcorn 5.81s steps(58);
    	animation-fill-mode: forwards;
    }

    /* New Animated Sheet 4 - Kool-Aid Sheet*/

    @keyframes imdone {
    	from { background-position: 0px -14486px; }
    	to { background-position: 0 -8774px; }
    }

    .md [href^="#imdone"] {
    	display:inline-block;
    	height: 100px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%KoolAidSheet%%) -0px -14486px no-repeat;
    }

    .md [href^="#imdone"]:hover {
    	animation: imdone 6.3s steps(56);
    	animation-fill-mode: forwards;
    }

    @keyframes unsure {
    	from { background-position: 0px -6848px; }
    	to { background-position: 0 0px; }
    }

    .md [href^="#unsure"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%KoolAidSheet%%) -0px -6848px no-repeat;
    }

    .md [href^="#unsure"]:hover {
    	animation: unsure 3.82s steps(64) infinite;
    }

    @keyframes wallbang {
    	from { background-position: 0px -8667px; }
    	to { background-position: 0 -6955px; }
    }

    .md [href^="#wallbang"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%KoolAidSheet%%) -0px -8667px no-repeat;
    }

    .md [href^="#wallbang"]:hover {
    	animation: wallbang 1s steps(16) infinite;
    }

    /* New Animated Sheet 5 - Lemon Lime Bitters*/

    @keyframes fistbump {
    	from { background-position: 0px -8128px; }
    	to { background-position: 0 -4704px; }
    }

    .md [href^="#fistbump"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%LemonLimeBittersSheet%%) -0px -8128px no-repeat;
    }

    .md [href^="#fistbump"]:hover {
    	animation: fistbump 2.5s steps(32);
    	animation-fill-mode: forwards;
    }

    @keyframes grouphug {
    	from { background-position: 0px -12515px; }
    	to { background-position: 0 -8235px; }
    }

    .md [href^="#grouphug"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%LemonLimeBittersSheet%%) -0px -12515px no-repeat;
    }

    .md [href^="#grouphug"]:hover {
    	animation: grouphug 4.92s steps(40);
    	animation-fill-mode: forwards;
    }

    @keyframes hahahawhat {
    	from { background-position: 0px -14064px; }
    	to { background-position: 0 -12622px; }
    }

    .md [href^="#hahahawhat"] {
    	display:inline-block;
    	height: 101px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%LemonLimeBittersSheet%%) -0px -14064px no-repeat;
    }

    .md [href^="#hahahawhat"]:hover {
    	animation: hahahawhat 1.5s steps(14);
    	animation-fill-mode: forwards;
    }

    /* New Animated Sheet 6 - Almdudler*/

    @keyframes nosebleed {
    	from { background-position: 0px -4387px; }
    	to { background-position: 0 0px; }
    }

    .md [href^="#nosebleed"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%AlmdudlerSheet%%) -0px -4387px no-repeat;
    }

    .md [href^="#nosebleed"]:hover {
    	animation: nosebleed 4.6s steps(41);
    	animation-fill-mode: forwards;
    }

    @keyframes elsienopesout {
    	from { background-position: 0px -13856px; }
    	to { background-position: 0 -8132px; }
    }

    .md [href^="#elsienopesout"] {
    	display:inline-block;
    	height: 104px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%AlmdudlerSheet%%) -0px -13856px no-repeat;
    }

    .md [href^="#elsienopesout"]:hover {
    	animation: elsienopesout 5.5s steps(54);
    	animation-fill-mode: forwards;
    }

    @keyframes feelsgoodman {
    	from { background-position: 0px -15138px; }
    	to { background-position: 0 -13962px; }
    }

    .md [href^="#feelsgoodman"] {
    	display:inline-block;
    	height: 96px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%AlmdudlerSheet%%) -0px -15138px no-repeat;
    }

    .md [href^="#feelsgoodman"]:hover {
    	animation: feelsgoodman 1.3s steps(12);
    	animation-fill-mode: forwards;
    }

    @keyframes shutupandtakemymoney {
    	from { background-position: 0px -8025px; }
    	to { background-position: 0 -4494px; }
    }

    .md [href^="#shutupandtakemymoney"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%AlmdudlerSheet%%) -0px -8025px no-repeat;
    }

    .md [href^="#shutupandtakemymoney"]:hover {
    	animation: shutupandtakemymoney 1.36s steps(33) infinite;
    }

    /* New Animated Sheet 7 - Big Red Sheet*/

    @keyframes combo {
    	from { background-position: 0px -2568px; }
    	to { background-position: 0 0px; }
    }
    .md [href^="#combo"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%BigRedSheet%%) -0px -2568px no-repeat;
    }
    .md [href^="#combo"]:hover {
    	animation: combo 2.5s steps(24);
    	animation-fill-mode: forwards;
    }

    @keyframes abandonthread {
    	from { background-position: 0px -8598px; }
    	to { background-position: 0 -6206px; }
    }
    .md [href^="#abandonthread"] {
    	display:inline-block;
    	height: 102px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%BigRedSheet%%) -0px -8598px no-repeat;
    }
    .md [href^="#abandonthread"]:hover {
    	animation: abandonthread 2.16s steps(23) infinite;
    }

    @keyframes shirouthumbsup {
    	from { background-position: 0px -6099px; }
    	to { background-position: 0 -2675px; }
    }
    .md [href^="#shirouthumbsup"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%BigRedSheet%%) -0px -6099px no-repeat;
    }
    .md [href^="#shirouthumbsup"]:hover {
    	animation: shirouthumbsup 1.32s steps(32);
    	animation-fill-mode: forwards;
    }

    /* New Animated Sheet 8 - Surge Sheet*/

    @keyframes kayosmile {
    	from { background-position: 0px -8288px; }
    	to { background-position: 0 0px; }
    }
    .md [href^="#kayosmile"] {
    	display:inline-block;
    	height: 110px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%SurgeSheet%%) -0px -8288px no-repeat;
    }
    .md [href^="#kayosmile"]:hover {
    	animation: kayosmile 3.1s steps(74);
    	animation-fill-mode: forwards;
    }

    @keyframes mandom {
    	from { background-position: 0px -16185px; }
    	to { background-position: 0 -13728px; }
    }
    .md [href="#mandom"] {
    	display:inline-block;
    	height: 187px;
    	width: 150px;
    	overflow:hidden;
    	background: url(%%SurgeSheet%%) -0px -16185px no-repeat;
    }
    .md [href="#mandom"]:hover {
    	animation: mandom 0.92s steps(13);
    	animation-fill-mode: forwards;
    }

    @keyframes megumin {
    	from { background-position: 0px -13622px; }
    	to { background-position: 0 -11396px; }
    }
    .md [href="#megumin"] {
    	display:inline-block;
    	height: 104px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%SurgeSheet%%) -0px -13622px no-repeat;
    }
    .md [href="#megumin"]:hover {
    	animation: megumin 2.5s steps(21);
    	animation-fill-mode: forwards;
    }

    @keyframes niconicono {
    	from { background-position: 0px -11289px; }
    	to { background-position: 0 -8400px; }
    }
    .md [href^="#niconicono"] {
    	display:inline-block;
    	height: 105px;
    	width: 190px;
    	overflow:hidden;
    	background: url(%%SurgeSheet%%) -0px -11289px no-repeat;
    }
    .md [href^="#niconicono"]:hover {
    	animation: niconicono 2.07s steps(27);
    	animation-fill-mode: forwards;
    }

    /* New Static Sprite Sheet 1 - Cream Soda Sheet*/
    .md [href="#amurodealwithit"]{background: 0 -323px;}
    .md [href="#angrytohsaka"]{background: 0 -446px;}
    .md [href="#antabaka"]{background: 0 -569px;}
    .md [href="#audiokun"]{background: 0 -692px;}
    .md [href="#badtaste"]{background: 0 -815px;}
    .md [href="#bebopyawn"]{background: 0 -938px;}
    .md [href="#brokenkokoro"]{background: 0 -1061px;}
    .md [href="#calmdown"]{background: 0 -1184px;}
    .md [href="#chinosmirk"]{background: 0 -1307px;}
    .md [href="#concealedexcitement"]{background: 0 -1430px;}
    .md [href="#cup3"]{background: 0 -1553px;}
    .md [href="#cup6"]{background: 0 -1676px;}
    .md [href="#didyouseriouslyjustsaythat"]{background: 0 -1799px;}
    .md [href="#displeasedasuka"]{background: 0 -1922px;}
    .md [href="#edneedsdis"]{background: 0 -2045px;}
    .md [href="#emipout"]{background: 0 -2168px;}
    .md [href="#exciteutawarerumono"]{background: 0 -2291px;}
    .md [href="#faito"]{background: 0 -2414px;}
    .md [href="#forbiddenlove"]{background: 0 -2537px;}
    .md [href="#ginapproves"]{background: 0 -2660px;}
    .md [href="#goblet1"]{background: 0 -2783px;}
    .md [href="#hakushodisgust"]{background: 0 -2906px;}
    .md [href="#happysaitama"]{background: 0 -3029px;}
    .md [href="#harunaehhh"]{background: 0 -3152px;}
    .md [href="#helmetgril"]{background: 0 -3275px;}
    .md [href="#howcouldyou"]{background: 0 -3398px;}
    .md [href="#igiveup"]{background: 0 -3521px;}
    .md [href="#illumiface"]{background: 0 -3644px;}
    .md [href="#ilovethiskindofshit"]{background: 0 -3767px;}
    .md [href="#juice1"]{background: 0 -3890px;}
    .md [href="#konosubawot"]{width: 129px!important; height: 167px!important;background: 0 0px;}
    .md [href="#konosubawot2"]{width: 129px!important; height: 152px!important;background: 0 -169px;}
    .md [href="#kukuku2"]{background: 0 -4013px;}
    .md [href="#kumikolook"]{background: 0 -4136px;}
    .md [href="#kumikotears"]{background: 0 -4259px;}
    .md [href="#kurumiorly"]{background: 0 -4382px;}
    .md [href="#loveyourself"]{background: 0 -4505px;}
    .md [href="#madsaitama"]{background: 0 -4628px;}
    .md [href="#mineisanevillaugh"]{background: 0 -4751px;}
    .md [href="#miyamoriunimpressed"]{background: 0 -4874px;}
    .md [href="#monkeyface"]{background: 0 -4997px;}
    .md [href="#mug4"]{background: 0 -5120px;}
    .md [href="#mug5"]{background: 0 -5243px;}
    .md [href="#mug7"]{background: 0 -5366px;}
    .md [href="#nanisoreaoi"]{background: 0 -5489px;}
    .md [href="#noice"]{background: 0 -5612px;}
    .md [href="#notaccordingtokeikaku"]{background: 0 -5735px;}
    .md [href="#ohigotit"]{background: 0 -5858px;}
    .md [href="#oooreally"]{background: 0 -6104px;}
    .md [href="#osomatsurage"]{background: 0 -6227px;}
    .md [href="#papithumbsup"]{background: 0 -6350px;}
    .md [href="#planetesgrin"]{background: 0 -6473px;}
    .md [href="#pleasetellmemore"]{width: 129px!important; height: 119px!important;background: 0 -6596px;}
    .md [href="#psh-mongrels"]{background: 0 -6719px;}
    .md [href="#rinkek"]{background: 0 -6842px;}
    .md [href="#rorypls"]{background: 0 -6965px;}
    .md [href="#saberawe"]{width: 106px!important; height: 137px!important;background: 0 -9142px;}
    .md [href="#saitamadeathstare"]{background: 0 -7088px;}
    .md [href="#salute"]{background: 0 -7211px;}
    .md [href="#schemingsaten"]{background: 0 -7334px;}
    .md [href="#shinjimug"]{background: 0 -7457px;}
    .md [href="#silentfury"]{background: 0 -7580px;}
    .md [href="#smugasuna"]{background: 0 -7703px;}
    .md [href="#spookyglasses"]{background: 0 -7826px;}
    .md [href="#tamakoapple"]{background: 0 -7949px;}
    .md [href="#tearsofabestgirl"]{background: 0 -8072px;}
    .md [href="#thisisfine"]{width: 129px!important; height: 98px!important; background: 0 -9041px;}
    .md [href="#timetogrope"]{width: 129px!important; height: 106px!important;background: 0 -8933px;}
    .md [href="#uglycry"]{background: 0 -8195px;}
    .md [href="#whatisthisguydoing"]{background: 0 -8318px;}
    .md [href="#yandereface"]{background: 0 -8441px;}
    .md [href="#yuishrug"]{background: 0 -8564px;}
    .md [href="#yukinom"]{background: 0 -8687px;}
    .md [href="#yunosunglasses"]{width: 105px!important; height: 121px!important;background: 0 -9281px;}
    .md [href="#zombiestare"]{background: 0 -8810px;}

    .md [href="#amurodealwithit"],.md [href="#angrytohsaka"],.md [href="#antabaka"],.md [href="#audiokun"],.md [href="#badtaste"],.md [href="#bebopyawn"],.md [href="#brokenkokoro"],.md [href="#calmdown"],.md [href="#chinosmirk"],.md [href="#concealedexcitement"],.md [href="#cup3"],.md [href="#cup6"],.md [href="#didyouseriouslyjustsaythat"],.md [href="#displeasedasuka"],.md [href="#edneedsdis"],.md [href="#emipout"],.md [href="#exciteutawarerumono"],.md [href="#faito"],.md [href="#forbiddenlove"],.md [href="#ginapproves"],.md [href="#goblet1"],.md [href="#hakushodisgust"],.md [href="#happysaitama"],.md [href="#harunaehhh"],.md [href="#helmetgril"],.md [href="#howcouldyou"],.md [href="#igiveup"],.md [href="#illumiface"],.md [href="#ilovethiskindofshit"],.md [href="#juice1"],.md [href="#konosubawot"],.md [href="#konosubawot2"],.md [href="#kukuku2"],.md [href="#kumikolook"],.md [href="#kumikotears"],.md [href="#kurumiorly"],.md [href="#loveyourself"],.md [href="#madsaitama"],.md [href="#mineisanevillaugh"],.md [href="#miyamoriunimpressed"],.md [href="#monkeyface"],.md [href="#mug4"],.md [href="#mug5"],.md [href="#mug7"],.md [href="#nanisoreaoi"],.md [href="#noice"],.md [href="#notaccordingtokeikaku"],.md [href="#ohigotit"],.md [href="#oooreally"],.md [href="#osomatsurage"],.md [href="#papithumbsup"],.md [href="#planetesgrin"],.md [href="#pleasetellmemore"],.md [href="#psh-mongrels"],.md [href="#rinkek"],.md [href="#rorypls"],.md [href="#saberawe"],.md [href="#saitamadeathstare"],.md [href="#salute"],.md [href="#schemingsaten"],.md [href="#shinjimug"],.md [href="#silentfury"],.md [href="#smugasuna"],.md [href="#spookyglasses"],.md [href="#tamakoapple"],.md [href="#tearsofabestgirl"],.md [href="#thisisfine"],.md [href="#timetogrope"],.md [href="#uglycry"],.md [href="#whatisthisguydoing"],.md [href="#yandereface"],.md [href="#yuishrug"],.md [href="#yukinom"],.md [href="#yunosunglasses"],.md [href="#zombiestare"] {
    	display: inline-block;  background-image: url(%%CreamSodaSheet%%); width: 129px; height: 121px;}

    /* New Static Sprite Sheet 2 - Root Beer Sheet */
    .md [href="#annoyedmayaka"]{background: 0 0px;}
    .md [href="#annoyedsaber"]{background: 0 -100px;}
    .md [href="#banhammer"]{background: 0 -200px;}
    .md [href="#bewilderedmegumi"]{background: 0 -300px;}
    .md [href="#bitchplease"]{background: 0 -400px;}
    .md [href="#boredblack"]{background: 0 -500px;}
    .md [href="#boredranta"]{background: 0 -600px;}
    .md [href="#cheekygahara"]{background: 0 -700px;}
    .md [href="#chihayafurushock"]{background: 0 -800px;}
    .md [href="#crumblingdespair"]{background: 0 -900px;}
    .md [href="#cup4"]{background: 0 -1000px;}
    .md [href="#cup5"]{background: 0 -1100px;}
    .md [href="#delicioustears"]{background: 0 -1200px;}
    .md [href="#dizzyakane"]{background: 0 -1300px;}
    .md [href="#donewiththisshit"]{background: 0 -1400px;}
    .md [href="#edtriggered"]{background: 0 -1500px;}
    .md [href="#firstthinginthemorning"]{background: 0 -1600px;}
    .md [href="#nibutanidisgust"]{background: 0 -1700px;}
    .md [href="#fuckyou"]{background: 0 -1800px;}
    .md [href="#garlock2"]{background: 0 -1900px;}
    .md [href="#giveitback"]{background: 0 -2000px;}
    .md [href="#glasses-push"]{background: 0 -2100px;}
    .md [href="#hackadollthumbsup"]{background: 0 -2200px;}
    .md [href="#healthypasstimes"]{background: 0 -2300px;}
    .md [href="#horrorfied"]{background: 0 -2400px;}
    .md [href="#hououinseesit"]{background: 0 -2500px;}
    .md [href="#illyascaredsurprise"]{background: 0 -2600px;}
    .md [href="#justasplanned"]{background: 0 -2700px;}
    .md [href="#kaorusmile"]{background: 0 -2800px;}
    .md [href="#keikaku"]{background: 0 -2900px;}
    .md [href="#kenshinoro"]{width: 143px!important; height: 140px!important;background: 0 -8800px;}
    .md [href="#killuadisgust"]{width: 143px!important; height: 140px!important;background: 0 -8942px;}
    .md [href="#konodioda"]{background: 0 -3000px;}
    .md [href="#kotourashock"]{background: 0 -3100px;}
    .md [href="#kuonlewd"]{background: 0 -3200px;}
    .md [href="#kurokokek"]{background: 0 -3300px;}
    .md [href="#labmembernumber009"]{background: 0 -3400px;}
    .md [href="#longing"]{background: 0 -3500px;}
    .md [href="#lovenectar"]{background: 0 -3600px;}
    .md [href="#madokamadness"]{background: 0 -3700px;}
    .md [href="#meguminthumbsup"]{background: 0 -3800px;}
    .md [href="#minoridenied"]{background: 0 -3900px;}
    .md [href="#mitsukishock"]{background: 0 -4000px;}
    .md [href="#mug6"]{background: 0 -4100px;}
    .md [href="#nanawot"]{background: 0 -4200px;}
    .md [href="#ohreallynow"]{background: 0 -4300px;}
    .md [href="#overwhelmed"]{background: 0 -4400px;}
    .md [href="#peace"]{background: 0 -4500px;}
    .md [href="#plebgetawayfromme"]{background: 0 -4600px;}
    .md [href="#poltears"]{background: 0 -4700px;}
    .md [href="#quality"]{background: 0 -4800px;}
    .md [href="#recoil"]{background: 0 -4900px;}
    .md [href="#saehug"]{background: 0 -5000px;}
    .md [href="#saesmile"]{background: 0 -5100px;}
    .md [href="#sciencebringspeopletogether"]{width: 176px!important; height: 98px!important; background: 0 -5200px;}
    .md [href="#schwing"]{background: 0 -5300px;}
    .md [href="#shatteredsaten"]{background: 0 -5400px;}
    .md [href="#shirayukidetermined"]{background: 0 -5500px;}
    .md [href="#shirayukidizzyblush"]{background: 0 -5600px;}
    .md [href="#shirayukidrunk"]{background: 0 -5700px;}
    .md [href="#shirayukieavesdrop"]{background: 0 -5800px;}
    .md [href="#shirayukifuckinreally"]{background: 0 -5900px;}
    .md [href="#shirayukismile"]{background: 0 -6000px;}
    .md [href="#shirayukisurprised"]{background: 0 -6100px;}
    .md [href="#sleepywhite"]{background: 0 -6200px;}
    .md [href="#smughaikyuu"]{background: 0 -6300px;}
    .md [href="#smugobi"]{background: 0 -6400px;}
    .md [href="#takaradasalute"]{background: 0 -6500px;}
    .md [href="#takasakiapproves"]{background: 0 -6600px;}
    .md [href="#takeaim"]{background: 0 -6700px;}
    .md [href="#thinkingtoohard"]{background: 0 -6800px;}
    .md [href="#tiredprince"]{background: 0 -6900px;}
    .md [href="#TOMODA"]{background: 0 -7000px;}
    .md [href="#toradorable"]{background: 0 -7100px;}
    .md [href="#toradorasalute"]{background: 0 -7200px;}
    .md [href="#triggeredkillua"]{background: 0 -7300px;}
    .md [href="#trollnui"]{background: 0 -7400px;}
    .md [href="#unimpressedenechan"]{background: 0 -7500px;}
    .md [href="#unpopularopinions"]{background: 0 -7600px;}
    .md [href="#utahapraises"]{background: 0 -7700px;}
    .md [href="#veryeducational"]{background: 0 -7800px;}
    .md [href="#waah"]{background: 0 -7900px;}
    .md [href="#watashihasdeclined"]{background: 0 -8000px;}
    .md [href="#watashiworried"]{background: 0 -8100px;}
    .md [href="#whatamireading"]{background: 0 -8200px;}
    .md [href="#whatdidijustwitness"]{background: 0 -8300px;}
    .md [href="#whatsgoingoninthere"]{background: 0 -8400px;}
    .md [href="#whatsinthere"]{background: 0 -8500px;}
    .md [href="#yanderekuon"]{background: 0 -8600px;}
    .md [href="#yonashock"]{background: 0 -8700px;}

    .md [href="#annoyedmayaka"],.md [href="#annoyedsaber"],.md [href="#banhammer"],.md [href="#bewilderedmegumi"],.md [href="#bewilderedmegumi"],.md [href="#bitchplease"],.md [href="#boredblack"],.md [href="#boredranta"],.md [href="#cheekygahara"],.md [href="#chihayafurushock"],.md [href="#crumblingdespair"],.md [href="#cup4"],.md [href="#cup5"],.md [href="#delicioustears"],.md [href="#dizzyakane"],.md [href="#donewiththisshit"],.md [href="#edtriggered"],.md [href="#firstthinginthemorning"],.md [href="#nibutanidisgust"],.md [href="#fuckyou"],.md [href="#garlock2"],.md [href="#giveitback"],.md [href="#glasses-push"],.md [href="#hackadollthumbsup"],.md [href="#healthypasstimes"],.md [href="#horrorfied"],.md [href="#hououinseesit"],.md [href="#illyascaredsurprise"],.md [href="#justasplanned"],.md [href="#kaorusmile"],.md [href="#keikaku"],.md [href="#kenshinoro"],.md [href="#killuadisgust"],.md [href="#konodioda"],.md [href="#kotourashock"],.md [href="#kuonlewd"],.md [href="#kurokokek"],.md [href="#labmembernumber009"],.md [href="#longing"],.md [href="#lovenectar"],.md [href="#madokamadness"],.md [href="#meguminthumbsup"],.md [href="#minoridenied"],.md [href="#mitsukishock"],.md [href="#mug6"],.md [href="#nanawot"],.md [href="#ohreallynow"],.md [href="#overwhelmed"],.md [href="#peace"],.md [href="#plebgetawayfromme"],.md [href="#poltears"],.md [href="#quality"],.md [href="#recoil"],.md [href="#saehug"],.md [href="#saesmile"],.md [href="#sciencebringspeopletogether"],.md [href="#schwing"],.md [href="#shatteredsaten"],.md [href="#shirayukidetermined"],.md [href="#shirayukidizzyblush"],.md [href="#shirayukidrunk"],.md [href="#shirayukieavesdrop"],.md [href="#shirayukifuckinreally"],.md [href="#shirayukismile"],.md [href="#shirayukisurprised"],.md [href="#sleepywhite"],.md [href="#smughaikyuu"],.md [href="#smugobi"],.md [href="#takaradasalute"],.md [href="#takasakiapproves"],.md [href="#takeaim"],.md [href="#thinkingtoohard"],.md [href="#tiredprince"],.md [href="#TOMODA"],.md [href="#toradorable"],.md [href="#toradorasalute"],.md [href="#triggeredkillua"],.md [href="#trollnui"],.md [href="#unimpressedenechan"],.md [href="#unpopularopinions"],.md [href="#utahapraises"],.md [href="#veryeducational"],.md [href="#waah"],.md [href="#watashihasdeclined"],.md [href="#watashiworried"],.md [href="#whatamireading"],.md [href="#whatdidijustwitness"],.md [href="#whatsgoingoninthere"],.md [href="#whatsinthere"],.md [href="#yanderekuon"],.md [href="#yonashock"] {
    	display: inline-block;  background-image: url(%%RootBeerSheet%%); width: 178px; height: 98px;}

    /* Leninade Sheet */
    .md [href="#konosubot"]{ width: 128px; height: 151px; background: -166px -457px;}
    .md [href="#lewdbot"]{ width: 151px; height: 148px; background: 0px -5px;}
    .md [href="#hardtruthbot"]{ width: 151px; height: 148px; background: 0px -157px;}
    .md [href="#blushubot"]{ width: 154px; height: 148px; background: 0px -309px;}
    .md [href="#yanderebot"]{ width: 128px; height: 148px; background: 0px -461px;}
    .md [href="#bot-chan"]{ width: 120px; height: 148px; background: -153px -5px;}
    .md [href="#heartbot"]{ width: 113px; height: 148px; background: -160px -157px;}
    .md [href="#konosubot"],.md [href="#lewdbot"],.md [href="#hardtruthbot"],.md [href="#blushubot"],.md [href="#yanderebot"],.md [href="#bot-chan"],.md [href="#heartbot"] {
    	display: inline-block; background-image: url(%%leninadesheet2%%) }

    /* Fuck it, nightmode compatability cause people want it and it's easy. */

    .res-nightmode .side .sidecontentbox,
    .res-nightmode .side .sidecontentbox *,
    .res-nightmode .side .titlebox,
    .res-nightmode .side .linkinfo {
    	background-color: #262626 !important;
    	border-color: #688AAD !important;
    }
    .res-nightmode .side .md h3 { background-color: transparent }
    .res-nightmode .title { color: #CCC !important }
    .res-nightmode .morelink a { text-shadow: none }

    /* Earth2Mars thumbnails */

    /* Background positions set the actual icon for different threads */
    .thumbnail.self { background: 0 -568px; }
    .thumbnail[href*="recom"] { background: 0 -355px }
    .thumbnail[href*="fanart"] { background: 0 -142px }
    .thumbnail[href*="cosplay"] { background: 0 0 }
    .thumbnail[href*="satire"] { background: 0 -497px }
    .thumbnail[href*="/wt"] { background: 0 -710px }
    .thumbnail[href*="spoiler"], .thumbnail.spoiler { background: 0 -639px}
    .thumbnail[href*="spoilers"][href*="episode"],
    [data-author="Holo_of_Yoitsu"] .thumbnail { background: 0 -71px}
    .thumbnail[href*="rewatch"] { background: 0 -426px }
    .thumbnail.nsfw { background: 0 -284px }
    .linkflair-green .thumbnail { background: 0 -213px }

    /* Everything we apply the custom icons to gets the spritesheet and height styles */
    .thumbnail.self, .thumbnail.nsfw, .thumbnail.spoiler {
        background-image: url(%%thumbnail%%) !important; /* important because the "spoilers+episode" rule is more specific */
        height: 70px;
    }

    /* Xmas showflakes, /r/GlobalOffensive */

    /* html:not([lang*="nb"]) #header:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color:transparent;
        background-image:url(%%snowflake%%),url(%%snowflake%%);
        -webkit-animation:snow 15s linear infinite;
        -moz-animation:snow 15s linear infinite;
        -ms-animation:snow 15s linear infinite;
        animation:snow 15s linear infinite;
        pointer-events: none;
    }

    @-webkit-keyframes snow {
        0%{ background-position:0 0,0 0,0 0 }
        100%{ background-position:500px 1000px,400px 400px,300px 300px }
    }

    @-moz-keyframes snow {
        0% { background-position:0 0,0 0,0 0 }
        100% { background-position:500px 1000px,400px 400px,300px 300px }
    }

    @-ms-keyframes snow {
        0% { background-position:0 0,0 0,0 0}
        100% { background-position:500px 1000px,400px 400px,300px 300px }
    }

    @keyframes snow {
        0% { background-position:0 0,0 0,0 0 }
        100% { background-position:500px 1000px,400px 400px,300px 300px }
    } */

    /*
    These are way down here now to prevent things from being terrible. The terribleness is caused by spoiler posts' color overriding the !important here with their own !important.
    - Document out why we need !important for the spoiler colors
    - Move this back up to where it was
    - Stop using !important altogether tbh

    TODO
    */

    /* Mod use link flairs */
    .linkflair-misleading .linkflairlabel {color: #e02424 !important; font-weight:900; background:white !important; border:1px solid #e02424; }
    .linkflair-yellow a.title, .linkflair-green a.title, .linkflair-blue a.title, .linkflair-red a.title {
    	line-height: 2.1em;
    	padding: 3px !important;
    	padding: 3px 7px !important
    }

    .linkflair-blue a.title {
    	background: #688aad;
    	border: 1px solid #3e5267;
    	color: white !important
    }

    .linkflair-blue a.title:visited {
    	background: #688aad;
    	border: 1px solid #3e5267;
    	color: white !important
    }

    .linkflair-blue a.title:hover {
    	background: #3e5267;
    	border: 1px solid #3e5267;
    	color: white !important
    }

    /* .content ... {} // kms */
    .content .linkflair-green a.title {
    	background: #46b141;
    	border: 1px solid #009900;
    	color: white !important
    }

    .content .linkflair-green a.title:visited {
    	background: #46b141;
    	border: 1px solid #009900;
    	color: white !important
    }

    .content .linkflair-green a.title:hover {
    	background: #009900;
    	border: 1px solid #009900;
    	color: white !important
    }
`

function findFacesFromInput (input) {
    // get the things
    const matches = input.match(/="#[a-z0-9-_]+(?="])/gi)

    const faceCodes = matches.map(match => match.substr(3))

    return removeDuplicates(faceCodes)
}

function removeDuplicates (arr) {
    return arr.filter((e, i) => arr.indexOf(e) == i)
}

// console.log('[')
const faces = findFacesFromInput(input)
console.log(JSON.stringify(faces, null, 4))
