import { TriangleAlert } from 'lucide-react';

const SignIn = () => {
    return (
        <section className='p-5'>
            <div className='flex justify-center items-center'>
                <TriangleAlert width={50} height={'auto'} />
            </div>
            <p className='text-xl p-5'>Please Sign In</p>
            <button className='bg-[#af33f2] p-3 rounded-md'>Sign In</button>
        </section>
    )
}

export default SignIn