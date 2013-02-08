function firstFunction()
{
	secondFunction();
}
function secondFunction()
{
	thirdFunction();
}
function thirdFunction()
{
	fourthFunction();
}
function fourthFunction()
{
	headline.innerHTML = "You clicked the headline!";
}

var headline = document.getElementById("mainHeading");

headline.onclick = function()
{
	firstFunction();	
};
