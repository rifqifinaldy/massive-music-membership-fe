import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { FormEvent, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface InputTextAreaProps {
  id: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  label?: string;
  onChange?: (
    e: FormEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  helperText?: string;
  rightElement?: React.ReactNode | JSX.Element;
  leftElement?: React.ReactNode | JSX.Element;
  error?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  rows?: number;
  showCharacterCount?: boolean;
  disabled?: boolean;
}

const InputTextArea: React.FC<InputTextAreaProps> = (props) => {
  const [length, setLength] = useState<number>(0);
  const { register } = useFormContext();

  const handleChange = (
    e: FormEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    props.onChange && props.onChange(e);
    setLength(e.currentTarget.value.trim().length);
  };

  useEffect(() => {
    if (props.value) {
      setLength((props.value as string).trim().length);
    }
  }, [props.value]);

  return (
    <FormControl isInvalid={Boolean(props.error)} h="full">
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
      <Textarea
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        bg="light"
        borderRadius="12px"
        rows={props.rows ? props.rows : 4}
        disabled={props.disabled}
        maxLength={props.maxLength}
        color="neutral.900"
        {...register(props.id, {
          required: {
            value: !!props.required,
            message: `${props.name} is required`,
          },
          onChange: (e) => handleChange(e),
        })}
      />
      {props.showCharacterCount && (
        <FormHelperText
          color={
            (props.maxLength as number) > length ? "success.500" : "danger.500"
          }
          fontWeight="500"
          fontSize="12px"
        >
          {(props.maxLength as number) > length
            ? (props.maxLength as number) - length + " Character Left"
            : "Character Out of Limit"}
        </FormHelperText>
      )}
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
      <FormErrorMessage>{props.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputTextArea;
