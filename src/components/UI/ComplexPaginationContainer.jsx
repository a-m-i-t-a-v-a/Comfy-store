import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
    const {meta}=useLoaderData();
    console.log(meta)
    const {page,total}=meta.pagination;   
    
    const {search,pathname}=useLocation()
    const navigate=useNavigate()
  
    const handlePageChange=(pageNumber)=>{
      const searchParams=new URLSearchParams(search)
      searchParams.set('page',pageNumber)
      navigate(`${pathname}?${searchParams.toString()}`)
    }

    const addPageButton=({pageNumber,activeClass})=>{
        return (
            <button 
                key={pageNumber} 
                onClick={()=>handlePageChange(pageNumber)}
                className={`btn btn-xs sm:btn-md border-none join-item 
                    ${activeClass ? 'bg-base-300 border-base-300':''}`}
            >
                {pageNumber}
              </button>
        )
    }

    const renderPageButtons=()=>{
        const pageButtons=[]
        //first button
        pageButtons.push(addPageButton({pageNumber:1,activeClass:page===1}))
        //dots
        if(page>2){
            pageButtons.push(<button className="btn btn-xs sm:btn-md border-none join-item" key='dots-1'>...</button>)
        }
        //active page
        if(page!==1 && page!==total){
            pageButtons.push(addPageButton({pageNumber:page,activeClass:page===true}))
        }
        if(page<total-1){
            pageButtons.push(<button className="btn btn-xs sm:btn-md border-none join-item" key='dots-1'>...</button>)
        }
        //last button
        pageButtons.push(addPageButton({pageNumber:total,activeClass:page===total}))
        return pageButtons
    }
  
    if(total<2) return null;
  
    return (
      <div className="mt-16 flex justify-end">
        <div className="join">
          <button className="btn btn-xs sm:btn-md join-item" onClick={()=>{
            let prevPage=page-1;
            if(prevPage<1) prevPage=total
            handlePageChange(prevPage)
          }}>
            Prev
          </button>
          {renderPageButtons()}
          <button className="btn btn-xs sm:btn-md join-item" onClick={()=>{
            let nextPage=page+1;
            if(nextPage>total) nextPage=1
            handlePageChange(nextPage)
          }}>
            Next
          </button>
        </div>
      </div>
    )
}

export default ComplexPaginationContainer
