import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)


    useEffect(() => {

        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])

    return (
        <div>
            <div className="text-center lg:mt-32 space-y-4 m-5">
                <h2 className="font-bold lg:text-5xl">Featured Jobs : {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 ">

                {

                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }



            </div>

            <div className={dataLength === jobs.length && "hidden"}>
                <div className="text-center my-5 p-2 ">
                    <button onClick={() => setDataLength(jobs.length)} className="btn  bg-lime-200 text-2xl ">Show All JObs</button>
                </div>
            </div>

        </div>
    );
};

export default FeaturedJobs;