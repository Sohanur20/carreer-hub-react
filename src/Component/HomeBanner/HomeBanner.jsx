import profile from '../../assets/images/user.png';   

const HomeBanner = () => {
    return (
        <div className=" my-6">
            <div className="hero lg:bg-slate-100  bg-slate-600">
                <div className="flex items-center lg:gap-72 flex-col lg:flex-row-reverse h-[500px] ">
                    <img className='h-[500px]' src= {profile}/>
                    <div className='bg-slate-600 lg:bg-slate-100 lg:text-black text-white'>
                        <h1 className=" lg:text-5xl m-10 font-bold">One Step <br /> Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h1>
                        <p className=" lg:py-6 m-10">Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className="btn m-10 bg-[#7E90FE] text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;