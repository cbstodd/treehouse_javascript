// Number guess While Loop
/*
var num = 10000;
var randomNumber = getRandomNumber( num );
var guess;
var attempts = 0;

function getRandomNumber( num ) {
	return Math.floor(Math.random() * num ) + 1;
}

while ( guess !== randomNumber ) {
	guess = getRandomNumber( num );
	attempts += 1;
}

document.write("<p>The random number is: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " tries to get the number right</p>");
*/

// Do While Loop
/* var secret;
do {
	secret = prompt("What is the secret password?");

} while ( secret !== "sesame" );
document.write("You know the secret password. Welcome."); */

//For Loop

// for ( var val = 4; val < 156; val++ ) {
// 	console.log(val);
// }



// Generate Random Colors
// var html = '';
// var red;
// var green;
// var blue;
// var rgbColor;
//
//
// for ( var i = 0; i <= 9; i++ ) {
// 	red = Math.floor(Math.random() * 256 );
// 	green = Math.floor(Math.random() * 256 );
// 	blue = Math.floor(Math.random() * 256 );
// 	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// 	html += '<div style="background-color:' + rgbColor + '; width:50px; height:50px; border-radius:50%; display:inline-block; margin: 10px;"></div>';
// }
//
// document.write(html);

//Print list of items to page via playList function on main.js
// var playList = [];
//
// playList.push('Alfredo');
// playList.push('Carry Me On My way');
// playList.push('Enter Sandman');
// playList.push('Roxanne')
//
// printList( playList );


//Creates asearch program to find store items

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber' ];

var search;

// Prints message into a paragraph.
function print( message ) {
	document.write("<p class='well'>" + message + "</p>");
}

while ( true ) {
	search = prompt("Type in a item that you are looking for, or type 'exit' to quit the program or 'list' to show all of the current items.");
	if ( search === 'quit' ) {
		break;
	} else if ( search === 'list' ) {
		print(inStock.join(", "));
	} else {
			if ( inStock.indexOf(search) > -1 ) {
				print("Yes we have " + search + " in the store");
			} else {
				print("No we are out of " + search);
			}
	}
}
