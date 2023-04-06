function calculaIdade(){

    const data = new Date();
    let currentYear = data.getFullYear();
    let currentmonth = data.getMonth();
    let currentDay = data.getDate();
    
    let txtDay = document.getElementById('day');
    let txtMonth = document.getElementById('month');
    let txtYear = document.getElementById('year');

    let year = currentYear - Number(txtYear.value);
    let month ='';
    let day ='';
    
    

    if(txtDay.value.length == 0){
        let erro1 = document.getElementById('erro-1');

        erro1.style.visibility = 'visible';

        let day = document.getElementById('lday');

        day.style.color = 'hsl(0, 100%, 67%)';

        let iday = document.getElementById('day');

        iday.style.border = '1px solid hsl(0, 100%, 67%)';
    } else if (Number(txtDay.value) > 31 || Number(txtDay.value) <= 0){

        let erro1 = document.getElementById('erro-1');

        erro1.innerHTML = 'Must be a valid day';

        erro1.style.color = 'hsl(0, 100%, 67%)';

        erro1.style.visibility = 'visible';

        let day = document.getElementById('lday');

        day.style.color = 'hsl(0, 100%, 67%)';

        let iday = document.getElementById('day');

        iday.style.border = '1px solid hsl(0, 100%, 67%)';
    } else{
        if(parseInt(txtDay.value) >= currentDay){
            if(month > parseInt(txtMonth.value)){
                month -= 1;
                day = parseInt(txtDay.value) - currentDay;
            }else{
                day = parseInt(txtDay.value) - currentDay;
            }
        }else{
            day = 31 - parseInt(txtDay.value);
        }



        let dayResult = document.getElementById('result3');
        dayResult.innerHTML = day;
    }

    if(txtMonth.value.length == 0){
        
        let erro2 = document.getElementById('erro-2');
        erro2.style.visibility = 'visible';

        let month = document.getElementById('lmonth');

        month.style.color = 'hsl(0, 100%, 67%)';

        let imonth = document.getElementById('month');

        imonth.style.border = '1px solid hsl(0, 100%, 67%)';

    } else if(Number(txtMonth.value) > 11 || Number(txtMonth.value) < 0){
        let erro2 = document.getElementById('erro-2');
        erro2.style.visibility = 'visible';
        erro2.innerHTML = 'Must be a valid month'

        let month = document.getElementById('lmonth');

        month.style.color = 'hsl(0, 100%, 67%)';

        let imonth = document.getElementById('month');

        imonth.style.border = '1px solid hsl(0, 100%, 67%)';
    } else{

        if(parseInt(txtMonth.value) > currentmonth){
            year -= 1;
            month = 12 + currentmonth - parseInt(txtMonth.value);
        }else{
            month =  currentmonth - parseInt(txtMonth.value);
        }


        let monthResult = document.getElementById('result2');
        monthResult.innerHTML = month;
    }

    if(txtYear.value.length == 0){
        let erro3 = document.getElementById('erro-3');

        erro3.style.visibility = 'visible';

        let year = document.getElementById('lyear');

        year.style.color = 'hsl(0, 100%, 67%)';

        let iyear = document.getElementById('year');

        iyear.style.border = '1px solid hsl(0, 100%, 67%)'

    } else if(Number(txtYear.value) > currentYear){

        let erro3 = document.getElementById('erro-3');

        erro3.style.visibility = 'visible';
        erro3.innerHTML = 'Must be in the past'

        let year = document.getElementById('lyear');

        year.style.color = 'hsl(0, 100%, 67%)';

        let iyear = document.getElementById('year');

        iyear.style.border = '1px solid hsl(0, 100%, 67%)'

    } else{
        let yearRes = document.getElementById('result1');
        yearRes.innerHTML = year;
    }
        
    
    
    
}

