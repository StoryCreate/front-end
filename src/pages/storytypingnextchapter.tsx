import React from "react";
import { useRef, useState } from "react";
import { Heart, Share2 } from 'lucide-react';
import marker_pen from './../assets/icons/marker_pen.png';
import edit_pen from './../assets/icons/edit_pen.png';
import eye from './../assets/icons/eye.png';
import more_icon_vertical from './../assets/icons/more_icon_vertical.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';

export const Storytypingnextchapter = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false)

    }
  }

  window.addEventListener("click", handleClickOutsideDropdown)

  return (
    <div className="main-padding w-full h-full pb-16">
      <div className="flex items-center justify-between mt-8">
        <a href="/createnewstory">
          <div className="flex items-center gap-2 text-[#8b008b] mb-8">
            <i className='bx bx-left-arrow-alt text-[25px] text-primary' id="left-arrow"></i>
            <h1 className="text-base font-medium">Back</h1>
          </div>
        </a>
        <a href="/hire" className="flex items-center mb-8 space-x-2 cursor-pointer">
          <img src={marker_pen} alt="marker pen" className="absolute h-6 ml-4" />
          <button className="border border-solid border-[#8b008b] rounded-full px-3 py-2 lg:px-8 lg:py-4 pl-8 lg:pl-10 text-[#8b008b] font-bold text-sm bg-transparent cursor-pointer">
            Hire a creator
          </button>
        </a>
      </div>
      <div>
        <h1 className="text-base lg:text-5xl font-semibold text-center text-black"> BOOK TITLE</h1>
        <div className="flex gap-8 items-center float-right mt-4">
          <Heart className="w-5 h-5 text-black hover:text-primary cursor-pointer" />
          <Share2 className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />

          <div ref={dropdownRef}>
            <div onClick={() => setOpen(!open)}> <img src={more_icon_vertical} className="h-6 w-4 cursor-pointer" />
              {open && (
                <dl className="absolute rounded-xl bg-white shadow p-4 -ml-40 mt-5 z-20">
                  <div className="mt-4 text-sm"> <img src={edit_pen} height="15px" /> Edit book details </div>
                  <div className="mt-4 text-sm text-left"> <img src={eye} height="15px" /> Preview </div>
                </dl>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-20 border border-black/25 rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(0,0,0,0.25)] p-6 lg:p-12 mb-12 relative">
        <div className="flex flex-col">
        <input
            type="text"
            className="text-black text-left text-base lg:text-xl mb-6 float-left border border-solid border-gray-300 p-2 rounded-xl w-full lg:w-[500px]"
            placeholder="Chapter one : Meeting Sebastian" />
          <input
            className="text-black text-left text-base lg:text-lg mb-6 float-left border border-solid border-gray-300 p-2 rounded-xl w-full lg:w-[400px]"
            placeholder="Subtitle" />
          <textarea
            className="text-black text-left justify-start text-sm h-screen w-full font-medium leading-relaxed resize-none border border-solid border-gray-300 p-4 rounded-xl"
            placeholder="A groan threatened to make its way out of my throat as my personal assistant brought him in. Sebastian, the one person I had grown to hate, was standing right in front of me.
                        “This is a joke, right?” Anna shook her head, introducing us and ignoring me. “Sir, this is Sebastian Aguilar, your new security detail and bodyguard.”
                        He nodded, looking at me with a glint in his eyes that I ignored. I waved Anna off, releasing her to go back to her duties at the office. As she left my mansion, I knew I would hate every second I had to spend alone with him.
                        “New house, aye?” “I’ll appreciate it if you understand your position here, Mr. Aguilar. You will refer to me as Sir or Mr. Davis. You cannot speak to me like I’m your buddy, at least not while you are on the clock, on  my dime.”
                        His jaw ticked at my tone, and I walked away from him before the thudding of my heart reached his ears. This had to be the universe punishing me—first, a stalker, then a break-in, and now this! My life had been too good lately; I knew I was due some bad luck at some point. But who was I to complain?
                        I had a job that I loved making art for the stars, and it made me a freshly minted billionaire. Of course, there would be a few bumps in the road.
                        “Is there anything else you’ll like to know, Mr. Aguilar?” I turned to face him with as straight a face as I could manage. As my assistant must have briefed you, you’re staying in my house.”
                        “I’m aware of that, sir.” “Good. Anything else?” I asked, sparing him a glance over my shoulder. “This is your room.”
                        “Do you have any cameras in the house? Something I can look through to see the culprit, at least?”
                        I shook my head. It wasn’t something I ever considered having in my home. All my life, I had lived without having to be so cautious, but I didn’t have such luxury anymore. Perhaps installing cameras would be excellent precaution to take after all.
                        “I’ll like your opinions on the things you believe might be best to improve the security status of the house. If you think of anything that can help you with your work too, please let me know or relate to Anna.”
                        “I’ll get to work with finding the perfect surveillance cameras to install in the house. It’s rather unbelievable that a house as big as this doesn’t have one.”
                        Knowing Sebastian, I was certain that would not be his last snide remark, but I did not have the patience for his jabs. Not today, not ever. I walked out of his room, taking two steps at a time to mine. The instant I got into my room, I felt my shoulders sag.
                        Who would have thought he would be back so soon? Just how long had it been since I saw him? How could he be the best security detail they could find?
                        My thoughts were moving in different directions. My body responded to the sight of him the instant I saw him. I hated that he still had that kind of effect on me. My brain knew better than to feel anything for him, though. It had to be the trauma messing with my senses.
                        The sound of my phone buzzing shook me out of my reverie. I looked at the screen and immediately ended the call with irritation. The No-Caller ID designation on the screen was all the warning I needed to know that I had no business talking to the person on the line. I had all the numbers I needed saved on my phone, and my acquaintances could only reach me through Anna.
                        “Mr. Davis?” As if on cue, I heard Sebastian’s voice on the other side of the door. I looked to the sky as I let out an exasperated sigh. The queue of people I did not want to talk to just continued to grow. I opened the door slightly, only popping my head around the corner to ask what he wanted.
                        Sebastian only had a few inches on me in height, but my angled position meant that I had to crane my neck to make eye contact with him. I recognized the smug smile on his face, the dimpled smile that accompanied most of his mischief.
                        “What do you want?” I asked. “Can we talk?” he asked. “About what?” I winced a little at the curtness of my response. I was second-guessing myself at every turn, and it was because he seemed so impervious to the internal turmoil that our reunion started inside me. Seeing him, I felt like a naive 19-year-old again, needing him to stroll in to save me.
                        He always had confidence, never seemed to know his place and a reckless attitude that I could not resist. I knew I was no longer that person. I just needed to show, but I also did not need to show him too hard because I did not need him to think that I cared in the first place.
                        I opened the door completely and uncurled to my full height. It meant I could get a good look at him too. Damn his good genes for making him 6 feet of hard-to-resist masculinity.
                        “I feel there’s some tension between us, and we need to work it out before we proceed with our relationship.
                        “What relationship” I snapped. “Our working relationship,” he replied at an even pace that made me even more miffed. “And I was referring to this attitude, sir.”
                        The smug smile was still on his face, as he seemed to be enjoying making me uncomfortable in my own home.
                        “As I said earlier, we don’t have to talk about anything as long as I’m paying for the time. So, please act like a professional and erase any sentiments or personal relations that might get in the way of doing your job, Mr. Aguilar.”
                        Sebastian turned to leave and thought better of it almost immediately. He turned to face me. “Are you just going to pretend like we never meant anything to each other, Malik?”
                        “That’s because you’re nothing to me, Sebastian!” I replied. It was my turn to sport a smug smile. “Can’t you try to stop being so self-centered for once and maybe consider that the world doesn’t revolve around you?”
                        The tick in his jaw was back. He stared at me directly, and then I followed his gaze as it traveled down the rest of my body. I hated it so much, but I missed it more than I hated it. It was a wonder how the human mind worked. All along, I had kept him away from my mind, but once he appeared, I couldn’t get him out.
                        “I’m sorry for leaving. I’m sorry that I did not tell you, but you know I had to.”
                        “I’m way past all of that, Sebastian. Whatever relationship we had ended when you left. I would like you to respect this one we’re building now. Understood?”
                        “Yes, sir.”
                        “I’ll return to my room unless you need something else.”
                        He shook his head slowly and calmly walked away from my door. I shut my door, turned the key behind it, and it locked with a click that I hoped he heard. I could suddenly breathe fine again.
                        There was so much going on already, and now I had to deal with the crush I had on Sebastian over five years ago, from when I was merely 19 years old. The universe really had a funny sense of humor, and it seemed to be enjoying throwing curve balls my way these last few days."
          />
        </div>
        <div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="px-3 lg:px-8 py-4 rounded-lg border border-solid bg-transparent border-primary text-primary font-bold cursor-pointer flex items-center space-x-2"> Submit for review </button>
        <div>
          <a href="/nextchapter"> <button className="px-7 lg:px-8 py-4 rounded-lg border border-solid bg-transparent border-primary text-primary font-bold cursor-pointer"> Next chapter </button> </a>
          <img src={arrow_right_pupple} className="absolute -ml-6 mt-4 h-5" />
        </div>
      </div>
    </div>
  );
};