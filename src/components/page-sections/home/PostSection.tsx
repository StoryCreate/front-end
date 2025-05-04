import React from 'react'
import { Heart, Share2 } from 'lucide-react';

const PostSection = () => {
    return (
        <div className='w-full'>
            <div>
                <div className='flex flex-col items-start'>
                    <div className="flex items-center gap-4">
                        <img
                            alt="Ellipse"
                            src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-4@2x.png" width="80px" height="80px" />
                        <div>
                            <h4 className="text-black">Cindy Lawrence</h4> </div>
                    </div>
                    <div>
                        <p className="text-black text-left pt-5">I came across this amazing library. Y’all should check it out</p>
                    </div>

                    <div className="space-y-6 max-h-fit">
                        <img
                            className='pt-5 text-left w-[300px] lg:w-[600px] object-cover object-top'
                            src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-4.png"
                            width="600px"
                            height="300px"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-5 text-left text-3xl">
                    <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
                    <img className="h-8 w-8 hover:text-primary cursor-pointer" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg" />
                    <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                </div>

                <div className="flex flex-col gap-4 pt-4 text-left text-black">
                    <div>10 likes</div>
                    <div>View all 10 comments</div>
                    <div>10 mins ago</div>
                </div>
            </div>

            <div className="pt-12 flex flex-col items-start">
                <div>
                    <div className="flex items-center gap-4"> <img
                        alt="Ellipse"
                        src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-3@2x.png" width="80px" height="80px" />
                        <div>
                            <h4 className="text-black">Katherine Cage</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-black text-left pt-5">Me and mines!!! Do y’all agree fashion is art?</p>
                </div>

                <div className="pt-5 text-left">
                    <div>
                        <img
                            className='pt-5 text-left w-[300px] lg:w-[600px] object-cover object-top'
                            src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-3.png"
                            width="600px"
                            height="300px"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-5 text-left text-3xl">
                    <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
                    <img className="h-8 w-8 hover:text-primary cursor-pointer" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg" />
                    <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                </div>

                <div className="flex flex-col gap-4 pt-4 text-left text-black">
                    <div>10 likes</div>
                    <div>View all 10 comments</div>
                    <div>10 mins ago</div>
                </div>
            </div>

            <div className="pt-12">
                <div>
                    <div className="flex items-center gap-4">
                        <img
                            alt="Ellipse"
                            src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-2@2x.png" width="80px" height="80px" />
                        <div>
                            <h4 className="text-black">Jenni Caldwell</h4> </div>
                    </div>
                    <div>
                        <p className="text-black text-left pt-5">
                            <span className="span">
                                I published my book today. Y’all should check it out and tell me your thoughts. <br />
                                The link is{" "}
                            </span>
                            <span className="text-wrapper-7">https://storycreate.tme.ggghhh.com/</span>
                        </p>
                    </div>
                    <div className="pt-5 text-left">
                        <img
                            className='pt-5 text-left w-[300px] lg:w-[600px] object-cover object-top'
                            src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-2.png"
                            width="600px"
                            height="300px"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 pt-5 text-left text-3xl">
                    <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
                    <img className="h-8 w-8 hover:text-primary cursor-pointer" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg" />
                    <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                </div>
                <div className="flex flex-col gap-4 pt-4 text-left text-black">
                    <div>10 likes</div>
                    <div>View all 10 comments</div>
                    <div>10 mins ago</div>
                </div>
            </div>

            <div className="pt-12">
                <div>
                    <div className="flex items-center gap-4">
                        <img
                            alt="Ellipse"
                            src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977-1@2x.png" width="80px" height="80px" />
                        <div>
                            <h4 className="text-black">Johnson Peters</h4> </div>
                    </div>
                    <div>
                        <p className="text-black text-left pt-5">
                            This is definitely one of the best books of our time!
                        </p>
                    </div>
                    <div className="pt-5 text-left">
                        <img
                            className='pt-5 text-left w-[300px] lg:w-[600px] object-cover object-top'
                            src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3-1.png"
                            width="600px"
                            height="300px"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 pt-5 text-left text-3xl">
                    <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
                    <img className="h-8 w-8 hover:text-primary cursor-pointer" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg" />
                    <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                </div>
                <div className="flex flex-col gap-4 pt-4 text-left text-black">
                    <div>10 likes</div>
                    <div>View all 10 comments</div>
                    <div>10 mins ago</div>
                </div>
            </div>

            <div className="pt-12">
                <div>
                    <div className="flex items-center gap-4">
                        <img
                            alt="Ellipse"
                            src="https://c.animaapp.com/d3ZMzGnY/img/ellipse-1977@2x.png" width="80px" height="80px" />
                        <div>
                            <h4 className="text-black">Cindy Lawrence</h4> </div>
                    </div>
                    <div>
                        <p className="text-black text-left pt-5">
                            Anime is everything it thinks it is! Damn!!
                        </p>
                    </div>
                    <div className="pt-5 text-left">
                        <img
                            className='pt-5 text-left w-[300px] lg:w-[600px] object-cover object-top'
                            src="https://c.animaapp.com/d3ZMzGnY/img/rectangle-3.png"
                            width="600px"
                            height="300px"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 pt-5 text-left text-3xl">
                    <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
                    <img className="h-8 w-8 hover:text-primary cursor-pointer" alt="Frame" src="https://c.animaapp.com/d3ZMzGnY/img/frame-18-4.svg" />
                    <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                </div>
                <div className="flex flex-col gap-4 pt-4 text-left text-black">
                    <div>10 likes</div>
                    <div>View all 10 comments</div>
                    <div>10 mins ago</div>
                </div>
            </div>
        </div>
    )
}

export default PostSection