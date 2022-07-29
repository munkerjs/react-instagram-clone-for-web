import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useRef, useState } from "react";
import Input from "./components/Input";
import {AiFillFacebook} from "react-icons/ai";




function App() {

  // Telefon İçi Resim Döngüsü
  // Atanan div içerisindeki elemanları alıyoruz.
  const ref = useRef();
  useEffect(() => {
    // Atanan div içerisindeki elemanların etiketini aldık.
    let images = ref.current.querySelectorAll('img'),
    total = images.length,
    current = 0

    // Atanan div içerisindeki elemanlara classlar ekleyerek slider oluşturuyoruz.
    const imageSlider = () => {
      if(current > 0){
        images[current-1].classList.add('opacity-0');
      }else{
        images[total-1].classList.add('opacity-0');
      }
      images[current].classList.remove('opacity-0');
      if(current === total -1){
        current = 0;
      }else{
        current +=1;
      }      
    };
    // İlk aşamada boş gelmemesi için 1 kere tetikliyoruz.
    imageSlider();
    // 3 saniyede bir döngü olması için resmi çeviriyoruz.
    let interval = setInterval(imageSlider, 3000);

    // Resimler bitince döngümüzü temizliyoruz. 
    return () => {
      clearInterval(interval);
    }    
  }, [ref]);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const enabled = username && password;

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
      {/* Telefon Görseli İçerisinde Slider */}
      <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px] ">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[16px]" ref={ref}>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"/>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"/>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"/>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"/>
        </div>
      </div>

      {/* Giriş Form */}
      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white border px-[40px] pt-10 pb-6">
          <a href="#" className="flex justify-center mb-6">
            <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
          </a>
          <form className="grid gap-y-2">
            <Input type="text" value={username} label="Phone Number, Username or email" onChange={e => setUsername(e.target.value)}/>
            <Input type="password" value={password} label="Password" onChange={e => setPassword(e.target.value)}/>        
            <button type="submit" disabled={!enabled} className="login-button">Log In</button>

            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-[13px] text-gray-500 font-semibold">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <a href="#" className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook">
              <AiFillFacebook size={20}/>
              Log in with Facebook
            </a>
            <a href="#" className="flex justify-center items-center gap-x-2 text-xs text-link">
              Forgot password?
            </a>
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          Don't have an account? <a href="#" className="font-semibold text-brand">Sing up</a>
        </div>
      </div>

     

    </div>
  );
}

export default App;
