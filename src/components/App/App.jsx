import { useState } from "react";
import UserForm from "../UserForm/UserForm";
import TextInput from "../TextInput/TextInput";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import Form from "../Form/Form";


export default function App() {
  const [text, setText] = useState("qwerty")
  const [user, setUser] = useState(null);
  const [lang, setLang] = useState('en');
  const saveUser = (user) => {
    console.log(user);
    setUser(user);
  };

  return (
    <div>
      <h1>Forms in React</h1>

      {user && (
        <div>
          <p>{user.username}</p>
          <p>{user.role}</p>
        </div>
      )}
      <UserForm onSubmit={saveUser} />
      <hr/>
      <TextInput value={text} onChange={setText}/>
      <p>{text}</p>
      <hr/>
      <LangSwitcher lang={lang} onSelect={setLang}/>
      <p>Current lang:{lang}</p>
      <hr/>
      <Form/>
    </div>
  );
}
