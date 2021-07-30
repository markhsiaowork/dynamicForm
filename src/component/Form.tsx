import React, { FC } from "react";
const Form:FC<any> = ({ title, formConfig } ) => {
    const [config, updateConfig] = React.useState(formConfig);

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        let outPut:any = {};
        config.forEach( (fields:fields)=> { 
            let childOutput:any = {};
            let children:any = [];

            if (fields.type == "fieldGroup" && fields.children !== undefined) {
                fields.children.forEach(child => {
                    childOutput[child.name] = child.value;
                    children.push(childOutput);
                });
                outPut[fields.name] = children;
            }
            else if ( fields.value ) { 
                outPut[fields.name] = fields.value;
            }
        })
        console.log(outPut);
        
    }
    const toggleHidden = (id:string | undefined, e:React.ChangeEvent<HTMLInputElement> ) =>{
        if (e.target) {
            const newConfig =  config.map((fields:fields)=>{
                return (
                    fields.id === id 
                    ? { ...fields, hidden: !e.target.checked, is_required: e.target.checked} 
                    : fields
                )
            })
            updateConfig(newConfig);
            handleChange(id, e)
        }
    }
    const handleChange = (id:string | undefined, e:React.ChangeEvent<HTMLInputElement>) => {
        config.map((fields:fields)=>{
            if (fields.id === id ) {
                fields.value =  e.target.value
            }
        })
        
    }
    const handleChildChange = (id:string | undefined, e:React.ChangeEvent<HTMLInputElement>) => {
        config.map((fields:fields)=>{
            if (fields.children != undefined) {
                fields.children.forEach(child => {
                    if (child.id === id ) {
                        child.value =  e.target.value
                    }
                });
            }
        })
        
    }
    


    interface fields {
        id: string;
        name: string;
        type: string;
        target_Id?: string;
        is_required?: boolean;
        hidden?: boolean;
        enabled?: boolean;
        children?: children[];
        value?: any;
    }
    interface children {
        name: string;
        id: string;
        type?: string;
        is_required?: boolean;
        visibility?: boolean;
        enabled?: boolean;
        value?: any;
    }

    return (
        
        <form onSubmit={onSubmit}>
            <h2>{title}</h2>
            {config.map((fields: fields) => {
                switch (fields.type) {
                    case "text" || "email" || "password":
                        return (
                            <div hidden={fields.hidden}>
                                <input
                                    placeholder={fields.name}
                                    name={fields.id}
                                    type={fields.type}
                                    required={fields.is_required}
                                    onChange={(e) => handleChange(fields.id, e)}
                                />
                            </div>
                        );
                    case "radio":
                        if (fields.children) {
                            return (
                                <div hidden={fields.hidden}>
                                    {fields.children.map((child_field: children) => {
                                        return (
                                            <>
                                                <label>
                                                    <input
                                                        type={fields.type}
                                                        name={fields.name}
                                                        value={child_field.name}
                                                        onChange={(e) => handleChange(fields.id, e)}
                                                    />
                                                    {child_field.name}
                                                </label>
                                            </>
                                        );
                                    })}
                                </div>
                            );
                        }
                        return "";
                    case "checkbox":
                        return (
                            <div hidden={fields.hidden}>
                                <label>
                                    {fields.name}
                                    {fields.target_Id 
                                        ? <input name={fields.id} type={fields.type} required={fields.is_required} onChange={(e) => toggleHidden(fields.target_Id, e)}/>
                                        : <input name={fields.id} type={fields.type} required={fields.is_required} onChange={(e) => handleChange(fields.id, e)}/>
                                    }
                                    
                                </label>
                            </div>
                        );
                    case "fieldGroup":
                        if (fields.children) {
                            return (
                                fields.children.map((child_field: children) => {
                                    return (
                                        <div>
                                            <input
                                                placeholder={child_field.name}
                                                name={child_field.id}
                                                type={child_field.type}
                                                required={child_field.is_required}
                                                onChange={(e) => handleChildChange(child_field.id, e)}
                                            />
                                        </div>
                                    );
                                })
                            );
                        }
                        return "";
                    case "submit":
                        return <button type={fields.type} >{fields.name} </button>
                    default:
                        return "";
                }
            })}
        </form>
    );
};

export default Form;
