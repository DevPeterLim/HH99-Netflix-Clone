import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { signupDB } from "../redux/module/userReducer";
import netsliceLogo from "../redux/module/userReducer"


const Signup = () => {
    const emailRef = useRef(null);
    const pwRef = useRef(null);
    const dispatch = useDispatch();


    const signupHandler = () =>{
        console.log(emailRef, pwRef);
        dispatch(signupDB({
            email: emailRef.current.value,
            nickname: "nickname",
            password: pwRef.current.value,
            passwordCheck: pwRef.current.value
        }))
    }

    return (
        <>
            <img src={netsliceLogo}/>
            <select>
                <option>한국어</option>
                <option>English</option>
            </select>
            <button>로그인</button>
            <div>
                            1/3단계
                비밀번호를 설정해 멤버십을 시작하세요.
                몇 단계만 더 거치면 넷플릭스 가입 완료!
                복잡한 단계는 모두 없앴습니다.
            </div>
            <input type={"email"} ref={emailRef}></input><br/>
            <input type={"password"} ref={pwRef}></input><br/>
            <button onClick={signupHandler}>동의하고 계속</button><br/>
            <input type={"checkbox"} id={"personalData"}></input>
            <label htmlFor="personalData">예, 저는 개인정보 처리방침에 따른 개인정보 수집 및 활용에 동의합니다.</label><br/>
            <input type={"checkbox"} id={"noti"}></input>
            <label htmlFor="noti">예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택사항)</label> 
                
        </>
    )
}

export default Signup;