'use client'

import { useRouter } from "next/navigation";
const isClient = typeof window !== 'undefined';
const isIOSDevice = isClient ? /iPad|iPhone|iPod/.test(navigator.userAgent) : false;
const NotFound = () => {
  const router = useRouter();
  const clickHandler = () => {
    isIOSDevice ? router.replace('/Support') : router.replace('/')
}

  return (
    <div className="pt-[4.96vw]">
    <h1>Page not found</h1>
    
        <button type="button" className="w-[27.2vw] sm:w-[11.37vw] h-[10.4vw] sm:h-[4.024vw] rounded-[4.26vw] sm:rounded-[2.5vw] text-[3.45vw] sm:text-[1.56vw] mt-[50vw] sm:mt-[15.204vw] hover:bg-[#333] text-[#11AAFF] hover:text-[#fff] font-sofia  mx-auto flex bg-[#fff] items-center justify-center font-semibold" onClick={clickHandler}>Home</button>
     
    </div>
  )
}
export default NotFound