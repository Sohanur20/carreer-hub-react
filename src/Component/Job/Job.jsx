/* eslint-disable react/prop-types */

import { IoLocationSharp } from "react-icons/io5";

import { BiSolidBadgeDollar } from "react-icons/bi";
import { Link } from "react-router-dom";


const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary , id } = job;

    return (
        <div className="">
            <div className="card mx-auto lg:m-5 lg:mr-10 m-5 p-2 bg-base-100 shadow-2xl border ">
                <figure><img className="h-28 p-4" src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-10">
                        <button className="border p-4 rounded-lg border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="border p-4 rounded-lg border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className=" space-y-4 mt-4">

                        <p className="flex items-center gap-2 text-xl"><IoLocationSharp />{location}</p>
                        <p className="flex items-center gap-2 text-xl"><BiSolidBadgeDollar />{salary}</p>
                    </div>
                    <div className="card-actions ">
                        <Link to={`/job/${id}`}>
                        
                        <button className="btn btn-block bg-[#7E90FE] text-white">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;