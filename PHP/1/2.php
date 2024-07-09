<?php

$ans = "";
$max = 15;
for ($i = 1; $i <= $max; $i += 1) {
    if ($i === $max) {
        $ans .= $i;
        break;
    }
    $ans .= $i;
    $ans .= "-";
}
echo $ans;
echo "<br>";

$sum = 0;
$max = 30;
for ($i = 1; $i <= $max; $i += 1) {
    $sum += $i;
}

echo $sum;
echo "<br>";

$line = "";
for ($row = 0; $row < 5; $row += 1) {
    for ($A = $row + 1; $A < 5; $A += 1) {
        $line .= chr(65);
    }
    for ($rest = 0; $rest <= $row; $rest += 1) {
        $line .= chr(65 + $row);
    }
    echo $line . "<br>";
    $line = "";
}
echo "<br>";

$line = "";
for ($row = 0; $row < 5; $row += 1) {
    for ($A = $row + 1; $A < 5; $A += 1) {
        $line .= 1;
    }
    for ($rest = 0; $rest <= $row; $rest += 1) {
        $line .= 1 + $row;
    }
    echo $line;
    echo "<br>";
    $line = "";
}
echo "<br>";

$max = 5;
$line = "";
for ($row = 1; $row <= $max; $row += 1) {
    for ($col = 1; $col <= $max; $col += 1) {
        ($row === $col) ? $line .= $row : $line .= 0;
    }
    echo $line;
    $line = "";
    echo "<br>";
}
echo "<br>";

$fact = 5;
$factStatic = $fact;
for ($i = 1; $i < $factStatic; $i += 1) {
    $fact *= $i;
}
echo $fact;
echo "<br>";

$fib = [0, 1];
while (count($fib) < 9) {
    array_push($fib, ($fib[count($fib) - 2] + $fib[count($fib) - 1]));
}
var_dump($fib);

echo "<br>";

$x = "Orange Coding Academy";
$lower = strtolower($x);
echo substr_count($lower, 'c');
echo "<br>";

function checkPrime($x)
{
    for ($i = 2; $i < $x; $i += 1) {
        if ($x % $i === 0) {
            return "$x is not prime";
        }
    }
    return "$x is prime";
}
