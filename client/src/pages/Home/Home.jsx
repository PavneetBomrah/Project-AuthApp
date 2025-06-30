import React from "react";
const Home = () => {
  function Logout() {
    
            localStorage.clear()
            setTimeout(() => {
                window.location.reload()
            }, 100);
  }
  return (
    <div>
        Haluu <a href="/auth" className="border p-1">Go to auth</a>
        <div className="">Logout: <button onClick={Logout}>Logout</button></div>
    </div>
  )
}

export default Home