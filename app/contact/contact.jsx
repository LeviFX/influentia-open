"use client";

import {
	InstagramIcon,
	LinkedinIcon,
	FacebookIcon,
	BehanceIcon,
	TwitterIcon,
	WebIcon,
	ReturnIcon,
	MailIcon,
} from "@/app/components/icons";
import sendEmail from "../api/mail";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ShowContact() {
	const [isLoading, setIsLoading] = useState(false);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [status, setStatus] = useState();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const name = event.target.contact_name.value;
		const email = event.target.contact_email.value;
		const subject = event.target.contact_subject.value;
		const message = event.target.contact_message.value;

		if (isFormSubmitted) {
			return;
		}

		if (!name || !email || !subject || !message) {
			toast.error("Niet alle velden zijn ingevuld.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}

		if (status !== "solved") {
			toast.error("Incorrecte CAPTCHA verificatie.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}

		setIsLoading(true);

		try {
			await sendEmail(name, email, subject, message)
				.then(() => {
					// success
					setIsFormSubmitted(true);
					toast.success("📧 Mail verstuurd!", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				})
				.finally(() => {
					setIsLoading(false);
				});
		} catch (error) {
			toast.error("Er is iets mis gegaan, probeer het opnieuw.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	return (
		<div className="form-wrap">
			<form className="contact-form" onSubmit={handleSubmit}>
				<input
					id="contact-name"
					name="contact_name"
					type="text"
					placeholder="Naam"
				/>
				<input
					id="contact-email"
					name="contact_email"
					type="email"
					placeholder="E-mail"
				/>
				<select name="contact_subject" id="contact-subject">
					<option value="Afpsraak">Afspraak maken</option>
					<option value="Vraag">Vraag</option>
					<option value="Anders">Anders</option>
				</select>
				<textarea
					id="contact-message"
					name="contact_message"
					type="text"
					placeholder="Bericht"
				></textarea>
				<Turnstile
					siteKey="0x4AAAAAAAEWhpysZWGPIrLO"
					options={{
						theme: "light",
					}}
					onError={() => setStatus("error")}
					onExpire={() => setStatus("expired")}
					onSuccess={() => setStatus("solved")}
				/>
				<input
					id="contact-submit"
					type="submit"
					value={
						isLoading
							? "Versturen..."
							: isFormSubmitted
							? "Verzonden"
							: "Verstuur"
					}
					disabled={isLoading || isFormSubmitted}
				/>
			</form>
			<div className="contact-info">
				<ul>
					<li>
						<a
							href="https://www.instagram.com/agencyinfluentia/"
							target="_blank"
							aria-label="Instagram"
						>
							<InstagramIcon />
							agencyinfluentia
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/company/influentia-creatief-bureau/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<LinkedinIcon />
							Influentia
						</a>
					</li>
					<li>
						<MailIcon />
						influentiagency@gmail.com
					</li>
				</ul>
			</div>
			<ToastContainer />
		</div>
	);
}
