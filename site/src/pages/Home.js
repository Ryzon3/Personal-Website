import me from '../assets/me.png'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="box">
                    <img src={me} className="image"  alt='Ryan Cole'/>
                    <div>
                        <div className="titleText">Ryan Cole</div>
                        <h2>Undergraduate Student studying</h2>
                        <h2>Computer Science and Mathematics @ <a href="https://rpi.edu/">RPI</a></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;