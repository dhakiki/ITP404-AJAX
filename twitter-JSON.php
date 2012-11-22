<?php 

require 'functions.php';

$searchTerm = $_GET['id']; //looks for paramer id in url grab any data from the query string (url)



$tweets = getTweetsFromJSON($searchTerm);

//  echo $tweets;
echo '<ul>';
foreach($tweets as $tweet) {
	echo '<li>';
	echo '<img src="'.$tweet->user->profile_image_url.'" />';
	echo $tweet->text;
	echo '<div class="date">'.$tweet->created_at.'</div>';
	echo '<div style="clear:both;"></div>';
	echo '</li>';
}
echo '</ul>';
