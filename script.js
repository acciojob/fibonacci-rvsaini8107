
function fibonacci(num) {
// your code here
	var sum=1;
	for(let i=0;i<=num;i++)
		{
			sum+=i;
		}
	// alert(sum);
	return sum;
}

module.exports = fibonacci;
