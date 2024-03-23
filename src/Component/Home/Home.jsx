import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HomeBanner from "../HomeBanner/HomeBanner";
import JobCategory from "../JobCategory/JobCategory";



const Home = () => {
    return (
        <div className="container mx-auto">
            <HomeBanner></HomeBanner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>




        </div>
    );
};

export default Home;