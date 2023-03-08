import { useRef, useState } from 'react';

function Profile() {
  const [imageUrl, setImageUrl] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const [message, setMessage] = useState('');
  const [nickname, setNickname] = useState('');
  const imgRef = useRef<HTMLInputElement>(null);

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target.files as FileList)[0];
    const reader = new FileReader();

    if (files === undefined) return;

    reader.readAsDataURL(files);
    reader.onload = () => {
      setImageUrl(reader.result as string);
    };
  };
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 2 || e.target.value.length > 7) {
      setMessage('2글자 이상 7글자 미만으로 입력해주세요.🥺');
    } else setMessage('');

    setNickname(e.target.value.slice(0, 7));
  };

  return (
    <div className="flex flex-col my-[3%] justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <label className="w-[25vh] h-[25vh] rounded-[50%] border-[1px] border-lightGray cursor-pointer">
          <img
            src={imageUrl}
            onClick={() => {
              imgRef.current?.click();
            }}
            className="w-[100%] aspect-square rounded-[50%]"
          />
        </label>

        <input
          type="file"
          ref={imgRef}
          onChange={onChangeImage}
          accept="image/png, image/jpg, image/jpeg"
          className="hidden"
        />
      </div>

      <input
        placeholder="닉네임"
        value={nickname}
        onChange={onChangeNickname}
        className="w-[15%] py-[3px] mt-[15px] mb-[2px] text-center text-[black] bg-lightGray/30 focus:outline-none"
      />
      <div className="text-[red] text-sm">{message}</div>
    </div>
  );
}

export default Profile;
