import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);


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

                    jobs.map( job => <Job key={job.id} job={job}></Job>)
                }

            </div>

        </div>
    );
};

export default FeaturedJobs;