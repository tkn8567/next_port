export default function Home() {
  return (
    <div>
      <div className='h-screen w-screen'>
        <div className="flex justify-center">
          <div className="h-32 w-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl"></div>
          <div className="h-32 w-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl"></div>
          <div className="h-32 w-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl"></div>
          <div className="h-32 w-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-[15rem] w-64 bg-white rounded-3xl">
            <div className="h-[50%] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl"></div>
          </div>
          <div className="h-[15rem] w-64 bg-white rounded-3xl"></div>
          <div className="h-[15rem] w-64 bg-white rounded-3xl"></div>
          <div className="h-[15rem] w-64 bg-white rounded-3xl"></div>
        </div>
      </div>
    </div>
  )
}
