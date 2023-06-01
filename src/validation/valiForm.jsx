export const handleNameChange = (event) => {
  event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
};

export const handleEmailChange = (event) => {
  event.target.value = event.target.value;

};

export const handlePassChange = (event) => {
  event.target.value = event.target.value;
};

export const handleRPassChange = (event) => {
  event.target.value = event.target.value;
  
};

export const handleAddressChange = (event) => {
  event.target.value = event.target.value;
};

export const handleNumberChange = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
};

export const handleFloorChange = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
};

export const handleNumberCardChange = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');

};

export const handleNumberCvcChange = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
};

