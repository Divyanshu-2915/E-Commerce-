import React from "react";
import './Contact.css';

function Contact() {
    const storeResponse = (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log(name);
        const a = document.createElement("p");
        a.innerHTML = `Your Query Has Been Submitted Through ${email} Under Name Of ${name}`;
        a.style.color = "green";
        a.style.textAlign = "center";
        document.body.appendChild(a);
        setTimeout(() => {
            a.innerHTML = "  ";
        }, 2000);
    }

    return (
        <>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Contact Us - Anime Attire</title>
            <h1 className="contact-head">Anime Attire</h1>
            <h4 className="contact-head">The Perfect Store for Your dreams</h4>

            <section className="contact-sec">
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns, please feel free to contact us using the form below.</p>

                <form action="#" method="post" onSubmit={storeResponse} className="contact-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <br/><br/><br/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <br/><br/><br/>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required />
                    <br/><br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default Contact;