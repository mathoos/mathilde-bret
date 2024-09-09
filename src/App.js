import React, { useState, useEffect } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from "react-scroll-parallax";
import Home from './pages/Home';

function App() {
    

    const lenisConfig = {
        duration: 2,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
    };

    const lenis = useLenis(({ lenis }) => {
        if (lenis) {
            lenis.configure(lenisConfig); 
        }
    });

    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            setProgress(prevProgress => {

                const randomDelay = Math.random() * 700 + 400; 
                const nextProgress = prevProgress + 1;

                if (nextProgress >= 7) {
                    setTimeout(() => {
                        setLoading(false);
                    }, randomDelay);
                    return 7;
                }

                setTimeout(updateProgress, randomDelay);
                return nextProgress;
            });
        };

        updateProgress();
        return () => clearTimeout();
    }, []);

    useEffect(() => {
        if (loading) {
            document.documentElement.classList.add('loading');
        } 
        else {
            document.documentElement.classList.remove('loading');
            document.documentElement.classList.add('loading-done');
        }
    }, [loading]);


    useEffect(() => {
        const handleClick = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                lenis.scrollTo(targetElement);
            }
        };
    
        const anchors = document.querySelectorAll('a[href^="#"]');
        if (anchors.length > 0) {
            anchors.forEach(anchor => {
                anchor.addEventListener('click', handleClick);
            });
        }
    
        return () => {
            if (anchors.length > 0) {
                anchors.forEach(anchor => {
                    anchor.removeEventListener('click', handleClick);
                });
            }
        };
    }, [lenis]);

    return (
        <ParallaxProvider>
            <ReactLenis root> 
                <Router>
                    <Routes>      
                        <Route path="/" element={<Home progress={progress} />}/>
                    </Routes>
                </Router>
            </ReactLenis> 
        </ParallaxProvider>
    );
}

export default App;
