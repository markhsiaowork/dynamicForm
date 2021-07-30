import './App.css';
import Form from './component/Form';

function App() {
  const formConfig = [
      {
        id: "fullName",
        name: "Full Name",
        type: "text",
        is_required: true,
      },
      {
        id: "gender",
        name: "Gender",
        type: "radio",
        children: [
          {
            name: "Male"
          },
          {
            name: "Female"
          },
          {
            name: "Other"
          }
        ]
      },
      {
        id: "contactGroup",
        name: "Contact",
        type: "fieldGroup",
        children: [
          {
            id: "contact1",
            name: "Contact Name 1",
            type: "text",
          },
          {
            id: "contact2",
            name: "Contact Name 2",
            type: "text"
          }
        ],
      },
      { 
        id:"gurdian",
        name: "Gurdian",
        type: "checkbox",
        target_Id: "gurdianContact"
      },
      {
        id:"gurdianContact",
        name: "Gurdian Contact",
        type: "text",
        hidden: true
      },
      {
        id:"submit",
        name: "submit",
        type: "submit",
      }
    ]
  return (
    <div className="App">
      <Form title={"Sign Up"} formConfig={formConfig} />
    </div>
  );
}

export default App;
