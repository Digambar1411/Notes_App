import React, { useRef,useState } from "react";
import "./CreateNote.css";

interface Note {
    id: string;
    title: string;
    desc: string;
    color:string
}

interface CreateNoteProp{
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote: React.FC<CreateNoteProp> = ({notes, setNotes}) => {

    const [error, setError]= useState<boolean>(false)
	const titleRef = useRef<HTMLInputElement | null>(null);
	const descRef = useRef<HTMLTextAreaElement | null >(null);
	const colorRef = useRef<HTMLInputElement | null >(null);

	const handleSubmit = (e:React.FormEvent):void =>{
		e.preventDefault();
        if(titleRef.current?.value ==="" || descRef.current?.value ===""){
            setError(true)
        }
        else{
          
            setNotes([...notes, {
                id:(new Date()).toString(),
                title:(titleRef.current as HTMLInputElement).value,
                desc:(descRef.current as HTMLTextAreaElement ).value,
                color:(colorRef.current as HTMLInputElement ).value,
            }]);

            (titleRef.current as HTMLInputElement).value="";
            (descRef.current as HTMLTextAreaElement ).value="";
            setError(false);
        }
        
     

    
    };

	return (
		<div >
			<form className="container" onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					name="title"
					placeholder="title of the note"
					ref={titleRef}
				/>
				<textarea
					name=""
					id=""
					placeholder="brief description"
					ref={descRef}
				></textarea>
				<div className="row">
					<label htmlFor="">Pick a Color</label>
					<input type="color" 
                    ref={colorRef}/>
					<button className="btn create">Create</button>
				</div>
			</form>

            { error && <span className="error">All field are mandotary</span>}
		</div>

      
	);
};

export { CreateNote };
