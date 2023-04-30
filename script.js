
function fibonacci(num) {
// your code here
	if(num==0)return 0;
	if(num==1)return 1;
	var sum=0; var num1=0;var num2=1;
	for(let i=2;i<=num;i++)
		{
			sum=num1+num2;
			num2=num1;
			num1=sum;
		}
	// alert(sum);
	return sum;
}

module.exports = fibonacci;
