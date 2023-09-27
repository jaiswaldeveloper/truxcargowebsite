import React from 'react'

const Dashboard = () => {
    const dashboardStyle={
        background: `url("/image/dashboad_client.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    width:"100%",
    height: "100vh",
    padding: "4rem"
      }
  return (
    <>
    <section className='dashboard_section margin_top_bottom' style={dashboardStyle}>
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
   <div className='text-center text-white' >
   <h4> Dashboard Features</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione, quos ducimus, aliquid sit aliquam, ea odio facilis voluptates magnam deserunt perferendis architecto beatae deleniti dolore provident ullam ad? </p>
<button className='btn btn-light'>Dashboard features </button>
   </div>
    </div>
  </div>
</div>
    </section>
    </>
  )
}

export default Dashboard