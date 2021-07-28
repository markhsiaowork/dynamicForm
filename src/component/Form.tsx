import { FC } from "react";
const Form: FC<any> = ({ title, formConfig, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>
      {formConfig.map((field: any, index: number) => {
        switch (field.field_type) {
          case "text":
            return (
              <div>
                <label>
                  {field.field_name}
                  <input name={field.field_id} type={field.field_type} />
                </label>
              </div>
            );
            break;
          case "radio":
            if (field.has_childs) {
              return (
                <div>
                  {field.childs.map((child_field: any, index: number) => {
                    return (
                      <div>
                        <input
                          type={field.field_type}
                          value={child_field.name}
                          name={child_field.name}
                        />{" "}
                        {child_field.name}
                      </div>
                    );
                  })}
                </div>
              );
            }
            break;
          case "checkbox":
            return (
              <div>
                <label>
                  {field.field_name}
                  <input name={field.field_id} type={field.field_type} />
                </label>
              </div>
            );
          case "group":
            if (field.has_childs) {
              return (
                <div>
                  {field.childs.map((child_field: any, index: number) => {
                    return (
                      <div>
                        <label>
                          {child_field.field_name}
                          <input
                            name={child_field.field_id}
                            type={child_field.field_type}
                          />
                        </label>
                      </div>
                    );
                  })}
                </div>
              );
            }
            break;
          case "number":
            break;
          case "email":
            break;
          case "password":
            break;
          case "submit":
            return <button type={field.field_type} >{field.field_name}</button>
            break;
          default:
            break;
        }
      })}
    </form>
  );
};

export default Form;
