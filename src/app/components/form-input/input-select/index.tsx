import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import React from "react";

interface InputSelectProps {
  children: React.ReactNode | JSX.Element;
  size?: "sm" | "md" | "lg";
  id: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
}

const InputSelect: React.FC<InputSelectProps> = (props) => {
  const { register } = useFormContext();

  return (
    <FormControl isInvalid={Boolean(props.error)}>
      {props.label && (
        <FormLabel>
          {props.label}{" "}
          {props.required && (
            <Text color="red.500" fontWeight="600" as="span">
              *
            </Text>
          )}
        </FormLabel>
      )}
      <Select
        id={props.id}
        value={props.value === " " ? "" : props.value}
        placeholder={props.placeholder}
        bg="light"
        borderRadius="12px"
        color="neutral.900"
        size={props.size}
        disabled={props.disabled}
        defaultValue={props.defaultValue}
        {...register(props.id, {
          required: {
            value: !!props.required,
            message: `${props.name} is required`,
          },
          onChange: props.onChange,
        })}
      >
        {props.children}
      </Select>
      {props.helperText && (
        <FormHelperText color="neutral.70">{props.helperText}</FormHelperText>
      )}
      <FormErrorMessage>{props.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputSelect;
