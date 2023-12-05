import React from "react";
import './Contact.css';

function Contact()
{
    return(
        <>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Contact Us - Your E-commerce Store</title>
        <h1>Your E-commerce Store</h1>

    <section>
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, please feel free to contact us using the form below.</p>

        <form action="#" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required/>

            <button type="submit">Submit</button>
        </form>
    </section>
</>
)
}

export default Contact;