import { FiArrowRight } from 'react-icons/fi'
import Button from '../Button'

const Cta = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-[720px] px-gutter text-center sm:px-page-padding">
                <h2 className="text-page-title-mobile sm:text-page-title">
                    Ready to fly your next mission on Aether?
                </h2>
                <p className="mt-stack-sm text-body text-on-surface-variant">
                    Set up a workspace in minutes — no ground segment migration required.
                </p>
                <div className="mt-stack-lg flex flex-col justify-center gap-3 sm:flex-row">
                    <Button to="/auth/signup" variant="primary" icon={FiArrowRight}>
                        Launch workspace
                    </Button>
                    <Button href="mailto:ops@aether.dev" variant="outline">
                        Talk to ops team
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Cta