import React, { FC } from "react";
const Form:FC<any> = ({ title, formConfig } ) => {
    const [gurdianVisibility, toggleVisibility] = React.useState(false)
    
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Submmiting`);
    }
    const toggleGurdian = (id:string | undefined) =>{
        if (undefined) {
            console.log("The taget_id is undefined");
            
        } 
        else {
            console.log(`Toggle ${id}`);
        }
    }

    interface fields {
        id: string;
        name: string;
        type: string;
        target_Id?: string;
        is_required?: boolean;
        hidden?: boolean;
        enabled?: boolean;
        childs?: childs[];
    }
    interface childs {
        name: string;
        id: string;
        type?: string;
        visibility?: boolean;
        enabled?: boolean;
    }

    return (
        
        <form onSubmit={onSubmit}>
            <h2>{title}</h2>
            {formConfig.map((fields: fields) => {
                switch (fields.type) {
                    case "text":
                        return (
                            <div hidden>
                                <input
                                    placeholder={fields.name}
                                    name={fields.id}
                                    type={fields.type}
                                    required={fields.is_required}
                                />
                            </div>
                        );
                    case "radio":
                        if (fields.childs) {
                            return (
                                <div>
                                    {fields.childs.map((child_field: childs) => {
                                        return (
                                            <>
                                                <label>
                                                    <input
                                                        type={fields.type}
                                                        name={fields.name}
                                                        value={child_field.name}
                                                    />
                                                    {child_field.name}
                                                </label>
                                            </>
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
                                    {fields.name}
                                    {fields.target_Id 
                                        ? <input name={fields.id} type={fields.type} required={fields.is_required} onChange={() => toggleGurdian(fields.target_Id)}/>
                                        : <input name={fields.id} type={fields.type} required={fields.is_required}/>
                                    }
                                    
                                </label>
                            </div>
                        );
                    case "fieldGroup":
                        if (fields.childs) {
                            return (
                                fields.childs.map((child_field: childs) => {
                                    return (
                                        <div>
                                            <input
                                                placeholder={child_field.name}
                                                name={child_field.id}
                                                type={child_field.type}
                                                required={fields.is_required}
                                            />
                                        </div>
                                    );
                                })
                            );
                        }
                        break
                    case "submit":
                        return <button type={fields.type} >{fields.name}</button>
                    default:
                        break;
                }
            })}
        </form>
    );
};

export default Form;
