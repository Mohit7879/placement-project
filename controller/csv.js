const interview = require('../model/interview');
const Student = require('../model/student');
const { createObjectCsvWriter } = require('csv-writer');



module.exports.conver_to_csv=async(req,res)=> {
var companyDetail=[];
  const students = await Student.find()
  .populate('score')
  .populate('interviews') ;// Populate any referenced models as needed
  
    
   

          
   
    // Add more properties as needed



 


const csvWriter = createObjectCsvWriter({
  path: 'students.csv', // File path for CSV export
  header: [
    // Define your CSV headers here
    { id: 'name', title: 'Name' },
    { id: 'college', title: 'College' },
    { id:  'batch' , title : 'Batch'},
    {  id:'dsa'    , title :'Dsa'  },
    {  id : 'company',  title: 'Company'}
    // Add more headers as needed
  ],
});

const csvData = students.map((student) => ({
  name: student.name,
  college: student.college,
  batch:student.batch,
  dsa:student.score.dsa,
  company:student.interviews.map(interview=>{
    return interview.company
  })
  // Add more properties as needed
}));
    // console.log(csvData);
     const csv=await csvWriter.writeRecords(csvData);

    


  try {
       // download the csv file
   return  res.download("./students.csv", "students.csv", (err) => {
      if (err) {
        
        res.status(404).send(err);
      }
    }
     )
    
  } catch (error) {
    console.error('Error exporting data to CSV:', error);
  } 



}

