import React from "react";
import { useRef, useState } from "react";
import { Heart, Share2 } from 'lucide-react';
import marker_pen from './../assets/icons/marker_pen.png';
import edit_pen from './../assets/icons/edit_pen.png';
import eye from './../assets/icons/eye.png';
import more_icon_vertical from './../assets/icons/more_icon_vertical.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';

export const Nextchapter = () => {
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

      <div className="w-full mt-20 border border-black/25 rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(0,0,0,0.25)] p-12 mb-12 relative">
        <div>
          <h2 className="text-black text-left text-xl mb-2">Chapter one : Meeting Sebastian</h2>
          <h3 className="text-black text-left text-lg mb-6">Malik's POV</h3>
          <pre className="text-black text-left text-sm font-medium whitespace-pre-wrap leading-relaxed">
            A groan threatened to make its way out of my throat as my personal assistant
            brought him in. Sebastian, the one<br /> person I had grown to hate, was standing
            right in front of me. <br />
            <br />

            “This is a joke, right?” <br />
            <br />

            Anna shook her head, introducing us and ignoring me. “Sir, this is Sebastian
            Aguilar, your new security detail and<br /> bodyguard.” <br /> <br />

            He nodded, looking at me with a glint in his eyes that I ignored. I waved Anna off,
            releasing her to go back to her<br /> duties at the office. As she left my mansion, I knew I
            would hate every second I had to spend alone with him. <br /> <br />

            “New house, aye?” <br /> <br />

            “I’ll appreciate it if you understand your position here, Mr. Aguilar. You will refer to
            me as Sir or Mr. Davis. You<br /> cannot speak to me like I’m your buddy, at least not while you
            are on the clock, on  my dime.” <br /> <br />

            His jaw ticked at my tone, and I walked away from him before the thudding of my heart
            reached his ears. This had<br /> to be the universe punishing me—first, a stalker, then a
            break-in, and now this! My life had been too good<br /> lately; I knew I was due some bad luck
            at some point. But who was I to complain?  <br /> <br />

            I had a job that I loved making art for the stars, and it made me a freshly minted
            billionaire. Of course, there would be<br /> a few bumps in the road.  <br /> <br />

            “Is there anything else you’ll like to know, Mr. Aguilar?” I turned to face him with as
            straight a face as I could manage.<br /> As my assistant must have briefed you, you’re staying
            in my house.” <br /> <br />

            “I’m aware of that, sir.” <br /> <br />

            “Good. Anything else?” I asked, sparing him a glance over my shoulder. “This is your room.” <br /> <br />

            “Do you have any cameras in the house? Something I can look through to see the culprit,
            at least?” <br /> <br />

            I shook my head. It wasn’t something I ever considered having in my home. All my life, I
            had lived without having to<br /> be so cautious, but I didn’t have such luxury anymore. Perhaps
            installing cameras would be excellent precaution<br /> to take after all. <br /> <br />

            “I’ll like your opinions on the things you believe might be best to improve the security
            status of the house. If you<br /> think of anything that can help you with your work too, please
            let me know or relate to Anna.” <br /> <br />

            “I’ll get to work with finding the perfect surveillance cameras to install in the house.
            It’s rather unbelievable that a<br /> house as big as this doesn’t have one.” <br /> <br />

            Knowing Sebastian, I was certain that would not be his last snide remark, but I did not
            have the patience for his<br /> jabs. Not today, not ever. I walked out of his room, taking two
            steps at a time to mine. The instant I got into my<br /> room, I felt my shoulders sag. <br /> <br />

            Who would have thought he would be back so soon? Just how long had it been since I saw him?
            How could he be<br /> the best security detail they could find? <br /> <br />

            My thoughts were moving in different directions. My body responded to the sight of him the
            instant I saw him.<br /> I hated that he still had that kind of effect on me. My brain knew
            better than to feel anything for him,<br /> though. It had to be the trauma messing with my
            senses.<br /> <br />

            The sound of my phone buzzing shook me out of my reverie. I looked at the screen and
            immediately ended the call<br /> with irritation. The No-Caller ID designation on the screen was
            all the warning I needed to know that I had no business<br /> talking to the person on the line.
            I had all the numbers I needed saved on my phone, and my acquaintances<br /> could only reach me
            through Anna. <br /> <br />

            “Mr. Davis?”<br /> <br />

            As if on cue, I heard Sebastian’s voice on the other side of the door. I looked to the sky
            as I let out an exasperated sigh.<br /> The queue of people I did not want to talk to just
            continued to grow. I opened the door slightly, only popping my<br /> head around the corner to
            ask what he wanted. <br /> <br />

            Sebastian only had a few inches on me in height, but my angled position meant that I had
            to crane my neck to make<br /> eye contact with him. I recognized the smug smile on his face,
            the dimpled smile that accompanied most of his<br /> mischief. <br /> <br />

            “What do you want?” I asked.<br /> <br />

            “Can we talk?” he asked. <br />
            “About what?”<br /> <br />

            I winced a little at the curtness of my response. I was second-guessing myself at every
            turn, and it was because he<br /> seemed so impervious to the internal turmoil that our reunion
            started inside me. Seeing him, I felt like a naive<br /> 19-year-old again, needing him to
            stroll in to save me.<br /> <br />

            He always had confidence, never seemed to know his place and a reckless attitude that I
            could not resist. I knew<br /> I was no longer that person. I just needed to show, but I also
            did not need to show him too hard because I did<br /> not need him to think that I cared in the
            first place. <br /> <br />

            I opened the door completely and uncurled to my full height. It meant I could get a good
            look at him too. Damn<br /> his good genes for making him 6 feet of hard-to-resist masculinity.<br /> <br />

            “I feel there’s some tension between us, and we need to work it out before we proceed with our relationship.<br /> <br />

            “What relationship” I snapped.<br /> <br />

            “Our working relationship,” he replied at an even pace that made me even more miffed.
            “And I was referring to this<br /> attitude, sir.”<br /> <br />

            The smug smile was still on his face, as he seemed to be enjoying making me uncomfortable
            in my own home. <br /> <br />

            “As I said earlier, we don’t have to talk about anything as long as I’m paying for the
            time. So, please act like a<br /> professional and erase any sentiments or personal relations
            that might get in the way of doing your job, Mr. Aguilar.”<br /> <br />

            Sebastian turned to leave and thought better of it almost immediately. He turned to face
            me. “Are you just going to<br /> pretend like we never meant anything to each other, Malik?”<br /> <br />

            “That’s because you’re nothing to me, Sebastian!” I replied. It was my turn to sport a
            smug smile. “Can’t you try to stop<br /> being so self-centered for once and maybe consider that
            the world doesn’t revolve around you?”<br /> <br />

            The tick in his jaw was back. He stared at me directly, and then I followed his gaze as
            it traveled down the rest of my<br /> body. I hated it so much, but I missed it more than I
            hated it. It was a wonder how the human mind worked.<br /> All along, I had kept him away from
            my mind, but once he appeared, I couldn’t get him out.<br /> <br />

            “I’m sorry for leaving. I’m sorry that I did not tell you, but you know I had to.”<br /> <br />

            “I’m way past all of that, Sebastian. Whatever relationship we had ended when you left.
            I would like you to respect this<br /> one we’re building now. Understood?”<br /> <br />

            “Yes, sir.”<br /> <br />

            “I’ll return to my room unless you need something else.” <br /> <br />

            He shook his head slowly and calmly walked away from my door. I shut the door, turned the
            key behind it, and it<br /> locked with a click that I hoped he heard. I could suddenly breathe
            fine again.  <br /> <br />

            There was so much going on already, and now I had to deal with the crush I had on
            Sebastian over five years ago,<br /> from when I was merely 19 years old. The universe really
            had a funny sense of humor, and it seemed to be enjoying<br /> throwing curve balls my way these
            last few days.  <br /> <br />

            I remembered the breathing techniques my private Yoga instructor taught me, and I took
            breaths until my breath<br /> returned to normal.<br /> <br />

            “Just how much more do I have to hold on?” I mumbled to myself, walking to my bed and
            throwing myself on the<br /> soft cushions.<br /> <br />

            My life was supposed to be easier when I no longer had to word about money, but a stalker
            and a love interest from<br /> a past life later, and I was back in the eye of the storm.   <br /> <br />

            I wanted to be happy and live a peaceful life as an artist. My passion kept me going even
            through the toughest times,<br /> and now my life was in danger because of it. <br /> <br />

            And of all the people who could protect me, it just had to be Sebastian <br /> <br />
          </pre>
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