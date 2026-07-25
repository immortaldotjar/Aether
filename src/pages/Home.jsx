import Hero from '../components/HomeComps/Hero'
import Lifecycle from '../components/HomeComps/Lifecycle'
import Capabilities from '../components/HomeComps/Capabilities'
import Cta from '../components/HomeComps/Cta'

const Home = () => {
    return (
        <div>
            <Hero />
            <Lifecycle />
            <Capabilities />
            <Cta />
        </div>
    )
}

export default Home