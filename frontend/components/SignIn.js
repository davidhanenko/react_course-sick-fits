import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      {/* method "POST" will not let password go to url/must have!!! */}
      <h2>Sign Into Your Account</h2>
      <fieldset>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </fieldset>
    </Form>
  );
}
