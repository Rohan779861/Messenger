import GenderCheckbox from "./GenderCheckbox"


const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    
                    <span className='text-blue-500'> Sign Up Rolin</span>
                </h1>
                <form>
                    <div>
                    <label className="label p-2">
                    <span className='text-base label-text'>Fullname</span>
                    </label>
                    <div>
                        
                    </div>
                    <input
							type='text'
							placeholder='Enter Fullname'
							className='w-full input input-bordered h-10'/>
                    </div>
                    <div>
                    <label className="label p-2">
                    <span className='text-base label-text'>Username</span>
                    </label>
                    <div>
                        
                    </div>
                    <input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'/>
                    </div>
                    <div>
                    <label className="label p-2">
                    <span className='text-base label-text'>Password</span>
                    </label>
                    <div>
                        
                    </div>
                    <input
							type='text'
							placeholder='Password'
							className='w-full input input-bordered h-10'/>
                    </div>
                    <div>
                    <label className="label p-2">
                    <span className='text-base label-text'>Confirm password</span>
                    </label>
                    <div>
                        
                    </div>
                    <input
							type='text'
							placeholder='Confirm password'
							className='w-full input input-bordered h-10'/>
                    </div>
                   
                    <GenderCheckbox />
                  
						<a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                          Already have an account ?</a>

                   
                  <div>


                    <button className='btn btn-block btn-sm mt-2 '>Login</button>
                  </div>

                </form>
                
            </div>
        </div>
    )
}

export default Signup



