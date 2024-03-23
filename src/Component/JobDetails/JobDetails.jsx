import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../localStore/localstorage";

const JobDetails = () => {

    const jobs = useLoaderData()
    const { id } = useParams()

    const job = jobs.find(job => job.id === parseInt(id))




    const handleApplyJob = () => {
        saveJobApplication(parseInt(id))

        toast.success('Your job appliyed successfully')
    }


    return (
        <div>
            <div className="mx-auto container grid gap-4 md:grid-cols-4 ">
                <div className=" md:col-span-3">
                    <h2 className="text-4xl text-center">Job Details</h2>

                    <div className=" p-5 m-5 rounded-md bg-green-100 text-black">
                        <h2 className="font-bold text-base"> {job.job_title} :</h2>
                        <p className="text-base font-medium mb-8">{job.job_description}</p>


                        <h2 className="font-bold text-base"> job_responsibility :</h2>
                        <p className="text-base font-medium mb-8">{job.job_responsibility}</p>


                        <h2 className="font-bold text-base"> job_responsibility :</h2>
                        <p className="text-base font-medium mb-8">{job.job_responsibility}</p>




                    </div>



                </div>
                <div className="border">
                    <h2 className="text-2xl">Job Details</h2>
                    <p>salary : {job.salary}</p>
                    <p>salary : {job.job_title}</p>



                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;