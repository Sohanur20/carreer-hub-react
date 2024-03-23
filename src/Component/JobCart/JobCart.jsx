/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { BiSolidBadgeDollar } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";


const JobCart = ({jobCart}) => {

const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = jobCart ;



    return (
        <div>
            <div className='flex items-center justify-center mx-auto container'>
	<div className="p-4 items-center justify-center  rounded-xl group sm:flex space-x-6 bg-red-300 bg-opacity-50 shadow-xl hover:rounded-2xl border my-10">
		<img  className="mx-auto  block w-80 h-40 rounded-lg "  alt="art cover" loading="lazy" src={logo} />
		<div className=" pl-0 p-5">
			<div className="space-y-2">
				<div className="space-y-4">
					<h4 className="text-md font-semibold text-cyan-900 text-justify">
					{job_title}
					</h4>
				</div>
				<div className="flex items-center space-x-4 justify-between">
					<div className="flex gap-3 space-y-1">
						<p>{company_name}</p>
						
					</div>
					<div className=" px-3 py-1 rounded-lg flex space-x-2 flex-row">
						<div className="cursor-pointer text-center text-md justify-center items-center flex">
							

                        <div className="flex gap-10">
                        <button className="border p-4 rounded-lg border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="border p-4 rounded-lg border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>



						</div>
						
					</div>
				</div>
				<div className="flex items-center space-x-4 justify-between">
					<div className="text-grey-500 flex flex-row space-x-1  my-4">
					
                    <div className=" space-y-4 mt-4">

<p className="flex items-center gap-2 text-xl"><IoLocationSharp />{location}</p>
<p className="flex items-center gap-2 text-xl"><BiSolidBadgeDollar />{salary}</p>
</div>


					</div>
					<div className="flex flex-row space-x-1">
					<button className="btn bg-purple-300 border-none ">View Details</button>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default JobCart;