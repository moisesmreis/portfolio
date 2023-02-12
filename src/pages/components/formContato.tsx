// components/contactForm/Form.tsx
import axios from "axios";
import { useState } from "react";
import { validate } from "../utils/validate";
import Input from "./input";
import TextArea from "./textArea";
import { ComponentInstanceIcon } from "@radix-ui/react-icons";

interface IValues {
    name: string;
    email: string;
    message: string;
}

interface IErrors extends Partial<IValues> { }

export const Form = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<IErrors>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [messageState, setMessageState] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validate(values);
        if (errors && Object.keys(errors).length > 0) {
            return setErrors(errors);
        }
        setErrors({});
        setLoading(true);
        axios
            .post("/api/mail", {
                name: values.name,
                email: values.email,
                message: values.message,
            })
            .then((res) => {
                if (res.status === 200) {
                    setValues({ name: "", email: "", message: "" });
                    setLoading(false);
                    setSuccess(true);
                    setMessageState(res.data.message);
                } else {
                    setLoading(false);
                    setMessageState(res.data.message);
                }
            })
            .catch((err) => {
                setLoading(false);
                setMessageState(String(err.message));
            });
        setLoading(false);
    };

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setValues((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form className="w-full !max-w-[36rem]" onSubmit={handleSubmit}>
            {success !== false ? (
                <Input disabled value={values.name} onChange={handleChange} id="name" name="name" label="Nome completo" helper="É só inserir o seu nome completo" placeholder="João Oliveira" error={!!errors.name} errorMessage={!!errors.name ? errors.name : ""} />
            ) : (
                <Input value={values.name} onChange={handleChange} id="name" name="name" label="Nome completo" helper="É só inserir o seu nome completo" placeholder="João Oliveira" error={!!errors.name} errorMessage={!!errors.name ? errors.name : ""} />
            )}
            {success !== false ? (
                <Input disabled value={values.email} onChange={handleChange} id="email" name="email" label="Seu e-mail" helper="Preencha com um email válido" placeholder="meunome@seuemail.com" error={!!errors.email} errorMessage={!!errors.email ? errors.email : ""} />
            ) : (
                <Input value={values.email} onChange={handleChange} id="email" name="email" label="Seu e-mail" helper="Preencha com um email válido" placeholder="meunome@seuemail.com" error={!!errors.email} errorMessage={!!errors.email ? errors.email : ""} />
            )}
            {success !== false ? (
                <TextArea disabled value={values.message} onChange={handleChange} id="message" name="message" label="Como posso ajudar?" placeholder="Então, eu queria um site que fizesse..." error={!!errors.message} errorMessage={!!errors.message ? errors.message : ""} />
            ) : (
                <TextArea value={values.message} onChange={handleChange} id="message" name="message" label="Como posso ajudar?" placeholder="Então, eu queria um site que fizesse..." error={!!errors.message} errorMessage={!!errors.message ? errors.message : ""} />
            )}
            {success !== false ? (
                <button className="button-light select-none opacity-70 hover:bg-white dark:hover:bg-neutral-800" type="submit" disabled>Deu tudo certo ✅</button>
            ) : (
                <button className="button-light" type="submit">Vamos começar 💪</button>
            )}
        </form>
    );

};