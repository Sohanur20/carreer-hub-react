/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../localStore/localstorage";
import JobCart from "../JobCart/JobCart";


const AppiledJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([])

    const jobs = useLoaderData()



    useEffect(() => {
        const storedJobIds = getStoredJobApplication()

        // if (jobs.length > 0) {
        //     const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

        // }

        const JobsApplied = []

        for (const id of storedJobIds) {
            const job = jobs.find(job => job.id === id)
            if (job) {
                JobsApplied.push(job)
            }

            setAppliedJobs(JobsApplied)

        }

    }, [])


    return (
        <div>
            <h2>applied jobs : {appliedJobs.length}</h2>

            <div>

                <details className="dropdown flex ">
                    <summary className="m-1 btn">Find Your category</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Category</a></li>
                    </ul>
                </details>





                {
                    appliedJobs.map((jobCart) => <JobCart jobCart={jobCart} key={jobCart.id}></JobCart>)
                }
            </div>



        </div>

    );
};

export default AppiledJobs;