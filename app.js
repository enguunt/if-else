// if,else -> nuhtsol shalgah
// tentsuu  bnu ? ih bnu? baga bnu?
var age=15;
// >, <, >=, <=, ==, !=
if(age>17){
	console.log("Ta nasand hursen bain");
}else{
	console.log ("ta nasand hureegui bain");
}
var too=10;
if(too>90){
	console.log("ih too");
}else{
	console.log("baga too");
}
var tegsh=5; // 5%2==1, 4%2==0 // != not equal/tentsuu bish
if(tegsh%2==1){
	console.log("sondgoi too");
}else{
	console.log("tegsh too");
}
var eyreg= -12; //too 0 ih bol eyreg too, too 0 ees baga bol sorog too
if(eyreg>0){
	console.log("eyreg too");
}else{
	console.log("sorog too");
}
// &&-> and/bas, || -> or/esvel
var nas=25;
var huis="emegtei";
if(nas>17 && huis=="emegtei");
	console.log("Nasand hureegui bas emegtei");
// Garaas dun /0-100/ oruulhad hargalzah unelgeeg gargaj ireh kod bichne uu. 0-59 f, 60-69 D, 70-79 c, 80-89 B, 90-100 A,
// 0 ees baga 100-aas ih dun oruulval tiim dun baihgui gej garch irne
var dun=56;
if(dun>=0 && dun<=59){
	console.log("F");
}else if(dun>=60 && dun<69){
	console.log("D");
}else if(dun>=70 && dun<97){
	console.log("C");
}else if(dun>=80 && dun<89){
	console.log("B");
}else if(dun>=90 && dun<100){
	console.log("A");
}else{
	console.log("0 ees baga 100 aas ih dun oruulval tiim dun baihgui");
}
alert("Ta dangoniin 15 dugaar dawhart baina. Gertee harihiig husvel shataar ogsnuu");
alert("Ta nii yawah zamd mangsuud garch ireh tul zewsgee songonuu");
var choice= prompt("selem/tsugtah");
if (choice=="selem"){
	alert("ta 14 dawharluu yawnuu");
	alert("14 dugeer dawhar slime garh irlee");
var choice2=prompt ("tsugtah/selmeer dairah")
	 alert("selmeer slime alj HP nohogdloo");
	 alert("13 dawhar naaldamhai slime garch irlee");
var choice3=prompt ("orhiod yawah/alah");
if(choice3=="alah")
	alert("ta naaldamhai slime alj zombi goos hamgaalah omsgol olj awlaa");
	alert("12 dugaar dawhar safe zone");	
    alert(" ta 5dugaar dawhar hurtel teleport hiihu");
	var choice5=prompt("teleport hiin/hiihgui");
	alert("Ta 5dugaar dawhart irlee.Tsaash yawanuu");
	alert("4dugeer dawahar godlin sureg dairlaa");
var choice4=prompt ("selmeer tuldah/tsugtah");
alert("tsaash tulaldsaar olon chadwar awsaar etsesden 1 dugeer dawhar suulchin bos");
alert("suulchin bosig allaa");
var choice6=prompt("ta gertee harihuu/100 dugaar dawhaar dahin ehlehuu");
	alert("tand yalsand bayr hurgey");
}else if(choice6=="100 dugaar dawhar "){
	alert("100 dugaar dahwar tanii diilehgui mangas garch iren ta uhlee");
}
