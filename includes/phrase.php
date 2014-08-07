<?php 
require_once("language.php");
// foreach($adverbs as $adverb) {
//   echo "<li>". $adverb ."</li>";
// }
echo ucfirst($adverbs[array_rand($adverbs)])." ";
echo $verbs[array_rand($verbs)]." ";
echo $adjectives[array_rand($adjectives)]." ";
echo $nouns[array_rand($nouns)]." ";
?>