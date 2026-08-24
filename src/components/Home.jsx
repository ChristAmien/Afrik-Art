import React from 'react'
import backgroundImage from '../assets/illustration/Landon_page__1_-removebg-preview.png'
import imageText2 from '../assets/AfrikArt.png'

export const Home = () => {
    return (
        <section id="accueil" className="relative w-full min-h-screen bg-amber-950 overflow-hidden">

            {/* Image en fond, ancrée en bas à gauche */}
            <img
                src={backgroundImage}
                alt="Illustration AfriK'Art"
                className="absolute left-0 bottom-0 h-[55%] md:h-full w-auto object-contain object-left-bottom pointer-events-none select-none opacity-40 md:opacity-100"
            />

            {/* Voile pour garder le texte lisible sur mobile où l'image passe derrière */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-amber-950/60 to-transparent md:hidden" />

            {/* Contenu texte, aligné à droite */}
            <div className="relative z-10 flex flex-col items-end justify-center min-h-screen px-6 md:px-16 text-right ml-auto max-w-xl md:max-w-2xl">

                {/* Eyebrow */}
                <span className="text-amber-400/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
                    Mode & Artisanat Africain
                </span>

                <img
                    className="w-full max-w-[320px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[620px]"
                    src={imageText2}
                    alt="AfriK'Art"
                />

                <p className="text-amber-100/80 text-sm md:text-base mt-6 leading-relaxed max-w-md">
                    AfriK’Art transforme les richesses africaines en vêtements uniques, 
                    à la rencontre du savoir-faire traditionnel et du design contemporain.
                </p>

                {/* Piliers de la marque, repris du texte au-dessus */}
                <div className="flex flex-wrap justify-end gap-2 mt-5">
                    {['Savoir-faire', 'Culture', 'Modernité'].map((pilier) => (
                        <span
                            key={pilier}
                            className="px-4 py-1.5 rounded-full border border-amber-400/40 text-amber-200 text-xs md:text-sm"
                        >
                            {pilier}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap justify-end gap-3 mt-8 mb-6">
                    <a
                        href="#"
                        className="px-6 py-3 rounded-2xl text-amber-800 bg-amber-50 font-semibold hover:bg-white transition-colors"
                    >
                        En savoir plus
                    </a>


                    <a
                        href="#produits"
                        className="px-6 py-3 rounded-2xl text-white bg-amber-700 font-semibold hover:bg-amber-600 transition-colors"
                    >
                        Voir nos produits
                    </a>
                </div>
            </div>
        </section>
    )
}