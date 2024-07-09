<?php

$x = "Hello World!";
echo strtoupper($x);
echo "<br>";

$x = "Hello World!";
echo strtolower($x);
echo "<br>";

$x = "hello world!";
echo ucfirst($x);
echo "<br>";

$x = "hello world!";
echo ucwords($x);
echo "<br>";

$x = "092124";
$x = str_split($x, 2);
$x = implode(":", $x);
echo $x;
echo "<br>";


$x = "I am a full-stack developer at orange coding academy";
$y = "Orange";
echo (stripos($x, $y)) ?  "Found Word" :  "Didnt find word";
echo "<br>";

$url = "www.orange.com/index.php";
$x = parse_url($url, PHP_URL_PATH);
echo basename($x);
echo "<br>";

$email = "osamaalhyari@gmail.com";
$x = strstr($email, "@", true);
echo $x;
echo "<br>";

$sentence = "Hello everyone my name is Osama";
$newWord = "Greetings";
$sentence = explode(" ", $sentence);
$sentence[0] = $newWord;
$sentence = implode(" ", $sentence);
echo $sentence;
echo "<br>";

$x = "this is the first string";
$y = "this is the firsts string";
$same = true;

for ($i = 0; $i < (strlen($x) < strlen($y) ? strlen($x) : strlen($y)); $i += 1) {
    if ($x[$i] !== $y[$i]) {
        echo "first difference is at index " . $i . '<br>"' . $x[$i] . '" vs "' . $y[$i] . '"';
        $same = false;
        break;
    }
}
if ($same) {
    echo "strings are the same";
}

echo "<br>";

$x = "string to put into an array";
$x = explode(" ", $x);
var_dump($x);
echo "<br>";

$x = "y";
echo ($x === "z" or $x === "Z") ? chr(ord($x) - 25) : chr(ord($x) + 1);
echo "<br>";

$original = "this is a string";
$insert = "word";
$position = 4;
$original = str_split($original, $position);
echo $original[0] . $insert . $original[1] . $original[2] . $original[3];
echo "<br>";

$x = "0000657022.24";
$ans = "";
for ($i = 0; $i < strlen($x); $i += 1) {
    if ($x[$i] !== "0") {
        $ans .= $x[$i];
    }
}

echo $ans;
echo "<br>";

$x = "this test is a string";
$i = 1;
$x = str_replace("is", "damn", $x, $i);
echo $x;
echo "<br>";

$ans = "";
for ($i = 0; $i < 26; $i += 1) {
    $ans .= chr(97 + $i);
    $ans .= " ";
}
echo $ans;
echo "<br>";

$x = 2013;
echo ($x % 4 === 0) ? "leap" : "not leap";

if ($x % 4 === 0) {
    echo "leap";
} else {
    echo "not leap";
}


echo "<br>";

$x = 19;
echo ($x < 21) ? "winter" : "not winter";
echo "<br>";

$x = 3;
$y = 4;
echo ($x === $y) ? $x * 6 : $x + $y;
echo "<br>";

$x = 3;
$y = 4;
echo ($x + $y === 30) ? $x + $y : "false";
echo "<br>";

$x = 4;
echo ($x % 3 === 0) ? "true" : "false";
echo "<br>";

$x = 4;
echo ($x < 51 and $x > 19) ? "true" : "false";
echo "<br>";

$x = 2;
$y = 6;
$z = 9;

if ($x >= $y and $x >= $z) {
    echo $x;
} else {
    echo ($z < $y) ? $y : $z;
}
echo "<br>";

function calculate($x, $y, $o)
{

    switch (true) {
        case $o === '+':
            return $x + $y;
        case $o === '-':
            return $x - $y;
        case $o === '*':
            return $x * $y;
        case $o === '/':
            return $x / $y;
    }
}

echo calculate(4, 8, '+');
echo "<br>";
