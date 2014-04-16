<!DOCTYPE html>

<!--
	The following code is taken from http://www.uie.com/events/ux_immersion/2014/giveaway/20140404proj.php
	and it has been modified by Kaitlyn Carcia. Last updated on April 9, 2014.
-->

<!--[if IE 6]><html class="ie6" dir="ltr" lang="en"><![endif]-->
<!--[if IE 7]><html class="ie7" dir="ltr" lang="en"><![endif]-->
<!--[if IE 8]><html class="ie8" dir="ltr" lang="en"><![endif]-->
<!--[if IE 9]><html class="ie9" dir="ltr" lang="en"><![endif]-->
<!--[if !(IE)]><!--><html dir="ltr" lang="en"><!--<![endif]-->

    <head>
        <meta charset="utf-8" />
        <!--[if lt IE 9]><script type="text/javascript" src="/events/ux_immersion/2013/lib/js/shiv.js"></script><![endif]-->
        <link type="text/plain" rel="author" href="/events/ux_immersion/2014/humans.txt" />

        <link rel="stylesheet" type="text/css" href="/part1/events/ux_immersion/2015/lib/css/ondemand.css" media="all" />
        <link rel="stylesheet" type="text/css" href="/part1/events/ux_immersion/2015/lib/css/grid.css" media="all" />
        
        <script type="text/javascript" src="//use.typekit.net/lcf7ntv.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
        <script type="text/javascript" src="/part1/events/ux_immersion/2015/lib/js/jquery_1.5.1_min.js"></script>
        <script type="text/javascript" src="/part1/events/ux_immersion/2015/lib/js/ui16.js"></script>
        
        <!-- favicon -->
		<link rel="shortcut icon" href="../assets/favicon.ico">
		
        <title>UXIM 2014 OnDemand Recordings Giveaway</title>
        
        <meta name="description" content="Content for the 48+ hour giveaway for UXIM OnDemand 2014" />
        <meta name="viewport" content="width=device-width; initial-scale=1.0">

        <script>
            $(function() {

                $("#btnSubmit").click(function() {
                    $("#email_warning").fadeOut();

                    if ( $("#email").val().indexOf("@") > 0 ) {
                        uietips = ($("#uietips").is(":checked")) ? "Y" : "N";
                        uxim14int = ($("#uxim2014int").is(":checked")) ? "Y" : "N";

                        // Change button to depressed look and change inner text to show progress
                        $("#btnSubmit").addClass("clicked").html("Loading");

                        var req = window.location.href + "?email=" + encodeURIComponent($("#email").val()) + "&uietips=" + uietips + "&uxim14int=" + uxim14int + "&ajax=1";

                        $.getJSON(req, function(data) {

                            if (data.status == 'success') {
                                $("#signup").html(data.msg);
                            }
                            else {
                                $("#msg").html(data.msg).show();
                            }
                        });

                    } else {
                        $("#email_warning").show();
                    }

                });

            });
        </script>
    </head>
    <body id="giveaway">
        <section class="main">
            <header id="giveaway_brain" class="row content">
                <!--
                  <nav class="clearfix">
                    <a href="/events/ux_immersion/2013/">Home</a>
                    <a href="/events/ux_immersion/2013/agenda/">Agenda</a>
                    <a href="/events/ux_immersion/2013/venue/">Venue</a>
                    <a href="/events/ux_immersion/2013/register/">Registration Information</a>
                    <a href="/events/ux_immersion/2013/vip/">Mobile UX Resources</a>
                    <a href="#" class="register">Register Now</a>
                  </nav>
                -->
                <h3>&nbsp;</h3>
                 <h1 id="logo" style="   margin-left: 9.5em;">UX Immersion Conference in 2014</h1>	
            </header><!--//brain//-->

            <section class="details content clearfix container">
                <div class="grid_6">
                    <h1 class="grid_12" style="font-size: 28px; line-height: 1.2;">Broaden your mobile UX knowledge with practical techniques and proven processes</h1>
                    <p style="font-size: 1.1em; line-height: 1.2; color: #5b84a5;">We&rsquo;re celebrating this year&rsquo;s fantastic program at the <a href="#" style="color: #e35772">UX Immersion Mobile Conference</a> by giving everyone lifetime access to 2014&rsquo;s sold out event.</p>

                    <p style="font-size: 1.1em; color: #5b84a5;">No gimmicks, no bait and switch. But you only have until February 21 to get the goods. Tell your co-workers, friends, family, and anyone who will listen. This offer for 2014&rsquo;s sold out recordings won&rsquo;t be repeated. </p>
                </div>


                <div id="signup" class="grid_6" style="background: #e0f3fa; color: #6e7e84; padding: 5px 15px 15px; margin-top: 20px;">
                    <!-- Form area starts here -->

                    <form id="email_capture">
                        <h4 style="font-size: 24px;">Get your <strong>free</strong> recordings now</h4>
                        <p>All we need is your email address (we promise nothing else)</p>

                        <span class="form_labels"><label for="email" class="form_labels">Email Address:</label> <input type="text" name="email" id="email" />
                            <span id="email_warning" style="display:none;"><em>Oops!</em> Your email address does not appear valid.</span></span>

                        <p></p>
                        <span class="form_labels">
                            <dl>
                                <dt><input type="checkbox" name="uietips" id="uietips" value="Y" /></dt>
                                <dd><label for="uietips">I want to subscribe to <strong>UIETips</strong> to get UIE&rsquo;s UX research.</label></dd>

                                <dt><input type="checkbox" name="uxim2014int" id="uxim2014int" value="Y" /></dt>
                                <dd><label for="uxim2014int">Tell me more about the 2015 UX Immersion Mobile Conference</label></dd>
                                <br />

                            </dl>
                        </span>
                        <p class="warning hidden" id="msg"></p>

                        <button id="btnSubmit" type="button" value="Get Your Recordings" style="text-transform: none; font-size:22px"/>Get the Goods</button>

                        <p class="privacy">We promise to never sell or share your email. We will send you an email on accessing UXIM OnDemand.</p>

                    </form>
                </div>
            </section><!-- .form_highlight -->
            <div class="row clearfix">
                <article class="experts-list sixteen-column">
                    <h3 style="color: #9871ae;">Experience what attendees heard when these top UX experts shared their best practices for improving mobile UX skills</h3>

                    <ul id="prevList">
                        <li class="active">
                            <img src="../lib/img/speakers/ben-callahan.jpg" alt="Ben Callahan">
                            <h4>Ben Callahan</h4>
                            <p>Dissecting Design</p>
                            <p>

                            </p>
                        </li>

                        <li>
                            <img src="../lib/img/speakers/cyd-harrell.jpg" alt="Cyd Harrell">
                            <h4>Cyd Harrell</h4>
                            <p>Doing “Pocket Research” to Learn About Your Users’ Lives</p>
                            <p>

                            </p>
                        </li>
                        <li>
                            <img src="../lib/img/speakers/brad-frost.jpg" alt="Brad Frost">
                            <h4>Brad Frost</h4>
                            <p>Building Design Systems from Atomic Elements</p>
                            <p>

                            </p>
                        </li>
                        <li>
                            <img src="../lib/img/speakers/jason-grigsby.jpg" alt="Jason Grigsby">
                            <h4>Jason Grigsby</h4>
                            <p>Look into the future of designing for TV</p>
                            <p>

                            </p>
                        </li>
  					    <li>
                            <img src="../lib/img/speakers/karen-mcgrane.jpg" alt="Kate McGrane">
                            <h4>Karen McGrane</h4>
                            <p>Chunk your content to adapt to different contexts</p>
                            <p>

                            </p>
                        </li>
                        <li>
                            <img src="../lib/img/speakers/nate-schutta.jpg" alt="Nate Schutta">
                            <h4>Nate Schutta</h4>
                            <p>Choosing Which Mobile Experience to Build</p>
                            <p>

                            </p>
                        </li>
                    
                        
                        <li>
                            <img src="../lib/img/speakers/luke-wroblewski.jpg" alt="Luke Wroblewski">
                            <h4>Luke Wroblewski	</h4>
                            <p>Mobile Behavior and Design Trends</p>
                            <p>

                            </p>
                        </li>
                        <li>
                            <img src="../lib/img/speakers/jared-spool.jpg" alt="Jared Spool">
                            <h4>Jared Spool</h4>
                            <p>How Do We Design Designers?</p>
                            <p>

                            </p>
                        </li>
                        <li>
                            <a href="http://uxim14.uie.com"><img src="../lib/img/uxim.png" alt="UXIM 2015" style="border: none;"></a>
                            <p>Check out the fantastic program for the April, 2015 <a style="color: #e35772" href="#">UX Immersion Mobile Conference</a></p>
                            <p>

                            </p>
                        </li>
                    </ul>
                </article>
        </section>
    </body>

