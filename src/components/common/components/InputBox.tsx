import Label from '../../join/Label';
import Input from './Input';
import Message from '../../join/Message';

function InputBox({ label, placeholder, name, type, onChange, input, message }: any) {
  return (
    <>
      <Label name={label} />
      <Input placeholder={placeholder} name={name} type={type} onChange={onChange} />
      {input.length > 0 ? <Message message={message} /> : ''}
    </>
  );
}

export default InputBox;
