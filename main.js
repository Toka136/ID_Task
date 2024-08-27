
function calc_info()
{
    let input= document.getElementById("inp").value;
    let len=input.length;
    let result="";
    if(len<14)
    {
        result+=`<p>Invalid ID </p>`
        document.getElementById('res').style.color="red";
    }
    else
    {
        let arr=[];
        let year;
        let month;
        let day;
        let gender;
        
        let country="";
        for(var i=0;i<input.length;i++)
        {
            arr.push(parseInt(input[i]));
        }
        let code=(parseInt(arr[7]))*10+parseInt(arr[8]);
       // console.log(parseInt(arr[7]));
        if(arr[0]==3)
            year=2000;
        else
        year=1900;
        year+=arr[1]*10+arr[2];
        month=arr[3]*10+arr[4];
        day=arr[5]*10+arr[6];
        // console.log(year);
        // console.log(month);
        // console.log(day);
        const now = new Date();
        const day2 = now.getDate();  
        const month2 = now.getMonth()+1;
        const year2 = now.getFullYear(); 
        let res1=day2-day;
        let res2=month2-month;
        let res3 =year2-year;
        if(res2<=0)
            {
                res3--;
                res2+=12;
            }
        if(res1<0)
            {
                res2--;
                res1+=31;
            }
            if(arr[12]%2==0)
                gender="Female";
            else
            gender="Male";
            switch(code)
            {
                case 1:
                country="Cairo"
                break;
                case 2:
                country="Alexandria"
                break;
                case 3:
                country="Port Said "
                break;
                case 4:
                country="Suez "
                break;
                case 11:
                country="Damietta"
                break;
                case 12:
                country="Dakahlia"
                break;
                case 13:
                country="Sharqia"
                break;
                case 14:
                country="Qalyubia"
                break;
                case 15:
                country="CaiKafr El-Sheikh"
                break;
                case 16:
                country=" algharbia"
                break;
                case 17:
                country="Menoufia"
                break;
                case 18:
                country="Beheira"
                break;
                case 19:
                country="Ismailia"
                break;
                case 21:
                country="Giza"
                break;
                case 22:
                country="Beni Suef"
                break;
                case 23:
                country="Fayoum"
                break;
                case 24:
                country="Minya"
                break;
                case 25:
                country="Assiut"
                break;
                case 26:
                country="Sohag"
                break;
                case 27:
                country="Qena "
                break;
                case 28:
                country="Aswan "
                break;
                case 29:
                country="Luxor "
                break;
                case 31:
                country="Red Sea"
                break;
                case 32:
                country="New Valley"
                break;
                case 33:
                country=" Matrouh"
                break;
                case 34:
                country="North Sinai"
                break;
                case 35:
                country="South Sinai"
                break;
            }
            result+=`You are ${res3} Years And ${res2} Months 
            <p> Country Code : ${arr[7]}${arr[8]}</p>
            <p> Birth Governorate is ${country}</p>
            <p> Gender is ${gender}`;
    }
    document.getElementById('res').innerHTML=result;
}