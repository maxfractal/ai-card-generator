<?php 

$projects = array('NBC Universal', 'AWS', 'USAT', 'Cogstate', 'etouches', 'MTV Networks');

$count = 0;
while($count < count($projects)) {
    
    echo "<li>$projects[$count] | </li>";
    $count++;
}


?>