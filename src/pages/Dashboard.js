import './stylesheets/app.modules.css';

export const Dashboard = () => {
  return (
    <div className='body'>
      <header className='Header'>
        <a style={{ paddingLeft: "30px" }}>Admin Dashboard</a>
        <input className='search' placeholder='Search Here'></input>
        <button className='user'>
          <a>Username</a>
          <a style={{ color: "grey" }}>Role</a>
        </button>
      </header>
      <div className='layout'>
        <div className='all'>
          <button className='all-items'>
            <a>Dashboard</a>
          </button>
          <button className='all-items'>
            <a>Settings</a>
            </button>
          <button className='all-items'>
            <a>Sign Out</a>
            </button>
        </div>
        <div className='posts-data'>
          <div className='data'>
            <a style={{ paddingTop: "30px" , paddingLeft: "20px" }}>How many people have visited today: </a>
            <a style={{ paddingLeft: "20px" }}>0</a>
           <a style={{ paddingTop: "30px" , paddingLeft: "20px" }}>Overall:</a>
           <a style={{ paddingLeft: "20px" }}>0</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
