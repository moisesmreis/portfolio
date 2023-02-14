interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    label?: string;
    placeholder: string;
    error?: boolean;
    errorMessage?: string;
}

const Input = ({ id, name, label, placeholder, error = false, errorMessage = "", ...props }: InputProps) => {

    return (
        <div className="mb-6">
            <label className="form-label" htmlFor={id}>{label}</label>
            <input {...props} type="text" id={id} name={name} placeholder={placeholder} className="form-wrap" />
            {error && <p className="badge-main w-fit mt-3">{errorMessage}</p>}
        </div>
    );

};

export default Input;