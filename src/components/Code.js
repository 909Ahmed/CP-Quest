import React ,{useEffect,useRef,useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Questions from './Questions';
import Spinner from './Spinner';
import Alert from './Alert';

const Code=(props)=> {
    const [prob, setProb] = useState([])
    const [sub ,setSub] =useState([])
    const [ind,setInd] =useState(0)
    const [load,setLoad ] =useState(false)
    const [range ,setRange] = useState({lower:-1,upper:5000});
    const ref = useRef(null);

    const onChange = (e)=>{
      setRange({...range, [e.target.name]: e.target.value})
    }
    

    const fetchMoreData = () => {
      let temp = [];
      let count = ind;
      let check = 0;
      // console.log(req.query.tag);
      while (temp.length < 12 && count + 12 <= prob.length) {
        let array = prob.slice(count, count + 12);
        let newAraay = array.filter(function (el) {
          if(range.lower===-1 && range.upper===5000) return true;
          return (el.rating >= range.lower   && el.rating <= range.upper);
        });
        if (check===100) break;
        temp = temp.concat(newAraay);
        count += 12;
        check += 1;
      }
      setSub(sub.concat(temp));
      setInd(count);
    }

    const firstTime =async()=>{ 
      setLoad(true)
      ref.current.click();
      let temp = [];
      let count = ind;
      let check = 0;
      let url = `https://codeforces.com/api/problemset.problems?tags=${props.tag}`
      let data = await fetch(url);
      let parsedData = await data.json()
      setLoad(false)
      setProb(parsedData.result.problems)
      while (temp.length < 12 && count + 12 <= parsedData.result.problems.length) {
        let array = parsedData.result.problems.slice(count, count + 12);
        let newAraay = array.filter(function (el) {
          if(range.lower===-1 && range.upper===5000) return true;
          return (el.rating >= range.lower  && el.rating <= range.upper);
        });
        if (check===100) break;
        temp = temp.concat(newAraay);
        count += 12;
        check += 1;
      }
      setSub(temp);
      setInd(count);
    }


    useEffect(() =>{
      firstTime();
      // eslint-disable-next-line
    },[])

    

   return(
    <>
       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width:`200px`,marginLeft:`auto`}}>
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Select Range</h5>
               <button ref={ref} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
              <input type="text" className="form-control" onChange={onChange} id="lower" name="lower"/>
              <input type="text" className="form-control" onChange={onChange} id="upper" name="upper"/>
             <div className="modal-footer">
               <button type="button" className="btn btn-primary" onClick={firstTime}>Apply</button>
             </div>
           </div>
         </div>
       </div>
        <Alert/>
        {load && <Spinner/>}
        {!load && <InfiniteScroll dataLength={sub.length} 
        next={fetchMoreData} hasMore={sub.length!==prob.length}>
                     
               <div className='last container'>
                    {!load && <h1 className='d-flex justify-content-center' style={{marginTop:`70px` , color:'#00FFFF'}}>{props.title}</h1>}
                   <div className='row'>
                       {sub.map((element) => {
                           return (
                               <div className='col md-4' key={element.name}>
                                   <Questions from={props.tag} name={element.name} index={element.index} tags={element.tags} rating={element.rating ? element.rating : "NaN"} contestId={element.contestId} prob={element}/>
                               </div>
                           )
                       })}
                   </div>
               </div>
        </InfiniteScroll>}

        <div >

        </div>
    </>
  )
}

export default Code