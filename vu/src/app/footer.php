<section class="w3l-footer-16">
    <div class="w3l-footer-16-main py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 column">
                    <div class="row">
                        <div class="col-md-8 column">

                                <a class="logo-2" href="home.php">
                                        <label class="lohny-2"><img src="assets/images/fav.png" width="50" height="50" /> Victoria</label>University</a>
                           
                            <div class="ad-text-inf">
                                <p><span class="color-hny">Address :</span> Victoria Towers, 1-13 Jinja Road, Kampala, Uganda.</p>
                             </div>
                             <div class="ad-text-inf">
                                    <p><span class="color-hny">Email :</span> <a href="mailto:admissions@vu.ac.ug">admissions@vu.ac.ug</a></p>
                                 </div>
                                 <div class="ad-text-inf">
                                        <p><span class="color-hny">Phone :</span> <a href="tel:+142 5897555">(+256) 200405433</a></p>
                                     </div>
                        </div>
                        <!--<div class="col-md-6 column">
                            <h3>Quick Links</h3>
                            <ul class="footer-gd-16">
                                <li><a href="home.php">Home</a></li>
                                <li><a href="about.php">About</a></li>
                                <li><a href="#">Programmes</a></li>
                                <li><a href="#">Admissions</a></li>
								<li><a href="#">Research</a></li>
								<li><a href="#">Life At VU</a></li>
                                <li><a href="contact.php">Help &amp; Contact Us</a></li>
                            </ul>
                        </div>-->
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 column column4 mt-lg-0 mt-4">
                    <div class="col-md-6 column">
                            <h3>Featured Links</h3>
                            <ul class="footer-gd-16">
                                <li><a href="#">Graduation</a></li>
                                <li><a href="#">Admissions</a></li>
                                <li><a href="#">Staff</a></li>
                                <li><a href="#">Events</a></li>
								<li><a href="#">News</a></li>
								<li><a href="#">Alumni</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                </div>
				<!--<div class="col-lg-4 col-md-6 column column4 mt-lg-0 mt-4">
                    <div class="col-md-6 column">
                            <h3>Featured Links</h3>
                            <ul class="footer-gd-16">
                                <li><a href="#">Graduation</a></li>
                                <li><a href="#">Admissions</a></li>
                                <li><a href="#">Staff</a></li>
                                <li><a href="#">Events</a></li>
								<li><a href="#">News</a></li>
								<li><a href="#">Alumni</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                </div>-->
                <div class="col-lg-4 col-md-6 column column4 mt-lg-0 mt-4">
                    <h3>Newsletter </h3>
                    <div class="end-column">
                        <h4>Subscribe Here Now</h4>
                        <form action="#" class="subscribe" method="post">
                            <input type="email" name="email" placeholder="Email Address" required="">
                            <button><span class="fa fa-paper-plane" aria-hidden="true"></span></button>
                        </form>
                        <p>Subscribe to our mailing list and get updates to your email inbox.</p>
                    </div>
                </div>
            </div>
            <div class="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
                <div class="columns text-lg-left text-center">
                    <p>© 2021 Victoria University, Kampala, Uganda. All rights reserved | Victoria University is part of the Ruparelia Group of Companies</a>
                    </p>
                </div>
                <div class="columns-2 mt-md-0 mt-3">
                    <ul class="social">
                        <li><a href="https://www.facebook.com/VUKampala"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://www.linkedin.com/company/victoria-university-kampala/"><span class="fa fa-linkedin" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://twitter.com/VUKampala"><span class="fa fa-twitter" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://www.instagram.com/victoriauniversity_kampala/"><span class="fa fa-instagram" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://www.youtube.com/user/vukampala"><span class="fa fa-youtube-play" aria-hidden="true"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- move top -->
    <button onclick="topFunction()" id="movetop" title="Go to top">
        <span class="fa fa-angle-up"></span>
    </button>
    <script>
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("movetop").style.display = "block";
            } else {
                document.getElementById("movetop").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    </script>
    <!-- //move top -->
    <script>
        $(function () {
            $('.navbar-toggler').click(function () {
                $('body').toggleClass('noscroll');
            })
        });
    </script>
</section>
<!-- //footer -->
</body>

</html>
<script src="assets/js/jquery-3.3.1.min.js"></script>
<!-- disable body scroll which navbar is in active -->
<script>
  $(function () {
    $('.navbar-toggler').click(function () {
      $('body').toggleClass('noscroll');
    })
  });
</script>
<!-- disable body scroll which navbar is in active -->
<!-- //jQuery-Photo-filter-lightbox-portfolio-plugin -->
<script>
window.onscroll = function() {headHold()};

var header = document.getElementById("head_runner");
var sticky = header.offsetTop;

function headHold() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
</script>
<script src="assets/js/bootstrap.min.js"></script>