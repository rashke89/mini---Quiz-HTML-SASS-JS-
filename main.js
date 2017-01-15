var bazaPitanja = [{	
	pitanje: 'Kada je bio kosovski boj?',
	odgvr:['1365','1389','1986','1379']	
},{
	pitanje: 'Kada je poceo drugi svetski rat?',
	odgvr: ['1950','1951','1939','1946'],

},{
	pitanje: 'Kada je Andric dobio Nobelovu nagradu?',
	odgvr: ['1950','1961','1951','1960']
},{
	pitanje: 'Kada je nastao Google?',
	odgvr: ['11. oktobar 1996.','23. avgust 1997.','4. septembar 1998.','13. oktobar 1998.']
},{
	pitanje: 'Kada je nastala parna masina?',
	odgvr: ['1677','1698','1689','1712']

}];
var tacan = [bazaPitanja[0].odgvr[1], bazaPitanja[1].odgvr[2], bazaPitanja[2].odgvr[1], bazaPitanja[3].odgvr[2], bazaPitanja[4].odgvr[2]];

console.log(tacan);
var wrapper = document.getElementsByClassName('wrapper')[0];
var pitanje = document.getElementsByClassName('pitanje')[0];
var odg01 = document.getElementsByClassName('odgovor01')[0];
var odg02 = document.getElementsByClassName('odgovor02')[0];
var odg03 = document.getElementsByClassName('odgovor03')[0];
var odg04 = document.getElementsByClassName('odgovor04')[0];
var odg = document.getElementsByClassName('odg');
var btn = document.getElementsByTagName('button')[0];
var score = document.getElementsByClassName('score')[0];
var rez = document.getElementsByClassName('rez')[0];
var b = 0;
var ukPt = 0;
var osvojio = 10;
var izgubio = 5;

btn.addEventListener('click',slPitanje);
odg01.addEventListener('click',odgovor01);
odg02.addEventListener('click',odgovor02);
odg03.addEventListener('click',odgovor03);
odg04.addEventListener('click',odgovor04);

function odgovor01(){
	odg01.style.backgroundColor = 'rgba(150, 243, 200, 0.8)';
	odg02.style.backgroundColor = '';
	odg03.style.backgroundColor = '';
	odg04.style.backgroundColor = '';
	var dgm = odg01.innerHTML;
	if (dgm == tacan[0] || dgm == tacan[1] || dgm == tacan[2] || dgm == tacan[3] || dgm == tacan[4]) {
		odg01.style.backgroundColor = '#67FF53';
		console.log('TACAN ODGOVOR');
		ukPt +=10
		score.innerHTML = ukPt;
		odg01.style.backgroundColor = 'rgba(150, 243, 100)';
		rez.innerHTML = 'Tacan odgovor +10!'
	}else{
		odg01.style.backgroundColor = '#FF5F49';
		console.log('nije tacan')
		ukPt -=5;
		score.innerHTML = ukPt;
		console.log(ukPt);
		rez.innerHTML = 'Netacan odgovor -5!'
	}
};
function odgovor02(){
	odg02.style.backgroundColor = 'rgba(150, 243, 200, 0.8)';
	odg01.style.backgroundColor = '';
	odg03.style.backgroundColor = '';
	odg04.style.backgroundColor = '';
	var dgm = odg02.innerHTML;
	if (dgm == tacan[0] || dgm == tacan[1] || dgm == tacan[2] || dgm == tacan[3] || dgm == tacan[4]) {
		odg02.style.backgroundColor = '#67FF53';
		ukPt +=10
		score.innerHTML = ukPt;
		rez.innerHTML = 'Tacan odgovor +10!'
	}else{
		odg02.style.backgroundColor = '#FF5F49';
		ukPt -=5;
		score.innerHTML = ukPt;
		console.log(ukPt);
		rez.innerHTML = 'Netacan odgovor -5!'
	}
};
function odgovor03(){
	odg03.style.backgroundColor = 'rgba(150, 243, 200, 0.8)';
	odg04.style.backgroundColor = '';
	odg02.style.backgroundColor = '';
	odg01.style.backgroundColor = '';
	var dgm = odg03.innerHTML;
	if (dgm == tacan[0] || dgm == tacan[1] || dgm == tacan[2] || dgm == tacan[3] || dgm == tacan[4]) {
		odg03.style.backgroundColor = '#67FF53';
		ukPt +=10
		score.innerHTML = ukPt;
		rez.innerHTML = 'Tacan odgovor +10!'
	}else{
		odg03.style.backgroundColor = '#FF5F49';
		ukPt -=5;
		score.innerHTML = ukPt;
		console.log(ukPt);
		rez.innerHTML = 'Netacan odgovor -5!'
	}
};
function odgovor04(){
	odg04.style.backgroundColor = 'rgba(150, 243, 200, 0.8)';
	odg03.style.backgroundColor = '';
	odg02.style.backgroundColor = '';
	odg01.style.backgroundColor = '';
	var dgm = odg04.innerHTML;
	if (dgm == tacan[0] || dgm == tacan[1] || dgm == tacan[2] || dgm == tacan[3] || dgm == tacan[4]) {
		odg04.style.backgroundColor = '#67FF53';
		console.log('TACAN ODGOVOR');
		score.innerHTML = poeni + osvojio;
		rez.innerHTML = 'Tacan odgovor +10!'
	}else{
		odg04.style.backgroundColor = '#FF5F49';
		ukPt -=5;
		score.innerHTML = ukPt;
		rez.innerHTML = 'Netacan odgovor -5!'
	}
};
function slPitanje(){
	btn.innerHTML = 'Sledece pitanje'
	pitanje.innerHTML = bazaPitanja[b].pitanje;
	odg01.style.backgroundColor = '';
	odg02.style.backgroundColor = '';
	odg03.style.backgroundColor = '';
	odg04.style.backgroundColor = '';
	rez.innerHTML = '';
	for (var i = 0; i < odg.length; i++) {
		odg[i].innerHTML = bazaPitanja[b].odgvr[i];
	}
	b++
	console.log(b);
	console.log(bazaPitanja.length)
	if (bazaPitanja.length == b) {
		btn.innerHTML = 'Kraj igre'
		console.log('kraj');
		btn.addEventListener('click', rezultat)
	}
};
function rezultat(){
	score.innerHTML = '';
	rez.style.backgroundColor = '#669';
	rez.style.color = 'red';
	rez.innerHTML = 'Osvojili ste '+ ukPt + ' poena!';
	btn.style.display = 'none';
};