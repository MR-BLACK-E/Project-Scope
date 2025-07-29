import { useState } from "react";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "" // Default selected course
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Name: ${formData.name}\nEmail: ${formData.email}\nsubject: ${formData.subject}\nmessage: ${formData.message}`);
    alert("we will Contact You Soon!")
  };

  return (
    <div className="form" style={{ textAlign: "center", marginTop: "5px" }}>
      <form onSubmit={handleSubmit} style={{ display: "", textAlign: "center" }}>
        
          <input style={{marginRight:"30px",width:"45%"}} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="YOUR NAME" required />
        
        
          <input style={{width:"45%"}} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="YOUR EMAIL" required />
        
        <br /><br />
          <input style={{width:"100%"}} type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="YOUR SUBJECT" required />
      
        <br /><br />
        <input style={{height:"200px"}} type="text" name="message" value={formData.message} onChange={handleChange} placeholder="MESSAGE" required />
            
   
        <br /><br />
        <div className="button">
        <button className="div2 hoverr" type="submit">SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
}
const styles={
  button:{
    position:"absolute"
},
img:{
  position:"relative"
}
};
export default FormPage;
