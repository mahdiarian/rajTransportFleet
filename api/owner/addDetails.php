<?php
// Create connection
include '../configFunction.php';

$objData = getPOSTData();

if(property_exists($objData, "id")){
	$id = $objData->id;
	$values = getQueryValue(true, $objData);
	$sql = "UPDATE owners SET $values WHERE id='$id'";
}else{
	$values = getQueryValue(false, $objData);
	$sql = "INSERT INTO owners $values";
}

$result = mysqli_query($con, $sql) or die(mysql_errno()."error in query execution") ;

mysqli_close($con);
?>