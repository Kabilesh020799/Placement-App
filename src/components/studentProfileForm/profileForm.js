import Axios from 'axios';
import React, { useState } from 'react';
import './profileForm.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faUserGraduate,faGraduationCap,faUser,faIdCardAlt,faEnvelope,faBuilding,faAward,faPercentage} from '@fontawesome/free-solid-svg-icons';



const ProfileForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [regNum,SetRegNum] = useState('')
    const [dept,setDept] = useState('')
    const [cgpa,setCgpa] = useState('')
    const [twelveMark,setTwelveMark] = useState('');
    const [twelveBoard,setTwelveBoard] = useState('')
    const [tenMark,setTenMark] = useState('')
    const [tenBoard,setTenBoard] = useState('')
    
    const Submitted =async(e) =>{
        e.preventDefault();
        let dept_num;
        if(dept==="CSE"){
            dept_num=1;
        }else if(dept==="IT"){
            dept_num = 2;
        }else if(dept==="ECE"){
            dept_num=3;
        }else if(dept==="EEE"){
            dept_num=4;
        }
        const body ={name:name,email:email,reg_num:regNum,dept:dept_num,cgpa:cgpa,ten_mark:tenMark,ten_board:tenBoard,twelve_mark:twelveMark,twelve_board:twelveBoard}
        
        await Axios.post('http://localhost:5000/api/form',body)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        setName('')
        setEmail('')
        setTenBoard('')
        setTenMark('')
        setTwelveBoard('')
        setTwelveMark('')
        SetRegNum('')
        setCgpa('')
        setDept('')
    }
    return(
        <div className="stu-Profile-Form">
            <div className="form-container">
            <h1 className="stu-profile-form-header">Student Profile
            <span className="header-icon">
                {/* <FontAwesomeIcon icon={faUserGraduate} color="#000000"/> */}
                </span></h1>
            <form >
                <span className="header-icon">
                    {/* <FontAwesomeIcon icon={faUser} color="#000000"/> */}
                </span>  
                <label className="stu-profile-form-label">Name</label><br/>
                <input className="stu-profile-form-field" placeholder="Your Name" required maxLength="50"
                name="name" value={name} onChange={(event)=>setName(event.target.value)}/>

                <span className="header-icon">
                    {/* <FontAwesomeIcon icon={faIdCardAlt} color="#000000"/> */}
                    </span>    
                <label className="stu-profile-form-label">Registration Number</label><br/>
                <input className="stu-profile-form-field" placeholder="Your Register Number" required minLength="9" maxLength="9"
                name="regno" value={regNum} onChange={(event)=>SetRegNum(event.target.value)}
                />
                
                <span className="header-icon">
                    {/* <FontAwesomeIcon icon={faEnvelope} color="#000000"/> */}
                </span>
                <label className="stu-profile-form-label">Email address</label><br/>
                <input className="stu-profile-form-field" placeholder="Your Email Address" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                 name="email" value={email} onChange={(event)=>setEmail(event.target.value)}
                 />
                 
                <span className="header-icon">
                    {/* <FontAwesomeIcon icon={faBuilding} color="#000000"/> */}
                    </span>
                <label className="stu-profile-form-label">Department</label><br/>
                <select className="stu-profile-form-field" placeholder="Your Department like CSE or ECE" required name="dept" value={dept} onChange={(event)=>setDept(event.target.value)}>
                    <option value="" readonly="true" hidden="true" selected>Choose Your Department</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                </select>   
                

                <span className="header-icon">
                    {/* <FontAwesomeIcon icon={faAward} color="#000000"/> */}
                </span>    
                <label className="stu-profile-form-label">Current CGPA</label><br/>
                <input className="stu-profile-form-field" placeholder="Your CGPA as per last semester" required pattern="[0.0-9.0]+"
                  name="cgpa"  value={cgpa} onChange={(event)=>setCgpa(event.target.value)}
                />

                <span className="header-icon">
                    {/* <FontAwesomeIcon icon={faPercentage} color="#000000"/> */}
                    </span>   
                <label className="stu-profile-form-label">12th Standard Marks in Percentage</label><br/>
                <input className="stu-profile-form-field" placeholder="Enter your 12th Std Percentage" required pattern="[0.0-9.0]+"
                  name ="hsemark" value={twelveMark} onChange={(event)=>setTwelveMark(event.target.value)}
                />

                <span className="header-icon">
                    {/* <FontAwesomeIcon icon={faGraduationCap} color="#000000"/> */}
                </span>  
                <label className="stu-profile-form-label">12th Standard Board</label><br/>
                <select className="stu-profile-form-field" placeholder="Your Board of Examination in 12th Std" required minLength="3"
                    name="hseboard" onChange={(event)=>setTwelveBoard(event.target.value)} value={twelveBoard}>
                        <option value="" readonly="true" hidden="true" selected>Choose Your Board of Examination</option>
                        <option value="State Board">State Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                    </select>

                <span className="header-icon">
                    {/* <FontAwesomeIcon icon={faPercentage} color="#000000"/> */}
                </span>   
                <label className="stu-profile-form-label">10th Standard Marks in Percentage</label><br/>
                <input className="stu-profile-form-field" placeholder="Enter your 10th Std Percentage" required pattern="[0.0-9.0]+"
                    name="sslcmark" value={tenMark} onChange={(event)=>setTenMark(event.target.value)}
                />

                <span className="header-icon">
                    {/* <FontAwesomeIcon icon={faGraduationCap} color="#000000"/> */}
                    </span>  
                <label className="stu-profile-form-label">10th Standard Board</label><br/>
                <select className="stu-profile-form-field" placeholder="Your Board of Examination in 10th Std" required minLength="3"
                    name="sslcboard" onChange={(event)=>setTenBoard(event.target.value)} value={tenBoard}>
                        <option value="" readonly="true" hidden="true" selected>Choose Your Board of Examination</option>
                        <option value="State Board">State Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                    </select>
                <button type="submit" className="stu-profile-form-submit" onClick={Submitted}>Submit</button>
            </form>
            </div>
        </div>
    );

}

export default ProfileForm;