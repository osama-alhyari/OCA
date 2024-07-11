<?php
echo "<script>var x = Number(localStorage.getItem('views'));
(x) ? localStorage.setItem('views' , x+1) : localStorage.setItem('views' , 1);
</script>";

$views = "<script>document.write(localStorage.getItem('views'));</script>";
echo $views;
