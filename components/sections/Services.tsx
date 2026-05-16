import Image from 'next/image';
import PinRotateSections, {
    PinRotateIntro,
    PinRotateSection,
    PinRotateOutro,
} from '@/components/ui/PinRotateSections';


const Services = () => (
    <PinRotateSections>
        <PinRotateIntro>
            <p
                className="text-white font-calendas italic"
                style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)', lineHeight: '1' }}
            >
                Our Services
            </p>
            <p
                className="mt-4 mb-16 text-white/80 max-w-[90%] md:max-w-[600px] leading-relaxed"
                style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)' }}
            >
                Complete solutions, all in one place
            </p>
        </PinRotateIntro>

        <PinRotateSection>
            <span className="text-[12vw] font-semibold text-black md:text-[8vw]">(01)</span>
            <div className="mt-6 w-full md:mt-0 md:w-[60%] md:flex md:flex-col md:items-start md:justify-start">
                <h2 className="mb-4 text-[8vw] font-medium tracking-tight text-black md:mb-8 md:text-[4vw]">
                    RDR 2
                </h2>
                <div className="relative w-full overflow-hidden rounded">
                    <Image
                        src="https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg"
                        alt="RDR 2"
                        width={1200}
                        height={675}
                        className="max-w-full object-cover"
                    />
                </div>
                <p className="mt-4 max-w-[70%] text-sm leading-snug text-black/90 md:mt-6 md:text-base md:leading-relaxed">
                    Red Dead Redemption 2 is a celebrated open-world adventure set in the American frontier.
                </p>
            </div>
        </PinRotateSection>

        <PinRotateSection>
            <span className="text-[12vw] font-semibold text-black md:text-[8vw]">(02)</span>
            <div className="mt-6 w-full md:mt-0 md:w-[60%] md:flex md:flex-col md:items-start md:justify-start">
                <h2 className="mb-4 text-[8vw] font-medium tracking-tight text-black md:mb-8 md:text-[4vw]">
                    GOW : RAGNAROCK
                </h2>
                <div className="relative w-full overflow-hidden rounded">
                    <Image
                        src="https://i.pinimg.com/1200x/83/a0/61/83a0611b7dffe9a845b371161da4a6ca.jpg"
                        alt="God of War Ragnarök"
                        width={1200}
                        height={675}
                        className="max-w-full object-cover"
                    />
                </div>
                <p className="mt-4 max-w-[70%] text-sm leading-snug text-black/90 md:mt-6 md:text-base md:leading-relaxed">
                    God of War: Ragnarök is an acclaimed action-adventure game set in Norse mythology.
                </p>
            </div>
        </PinRotateSection>

        <PinRotateSection>
            <span className="text-[12vw] font-semibold text-black md:text-[8vw]">(03)</span>
            <div className="mt-6 w-full md:mt-0 md:w-[60%] md:flex md:flex-col md:items-start md:justify-start">
                <h2 className="mb-4 text-[8vw] font-medium tracking-tight text-black md:mb-8 md:text-[4vw]">
                    THE LAST OF US
                </h2>
                <div className="relative w-full overflow-hidden rounded">
                    <Image
                        src="https://i.pinimg.com/1200x/6f/4a/73/6f4a73124e676232f7790afc347aa7cf.jpg"
                        alt="The Last of Us"
                        width={1200}
                        height={675}
                        className="max-w-full object-cover"
                    />
                </div>
                <p className="mt-4 max-w-[70%] text-sm leading-snug text-black/90 md:mt-6 md:text-base md:leading-relaxed">
                    The Last of Us is a powerful story-driven action game set in a post-apocalyptic world.
                </p>
            </div>
        </PinRotateSection>

        <PinRotateSection>
            <span className="text-[12vw] font-semibold text-black md:text-[8vw]">(04)</span>
            <div className="mt-6 w-full md:mt-0 md:w-[60%] md:flex md:flex-col md:items-start md:justify-start">
                <h2 className="mb-4 text-[8vw] font-medium tracking-tight text-black md:mb-8 md:text-[4vw]">
                    SEKIRO
                </h2>
                <div className="relative w-full overflow-hidden rounded">
                    <Image
                        src="https://i.pinimg.com/1200x/41/a6/6c/41a66c375c827fa9f6b8257ce3a32567.jpg"
                        alt="Sekiro"
                        width={1200}
                        height={675}
                        className="max-w-full object-cover"
                    />
                </div>
                <p className="mt-4 max-w-[70%] text-sm leading-snug text-black/90 md:mt-6 md:text-base md:leading-relaxed">
                    Sekiro: Shadows Die Twice is an intense action game set in feudal Japan.
                </p>
            </div>
        </PinRotateSection>

        <PinRotateSection>
            <span className="text-[12vw] font-semibold text-black md:text-[8vw]">(05)</span>
            <div className="mt-6 w-full md:mt-0 md:w-[60%] md:flex md:flex-col md:items-start md:justify-start">
                <h2 className="mb-4 text-[8vw] font-medium tracking-tight text-black md:mb-8 md:text-[4vw]">
                    ELDEN RING
                </h2>
                <div className="relative w-full overflow-hidden rounded">
                    <Image
                        src="https://i.pinimg.com/1200x/34/ce/01/34ce0128069cab020ce3dce189ef84b9.jpg"
                        alt="Elden Ring"
                        width={1200}
                        height={675}
                        className="max-w-full object-cover"
                    />
                </div>
                <p className="mt-4 max-w-[70%] text-sm leading-snug text-black/90 md:mt-6 md:text-base md:leading-relaxed">
                    Elden Ring is an expansive open-world action RPG crafted by FromSoftware and George R.R. Martin.
                </p>
            </div>
        </PinRotateSection>

        <PinRotateOutro>
            <h2 className="flex flex-wrap justify-center items-center text-[4vw] md:text-[4vw]">
                Happy <span className="ml-[0.8vw] flex items-center font-[100] text-bisque">Gaming </span> Out There.
            </h2>
            <p className="mt-4 max-w-[800px] text-base leading-relaxed opacity-80 md:text-lg">
                These games have shaped my gaming journey and left a lasting impression.
            </p>
        </PinRotateOutro>
    </PinRotateSections>
);

export default Services;
