// components/contactForm/TextArea.tsx
interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
    label?: string;
    placeholder: string;
    type?: string;
    error?: boolean;
    errorMessage?: string;
}

const TextArea = ({ id, name, label, placeholder, error, errorMessage, ...props }: TextAreaProps) => {

    return (
        <div className="mb-6">
            <label className="form-label" htmlFor={id}>{label}</label>
            <textarea {...props} id={id} name={name} rows={8} placeholder={placeholder} className="form-wrap"></textarea>
            {error && <p className="badge-main w-fit mt-3">{errorMessage}</p>}
        </div>
    );
};

export default TextArea;