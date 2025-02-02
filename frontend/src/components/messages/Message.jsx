

const Message = () => {


    return (
        <div className="chat chat-end ">
            <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>

           <img src=" https://www.google.com/imgres?q=photos&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2023%2F12%2F05%2F08%2F14%2Fwoman-8431035_1280.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fbeautiful%2F&docid=NOCFbi18mEcFtM&tbnid=h4E1iXCqfwu8qM&vet=12ahUKEwjM_rqr4Z2LAxU-WUEAHSb_MTMQM3oECFMQAA..i&w=1280&h=853&hcb=2&ved=2ahUKEwjM_rqr4Z2LAxU-WUEAHSb_MTMQM3oECFMQAA" alt=" TailwindCSS chat Bubble" />


            </div>




            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi ? Whats up!!</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center"> 12:42</div>
        </div>
    )
}   
export default Message;