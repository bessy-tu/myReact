import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

// 解構props的屬性名, 用{屬姓名}包起來
function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEdit, editTodo }) {
    return (
        // 檢查todo.isEdit是否為修改狀態


        todo.isEdit
        // isEdit:true
        // 呼叫修改元件，並傳入todo資料
            ? <EditForm todo={todo} editTodo={editTodo} />

            // 新增一個completed類別規則
            // 使用反引號, 搭配三元運算子,檢查isCompleted
            // 如果檢查結果為真 => 套用completed規則
            // 如果檢查結果為真 => 取消completed規則 => ` `

            // isEdit:flase
            // 顯示todo資料
            : <div className={`todo ${todo.isCompleted ? `completed` : ``} `}>
                {/* <p>上課中</p> */}
                {/* <p>{todo}</p> */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>

                <div>
                    <MdEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: 'pointer' }} />
                    <MdDelete
                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: 'pointer', marginLeft: '5px' }} />
                </div>

            </div>
    )
}

export default Todo