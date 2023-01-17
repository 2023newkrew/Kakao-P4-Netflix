import { memo } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Input, InputContainer, InputField, PlaceLabel } from '@components/FormInput.style';

const FormInput = ({ type = 'text', placeholder, errorMessage, rules, value }) => {
  const setInputFocus = (event) => {
    event.target.previousSibling.focus();
  };

  return (
    <InputContainer>
      <InputField isError={!errorMessage}>
        <Input type={type} {...rules} />
        <PlaceLabel className="placeLabel" onClick={setInputFocus} hasValue={value}>
          {placeholder}
        </PlaceLabel>
      </InputField>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  type: PropTypes.string,
  rules: PropTypes.object,
  value: PropTypes.string,
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
