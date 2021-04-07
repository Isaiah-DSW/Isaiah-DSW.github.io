document.getElementsByClassName("marquee-content")[1].innerHTML = document.getElementsByClassName("marquee-content")[0].innerHTML;

setInterval(function() {
	if (document.getElementById("splash-container").clientWidth > 800) {
		document.getElementById("silhouette-img").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("silhouette").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("silhouette").clientHeight) / 20)) * -1 + "px)";
		document.getElementById("silhouette-buttoncontainer").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("silhouette").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("silhouette").clientHeight) / 2.25)) * -1 + "px)";

		document.getElementById("tarmas-background").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("tarmas").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("tarmas").clientHeight) / 8)) * -1 + "px)";

		document.getElementById("sleepyhead-video").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("sleepyhead").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("sleepyhead").clientHeight) / 8)) * -1 + "px)";

		document.getElementById("second-net-background").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("second-net").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("second-net").clientHeight) / 8)) * -1 + "px)";

		document.getElementById("drift-background").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("drift").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("drift").clientHeight) / 8)) * -1 + "px)";

		document.getElementById("funky-cameras-background").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("funky-cameras").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("funky-cameras").clientHeight) / 8)) * -1 + "px)";

		document.getElementById("movie-night-background").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("movie-night").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("movie-night").clientHeight) / 8)) * -1 + "px)";

		document.getElementById("oddball-background").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("oddball").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("oddball").clientHeight) / 8)) * -1 + "px)";

		document.getElementById("amongst-we-background").style.top = "calc(50% - " + Math.round(((document.documentElement.scrollTop - document.getElementById("amongst-we").getBoundingClientRect().top - window.scrollY) / 5) + ((window.innerHeight - document.getElementById("amongst-we").clientHeight) / 8)) * -1 + "px)";
	} else {
		document.getElementById("silhouette-img").style.top = "40%";
		document.getElementById("silhouette-buttoncontainer").style.top = "70%";

		document.getElementById("tarmas-background").style.top = "50%";

		document.getElementById("sleepyhead-video").style.top = "50%";

		document.getElementById("second-net-background").style.top = "50%";

		document.getElementById("drift-background").style.top = "50%";

		document.getElementById("funky-cameras-background").style.top = "50%";

		document.getElementById("movie-night-background").style.top = "50%";

		document.getElementById("oddball-background").style.top = "50%";

		document.getElementById("amongst-we-background").style.top = "50%";
	}
}, 0);

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});