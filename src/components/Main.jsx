import React,{useState,useEffect} from 'react'
import Reg from './Reg';
import Table from './Table';


const getData=()=>{
    const myData=localStorage.getItem('STUDENT_DATA');
     if (myData){
        return JSON.parse(myData);
     }
     else{
        return [];
     }
}
const Main = () => {
    const [user,setUser]=useState({name:"",email:"",phone:"",city:"",state:""});
    const [course,setCourse]=useState("");
    const [tabledata, setTableData] = useState(getData());
    const [toggleBtn,setToggleBtn]=useState(true);
    const [editId,setEditId]=useState("");


    const {name,email,phone,city,state}=user;

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === ""||email==="" || phone === "" || city === "" || state===""|| course===false) {
            alert("Please Fill all the Data");
        }
        else if(user && !toggleBtn){
            setTableData(
                tabledata.map((elem)=>{
                    if(elem.id===editId)
                    return{
                        ...elem,name:name,email:email,phone:phone,city:city,state:state,course:course
                    }
                    else {
                        return elem;
                    }
                })
            )
            setUser({name:"",email:"",phone:"",city:"",state:"",course:"" });
            setEditId("");
            setToggleBtn(true);
        }
        else {
            const myId = { id: new Date().getTime(), name:name,email:email,phone:phone,city:city,state:state,course:course };
            setTableData([...tabledata, myId]);
            setUser({name:"",email:"",phone:"",city:"",state:"", course:"" });
        }
    }

    useEffect(()=>{
        localStorage.setItem('STUDENT_DATA',JSON.stringify(tabledata));
    },[tabledata]);

  return (
    <div>
     <Reg name={name} email={email} phone={phone} city={city} state={state} course={course} setCourse={setCourse} setUser={setUser} handleInput={handleInput} handleSubmit={handleSubmit} toggleBtn={toggleBtn} />

     <Table tabledata={tabledata} setTableData={setTableData} name={name} email={email} phone={phone} city={city} state={state} course={course} setUser={setUser} setToggleBtn={setToggleBtn} setEditId={setEditId}/>
    </div>
  )
}

export default Main