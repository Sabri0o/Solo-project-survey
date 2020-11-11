//////////////////////////////////////////////

function updateRates(charactersRates){
	for(character in charactersRates){
		var hash = '#'+character
		if($(hash).prop('checked')){
			charactersRates[character] += 1
		}
	}
	return charactersRates
}

///////////////////////////////////////////////

function storeData(){
	var email = $('#email').val()
	try{
		if(!data.emails.includes(email)){
			data.emails.push(email)
			data.charactersRates = updateRates(data.charactersRates)
			localStorage.setItem('data', JSON.stringify(data))
			alert('Thank you for completing the survey')
			return 
		}
		alert('You have already respond to the survey.')
	}
	catch{
		localStorage.setItem('data', JSON.stringify({emails:[email],charactersRates :updateRates({
			"Iron-Man":10,
			"Hulk":10,
			"Black-Widow":12,
			"Doctor-Strange":10,
			"Thor":10,
			"Captain-America":10,
			"Thanos":10,
			"Hawkeye":10,
			"Falcon":10,
			"Spider-Man":10,
			"Scarlet-Witch":10,
			"Captain-Marvel":10,
			"Ant-Man":10,
			"Black-Panther":10,
			"Nick-Fury":10,
			"Star-Lord":10,
			"Gamora":10,
			"Rocket-Raccoon":10,
			"Groot":10,
			"Drax":10,
			"Deadpool":0 })
		}))
		alert('Thank you for completing the survey') 
	}	
}

const data = JSON.parse(localStorage.getItem('data'))
//localStorage.removeItem("data");



//////////////////////////////////////////////////////


function compare( a, b ) {
  if ( a[1] < b[1] ){
    return 1;
  }
  if ( a[1] > b[1] ){
    return -1;
  }
  return 0;
}


/////////////////////////////////////////////

var totalVotes = Object.values(data.charactersRates).reduce((a,b)=>(a+b))
var keysData = Object.keys(data.charactersRates)
var valuesData = Object.values(data.charactersRates)
var coll = keysData.map(function(key, index) {
  return [key,valuesData[index]];
});
coll.sort(compare)


$(function(){
	for(var i = 0;i<coll.length;i++){
		$("#sorted").append(`<p>${coll[i][0].replace('-',' ')}</p><div class='container'><div class='character${' '+ coll[i][0]}'></div></div>`)
		//$("p:first").addClass("intro")
		var classCharacter = '.'+coll[i][0]
		var width = coll[i][1]*100 / totalVotes
		$(classCharacter).css({'width':width.toPrecision(2)+'%','text-align':'center'});
		$('.character'+classCharacter).text(width.toPrecision(2)+'%')  ;
	}
})



/*<p>Iron Man</p>
    <div class="container">
      <div class="character Iron-Man"></div>
    </div>
/////////////////////////////////////////////
*/

$(window).load(function () {
    $(".popup").click(function(){
       $('.hover-popup').show();


    });
    $('.hover-popup').click(function(){
        $('.hover-popup').hide();
    });

});
