import { Controller, useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from "axios";

import styles from './Contact.module.css';
import SocialMedaiIcons from "../shared/SocialMedaiIcons/SocialMediaIcons";
import recaptchaKey from "../../constants/recaptchaKey";
import Spinner from '../Spinner/Spinner';

const Contact = (props) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sent, setSent] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const onSubmit = (data) => {
        setLoading(true);
        axios.post(
            //'http://localhost:3000/send-mail', 
            'https://mailer-ten-navy.vercel.app/send-mail',
            data)
            .then(respose => {
                setLoading(false);
                setError(null);
                setSent(true);
            })
            .catch(error => {
                setLoading(false);
                const errorMessage = error.response ? error.response.data.message : 'Server error, Please try againg later.'
                setError(errorMessage);
            })
    }

    return (
        <div className="container">
            <div className={styles.Contact}>
                <form className={styles.ContactForm} onSubmit={handleSubmit(onSubmit)}>
                    <h1>GET IN TOUCH</h1>
                    <p>Let's work together!</p>
                    <div className={styles.SocialIcons}>
                        <SocialMedaiIcons />
                    </div>
                    {
                        error
                            ? <div className="alert alert-danger">{error}</div>
                            : null
                    }
                    {
                        sent
                            ? <div className="alert alert-success">Mail sent successfully</div>
                            : null
                    }
                    <input
                        type="text"
                        id="full-name"
                        placeholder="Full Name"
                        className={errors && errors.fullName ? 'invalid' : ''}
                        {...register('fullName', { required: true })}
                    />
                    <input
                        type="email"
                        id="email-address"
                        placeholder="Email Address"
                        className={errors && errors.email ? 'invalid' : ''}
                        {...register('email', { required: true })}
                    />
                    <input
                        type="tel"
                        id="phone-number"
                        placeholder="Phone Number"
                        className={errors && errors.phoneNumber ? 'invalid' : ''}
                        {...register('phoneNumber', { required: true })}
                    />
                    <textarea
                        placeholder="Message"
                        rows="5"
                        className={errors && errors.message ? 'invalid' : ''}
                        {...register('message', { required: true })}
                    ></textarea>
                    <div className={styles.RecaptchaContainer}>
                        <Controller
                            className={errors && errors.recaptcha ? 'invalid' : ''}
                            name="recaptcha"
                            control={control}
                            rules={{ required: "Please verify that you are human." }}
                            render={({ field }) => (
                                <ReCAPTCHA
                                    className={styles.GRecaptcha}
                                    sitekey={recaptchaKey}
                                    onChange={(token) => field.onChange(token)}
                                />
                            )}
                        />
                    </div>
                    {
                        errors.recaptcha &&
                        <small className={styles.ErrorMessage}>
                            {errors.recaptcha.message}
                        </small>
                    }
                    {
                        loading
                            ? <Spinner />
                            : <button type="submit" className="button button-primary">Send</button>
                    }

                </form>
            </div>
        </div>
    );
}

export default Contact;