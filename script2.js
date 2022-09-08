const btn = document.querySelector(".playBtn");
const divBoxes = document.querySelectorAll(".numboxRow span div");
const numboxRow = document.querySelectorAll(".lotteryNum");
const numboxRowA = [];
const numboxRowB = [];
const numboxRowC = [];
const numboxRowD = [];
const numboxRowE = [];

for (let i = 0; i < 30; i++) {
  if (i < 6) {
    numboxRowA.push(numboxRow[i]);
  }
  if (i < 12 && i >= 6) {
    numboxRowB.push(numboxRow[i]);
  }
  if (i < 18 && i >= 12) {
    numboxRowC.push(numboxRow[i]);
  }
  if (i < 24 && i >= 18) {
    numboxRowD.push(numboxRow[i]);
  }
  if (i < 30 && i >= 24) {
    numboxRowE.push(numboxRow[i]);
  }
}

const getLotteryNums = () => {
  const lotteryNum = [];
  for (let i = 0; i < 6; i++) {
    let numRate = Math.random();

    if (numRate < 0.218 && numRate >= 0) {
      numRate = Math.random();

      if (numRate < 168 / 1543 && numRate >= 0) {
        if (lotteryNum.includes(1) === false) {
          lotteryNum.push(1);
        } else {
          i--;
        }
      }
      if (numRate < (168 + 162) / 1543 && numRate >= 168 / 1543) {
        if (lotteryNum.includes(2) === false) {
          lotteryNum.push(2);
        } else {
          i--;
        }
      }
      if (numRate < (168 + 162 + 155) / 1543 && numRate >= (168 + 162) / 1543) {
        if (lotteryNum.includes(3) === false) {
          lotteryNum.push(3);
        } else {
          i--;
        }
      }
      if (
        numRate < (168 + 162 + 155 + 164) / 1543 &&
        numRate >= (168 + 162 + 155) / 1543
      ) {
        if (lotteryNum.includes(4) === false) {
          lotteryNum.push(4);
        } else {
          i--;
        }
      }
      if (
        numRate < (168 + 162 + 155 + 164 + 150) / 1543 &&
        numRate >= (168 + 162 + 155 + 164) / 1543
      ) {
        if (lotteryNum.includes(5) === false) {
          lotteryNum.push(5);
        } else {
          i--;
        }
      }
      if (
        numRate < (168 + 162 + 155 + 164 + 150 + 151) / 1543 &&
        numRate >= (168 + 162 + 155 + 164 + 150) / 1543
      ) {
        if (lotteryNum.includes(6) === false) {
          lotteryNum.push(6);
        } else {
          i--;
        }
      }
      if (
        numRate < (168 + 162 + 155 + 164 + 150 + 151 + 155) / 1543 &&
        numRate >= (168 + 162 + 155 + 164 + 150 + 151) / 1543
      ) {
        if (lotteryNum.includes(7) === false) {
          lotteryNum.push(7);
        } else {
          i--;
        }
      }
      if (
        numRate < (168 + 162 + 155 + 164 + 150 + 151 + 155 + 149) / 1543 &&
        numRate >= (168 + 162 + 155 + 164 + 150 + 151 + 155) / 1543
      ) {
        if (lotteryNum.includes(8) === false) {
          lotteryNum.push(8);
        } else {
          i--;
        }
      }
      if (
        numRate <
          (168 + 162 + 155 + 164 + 150 + 151 + 155 + 149 + 128) / 1543 &&
        numRate >= (168 + 162 + 155 + 164 + 150 + 151 + 155 + 149) / 1543
      ) {
        if (lotteryNum.includes(9) === false) {
          lotteryNum.push(9);
        } else {
          i--;
        }
      }
      if (
        numRate <
          (168 + 162 + 155 + 164 + 150 + 151 + 155 + 149 + 128 + 161) / 1543 &&
        numRate >= (168 + 162 + 155 + 164 + 150 + 151 + 155 + 149 + 128) / 1543
      ) {
        if (lotteryNum.includes(10) === false) {
          lotteryNum.push(10);
        } else {
          i--;
        }
      }
    } else if (numRate < 0.448 && numRate >= 0.218) {
      numRate = Math.random();

      if (numRate < 154 / 1584 && numRate >= 0) {
        if (lotteryNum.includes(11) === false) {
          lotteryNum.push(11);
        } else {
          i--;
        }
      }
      if (numRate < (154 + 163) / 1584 && numRate >= 154 / 1584) {
        if (lotteryNum.includes(12) === false) {
          lotteryNum.push(12);
        } else {
          i--;
        }
      }
      if (numRate < (154 + 163 + 168) / 1584 && numRate >= (154 + 163) / 1584) {
        if (lotteryNum.includes(13) === false) {
          lotteryNum.push(13);
        } else {
          i--;
        }
      }
      if (
        numRate < (154 + 163 + 168 + 158) / 1584 &&
        numRate >= (154 + 163 + 168) / 1584
      ) {
        if (lotteryNum.includes(14) === false) {
          lotteryNum.push(14);
        } else {
          i--;
        }
      }
      if (
        numRate < (154 + 163 + 168 + 158 + 150) / 1584 &&
        numRate >= (154 + 163 + 168 + 158) / 1584
      ) {
        if (lotteryNum.includes(15) === false) {
          lotteryNum.push(15);
        } else {
          i--;
        }
      }
      if (
        numRate < (154 + 163 + 168 + 158 + 150 + 154) / 1584 &&
        numRate >= (154 + 163 + 168 + 158 + 150) / 1584
      ) {
        if (lotteryNum.includes(16) === false) {
          lotteryNum.push(16);
        } else {
          i--;
        }
      }
      if (
        numRate < (154 + 163 + 168 + 158 + 150 + 154 + 167) / 1584 &&
        numRate >= (154 + 163 + 168 + 158 + 150 + 154) / 1584
      ) {
        if (lotteryNum.includes(17) === false) {
          lotteryNum.push(17);
        } else {
          i--;
        }
      }
      if (
        numRate < (154 + 163 + 168 + 158 + 150 + 154 + 167 + 160) / 1584 &&
        numRate >= (154 + 163 + 168 + 158 + 150 + 154 + 167) / 1584
      ) {
        if (lotteryNum.includes(18) === false) {
          lotteryNum.push(18);
        } else {
          i--;
        }
      }
      if (
        numRate <
          (154 + 163 + 168 + 158 + 150 + 154 + 167 + 160 + 150) / 1584 &&
        numRate >= (154 + 163 + 168 + 158 + 150 + 154 + 167 + 160) / 1584
      ) {
        if (lotteryNum.includes(19) === false) {
          lotteryNum.push(19);
        } else {
          i--;
        }
      }
      if (
        numRate <
          (154 + 163 + 168 + 158 + 150 + 154 + 167 + 160 + 150 + 160) / 1584 &&
        numRate >= (154 + 163 + 168 + 158 + 150 + 154 + 167 + 160 + 150) / 1584
      ) {
        if (lotteryNum.includes(20) === false) {
          lotteryNum.push(20);
        } else {
          i--;
        }
      }
    } else if (numRate < 0.661 && numRate >= 0.448) {
      numRate = Math.random();

      if (numRate < 156 / 1472 && numRate >= 0) {
        if (lotteryNum.includes(21) === false) {
          lotteryNum.push(21);
        } else {
          i--;
        }
      }
      if (numRate < (156 + 127) / 1472 && numRate >= 156 / 1472) {
        if (lotteryNum.includes(22) === false) {
          lotteryNum.push(22);
        } else {
          i--;
        }
      }
      if (numRate < (156 + 127 + 138) / 1472 && numRate >= (156 + 127) / 1472) {
        if (lotteryNum.includes(23) === false) {
          lotteryNum.push(23);
        } else {
          i--;
        }
      }
      if (
        numRate < (156 + 127 + 138 + 156) / 1472 &&
        numRate >= (156 + 127 + 138) / 1472
      ) {
        if (lotteryNum.includes(24) === false) {
          lotteryNum.push(24);
        } else {
          i--;
        }
      }
      if (
        numRate < (156 + 127 + 138 + 156 + 145) / 1472 &&
        numRate >= (156 + 127 + 138 + 156) / 1472
      ) {
        if (lotteryNum.includes(25) === false) {
          lotteryNum.push(25);
        } else {
          i--;
        }
      }
      if (
        numRate < (156 + 127 + 138 + 156 + 145 + 159) / 1472 &&
        numRate >= (156 + 127 + 138 + 156 + 145) / 1472
      ) {
        if (lotteryNum.includes(26) === false) {
          lotteryNum.push(26);
        } else {
          i--;
        }
      }
      if (
        numRate < (156 + 127 + 138 + 156 + 145 + 159 + 170) / 1472 &&
        numRate >= (156 + 127 + 138 + 156 + 145 + 159) / 1472
      ) {
        if (lotteryNum.includes(27) === false) {
          lotteryNum.push(27);
        } else {
          i--;
        }
      }
      if (
        numRate < (156 + 127 + 138 + 156 + 145 + 159 + 170 + 139) / 1472 &&
        numRate >= (156 + 127 + 138 + 156 + 145 + 159 + 170) / 1472
      ) {
        if (lotteryNum.includes(28) === false) {
          lotteryNum.push(28);
        } else {
          i--;
        }
      }
      if (
        numRate <
          (156 + 127 + 138 + 156 + 145 + 159 + 170 + 139 + 134) / 1472 &&
        numRate >= (156 + 127 + 138 + 156 + 145 + 159 + 170 + 139) / 1472
      ) {
        if (lotteryNum.includes(29) === false) {
          lotteryNum.push(29);
        } else {
          i--;
        }
      }
      if (
        numRate <
          (156 + 127 + 138 + 156 + 145 + 159 + 170 + 139 + 134 + 148) / 1472 &&
        numRate >= (156 + 127 + 138 + 156 + 145 + 159 + 170 + 139 + 134) / 1472
      ) {
        if (lotteryNum.includes(30) === false) {
          lotteryNum.push(30);
        } else {
          i--;
        }
      }
    } else if (numRate < 0.887 && numRate >= 0.661) {
      numRate = Math.random();

      if (numRate < 157 / 1572 && numRate >= 0) {
        if (lotteryNum.includes(31) === false) {
          lotteryNum.push(31);
        } else {
          i--;
        }
      }
      if (numRate < (157 + 138) / 1572 && numRate >= 157 / 1572) {
        if (lotteryNum.includes(32) === false) {
          lotteryNum.push(32);
        } else {
          i--;
        }
      }
      if (numRate < (157 + 138 + 165) / 1572 && numRate >= (157 + 138) / 1572) {
        if (lotteryNum.includes(33) === false) {
          lotteryNum.push(33);
        } else {
          i--;
        }
      }
      if (
        numRate < (157 + 138 + 165 + 170) / 1572 &&
        numRate >= (157 + 138 + 165) / 1572
      ) {
        if (lotteryNum.includes(34) === false) {
          lotteryNum.push(34);
        } else {
          i--;
        }
      }
      if (
        numRate < (157 + 138 + 165 + 170 + 150) / 1572 &&
        numRate >= (157 + 138 + 165 + 170) / 1572
      ) {
        if (lotteryNum.includes(35) === false) {
          lotteryNum.push(35);
        } else {
          i--;
        }
      }
      if (
        numRate < (157 + 138 + 165 + 170 + 150 + 153) / 1572 &&
        numRate >= (157 + 138 + 165 + 170 + 150) / 1572
      ) {
        if (lotteryNum.includes(36) === false) {
          lotteryNum.push(36);
        } else {
          i--;
        }
      }
      if (
        numRate < (157 + 138 + 165 + 170 + 150 + 153 + 159) / 1572 &&
        numRate >= (157 + 138 + 165 + 170 + 150 + 153) / 1572
      ) {
        if (lotteryNum.includes(37) === false) {
          lotteryNum.push(37);
        } else {
          i--;
        }
      }
      if (
        numRate < (157 + 138 + 165 + 170 + 150 + 153 + 159 + 158) / 1572 &&
        numRate >= (157 + 138 + 165 + 170 + 150 + 153 + 159) / 1572
      ) {
        if (lotteryNum.includes(38) === false) {
          lotteryNum.push(38);
        } else {
          i--;
        }
      }
      if (
        numRate <
          (157 + 138 + 165 + 170 + 150 + 153 + 159 + 158 + 162) / 1572 &&
        numRate >= (157 + 138 + 165 + 170 + 150 + 153 + 159 + 158) / 1572
      ) {
        if (lotteryNum.includes(39) === false) {
          lotteryNum.push(39);
        } else {
          i--;
        }
      }
      if (
        numRate <
          (157 + 138 + 165 + 170 + 150 + 153 + 159 + 158 + 162 + 160) / 1572 &&
        numRate >= (157 + 138 + 165 + 170 + 150 + 153 + 159 + 158 + 162) / 1572
      ) {
        if (lotteryNum.includes(40) === false) {
          lotteryNum.push(40);
        } else {
          i--;
        }
      }
    } else if (numRate < 1 && numRate >= 0.887) {
      numRate = Math.random();

      if (numRate < 137 / 766 && numRate >= 0) {
        if (lotteryNum.includes(41) === false) {
          lotteryNum.push(41);
        } else {
          i--;
        }
      }
      if (numRate < (137 + 150) / 766 && numRate >= 137 / 766) {
        if (lotteryNum.includes(42) === false) {
          lotteryNum.push(42);
        } else {
          i--;
        }
      }
      if (numRate < (137 + 150 + 179) / 766 && numRate >= (137 + 150) / 766) {
        if (lotteryNum.includes(43) === false) {
          lotteryNum.push(43);
        } else {
          i--;
        }
      }
      if (
        numRate < (137 + 150 + 179 + 149) / 766 &&
        numRate >= (137 + 150 + 179) / 766
      ) {
        if (lotteryNum.includes(44) === false) {
          lotteryNum.push(44);
        } else {
          i--;
        }
      }
      if (
        numRate < (137 + 150 + 179 + 149 + 151) / 766 &&
        numRate >= (137 + 150 + 179 + 149) / 766
      ) {
        if (lotteryNum.includes(45) === false) {
          lotteryNum.push(45);
        } else {
          i--;
        }
      }
    }
  }
  return lotteryNum;
};

let index = false;

btn.addEventListener("click", (event) => {
  if (!index) {
    event.target.innerText = "다시뽑기";
    index = true;
  } else {
    event.target.innerText = "숫자뽑기";
    index = false;
  }

  const rowA = getLotteryNums();
  const rowB = getLotteryNums();
  const rowC = getLotteryNums();
  const rowD = getLotteryNums();
  const rowE = getLotteryNums();

  numboxRowA.forEach((box) => {
    box.innerText = rowA.pop();
  });

  numboxRowB.forEach((box) => {
    box.innerText = rowB.pop();
  });

  numboxRowC.forEach((box) => {
    box.innerText = rowC.pop();
  });

  numboxRowD.forEach((box) => {
    box.innerText = rowD.pop();
  });

  numboxRowE.forEach((box) => {
    box.innerText = rowE.pop();
  });

  divBoxes.forEach((box) => {
    box.classList.toggle("active");
  });
});
