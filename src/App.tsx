import './App.css';
import Form from './component/Form';

function App() {
  const handleChange = (id:string) => {
    console.log(`Toggle ${id}`);
  }
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const formConfig = [
      {
        field_id: "fullName",
        field_name: "Full Name",
        field_type: "text",
        isMutiple: false,
        has_childs: false,
        is_required: true
      },
      {
        field_id: "dob",
        field_name: "Date of Birth",
        field_type: "text",
        isMutiple: false,
        has_childs: false,
        is_required: true
      },
      {
        field_id: "gender",
        field_name: "Gender",
        field_type: "radio",
        isMutiple: false,
        has_childs: true,
        childs: [
          {
            name: "Male"
          },
          {
            name: "Female"
          },
          {
            name: "Other"
          }
        ],
        is_required: false
      },
      {
        field_id: "contactGroup",
        field_name: "Contact",
        field_type: "group",
        isMutiple: true,
        has_childs: true,
        childs: [
          {
            field_id: "contact1",
            field_name: "Contact Name 1",
            field_type: "text",
            isMutiple: false,
            has_childs: false,
            is_required: false
          },
          {
            field_id: "contact2",
            field_name: "Contact Name 2",
            field_type: "text",
            isMutiple: false,
            has_childs: false,
            is_required: false
          }
        ],
      },
      { 
        field_id:"gurdian",
        field_name: "Gurdian",
        field_type: "checkbox",
        isMutiple: false,
        has_childs: false,
        is_required: false,
        target_Id: "gurdianContact"
      },
      {
        field_id:"gurdianContact",
        field_name: "Gurdian Contact",
        field_type: "text",
        isMutiple: false,
        has_childs: false,
        is_required: false,
      },
      {
        field_id:"submit",
        field_name: "submit",
        field_type: "submit",
      }
    ]
  return (
    <div className="App">
      <Form title={"Sign Up"} formConfig={formConfig} handleChange={handleChange} onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
