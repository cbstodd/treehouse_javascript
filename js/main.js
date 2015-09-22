function printList( list ) {
  var listHTML = '<ol class="list-group">';
  for (var i = 0; i < list.length; i++) {
    listHTML += '<li class="list-group-item list-group-item-info">' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

function print( html ) {
  document.write( html );
}
