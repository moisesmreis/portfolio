interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    label: string;
    helper: string;
    placeholder: string;
    error?: boolean;
    errorMessage?: string;
}

const Input = ({ id, name, label, helper, placeholder, error = false, errorMessage = "", ...props }: InputProps) => {

    return (
        <div className="mb-6">
            <label className="form-label" htmlFor={id}>{label}</label>
            <input {...props} type="text" id={id} name={name} placeholder={placeholder} className="form-wrap" />
            {error && <p className="badge-main w-fit mt-3">{errorMessage}</p>}
            <p className="form-helper">É só inserir o seu nome e último sobrenome</p>
        </div>
    );

};

export default Input;