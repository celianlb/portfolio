import { gsap } from "gsap";

const animation = () => {
  var $quote = $("#quote"),
    mySplitText = new SplitText($quote, { type: "lines" }),
    splitTextTimeline = gsap.timeline();

  gsap.set($quote, { perspective: 400 });

  //kill any animations and set text back to its pre-split state
  function kill() {
    splitTextTimeline.clear().time(0);
    mySplitText.revert();
  }
  $("#lines").click(function () {
    kill();
    mySplitText.split({ type: "lines" });
    splitTextTimeline.from(mySplitText.lines, {
      duration: 0.5,
      opacity: 0,
      rotationX: -120,
      force3D: true,
      transformOrigin: "top center -150",
      stagger: 0.1,
    });
  });
};

export default animation;
