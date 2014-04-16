var topicIterator = 0,
	// The value below represents the number of seconds between each auto-transition on the Home page topics
	secondsBetweenTopicSwitch = 4,
	intervalTimeout;
 
$(document).ready(function() {

	/* ------------------------------------------
		Email form validation and submission to
		Constant Contact. Added 4/23 by M.A.
	------------------------------------------ */
	$("#mailingListSubmit").click(function(){
		$.ajax({
			type: "GET",
			url: "/Library/check-email-add-to-cc.php",
			data: "emailInput="+$("#emailInput").val()+"&listid="+$("#listid").val(),
			success: function(html) {
				if (html == "SUCCESS") {
					$("#formResponse").html('<p class="successMessage">Thanks! We got your email address.</p>');
					$("#emailList form").hide();
				} else {
					if (html == "ERROR|INVALID_EMAIL") {
						$("#formResponse").html('<p class="errorMessage">Please enter a valid email address.</p>');
					} else {
						$("#formResponse").html('<p class="errorMessage"><strong>Ugh.</strong> Our robots think something is wrong. Could you try typing your email address again? <em>Thanks</em>.</p>');
					}
				}
			}
		});
	});
	
	/* ------------------------------------------
		Home page topics area: Auto-cycle
	------------------------------------------ */
	intervalTimeout = setInterval(function() {
		var useTopic;
 		
		topicIterator++;
		useTopic = (topicIterator % 9) + 1;
 		
		// Since we want to cancel this effect on click, we must show and hide things the manual way
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic' + useTopic + 'Content').fadeIn();
		$('#topic' + useTopic + 'Link a').addClass('topicActive');
 		
	}, secondsBetweenTopicSwitch * 1000);
 	
	/* ------------------------------------------
		Home page topics area: Manual interaction
	------------------------------------------ */
	// Hide all article elements, inside of #topic, except for the first one
	$('#topics article:gt(0)').hide();
 	
	// When ANY of the anchors in the left column are clicked, hide ALL of the article elements
	$('#topics > ul li a').click(function(e) {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		e.preventDefault();
	});
 	
	// Show the first article when the first anchor is clicked, then set the URL hash to that person's name
	$('#topic1Link a').click(function() {
		$('#topic1Content').fadeIn();
		$(this).addClass('topicActive');
		window.location.hash = 'KevinHoffman';
	});
 	
	// Show the second article when the second anchor is clicked, then set the URL hash to that person's name
	$('#topic2Link a').click(function() {
		$('#topic2Content').fadeIn();
		$(this).addClass('topicActive');
		window.location.hash = 'BillScott';
	});
 	
	// Show the third article when the third anchor is clicked, then set the URL hash to that person's name
	$('#topic3Link a').click(function() {
		$('#topic3Content').fadeIn();
		$(this).addClass('topicActive');
		window.location.hash = 'LukeWroblewski';
	});
 	
	// Show the fourth article when the fourth anchor is clicked, then set the URL hash to that person's name
	$('#topic4Link a').click(function() {
		$('#topic4Content').fadeIn();
		$(this).addClass('topicActive');
		window.location.hash = 'StevePortigal';
	});
 	
	// Show the fifth article when the fifth anchor is clicked, then set the URL hash to that person's name
	$('#topic5Link a').click(function() {
		$('#topic5Content').fadeIn();
		$(this).addClass('topicActive');
		window.location.hash = 'JaredSpool';
	});
 	
	// Show the sixth article when the sixth anchor is clicked, then set the URL hash to that person's name
	$('#topic6Link a').click(function() {
		$('#topic6Content').fadeIn();
		$(this).addClass('topicActive');
		window.location.hash = 'HaganRivers';
	});
 	
	// Show the seventh article when the seventh anchor is clicked, then set the URL hash to that person's name
	$('#topic7Link a').click(function() {
		$('#topic7Content').fadeIn();
		$(this).addClass('topicActive');
		window.location.hash = 'BrandonSchauer';
	});
 	
	// Show the eighth article when the eighth anchor is clicked, then set the URL hash to that person's name
	$('#topic8Link a').click(function() {
		$('#topic8Content').fadeIn();
		$(this).addClass('topicActive');
		window.location.hash = 'KimGoodwin';
	});
 	
	// Show the nineth article when the nineth anchor is clicked, then set the URL hash to that person's name
	$('#topic9Link a').click(function() {
		$('#topic9Content').fadeIn();
		$(this).addClass('topicActive');
		window.location.hash = 'StephanieAndGreg';
	});
 	
	/* ------------------------------------------
		Home page topics area: Link to person
	------------------------------------------ */
	// Grab everything after the # in the URL and turn it into the 'urlHash' variable while also making it lowercase.
	var urlHash = location.hash.substring(1).toLowerCase();
 	
	// If the variable 'urlHash' is equal to 'kevinhoffman'...
	if (urlHash == 'kevinhoffman') {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic1Content').fadeIn();
		$('#topic1Link a').addClass('topicActive');
		$('html, body').animate({
			scrollTop: $('#topics').offset().top
		}, 500);
	}
 	
	// If the variable 'urlHash' is equal to 'billscott'...
	if (urlHash == 'billscott') {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic2Content').fadeIn();
		$('#topic2Link a').addClass('topicActive');
		$('html, body').animate({
			scrollTop: $('#topics').offset().top
		}, 500);
	}
 	
	// If the variable 'urlHash' is equal to 'lukewroblewski'...
	if (urlHash == 'lukewroblewski') {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic3Content').fadeIn();
		$('#topic3Link a').addClass('topicActive');
		$('html, body').animate({
			scrollTop: $('#topics').offset().top
		}, 500);
	}
 	
	// If the variable 'urlHash' is equal to 'steveportigal'...
	if (urlHash == 'steveportigal') {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic4Content').fadeIn();
		$('#topic4Link a').addClass('topicActive');
		$('html, body').animate({
			scrollTop: $('#topics').offset().top
		}, 500);
	}
 	
	// If the variable 'urlHash' is equal to 'jaredspool'...
	if (urlHash == 'jaredspool') {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic5Content').fadeIn();
		$('#topic5Link a').addClass('topicActive');
		$('html, body').animate({
			scrollTop: $('#topics').offset().top
		}, 500);
	}
 	
	// If the variable 'urlHash' is equal to 'haganrivers'...
	if (urlHash == 'haganrivers') {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic6Content').fadeIn();
		$('#topic6Link a').addClass('topicActive');
		$('html, body').animate({
			scrollTop: $('#topics').offset().top
		}, 500);
	}
 	
	// If the variable 'urlHash' is equal to 'brandonschauer'...
	if (urlHash == 'brandonschauer') {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic7Content').fadeIn();
		$('#topic7Link a').addClass('topicActive');
		$('html, body').animate({
			scrollTop: $('#topics').offset().top
		}, 500);
	}
 	
	// If the variable 'urlHash' is equal to 'kimgoodwin'...
	if (urlHash == 'kimgoodwin') {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic8Content').fadeIn();
		$('#topic8Link a').addClass('topicActive');
		$('html, body').animate({
			scrollTop: $('#topics').offset().top
		}, 500);
	}
	
	// If the variable 'urlHash' is equal to 'stephanieandgreg'...
	if (urlHash == 'stephanieandgreg') {
		clearInterval(intervalTimeout); // Stops auto rotating of topics
		$('#topics article').hide();
		$('#topics ul li a').removeClass('topicActive');
		$('#topic9Content').fadeIn();
		$('#topic9Link a').addClass('topicActive');
		$('html, body').animate({
			scrollTop: $('#topics').offset().top
		}, 500);
	}
 	
	/* ------------------------------------------
		Stop the auto rotation if anything in the blue area is clicked
	------------------------------------------ */
	$('#introInner').click(function() {
		clearInterval(intervalTimeout);
	});
 	
	/* ------------------------------------------
		Agenda page blue nav area: selected highlights
	------------------------------------------ */
	// Make the magic happen when an anchor is clicked...
	$('#agendaCal a').click(function(){
		$('#agendaCal a').removeClass('selected');
		$(this).addClass('selected');
	});
 	
	// â€¦or when somebody directly lands on a specific day
	if (urlHash == 'monday') {
		$('#agendaCal a').removeClass('selected');
		$('#agendaCalMon').addClass('selected');
	}
	if (urlHash == 'tuesday') {
		$('#agendaCal a').removeClass('selected');
		$('#agendaCalTue').addClass('selected');
	}
	if (urlHash == 'wednesday') {
		$('#agendaCal a').removeClass('selected');
		$('#agendaCalWed').addClass('selected');
	}
 	
	/* ------------------------------------------
		Video page show/hide stuff
	------------------------------------------ */
	// Do things when the first video nav thumbnail is selectedâ€¦
	$('#video1Nav').click(function(e){
		$('#video2Nav').removeClass('selected');
		$(this).addClass('selected');
		$('#video2').hide();
		$('#video1').fadeIn('fast');
		$('html, body').animate({
			scrollTop: $('#video1').offset().top
		}, 500);
		e.preventDefault();
	});
 	
	// Do things when the second video nav thumbnail is selectedâ€¦
	$('#video2Nav').click(function(e){
		$('#video1Nav').removeClass('selected');
		$(this).addClass('selected');
		$('#video1').hide();
		$('#video2').fadeIn('fast');
		$('html, body').animate({
			scrollTop: $('#video2').offset().top
		}, 500);
		e.preventDefault();
	});
 	
	// Toggle the visibility of the transcript...
	$('.viewScript a').toggle(
		function(e){
			$(this).parent('p').siblings('.videoScript').slideDown('fast');
			$(this).html('Hide Transcript');
			e.preventDefault();
		},
		function(e){
			$(this).parent('p').siblings('.videoScript').slideUp('fast');
			$(this).html('View Transcript');
			e.preventDefault();
		}
	);
	
	
	/* Home Screen - Hide / Show bullets*/
	
	hideShowInfo();	
	function hideShowInfo(){
		var $info = $('#workshop-courses').find('ul');
		var $btnMore = $('a.more');
		$info.hide();
		$btnMore.live('click', function(){
			var $this = $(this);			
			$this
				.toggleClass('open')
				.parent('div')
					.children('div.info')
						.children('ul')
						.slideToggle();
			return false;
		});
	}//hideShowInfo
});