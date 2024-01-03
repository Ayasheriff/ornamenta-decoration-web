import { Input, Typography } from "@mui/joy";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import "./Input.style.scss";

const InputError = ({ message }) => {
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  };

  return (
    <motion.p {...framer_error} style={{ color: "red" }}>
      <MdError />
      {message}
    </motion.p>
  );
};

const InputComponent = ({
  controllerId,
  type,
  className,
  placeholder,
  title,
  label,
  name,
  validation,
  endDecorator,
  onChange,
  value,
  error,
  sx
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = errors[name];

  return (
    <div className="login-inputs">
    <Typography className="input-title">{title}</Typography>
    <div style={{marginBlockEnd:"20px"}}>
      <Input
        id={controllerId}
        type={type}
        className={inputError ? "border-error" : className} // Add conditional border color
        placeholder={placeholder}
        autoFocus={inputError ? true : false}
        {...register(name, validation)} // Use register correctly
        endDecorator={endDecorator}
        onChange={onChange}
        value={value}
        error={error}
        sx={{marginBlockEnd:"30px", height:"45px"}?? sx}
      />
      <div>
        <AnimatePresence mode="wait" initial={false}>
          {inputError && (
            <InputError message={inputError.message} key={inputError.message} />
          )}
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
};

export default InputComponent;
