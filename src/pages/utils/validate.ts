// utils/validate.ts
export const validate = ({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name || name.trim() === "") {
        errors.name = "Você esqueceu de inserir o seu nome 😓";
    }
    if (!email || email.trim() === "") {
        errors.email = "Você esqueceu de inserir seu e-mail 🥹";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "O e-mail inserido é inválido 🥺";
    }
    if (!message || message.trim() === "") {
        errors.message = "Você esqueceu de escrever sua mensagem 😓";
    }
    return errors;
};