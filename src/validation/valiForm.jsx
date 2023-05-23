export const handleNameChange = (event, setInputValue) => {
  event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
  if (event.target.value.length <= 20) {
    setInputValue(event.target.value);
  }
};

export const handleEmailChange = (event, setInputValue) => {
  event.target.value = event.target.value;
  if (event.target.value.length <= 64) {
    setInputValue(event.target.value);
  }
};

export const handlePassChange = (event, setInputValue) => {
  event.target.value = event.target.value;
  if (event.target.value.length <= 8) {
    setInputValue(event.target.value);
  }
};

export const handleRPassChange = (event, setInputValue) => {
  event.target.value = event.target.value;
  if (event.target.value.length <= 8) {
    setInputValue(event.target.value);
  }
};

export const handleAddressChange = (event, setInputValue) => {
  event.target.value = event.target.value;
  if (event.target.value.length <= 20) {
    setInputValue(event.target.value);
  }
};

export const handleNumberChange = (event, setInputValue) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
  if (event.target.value.length <= 3) {
    setInputValue(event.target.value);
  }
};

export const handleFloorChange = (event, setInputValue) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
  if (event.target.value.length <= 2) {
    setInputValue(event.target.value);
  }
};

export const handleNumberCardChange = (event, setInputValue) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
  if (event.target.value.length <= 16) {
    setInputValue(event.target.value);
  }
};

export const handleNumberCvcChange = (event, setInputValue) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
  if (event.target.value.length <= 3) {
    setInputValue(event.target.value);
  }
};

