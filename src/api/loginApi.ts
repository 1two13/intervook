// 현재 백 데이터가 없기 때문에 우선 가상의 API를 사용하여 작성(로그인이 무조건 성공된다고 가정)

interface ILoginApi {
  is_login: boolean;
}

export default function loginApi(id: string, password: string) {
  return new Promise<ILoginApi>((resolve) => resolve({ is_login: true }));
}
