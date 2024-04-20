import CustomButton from './CustomButton';
type Props = {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e: any) => {};
    required?: string;
    name?: string;
};

const CustomInput = ({type, placeholder, value, onChange, name}: Props) => {
    return (
        <input
            value={value}
            onChange={onChange}
            name={name}
            type={type}
            placeholder={placeholder}
            className="text-white borde border-primary border-2 bg-secondary rounded-md p-2 w-1/2 h-12  m-3 focus:text-white focus:border-primary focus:outline-none"
        />
    );
};

export default CustomInput;
