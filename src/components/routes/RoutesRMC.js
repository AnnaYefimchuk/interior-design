import { Routes, Route } from 'react-router-dom';
import Blog from '../blog/Blog.js';
import Architecture from '../architecture/Architecture.js';
import Project from '../project/Projects.js';
import Studio from '../studio/Studio.js';
import NoFound from '../noFound/NoFound.js';
import Home from '../home/Home.js';

export default function RoutesRMC() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="*" element={<NoFound />} />
        </Routes>
        );
}