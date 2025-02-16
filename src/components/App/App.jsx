import UserForm from "../UserForm/UserForm";

export default function App() {
  const handleFormSubmit = (x) => {
    console.log(x);
  };
  return (
    <div>
      <h1>Forms in React</h1>
      <UserForm onFormSubmit={handleFormSubmit} />
    </div>
  );
}
