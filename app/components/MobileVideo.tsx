type VideoProps = {
  link: string;
  
};

const MobileVideo = ({ link }: VideoProps) => {


  return (
    <div className='h-[72vh] bg-[#fff] w-[90.4%] mx-auto rounded-[7.46vw] overflow-hidden mt-[1vw] flex justify-center items-center' >
      <video
        className='mx-w-none h-auto'
        autoPlay
        muted
        controls={false}
        loop
        playsInline
        src='/Test.mov'
      />
    </div>
  );
};

export default MobileVideo;
