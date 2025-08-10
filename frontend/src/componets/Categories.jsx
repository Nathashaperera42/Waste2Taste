import React, { useRef, useEffect, useState } from 'react';
import { assets, categories } from "../assets/assets";
import { useAppContext } from '../context/AppContext';

const Categories = () => {
    const { navigate } = useAppContext();
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [isHovered, setIsHovered] = useState(false);
    const animationRef = useRef(null);

    // Auto-scroll effect
    useEffect(() => {
        const container = containerRef.current;
        if (!container || isHovered || isDragging.current) return;

        const autoScroll = () => {
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollTo({
                    left: 0,
                    behavior: 'instant'
                });
            } else {
                container.scrollBy({
                    left: 1,
                    behavior: 'smooth'
                });
            }
            animationRef.current = requestAnimationFrame(autoScroll);
        };

        animationRef.current = requestAnimationFrame(autoScroll);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isHovered]);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeft.current = containerRef.current.scrollLeft;
        containerRef.current.style.cursor = 'grabbing';
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        containerRef.current.style.cursor = 'grab';
        if (!isHovered) {
            animationRef.current = requestAnimationFrame(autoScroll);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        containerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        containerRef.current.style.cursor = 'grab';
        setIsHovered(false);
    };

    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium px-4'>Categories</p>
            
            <div 
                ref={containerRef}
                className="mt-6 overflow-x-hidden whitespace-nowrap cursor-grab select-none"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                style={{ userSelect: 'none' }}
            >
                <div className='inline-flex space-x-6 px-4'>
                    {categories.map((category, index) => (
                        <div 
                            key={index}
                            className='group cursor-pointer py-5 px-3 gap-2 rounded-lg  flex-col justify-center items-center inline-block w-36 flex-shrink-0'
                            style={{backgroundColor: category.bgcolor}}
                            onClick={() => {
                                navigate(`/products/${category.path.toLowerCase()}`);
                                window.scrollTo(0, 0);
                            }}
                        >
                            <img 
                                src={assets[category.image]} 
                                alt={category.text} 
                                className='group-hover:scale-105 transition max-w-28'
                                draggable="false"
                            />
                            <p className='text-sm font-medium text-center w-full mt-2'>{category.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;