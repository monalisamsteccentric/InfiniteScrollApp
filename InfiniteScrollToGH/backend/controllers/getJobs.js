const jobs = require('../Models/jobs.js')



const getJobs = async (req,res) =>{
    
    const currentPage = Number(req.query.page) 
    const skipposts = 3 * (currentPage - 1) 
    try {
        const jobPosts = await jobs.find().limit(3).skip(skipposts)
        console.log(jobPosts)
        res.status(200).json(jobPosts)
    } catch (error) {
        res.status(500).json(error)
    }


}

module.exports = getJobs