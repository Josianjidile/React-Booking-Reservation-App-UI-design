import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <div className="mailTitle">Save Time, Save Money!</div>
    <div className="mailDesc">Sign up and w'll send the best deals to you</div>
    <div className="mailInputContainer">
      <input type="text" placeholder="Your Email" />
      <button>Subscribe</button>
    </div>
    </div>
  )
}

export default MailList