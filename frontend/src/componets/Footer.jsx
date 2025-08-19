import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
   

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-green-100">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src={assets.logotwo} alt="logo" />
                    <p className="max-w-[410px] mt-6">Waste2Taste is a social impact platform on a mission to inspire and empower everyone to fight foodwaste together.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.Links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright {new Date().getFullYear()} © Waste2Taste.com  All Right Reserved.
            </p>
        </div>
    );
};
export default Footer