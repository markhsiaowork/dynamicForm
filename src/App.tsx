import './App.css';
import Form from './component/Form';

function App() {
  const handleChange = (targetId:string) => {
    console.log(targetId);
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
        field_name: "Date of Birth",
        field_type: "text",
        isMutiple: false,
        has_childs: false,
        is_required: true
      },
      {
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
        field_name: "Contact",
        field_type: "group",
        isMutiple: true,
        has_childs: true,
        childs: [
          {
            field_name: "Contact Name",
            field_type: "text",
            isMutiple: false,
            has_childs: false,
            is_required: false
          },
          {
            field_name: "Contact Name 2",
            field_type: "text",
            isMutiple: false,
            has_childs: false,
            is_required: false
          }
        ],
      },
      {
        field_name: "Gurdian",
        field_type: "checkbox",
        isMutiple: false,
        has_childs: false,
        is_required: false,
        // onChange: handleChange("gurdian_contact")
      },
      {
        id: "gurdian_contact",
        field_name: "Gurdian Contact",
        field_type: "text",
        isMutiple: false,
        has_childs: false,
        is_required: false,
      }
    ]
  return (
    <div className="App">
      <Form title={"Sign Up"} formConfig={formConfig} />
    </div>
  );
}

export default App;
