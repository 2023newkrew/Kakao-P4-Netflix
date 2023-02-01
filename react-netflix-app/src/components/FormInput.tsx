import { HTMLInputTypeAttribute, MouseEvent, memo } from 'react';
import { ErrorMessage, Input, InputContainer, InputField, PlaceLabel } from '@components/FormInput.style';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  errorMessage?: string;
  rules: UseFormRegisterReturn;
  value: string;
};
const FormInput = ({ type = 'text', placeholder, errorMessage, rules, value }: Props) => {
  const setInputFocus = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (!target || !target.previousSibling) {
      return;
    }
    (target.previousSibling as HTMLElement).focus();
  };

  return (
    <InputContainer>
      <InputField isError={!errorMessage}>
        <Input type={type} {...rules} />
        <PlaceLabel className="placeLabel" onClick={setInputFocus} hasValue={!!value}>
          {placeholder}
        </PlaceLabel>
      </InputField>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};

export default memo(FormInput, (prevProps, nextProps) => {
  if (prevProps.value !== nextProps.value) {
    return false;
  }
  if (prevProps.errorMessage !== nextProps.errorMessage) {
    return false;
  }
  return true;
});
