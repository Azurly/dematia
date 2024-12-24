import { motion } from "motion/react"

const Prompt = () => {
    return (
        <section className='p-5'>
            <div className='flex justify-center p-4'>
                <motion.img
                    animate={{ scale: 1.2 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    src='/icon.svg'
                    width={150}
                    height={'auto'}
                />
            </div>
            <p>Welcome, User !</p>
        </section>)
}

export default Prompt