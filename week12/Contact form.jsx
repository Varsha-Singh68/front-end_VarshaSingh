import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      width: "350px",
      margin: "30px auto",
      padding: "20px",
      borderRadius: "12px",
      background: "#f3f3f3"
    }}>

      <h2 style={{ textAlign: "center" }}>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <textarea 
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          style={textareaStyle}
        ></textarea>

        <button 
          type="submit"
          style={{
            padding: "10px",
            width: "100%",
            marginTop: "10px",
            border: "none",
            background: "#2575fc",
            color: "white",
            fontSize: "16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Message:</b> {message}</p>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #888"
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #888"
};

export default ContactForm;
