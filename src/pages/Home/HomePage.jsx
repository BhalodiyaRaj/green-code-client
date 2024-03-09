/* eslint-disable react/prop-types */
import  {  useState } from "react";
import { useDebounce } from "../../hooks";
import {useGetQuestions} from "../../hooks/data";
import SelectMenu from "../../lib/Select";
import { useGetCategories } from "../../hooks/data";
import {Question} from "../../components/Question";
import { Link } from "react-router-dom";


function HomePage() {
  const [searchText,setSearchText] = useState('');
  const [categories] = useGetCategories();
  const debounceSearchText = useDebounce(searchText,500);
  const [searchCategories,setSearchCategories] = useState([]);
  const [level,setLevel] = useState('');
  const [skip,setSkip] = useState(0);
  const [limit] = useState(15);

  const [questions] = useGetQuestions(debounceSearchText,level,searchCategories,skip,limit);



  function QuestionList() {
    return questions.map((ques,index) => {
      return (
        <Link key={index} to={"/question/"+ques._id} className="block mb-2">
          <Question className=''  data={{...ques,number:index}} />
        </Link>
      );
    })
  }

  return (
    <div className="h-full w-full">
      <div className="w-2/3 px-3 h-full flex flex-col">
        <div className="w-full flex justify-between my-2">
          <div className="flex">
            <SelectMenu onChange={(data)=>setLevel(data?.value)} className="min-w-[130px] me-2" placeholder="Level" isClearable isGreen options={[{ value: 'easy', label: 'Easy' },{ value: 'medium', label: 'Medium' },{ value: 'hard', label: 'Hard' }]} />
            <SelectMenu onChange={(data)=>setSearchCategories(data.map(v=>v.id))} className="min-w-[130px] max-w-[400px]" placeholder="Categories" isMulti isClearable isGreen options={categories.map(v=>({value : v.name,label:v.name,id:v._id}))} />
          </div>
          <input className="text-xl px-1 gc-border-green" type="text" placeholder="Search" onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <div className="overflow-y-auto" style={{height:'calc(100vh - 180px)'}} >
          <QuestionList />
        </div>
        <div className="flex p-1 items-center justify-end">
          <button className="px-2 hover:scale-110 duration-200 text-xl gc-text-green rounded border" onClick={()=>setSkip(skip-limit)}>&lt;</button><br />
          <button className="px-2 hover:scale-110 duration-200 text-xl ms-5 gc-text-green rounded border" onClick={()=>setSkip(skip+limit)}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;