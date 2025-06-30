const Home = () => {
  return (
    <div>
        Haluu <a href="/auth" className="border p-1">Go to auth</a>
        <div className="">Logout: <button onClick={()=>{
            localStorage.clear
            setTimeout(() => {
                window.location.reload
            }, 100);
            }}>Logout</button></div>
    </div>
  )
}

export default Home