import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormInput from '@components/FormInput';
import { PageContainer, PageContent, PageTitle, SubmitButton } from './Login.style';

const loginForm = {
  email: {
    key: 'email',
    rules: {
      required: '정확한 이메일 주소나 전화번호를 입력하세요.',
    },
  },
  password: {
    key: 'password',
    rules: {
      required: '비밀번호는 4~60자 사이여야 합니다.',
      minLength: {
        value: 4,
        message: '비밀번호는 4~60자 사이여야 합니다.',
      },
      maxLength: {
        value: 60,
        message: '비밀번호는 4~60자 사이여야 합니다.',
      },
    },
  },
};
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ reValidateMode: 'onBlur' });

  const email = watch('email');
  const password = watch('password');

  const login = async () => {
    return new Promise((resolve) => {
      resolve({
        data: {
          id: 1,
          name: 'musc.le',
        },
      });
    });
  };
  const onValidSubmit = async () => {
    await login();

    navigate('/browse', { replace: true });
  };

  return (
    <PageContainer>
      <PageContent>
        <PageTitle>로그인</PageTitle>
        <form onSubmit={handleSubmit(onValidSubmit)}>
          <FormInput
            type="text"
            placeholder="이메일 주소나 전화번호를 입력하세요"
            value={email}
            rules={register(loginForm.email.key, loginForm.email.rules)}
            errorMessage={errors.email?.message as string}
          />
          <FormInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            rules={register(loginForm.password.key, loginForm.password.rules)}
            value={password}
            errorMessage={errors.password?.message as string}
          />
          <SubmitButton>로그인</SubmitButton>
        </form>
      </PageContent>
    </PageContainer>
  );
};
export default Login;
