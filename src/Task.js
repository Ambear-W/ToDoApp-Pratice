import Checkbox from "./Checkbox";

export default function TaskForm({name, done}) {
    return (
        <div className="task">
            <Checkbox defaultChecked={done}/>
            {name}
        </div>
    );
}