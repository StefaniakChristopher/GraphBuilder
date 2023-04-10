
import React, {useEffect, useRef } from 'react';

function getRandomColor() {
  const colors = ["green", "red", "blue", "purple", "aqua"]
  let choice = Math.floor(Math.random() * 5);

  return colors[choice];
}

function GraphStructure(props) {

  const canvasRef = useRef(null);

  useEffect(() => {
    updateCanvas();
    window.addEventListener('resize', updateCanvas);
    return () => {
      window.removeEventListener('resize', updateCanvas);
    }
  }, [props.currentGraph]);

  const updateCanvas = () => {
    const { currentGraph, setCurrentMessage } = props;
    const { categories, xAxisMagnitude, yAxisIncrements, title, xAxisLabel, yAxisLabel } = currentGraph;
    console.log(categories)

    if (categories && xAxisMagnitude && yAxisIncrements && title && xAxisLabel && yAxisLabel) {

      /**
       * @type HTMLCanvasElement
       */

      const canvas = canvasRef.current;

      const xAxisLine = canvas.getContext('2d');
      const yAxisLine = canvas.getContext('2d');
      const xAxisSmallLabels = canvas.getContext('2d');
      const yAxisSmallLabels = canvas.getContext('2d');
      const yAxisBigLabel = canvas.getContext('2d');
      const xAxisBigLabel = canvas.getContext('2d');
      const titleLabel = canvas.getContext('2d');
      const bars = canvas.getContext('2d');

      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight * 2 / 3;

      const leftHandSide = canvas.width / 4;
      const lowerLineVerticalPos = canvas.height / 1.5;
      const upperLineHeight = canvas.height / 7;

      yAxisLine.beginPath();
      yAxisLine.moveTo(leftHandSide, lowerLineVerticalPos);
      yAxisLine.lineTo(leftHandSide, upperLineHeight);
      yAxisLine.lineWidth = canvas.height / 200;
      yAxisLine.stroke();
      yAxisLine.closePath()

      var yAxisFragment = lowerLineVerticalPos;
      const yAxisLength = lowerLineVerticalPos - upperLineHeight - canvas.height / 40;

      yAxisSmallLabels.fillStyle = 'white'
      yAxisSmallLabels.textAlign = 'right';
      yAxisSmallLabels.fillText(0, leftHandSide - 20, yAxisFragment);

      for (let i = 0; i < yAxisIncrements.length; i++) {

        yAxisFragment -= yAxisLength / yAxisIncrements.length;
        yAxisSmallLabels.fillStyle = 'white'
        yAxisSmallLabels.font = '12px Arial';
        yAxisSmallLabels.textAlign = 'right';
        yAxisSmallLabels.fillText(yAxisIncrements[i], leftHandSide - 20, yAxisFragment);

      }

      var xAxisFragmentStart = leftHandSide;
      const barHeightFactor = yAxisIncrements[yAxisIncrements.length - 1];
      // yAxisSmallLabels.style.transform = "rotate(-90deg)";
      // yAxisSmallLabels.style.transformOrigin = "left top";
      
      yAxisBigLabel.beginPath()
      yAxisBigLabel.font = '15px Arial'
      yAxisBigLabel.style = 'red'
      yAxisBigLabel.textAlign = 'center';
      yAxisBigLabel.save()

      yAxisBigLabel.translate(leftHandSide - 60, (lowerLineVerticalPos + upperLineHeight)/2)
      yAxisBigLabel.rotate(-Math.PI/2)
      yAxisBigLabel.fillText(yAxisLabel, 0, 0)
      
      yAxisBigLabel.closePath()
      yAxisBigLabel.restore()
      
      
      for (let i = 0; i < categories.length + 1; i++) {

        let lengthFactor = 0
        if(i < (categories.length)) {
          if(categories[i].length > 7)
          lengthFactor = 80 * Math.log10((categories[i].length - 7))
        }

        var xAxisFragmentEnd = xAxisFragmentStart + 50 + lengthFactor;

        xAxisLine.beginPath();
        xAxisLine.moveTo(xAxisFragmentStart, lowerLineVerticalPos);
        xAxisLine.lineTo(xAxisFragmentEnd, lowerLineVerticalPos);
        xAxisLine.lineWidth = canvas.height / 200;
        xAxisLine.stroke();

        if (i < categories.length) {

          bars.beginPath();
          bars.fillStyle = getRandomColor();
          bars.fillRect(xAxisFragmentEnd, lowerLineVerticalPos, canvas.width / 80, 0 - (xAxisMagnitude[i] / barHeightFactor) * yAxisLength);
          
          xAxisSmallLabels.fillStyle = 'white';
          xAxisSmallLabels.font = '12px Arial';
          xAxisSmallLabels.textAlign = 'center';
          xAxisSmallLabels.fillText(categories[i], xAxisFragmentEnd + (canvas.width / 80)/2, lowerLineVerticalPos + 30);

        }

        
        xAxisFragmentStart = xAxisFragmentEnd;

        console.log("frag: " + xAxisFragmentEnd)

      }

      console.log("lhs: "+ leftHandSide)

      xAxisBigLabel.font = '15px Arial'
      xAxisBigLabel.style = 'black'
      xAxisBigLabel.textAlign = 'center';
      xAxisBigLabel.fillText(xAxisLabel, (xAxisFragmentEnd + leftHandSide)/2, canvas.height / 1.3)

      titleLabel.fillText(title, (xAxisFragmentEnd + leftHandSide)/2, canvas.height / 9)


    } else if(categories || xAxisMagnitude || yAxisIncrements || title || xAxisLabel || yAxisLabel) {
      setCurrentMessage("Graph is incomplete")
    } else {
      setCurrentMessage("Graph does not exist")
    }


  };

  return <canvas ref={canvasRef} />;
}

export default GraphStructure;