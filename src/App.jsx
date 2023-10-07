import InputUsingConnect from './components/InputUsingConnect'
import InputUsingHooks from './components/InputUsingHooks'
import ListUsingHooks from './components/ListUsingHooks'
import ListUsingConnect from './components/ListUsingConnect'

export default function App() {
  return (
    <div className="flex flex-col  min-h-screen bg-blue-100 items-center font-semibold">
    <h1 className='bg-red-100 m-5 p-2 text-xl rounded border-2 border-gray-300 '>Todo List Using Redux</h1>  
    {/*
   <InputUsingHooks />
  <ListUsingHooks /> */}

  <InputUsingConnect />
  <ListUsingConnect />
   </div>
   
  )
}