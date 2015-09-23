$(document).ready(function() {
	$( "#tinybtn" ).click(function( event ) {
	  // Stop form from submitting normally
	 
	  // Get some values from elements on the page:
	  var $form = $( "#tinyform" ),
	    term = $form.find( "input[name='url']" ).val(),
	    url = $form.attr( "action" );
	 
	  // Send the data using post
	  var posting = $.post( url,{"url":term});
	 
	  // Put the results in a div
	  posting.done(function( data ) {
		  if(typeof(data)!=='undefined' || data!=='')
			  $( ".result" ).empty().append( "Your shortened URL is <a href="+data.base_url+'/'+data.id+" target='_blank'>"+ data.base_url+"/"+data.id );
	  });
	});
});