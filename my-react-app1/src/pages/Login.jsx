import {useNavigate} from "react-router-dom"
import {auth, provide} from "../config/firebase"
import { signInWithPopup } from "firebase/auth";

export default function Login(){
    // 登入成功後，使用此hook可以切換到指定頁
    const navgate = useNavigate();

    const login=async()=>{
        const result=await signInWithPopup(auth, provide);
        // 登入成功後，切換到首頁
        navgate("/");
    }

    return (
        <div>
            <button onClick={login}>登入</button>
        </div>
    )
}