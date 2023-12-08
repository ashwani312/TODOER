import './Page.scss';

const Page = () => {
    const length = 4;
  return (
    <div className='Page'>
        <p>Record Per Page</p>
        <div className="allpages">
           <span>1</span>
           <span>2</span>
           <span>3</span>
           <span>4</span>
        </div>
    </div>
  )
}

export default Page