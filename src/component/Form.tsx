import { FC } from "react";
const Form:FC<any> = ({ title, formConfig } ) => {
    const toggleCheckBox = (id:string) =>{
        console.log(`Toggle ${id}`);
    }
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    }
    return (
        
        <form onSubmit={onSubmit}>
            <h2>{title}</h2>
            {formConfig.map((field: any) => {
                switch (field.field_type) {
                    case "text":
                        return (
                            <input
                                placeholder={field.field_name}
                                name={field.field_id}
                                type={field.field_type}
                                required={field.is_required}
                            />
                        );
                    case "radio":
                        if (field.has_childs) {
                            return (
                                <>
                                    {field.childs.map((child_field: any) => {
                                        return (
                                            <>
                                                <label>
                                                    <input
                                                        type={field.field_type}
                                                        name={field.field_name}
                                                        value={child_field.name}
                                                    />
                                                    {child_field.name}
                                                </label>
                                            </>
                                        );
                                    })}
                                </>
                            );
                        }
                        break;
                    case "checkbox":
                        return (
                            <>
                                <label>
                                    {field.field_name}
                                    <input 
                                        name={field.field_id} 
                                        type={field.field_type}
                                        required={field.is_required}
                                        onChange={()=>toggleCheckBox(field.target_Id)}
                                    />
                                </label>
                            </>
                        );
                    case "group":
                        if (field.has_childs) {
                            return (
                                field.childs.map((child_field: any, index: number) => {
                                    return (
                                        <input
                                            placeholder={child_field.field_name}
                                            name={child_field.field_id}
                                            type={child_field.field_type}
                                            required={field.is_required}
                                        />
                                    );
                                })
                            );
                        }
                        break;
                    case "submit":
                        return <button type={field.field_type} >{field.field_name}</button>
                    default:
                        break;
                }
            })}
        </form>
    );
};

export default Form;
