module.exports={
  saveData:(model,data)=>{
    //   console.log(data.labels)


     
    for  (var i=0;i<=data.labels.length-1;i++)
    {
    
        switch(data.cat){
            case 'HeramSeni':
            console.log(data.labels[i])
             
                myData={
                    category:data.cat,
                    labels:data.labels[i],
                    totalWomen:data.totalWomen[i],
                    totalMan:data.totalMan[i],
                    population:null,
                    emigrantTotal:null,
                    girlStudentsTotal:null,
                    boyStudentsTotal:null,
                    studentsTotal:null,
                    year:null,
                    gdpCountry:null

                }
                break;
            case 'Population':
            myData={
                category:data.cat,
                labels:data.labels[i],
                totalWomen:data.totalWomen[i],
                totalMan:data.totalMan[i],
                population:data.populationTotal[i],
                emigrantTotal:null,
                girlStudentsTotal:null,
                boyStudentsTotal:null,
                studentsTotal:null,
                year:null,
                gdpCountry:null
            }
                break;
            case 'Emigrant':
                myData={
                    category:data.cat,
                    labels:data.labels[i],
                    totalWomen:data.totalWomen[i],
                    totalMan:data.totalMan[i],
                    population:null,
                    emigrantTotal:data.EmigrantTotal[i],
                    girlStudentsTotal:null,
                    boyStudentsTotal:null,
                    studentsTotal:null,
                    year:null,
                    gdpCountry:null
                }
              break;
            case 'UniversityStudents':
                myData={
                    category:data.cat,
                    labels:data.labels[i],
                    totalWomen:data.totalWomen[i],
                    totalMan:data.totalMan[i],
                    population:null,
                    emigrantTotal:null,
                    girlStudentsTotal:null,
                    boyStudentsTotal:null,
                    studentsTotal:data.totalStudents[i],
                    year:null,
                    gdpCountry:null                
                }
                break;
            case 'gdp':
                myData={
                    category:data.cat,
                    labels:data.labels[i],
                    totalWomen:null,
                    totalMan:null,
                    population:null,
                    emigrantTotal:null,
                    girlStudentsTotal:null,
                    boyStudentsTotal:null,
                    studentsTotal:null,
                    year:null,
                    gdpCountry:data.amount[i] 
                       

                }
                default:
                   
        }
         
            model.insertMany([myData],(err)=>{
                if(err){
                    console.log('error during insert data');
                    console.log('error=\t',err);
                    return false;
      
                }else{
                    console.log('save successfully!');
                    return true;
                }
            });
       
        

    }//  </for>
    
     
    },
   


}