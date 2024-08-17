import React, { useRef, useState } from "react";
import Box from "./components/Box";
import cancel_img from "./assets/cancel.svg";
import Button from "./components/Button";
const App = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(true);
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  const ref1 = useRef();
  const ref2 = useRef();
  function io(value) {
    ref2.current.play();
    setLock(false);
    ref1.current.innerHTML = `Winner is : <span style="font-size: 50px; color: cyan">${value}</span>`;
  }
  function winner() {
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] !== "") io(arr[0]);
    else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[5] != "") io(arr[3]);
    else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[8] != "") io(arr[6]);
    else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[6] != "") io(arr[0]);
    else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] != "") io(arr[1]);
    else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[8] != "") io(arr[2]);
    else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[8] != "") io(arr[0]);
    else if (arr[2] == arr[4] && arr[4] == arr[6] && arr[6] != "") io(arr[2]);
  }
  function toggle(e, i) {
    if (arr[i] == "" && lock) {
      if (count % 2 == 0) {
        e.target.innerHTML = `<img style="height: 80px" src="${cancel_img}" alt=""/>`;
        arr[i] = "X";
        setCount((c) => c + 1);
      } else {
        e.target.innerHTML = `<h1 style="font-size: 80px; color: cyan">O</h1>`;
        arr[i] = "O";
        setCount((c) => c + 1);
      }
    }
    if (count >= 4) winner();
  }
  return (
    <div className="h-screen w-screen bg-slate-950">
      <div className="lg:h-5/6 lg:w-2/6 sm:h-5/6 sm:w-5/6 h-full w-full border-2 border-slate-500 m-auto flex items-center justify-center flex-col gap-4">
        <h1 ref={ref1} className="text-4xl font-bold text-white">
          Tic Tac Toe <span className="text-cyan-300">React</span>
        </h1>
        <div className="h-4/6 w-5/6 grid grid-cols-3 grid-rows-3">
          <Box tog={toggle} index={0} />
          <Box tog={toggle} index={1} />
          <Box tog={toggle} index={2} />
          <Box tog={toggle} index={3} />
          <Box tog={toggle} index={4} />
          <Box tog={toggle} index={5} />
          <Box tog={toggle} index={6} />
          <Box tog={toggle} index={7} />
          <Box tog={toggle} index={8} />
        </div>
        <Button />
      </div>
      <audio
        ref={ref2}
        className="hidden"
        src="https://audio-previews.elements.envatousercontent.com/files/422328080/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22SCNB3LA-winning.mp3%22"
      ></audio>
    </div>
  );
};
export default App;
