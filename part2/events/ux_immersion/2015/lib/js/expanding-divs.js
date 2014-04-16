// Contains js for expanding divs
// Added by Kaitlyn Carcia 
// Last modified April 16, 2014

$(document).ready(function(){
		/* mouseover*/
		$( "#1" ).hover( function() {
			$('#1').removeClass('six column person');
			$('#1').addClass('eight column');
			
			$('#2').removeClass('six column');
			$('#2').addClass('four column');
			$('#ben').fadeIn("slow");
			
			/* mouseout */				    	
		}, function() {
			$('#1').removeClass('eight column');
			$('#1').addClass('six column person');
			
			$('#2').removeClass('four column');
			$('#2').addClass('six column');
			$('#ben').hide();
		}
	);
	
		$( "#2" ).hover( function() {
			$('#2').removeClass('six column person');
			$('#2').addClass('eight column');
			
			$('#1').removeClass('six column');
			$('#1').addClass('four column');
			$('#cyd').fadeIn("slow");
			
			/* mouseout */				    	
		}, function() {
			$('#2').removeClass('eight column');
			$('#2').addClass('six column person');
			
			$('#1').removeClass('four column');
			$('#1').addClass('six column');
			$('#cyd').hide();
		}
	);
	
		$( "#3" ).hover( function() {
			$('#3').removeClass('six column person');
			$('#3').addClass('eight column');
			
			$('#4').removeClass('six column');
			$('#4').addClass('four column');
			$('#brad').fadeIn("slow");
			
			/* mouseout */				    	
		}, function() {
			$('#3').removeClass('eight column');
			$('#3').addClass('six column person');
			
			$('#4').removeClass('four column');
			$('#4').addClass('six column');
			$('#brad').hide();
		}
	);
	
		$( "#4" ).hover( function() {
			$('#4').removeClass('six column person');
			$('#4').addClass('eight column');
			
			$('#3').removeClass('six column');
			$('#3').addClass('four column');
			$('#jason').fadeIn("slow");
			
			/* mouseout */				    	
		}, function() {
			$('#4').removeClass('eight column');
			$('#4').addClass('six column person');
			
			$('#3').removeClass('four column');
			$('#3').addClass('six column');
			$('#jason').hide();
		}
	);
	
		$( "#5" ).hover( function() {
			$('#5').removeClass('six column person');
			$('#5').addClass('eight column');
			
			$('#6').removeClass('six column');
			$('#6').addClass('four column');
			$('#nate').fadeIn("slow");
			
			/* mouseout */				    	
		}, function() {
			$('#5').removeClass('eight column');
			$('#5').addClass('six column person');
			
			$('#6').removeClass('four column');
			$('#6').addClass('six column');
			$('#nate').hide();
		}
	);	
	
		$( "#6" ).hover( function() {
			$('#6').removeClass('six column person');
			$('#6').addClass('eight column');
			
			$('#5').removeClass('six column');
			$('#5').addClass('four column');
			$('#karen').fadeIn("slow");
			
			/* mouseout */				    	
		}, function() {
			$('#6').removeClass('eight column');
			$('#6').addClass('six column person');
			
			$('#5').removeClass('four column');
			$('#5').addClass('six column');
			$('#karen').hide();
		}
	);	
	
		$( "#7" ).hover( function() {
			$('#7').removeClass('six column person');
			$('#7').addClass('eight column');
			
			$('#8').removeClass('six column');
			$('#8').addClass('four column');
			$('#luke').fadeIn("slow");
			
			/* mouseout */				    	
		}, function() {
			$('#7').removeClass('eight column');
			$('#7').addClass('six column person');
			
			$('#8').removeClass('four column');
			$('#8').addClass('six column');
			$('#luke').hide();
		}
	);	
	
		$( "#8" ).hover( function() {
			$('#8').removeClass('six column person');
			$('#8').addClass('eight column');
			
			$('#7').removeClass('six column');
			$('#7').addClass('four column');
			$('#jared').fadeIn("slow");
			
			/* mouseout */				    	
		}, function() {
			$('#8').removeClass('eight column');
			$('#8').addClass('six column person');
			
			$('#7').removeClass('four column');
			$('#7').addClass('six column');
			$('#jared').hide();
		}
	);				
});