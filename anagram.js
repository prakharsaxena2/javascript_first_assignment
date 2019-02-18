var s1="cellar";            //Declare string1
var s2="aabbcc";            //Declare string2
var c1=0;                   //counter for length count of string1
var c2=0;                    //counter for length count of string2
 for(i=0;s1[i]!=null;i++)
 {
    c1++;
 }
 for(i=0;s2[i]!=null;i++)
 {
    c2++;
 }



var a1=[c1];                //spling the string1
for(var i=0;i<c1;i++)
{
 a1[i]=s1[i];
}
for(var i=0;i<c1;i++)
{
console.log(a1[i]);
}

console.log('-------------------');
var a2=[c2];                        //spling the string1
for(var i=0;i<c2;i++)
{
 a2[i]=s2[i];
}
for(var i=0;i<c2;i++)
{
console.log(a2[i]);
}






//console.log(c1);
//console.log(c2);

console.log(a1);
console.log(a2);

var temp1='';                       //sorting  array1
for (i = 0; i < c1-1; i++) {
    for (j = i+1; j < c1; j++) {
       if (a1[i] > a1[j]) {
          temp1 = a1[i];
          a1[i] = a1[j];
          a1[j] = temp1;
       }
    }
 }


var temp2='';                   //sorting array2
for (i = 0; i < c2-1; i++) {
    for (j = i+1; j < c2; j++) {
       if (a2[i] > a2[j]) {
          temp2 = a2[i];
          a2[i] = a2[j];
          a2[j] = temp2;
       }
    }
 }



var r1='';      //joining string1
var r2='';      //joining string

for(var i=0;i<c1;i++)   // joining array1
{
    r1+=a1[i];
}

for(var i=0;i<c1;i++)       // joining array2
{
    r2+=a2[i];
}

console.log(r1);
console.log(r2);

function check(r1,r2)           // function check
{
if(r1==r2)
{
    return true;
}
else
{
   return false;
}
}

check(r1,r2);       //function call



